import { useRef } from 'react';

import Link from 'next/link';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

import styles from './navbar-button.module.css';

interface NavbarButtonProps {
  label: string;
  href: string;
  isActive: boolean;
}

export default function NavbarButton({ label, href, isActive }: NavbarButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  const { contextSafe } = useGSAP({ scope: buttonRef });

  const onHover = contextSafe(() => {
    if (!labelRef.current) return;

    if (
      !gsap.isTweening(labelRef.current) &&
      window.matchMedia('(prefers-reduced-motion: no-preference)').matches
    ) {
      gsap.to(labelRef.current, {
        duration: 0.8,
        ease: 'sine.in',
        scrambleText: {
          text: label,
          speed: 2,
          chars: 'lowerCase',
        },
      });
    }
  });

  return (
    <Link
      onPointerEnter={onHover}
      ref={buttonRef}
      className={styles.link}
      href={href}
      aria-label={label}
    >
      <span className={styles.symbol} aria-hidden="true">
        {isActive ? '•' : '\u00A0'}
      </span>
      <span className={styles.label} ref={labelRef}>
        {label}
      </span>
    </Link>
  );
}
