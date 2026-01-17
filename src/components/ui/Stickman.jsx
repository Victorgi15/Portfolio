import { useEffect, useRef } from 'react';

const STICKMAN_WIDTH = 18;
const STICKMAN_HEIGHT = 36;
const MOVE_SPEED = 220;
const JUMP_SPEED = 680;
const MAX_JUMPS = 2;
const GRAVITY = 1400;
const MOUSE_PLATFORM_WIDTH = 24;
const MOUSE_PLATFORM_HEIGHT = 3;
const MOUSE_PLATFORM_OFFSET_Y = 3;
const SPAWN_DELAY_MS = 350;
const SPAWN_RETRY_MS = 200;
const SPAWN_MAX_RETRIES = 6;
const SPAWN_OFFSET = 28;
const PLATFORM_SURFACE_OFFSET = -2;
const PLATFORM_REFRESH_MS = 140;
const PLATFORM_SELECTOR = '[data-stick-platform="true"]';
const SPAWN_SELECTOR = '[data-stick-spawn="true"]';

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const Stickman = () => {
  const stickRef = useRef(null);
  const rafRef = useRef(0);
  const stateRef = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    onGround: false,
    lastTime: 0,
    jumpQueued: false,
    dropThroughUntil: 0,
    jumpCount: 0,
    lastPlatformUpdate: 0,
    initialized: false,
    mouse: { clientX: 0, clientY: 0, active: false },
    keys: { left: false, right: false, down: false },
    platforms: [],
    worldWidth: 0,
    worldHeight: 0,
  });

  useEffect(() => {
    const state = stateRef.current;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return undefined;
    }
    let spawnTimer = 0;

    const updatePlatforms = (time = 0) => {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      const elements = Array.from(document.querySelectorAll(PLATFORM_SELECTOR));

      state.platforms = elements
        .map((element) => {
          const rect = element.getBoundingClientRect();
          return {
            x: rect.left + scrollX,
            y: rect.top + scrollY + PLATFORM_SURFACE_OFFSET,
            width: rect.width,
            height: rect.height,
          };
        })
        .filter((rect) => rect.width > 0 && rect.height > 0);

      state.worldWidth = Math.max(
        document.documentElement.scrollWidth,
        document.body.scrollWidth
      );
      state.worldHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );
      state.lastPlatformUpdate = time;
    };

    const spawn = (attempt = 0) => {
      updatePlatforms(state.lastTime);
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      const spawnElement = document.querySelector(SPAWN_SELECTOR);
      if (spawnElement) {
        const rect = spawnElement.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) {
          if (attempt < SPAWN_MAX_RETRIES) {
            spawnTimer = window.setTimeout(() => spawn(attempt + 1), SPAWN_RETRY_MS);
          }
          return;
        }
        state.x = rect.left + scrollX + rect.width / 2 - STICKMAN_WIDTH / 2;
        state.y = rect.top + scrollY - STICKMAN_HEIGHT - SPAWN_OFFSET;
      } else if (attempt < SPAWN_MAX_RETRIES) {
        spawnTimer = window.setTimeout(() => spawn(attempt + 1), SPAWN_RETRY_MS);
        return;
      } else {
        state.x = 32;
        state.y = 32;
      }
      state.x = clamp(state.x, 0, Math.max(0, state.worldWidth - STICKMAN_WIDTH));
      state.y = Math.max(0, state.y);
      state.vx = 0;
      state.vy = 0;
      state.onGround = false;
      state.jumpCount = 0;
      state.initialized = true;
    };

    const scheduleSpawn = (delay) => {
      if (spawnTimer) {
        window.clearTimeout(spawnTimer);
      }
      spawnTimer = window.setTimeout(() => spawn(0), delay);
    };

    const handleKeyDown = (event) => {
      if (event.code === 'ArrowLeft') {
        state.keys.left = true;
        event.preventDefault();
      }
      if (event.code === 'ArrowRight') {
        state.keys.right = true;
        event.preventDefault();
      }
      if (event.code === 'ArrowUp') {
        state.jumpQueued = true;
        event.preventDefault();
      }
      if (event.code === 'ArrowDown') {
        state.keys.down = true;
        event.preventDefault();
      }
    };

    const handleKeyUp = (event) => {
      if (event.code === 'ArrowLeft') {
        state.keys.left = false;
        event.preventDefault();
      }
      if (event.code === 'ArrowRight') {
        state.keys.right = false;
        event.preventDefault();
      }
      if (event.code === 'ArrowDown') {
        state.keys.down = false;
        event.preventDefault();
      }
    };

    const handleBlur = () => {
      state.keys.left = false;
      state.keys.right = false;
      state.keys.down = false;
      state.jumpQueued = false;
    };

    const handleMouseMove = (event) => {
      state.mouse.clientX = event.clientX;
      state.mouse.clientY = event.clientY;
      state.mouse.active = true;
    };

    const handleMouseLeave = () => {
      state.mouse.active = false;
    };

    const tick = (time) => {
      if (!state.lastTime) {
        state.lastTime = time;
      }
      const delta = Math.min((time - state.lastTime) / 1000, 0.05);
      state.lastTime = time;

      if (!state.initialized) {
        if (stickRef.current) {
          stickRef.current.style.transform = 'translate3d(-9999px, -9999px, 0)';
        }
        rafRef.current = window.requestAnimationFrame(tick);
        return;
      }
      if (time - state.lastPlatformUpdate > PLATFORM_REFRESH_MS) {
        updatePlatforms(time);
      }

      if (state.keys.left && !state.keys.right) {
        state.vx = -MOVE_SPEED;
      } else if (state.keys.right && !state.keys.left) {
        state.vx = MOVE_SPEED;
      } else {
        state.vx = 0;
      }

      if (state.jumpQueued && state.jumpCount < MAX_JUMPS) {
        state.vy = -JUMP_SPEED;
        state.onGround = false;
        state.jumpCount += 1;
      }
      state.jumpQueued = false;

      if (state.keys.down && state.onGround) {
        state.dropThroughUntil = time + 250;
        state.vy = Math.max(state.vy, 220);
        state.onGround = false;
      }

      state.vy += GRAVITY * delta;

      let nextX = state.x + state.vx * delta;
      let nextY = state.y + state.vy * delta;

      nextX = clamp(nextX, 0, Math.max(0, state.worldWidth - STICKMAN_WIDTH));

      let landed = false;
      if (state.vy >= 0 && time >= state.dropThroughUntil) {
        let landingY = Number.POSITIVE_INFINITY;
        const mouseX = state.mouse.clientX + window.scrollX;
        const mouseY = state.mouse.clientY + window.scrollY;
        const platforms = state.mouse.active
          ? [
              ...state.platforms,
              {
                x: mouseX - MOUSE_PLATFORM_WIDTH / 2,
                y: mouseY + MOUSE_PLATFORM_OFFSET_Y,
                width: MOUSE_PLATFORM_WIDTH,
                height: MOUSE_PLATFORM_HEIGHT,
              },
            ]
          : state.platforms;

        for (const platform of platforms) {
          const withinX =
            nextX + STICKMAN_WIDTH > platform.x + 2 &&
            nextX < platform.x + platform.width - 2;
          if (!withinX) continue;

          const platformTop = platform.y;
          const currentBottom = state.y + STICKMAN_HEIGHT;
          const nextBottom = nextY + STICKMAN_HEIGHT;

          if (currentBottom <= platformTop + 4 && nextBottom >= platformTop) {
            if (platformTop < landingY) {
              landingY = platformTop;
            }
          }
        }

        if (landingY !== Number.POSITIVE_INFINITY) {
          nextY = landingY - STICKMAN_HEIGHT;
          state.vy = 0;
          landed = true;
        }
      }

      if (landed) {
        state.jumpCount = 0;
      }
      state.onGround = landed;
      state.x = nextX;
      state.y = nextY;

      if (state.y > state.worldHeight + 200) {
        spawn(0);
      }

      if (stickRef.current) {
        const viewX = state.x - window.scrollX;
        const viewY = state.y - window.scrollY;
        stickRef.current.style.transform = `translate3d(${viewX}px, ${viewY}px, 0)`;
      }

      rafRef.current = window.requestAnimationFrame(tick);
    };

    scheduleSpawn(SPAWN_DELAY_MS);
    rafRef.current = window.requestAnimationFrame(tick);

    const handleResize = () => {
      updatePlatforms();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('blur', handleBlur);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);

    const refreshTimeout = window.setTimeout(updatePlatforms, 1000);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
      window.clearTimeout(refreshTimeout);
      if (spawnTimer) {
        window.clearTimeout(spawnTimer);
      }
      window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="stickman-layer" aria-hidden="true">
      <div ref={stickRef} className="stickman">
        <svg
          className="stickman__svg"
          viewBox="0 0 18 36"
          role="presentation"
          aria-hidden="true"
        >
          <circle cx="9" cy="6" r="4.5" />
          <path d="M9 10.5v10.5M4 16.5h10M9 21l-4.5 10M9 21l4.5 10" />
        </svg>
      </div>
    </div>
  );
};

export default Stickman;
