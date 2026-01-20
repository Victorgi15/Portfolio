import { useEffect, useMemo, useState } from 'react';

const gravitySelector =
  '[data-gravity-card="true"], [data-stick-platform="true"], .gol-hole, h1, h2, h3, h4, h5, h6, p, a, button, img, video, canvas, svg';

const Footer = ({ note }) => {
  const focusRing = useMemo(
    () =>
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-base)]',
    []
  );
  const [gravityOn, setGravityOn] = useState(false);

  useEffect(() => {
    const root = document.getElementById('root');
    if (!root) return;

    const footer = root.querySelector('footer');
    const body = document.body;
    const doc = document.documentElement;
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    if (!gravityOn) {
      body.classList.remove('gravity-active');
      const activeTargets = Array.from(
        root.querySelectorAll('[data-gravity-target="true"]')
      );
      activeTargets.forEach((target) => {
        target.style.removeProperty('--gravity-x');
        target.style.removeProperty('--gravity-y');
        target.style.removeProperty('--gravity-rot');
        target.style.removeProperty('--gravity-delay');
        target.style.removeProperty('--gravity-duration');
        target.removeAttribute('data-gravity-target');
      });
      return;
    }

    const candidates = Array.from(root.querySelectorAll(gravitySelector))
      .filter((element) => {
        if (!element || !element.getBoundingClientRect) return false;
        if (footer && footer.contains(element)) return false;
        if (element.closest('nav')) return false;
        const rect = element.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      })
      .map((element) => {
        const rect = element.getBoundingClientRect();
        return {
          element,
          rect,
          currentX: rect.left + scrollX,
          currentY: rect.top + scrollY,
          width: rect.width,
          height: rect.height,
        };
      });

    const candidateSet = new Set(candidates.map(({ element }) => element));
    const targets = candidates.filter(({ element }) => {
      let parent = element.parentElement;
      while (parent && parent !== root) {
        if (candidateSet.has(parent)) {
          return false;
        }
        parent = parent.parentElement;
      }
      return true;
    });

    const footerRect = footer ? footer.getBoundingClientRect() : null;
    const floorY = footerRect
      ? footerRect.top + scrollY - 2
      : Math.max(doc.scrollHeight, body.scrollHeight) - 24;
    const basePadding = 12;
    const minX = scrollX + 12;
    const maxX = scrollX + doc.clientWidth - 12;

    const placed = [];
    const ordered = targets
      .slice()
      .sort((a, b) => b.currentY - a.currentY);

    const computeDropY = (x, width, height) => {
      let y = floorY - height;
      placed.forEach((rect) => {
        const overlap =
          x < rect.x + rect.width && x + width > rect.x;
        if (overlap) {
          y = Math.min(y, rect.y - height);
        }
      });
      return y;
    };

    body.classList.add('gravity-active');
    ordered.forEach((target) => {
      const {
        element,
        currentX,
        currentY,
        width,
        height,
      } = target;
      const area = Math.max(1, width * height);
      const density = Math.min(1, 8000 / area);
      const isButton = element.tagName === 'BUTTON';
      const baseTilt = 2 + density * 4;
      const tiltRange = isButton ? baseTilt * 1.8 : baseTilt;
      const padding = basePadding + density * 12 + (isButton ? 10 : 0);
      const rot = (Math.random() * 2 - 1) * tiltRange;
      const rotRad = Math.abs(rot) * (Math.PI / 180);
      const rotRadSigned = rot * (Math.PI / 180);
      const cos = Math.cos(rotRad);
      const sin = Math.sin(rotRad);
      const paddedWidth = width + padding;
      const paddedHeight = height + padding;
      const rotatedWidth = paddedWidth * cos + paddedHeight * sin;
      const rotatedHeight = paddedWidth * sin + paddedHeight * cos;
      const collisionOffsetX = width / 2 - rotatedWidth / 2;
      const collisionOffsetY = height / 2 - rotatedHeight / 2;
      const minXBound = minX - collisionOffsetX;
      const maxXBound = Math.max(minXBound, maxX - rotatedWidth - collisionOffsetX);
      const clampX = (value) => Math.min(Math.max(value, minXBound), maxXBound);
      const spread = isButton ? 0.8 : 0.6;
      const randomRange = Math.max(0, maxXBound - minXBound);
      const randomX = () => minXBound + Math.random() * randomRange;
      const mixX = (targetValue) =>
        clampX(currentX * (1 - spread) + targetValue * spread);
      let bestX = mixX(randomX());
      let bestCollisionX = bestX + collisionOffsetX;
      let bestCollisionY = computeDropY(bestCollisionX, rotatedWidth, rotatedHeight);
      for (let i = 0; i < 14; i += 1) {
        const candidateX = mixX(randomX());
        const candidateCollisionX = candidateX + collisionOffsetX;
        const candidateY = computeDropY(
          candidateCollisionX,
          rotatedWidth,
          rotatedHeight
        );
        if (candidateY > bestCollisionY) {
          bestX = candidateX;
          bestCollisionX = candidateCollisionX;
          bestCollisionY = candidateY;
        }
      }
      const currentCollisionY = currentY + collisionOffsetY;
      bestCollisionY = Math.max(bestCollisionY, currentCollisionY);

      placed.push({
        x: bestCollisionX,
        y: bestCollisionY,
        width: rotatedWidth,
        height: rotatedHeight,
      });

      const finalY = bestCollisionY - collisionOffsetY;
      const x = bestX - currentX;
      const y = finalY - currentY;
      const delay = Math.random() * 0.08;
      const duration = 0.45 + Math.random() * 0.45;
      const adjustedX = x * Math.cos(rotRadSigned) + y * Math.sin(rotRadSigned);
      const adjustedY = -x * Math.sin(rotRadSigned) + y * Math.cos(rotRadSigned);

      element.setAttribute('data-gravity-target', 'true');
      element.style.setProperty('--gravity-x', `${adjustedX.toFixed(2)}px`);
      element.style.setProperty('--gravity-y', `${adjustedY.toFixed(2)}px`);
      element.style.setProperty('--gravity-rot', `${rot.toFixed(2)}deg`);
      element.style.setProperty('--gravity-delay', `${delay.toFixed(2)}s`);
      element.style.setProperty('--gravity-duration', `${duration.toFixed(2)}s`);
    });
  }, [gravityOn]);

  return (
    <footer className="border-t border-[color:var(--color-border)] py-8">
      <div className="mx-auto w-full max-w-[1400px] px-6">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
          {note} You deserve to click{' '}
          <button
            type="button"
            onClick={() => setGravityOn((prev) => !prev)}
            aria-pressed={gravityOn}
            className={`text-[color:var(--color-accent)] underline underline-offset-4 ${focusRing}`}
          >
            here
          </button>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
