import { useEffect, useRef } from 'react';

const GOSPER_GUN = [
  [1, 5],
  [1, 6],
  [2, 5],
  [2, 6],
  [11, 5],
  [11, 6],
  [11, 7],
  [12, 4],
  [12, 8],
  [13, 3],
  [13, 9],
  [14, 3],
  [14, 9],
  [15, 6],
  [16, 4],
  [16, 8],
  [17, 5],
  [17, 6],
  [17, 7],
  [18, 6],
  [21, 3],
  [21, 4],
  [21, 5],
  [22, 3],
  [22, 4],
  [22, 5],
  [23, 2],
  [23, 6],
  [25, 1],
  [25, 2],
  [25, 6],
  [25, 7],
  [35, 3],
  [35, 4],
  [36, 3],
  [36, 4],
];

const clampValue = (value, min, max) => Math.min(Math.max(value, min), max);

const getBounds = (cells) => {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  cells.forEach(([x, y]) => {
    if (x < minX) minX = x;
    if (y < minY) minY = y;
    if (x > maxX) maxX = x;
    if (y > maxY) maxY = y;
  });

  return {
    minX,
    minY,
    maxX,
    maxY,
  };
};

const GameOfLifeBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const container = canvas.parentElement;
    if (!container) return undefined;

    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    let frameId = 0;
    let columns = 0;
    let rows = 0;
    let current = new Uint8Array(0);
    let next = new Uint8Array(0);
    let viewportWidth = 0;
    let viewportHeight = 0;
    let lastStep = 0;

    const cellSize = 6;
    const stepInterval = 120;
    const accent = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-accent')
      .trim();
    const accentParts = accent.split(/\s+/).map(Number);
    const liveColor =
      accentParts.length >= 3 && accentParts.every((value) => Number.isFinite(value))
        ? `rgba(${accentParts[0]}, ${accentParts[1]}, ${accentParts[2]}, 0.5)`
        : 'rgba(210, 255, 0, 0.5)';

    let reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    ctx.imageSmoothingEnabled = false;

    const seedGun = () => {
      current.fill(0);
      const { minX, minY, maxX, maxY } = getBounds(GOSPER_GUN);
      const gunHeight = maxY - minY + 1;
      const extendX = clampValue(window.innerWidth * 0.06, 24, 96);
      const extendY = clampValue(window.innerWidth * 0.22, 120, 260);
      const baseColumns = Math.max(1, Math.ceil((viewportWidth - extendX) / cellSize));
      const baseRows = Math.max(1, Math.ceil((viewportHeight - extendY) / cellSize));
      const originX = Math.max(1, Math.floor(baseColumns * 0.17));
      const originYOffset = Math.floor(baseRows * 0.18);
      const originY = Math.max(
        1,
        Math.floor(baseRows / 2 - gunHeight / 2 - originYOffset)
      );

      GOSPER_GUN.forEach(([x, y]) => {
        const px = originX + x - minX;
        const py = originY + y - minY;
        if (px >= 0 && px < columns && py >= 0 && py < rows) {
          current[py * columns + px] = 1;
        }
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, viewportWidth, viewportHeight);
      ctx.fillStyle = liveColor;
      const drawSize = cellSize - 1;

      for (let y = 0; y < rows; y += 1) {
        const rowIndex = y * columns;
        for (let x = 0; x < columns; x += 1) {
          if (current[rowIndex + x] === 1) {
            ctx.fillRect(x * cellSize, y * cellSize, drawSize, drawSize);
          }
        }
      }
    };

    const step = () => {
      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < columns; x += 1) {
          let neighbors = 0;

          for (let ny = -1; ny <= 1; ny += 1) {
            const yPos = y + ny;
            if (yPos < 0 || yPos >= rows) continue;

            for (let nx = -1; nx <= 1; nx += 1) {
              const xPos = x + nx;
              if (xPos < 0 || xPos >= columns) continue;
              if (nx === 0 && ny === 0) continue;
              neighbors += current[yPos * columns + xPos];
            }
          }

          const index = y * columns + x;
          const alive = current[index] === 1;
          next[index] = neighbors === 3 || (alive && neighbors === 2) ? 1 : 0;
        }
      }

      const swap = current;
      current = next;
      next = swap;
    };

    const tick = (time) => {
      if (reduceMotion) return;

      if (time - lastStep >= stepInterval) {
        step();
        draw();
        lastStep = time;
      }

      frameId = requestAnimationFrame(tick);
    };

    const setup = (width, height) => {
      if (!width || !height) return;
      viewportWidth = Math.floor(width);
      viewportHeight = Math.floor(height);
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.ceil(viewportWidth * dpr);
      canvas.height = Math.ceil(viewportHeight * dpr);
      canvas.style.width = `${viewportWidth}px`;
      canvas.style.height = `${viewportHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      columns = Math.ceil(viewportWidth / cellSize);
      rows = Math.ceil(viewportHeight / cellSize);
      current = new Uint8Array(columns * rows);
      next = new Uint8Array(columns * rows);
      seedGun();
      draw();
    };

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMediaChange = () => {
      reduceMotion = mediaQuery.matches;
      lastStep = performance.now();
      cancelAnimationFrame(frameId);
      if (!reduceMotion) {
        frameId = requestAnimationFrame(tick);
      } else {
        draw();
      }
    };

    const rect = container.getBoundingClientRect();
    setup(rect.width, rect.height);

    if (!reduceMotion) {
      lastStep = performance.now();
      frameId = requestAnimationFrame(tick);
    }

    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries.length) return;
      const { width, height } = entries[0].contentRect;
      setup(width, height);
    });
    resizeObserver.observe(container);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaChange);
    } else {
      mediaQuery.addListener(handleMediaChange);
    }

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMediaChange);
      } else {
        mediaQuery.removeListener(handleMediaChange);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="gol-canvas" aria-hidden="true" />;
};

export default GameOfLifeBackground;
