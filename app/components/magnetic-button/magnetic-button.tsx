'use client';

import { forwardRef, useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { ContextSafeFunc } from '@/types/gsap';

import styles from './magnetic-button.module.css';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

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

function createEventHandlers(
  flair: HTMLElement,
  button: HTMLElement,
  contextSafe: ContextSafeFunc
) {
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
      xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
      yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
      scale: 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  });

  return { onEnter, onMove, onLeave };
}

const MagneticButton = forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ label, className = '', ...props }, forwardedRef) => {
    const localButtonRef = useRef<HTMLButtonElement>(null);
    const flairRef = useRef<HTMLSpanElement>(null);

    useGSAP(
      (_, contextSafe) => {
        if (!contextSafe) return;
        const button = localButtonRef.current;
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
      { scope: localButtonRef }
    );

    return (
      <button
        {...props}
        ref={node => {
          localButtonRef.current = node;
          if (typeof forwardedRef === 'function') forwardedRef(node);
          else if (forwardedRef) forwardedRef.current = node;
        }}
        className={`${styles.button} ${styles.buttonStroke} ${className}`}
      >
        <span className={styles.buttonFlair} ref={flairRef} aria-hidden="true" />
        <span className={styles.buttonLabel}>{label}</span>
      </button>
    );
  }
);

MagneticButton.displayName = 'MagneticButton';
export default MagneticButton;
