'use client';

import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

import styles from './page.module.css';

export default function Home() {
  const homeContainer = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'sine.inOut' } });

      // Phase 1: Entrance from the name
      tl.from(`.${styles.lastName}, .${styles.firstName}`, {
        ease: 'power1.inOut',
        y: 100,
        duration: 1.5,
      });

      tl.to(
        `.${styles.lastName}, .${styles.firstName}`,
        {
          ease: 'power1.inOut',
          opacity: 1,
          duration: 1.5,
        },
        '<'
      );

      // Phase 2: Initial Scramble with binary characters and moving to the final position
      tl.to(`.${styles.firstName}`, {
        duration: 2.0,
        ease: 'power1.inOut',
        x: '-1dvw',
        scrambleText: {
          text: 'Sebastian',
          chars: '1010',
          revealDelay: 0.0,
          speed: 1.0,
          delimiter: ' ',
        },
      });

      tl.to(
        `.${styles.lastName}`,
        {
          duration: 2.0,
          ease: 'power1.inOut',
          x: '1dvw',
          scrambleText: {
            text: 'Navarro  ',
            chars: '1010',
            revealDelay: 0.0,
            speed: 2.0,
            delimiter: ' ',
          },
        },
        '<'
      );

      tl.to(
        `.${styles.divider}`,
        {
          duration: 0.5,
          ease: 'power4.in',
          width: '100dvw',
          left: 0,
        },
        '<+1.0'
      );

      // Phrase 3: Final Scramble with special characters
      tl.to(
        `.${styles.firstName}`,
        {
          duration: 0.5,
          scrambleText: {
            text: 'Sebastian',
            chars: '█▓▒░',
            revealDelay: 0.2,
            speed: 4,
            delimiter: ' ',
          },
        },
        '>'
      );

      tl.to(
        `.${styles.lastName}`,
        {
          duration: 0.5,
          scrambleText: {
            text: 'Navarro{}',
            chars: '█▓▒░',
            revealDelay: 0.2,
            speed: 4,
            delimiter: ' ',
          },
        },
        '<'
      );

      tl.to(
        `.${styles.divider}`,
        {
          duration: 0.5,
          opacity: -0.5,
          ease: 'power4.in',
          onComplete: () => {
            gsap.set(`.${styles.divider}`, {
              display: 'none',
            });
          },
        },
        '<'
      );

      tl.to(
        `.${styles.leftPanel}`,
        {
          duration: 0.5,
          x: '100%',
          ease: 'power4.in',
          onComplete: () => {
            gsap.set(`.${styles.leftPanel}`, {
              display: 'none',
            });
          },
        },
        '<'
      );

      tl.to(
        `.${styles.rightPanel}`,
        {
          duration: 0.5,
          x: '-100%',
          ease: 'power4.in',
          onComplete: () => {
            gsap.set(`.${styles.rightPanel}`, {
              display: 'none',
            });
          },
        },
        '<-0.2'
      );

      tl.to(
        `.${styles.title}`,
        {
          duration: 0.5,
          color: 'var(--foreground)',
        },
        '<+0.2'
      );
    },
    { scope: homeContainer }
  );

  return (
    <div ref={homeContainer} className={styles.home}>
      <h6 className={styles.subtitle}>Creative Colombian Developer based in Germany</h6>
      <div className={`${styles.title}`}>
        <h1 className={`h0 ${styles.firstName}`}>Sebas</h1>
        <div className={styles.divider} />
        <h1 className={`h0 ${styles.lastName}`}>Nadu</h1>
      </div>
      <div className="narrow">
        <p className={`${styles.description}`}>
          Hi! Thanks for stopping by. I’m a full-stack engineer with a knack for turning ideas into
          fast, reliable, and human-centered digital experiences.
        </p>
      </div>
      <div className={styles.leftPanel} />
      <div className={styles.rightPanel} />
    </div>
  );
}
