'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import NavbarButton from './navbar-button';
import styles from './navbar.module.css';

export default function Navbar() {
  const path = usePathname();
  console.log(path);

  return (
    <nav className={`${styles.navbar} full`}>
      <div className={styles.logo}>
        <Link href="/" className={styles.home}>
          SebasNadu
        </Link>
      </div>
      <div className={styles.menu}>
        <NavbarButton label="Home" href="/" isActive={path === '/'} />
        <NavbarButton label="Projects" href="/projects" isActive={path === '/projects'} />
        <NavbarButton label="About" href="/about" isActive={path === '/about'} />
      </div>
    </nav>
  );
}
