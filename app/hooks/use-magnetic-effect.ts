import { RefObject } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { ContextSafeFunc } from '@/types/gsap';

const getXY = (e: MouseEvent, rect: DOMRect) => {
  const x = gsap.utils.pipe(
    gsap.utils.mapRange(0, rect.width, 0, 100),
    gsap.utils.clamp(0, 100)
  )(e.clientX - rect.left);

  const y = gsap.utils.pipe(
    gsap.utils.mapRange(0, rect.height, 0, 100),
    gsap.utils.clamp(0, 100)
  )(e.clientY - rect.top);

  return { x, y };
};

const overshoot = (value: number) => (value > 90 ? value + 20 : value < 10 ? value - 20 : value);

function createEventHandlers(
  flair: HTMLElement,
  button: HTMLElement,
  contextSafe: ContextSafeFunc
): {
  onEnter: (e: MouseEvent) => void;
  onMove: (e: MouseEvent) => void;
  onLeave: (e: MouseEvent) => void;
} {
  const xSet = gsap.quickSetter(flair, 'xPercent');
  const ySet = gsap.quickSetter(flair, 'yPercent');

  let rect: DOMRect;

  const onEnter = contextSafe((e: MouseEvent) => {
    rect = button.getBoundingClientRect();
    const { x, y } = getXY(e, rect);
    xSet(x);
    ySet(y);
    gsap.to(flair, { scale: 1, duration: 0.4, ease: 'power2.out' });
  });

  const onMove = contextSafe((e: MouseEvent) => {
    if (!rect) return;
    const { x, y } = getXY(e, rect);
    xSet(x);
    ySet(y);
  });

  const onLeave = contextSafe((e: MouseEvent) => {
    if (!rect) return;
    const { x, y } = getXY(e, rect);
    gsap.killTweensOf(flair);
    gsap.to(flair, {
      xPercent: overshoot(x),
      yPercent: overshoot(y),
      scale: 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  });

  return { onEnter, onMove, onLeave };
}

export default function useMagneticEffect(
  buttonRef: RefObject<HTMLElement | null>,
  flairRef: RefObject<HTMLElement | null>
) {
  useGSAP(
    (_, contextSafe) => {
      if (!contextSafe) return;
      const button = buttonRef.current;
      const flair = flairRef.current;
      if (!button || !flair) return;

      const { onEnter, onMove, onLeave } = createEventHandlers(flair, button, contextSafe);

      button.addEventListener('mouseenter', onEnter);
      button.addEventListener('mousemove', onMove);
      button.addEventListener('mouseleave', onLeave);

      return () => {
        button.removeEventListener('mouseenter', onEnter);
        button.removeEventListener('mousemove', onMove);
        button.removeEventListener('mouseleave', onLeave);
      };
    },
    { scope: buttonRef }
  );
}
