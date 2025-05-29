import MagneticButton from '@/components/magnetic-button/magnetic-button';
import TextLink from '@/components/text-link/text-link';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

import EmailButtons from './email-buttons';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={`${styles.footer} full`}>
      <Drawer>
        <DrawerTrigger asChild className={styles.Trigger}>
          <MagneticButton label="Let's talk" />
        </DrawerTrigger>
        <DrawerContent>
          <ul className={styles.content}>
            <li className={styles.header}>
              <DrawerHeader>
                <DrawerTitle className={styles.title}>
                  Have an exciting project you need help with?
                </DrawerTitle>
                <DrawerDescription className={styles.description}>
                  Feel free to contact me if you want to collaborate or have a little chat.
                </DrawerDescription>
                <div className={styles.buttons}>
                  <EmailButtons />
                </div>
              </DrawerHeader>
            </li>
            <li className={styles.linkWrapper}>
              <TextLink label="Github" href="https://github.com/SebasNadu" target="_blank" />
            </li>
            <li className={styles.linkWrapper}>
              <TextLink
                label="Linkedin"
                href="https://www.linkedin.com/in/sebasnadu/"
                target="_blank"
              />
            </li>
          </ul>
        </DrawerContent>
      </Drawer>
    </footer>
  );
}
