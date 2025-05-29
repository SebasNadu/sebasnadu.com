'use client';

import { forwardRef, useRef } from 'react';

import useMagneticEffect from '@/hooks/useMagneticEffect';

import styles from './magnetic-button.module.css';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const MagneticButton = forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ label, className = '', ...props }, forwardedRef) => {
    const localButtonRef = useRef<HTMLButtonElement>(null);
    const flairRef = useRef<HTMLSpanElement>(null);

    useMagneticEffect(localButtonRef, flairRef);

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
