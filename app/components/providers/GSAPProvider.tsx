'use client';

import { ReactNode } from 'react';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(useGSAP, ScrambleTextPlugin);

export default function GSAPProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
