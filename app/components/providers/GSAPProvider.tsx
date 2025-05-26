'use client';

import { ReactNode } from 'react';

import { gsap } from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(ScrambleTextPlugin);

export default function GSAPProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
