'use client';

import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

import styles from './page.module.css';

export default function Home() {
  const titleContainer = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'sine.inOut' } });

      // Phase 1: Entrance from the name
      tl.from('.lastName, .firstName', {
        ease: 'power1.inOut',
        y: 100,
        opacity: 0,
        duration: 1.5,
      });

      tl.to(
        '.lastName, .firstName',
        {
          ease: 'power1.inOut',
          opacity: 1,
          duration: 1.5,
        },
        '<'
      );

      // Phase 2: Initial Scramble with binary characters
      tl.to('.firstName', {
        duration: 2.0,
        x: '-10dvw',
        scrambleText: {
          text: 'Sebastian',
          chars: '1010',
          revealDelay: 0.5,
          speed: 1.0,
          delimiter: ' ',
        },
      });

      tl.to(
        '.lastName',
        {
          duration: 2.0,
          x: '10dvw',
          scrambleText: {
            text: 'Navarro',
            chars: '1010',
            revealDelay: 0.5,
            speed: 2.0,
            delimiter: ' ',
          },
        },
        '<'
      );

      // Phrase 3: Final Scramble with special characters
      tl.to('.firstName', {
        duration: 0.5,
        scrambleText: {
          text: 'Sebastian',
          chars: '█▓▒░',
          revealDelay: 0.2,
          speed: 4,
        },
      });

      tl.to(
        '.lastName',
        {
          duration: 0.5,
          scrambleText: {
            text: 'Navarro',
            chars: '█▓▒░',
            revealDelay: 0.2,
            speed: 4,
          },
        },
        '<'
      );

      tl.to(
        `.${styles.divider}`,
        {
          ease: 'power3.out',
          duration: 0.5,
          height: '100dvh',
          top: 0,
        },
        '<-0.3'
      );
    },
    { scope: titleContainer }
  );

  return (
    <div className={styles.home}>
      <div ref={titleContainer} className={`${styles.title}`}>
        <h1 className="h0 firstName">Sebas</h1>
        <div className={styles.divider} />
        <h1 className="h0 lastName">Nadu</h1>
      </div>
    </div>
  );
}
