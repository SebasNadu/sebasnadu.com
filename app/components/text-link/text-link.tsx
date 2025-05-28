import styles from './text-link.module.css';

interface TextLinkProps {
  label: string;
  href: string;
  target: string;
}

export default function TextLink({ label, href, target }: TextLinkProps) {
  return (
    <a className={`${styles.textLink} ${styles.textLinkHover}`} target={target} href={href}>
      {label}
    </a>
  );
}
