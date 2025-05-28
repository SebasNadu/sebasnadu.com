import { Copy, Mail, X } from 'lucide-react';

import TextLink from '@/components/text-link/text-link';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={`${styles.footer} full`}>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" className={styles.Trigger}>
            Let&apos;s talk
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <ul>
            <li>
              <DrawerHeader>
                <DrawerTitle> Have an exciting project you need help with?</DrawerTitle>
                <DrawerDescription>
                  Feel free to contact me if you want to collaborate or have a little chat.
                  <Button variant="outline" size="icon">
                    <Mail />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Copy />
                  </Button>
                </DrawerDescription>
              </DrawerHeader>
            </li>
            <li>
              <TextLink label="Github" href="https://github.com/SebasNadu" target="_blank" />
            </li>
            <li>
              <TextLink
                label="Linkedin"
                href="https://www.linkedin.com/in/sebasnadu/"
                target="_blank"
              />
            </li>
          </ul>
          {/* <DrawerFooter> */}
          {/*   <DrawerClose asChild> */}
          {/*     <Button variant="outline"> */}
          {/*       <X /> */}
          {/*     </Button> */}
          {/*   </DrawerClose> */}
          {/* </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </footer>
  );
}
