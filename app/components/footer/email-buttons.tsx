'use client';

import { useState } from 'react';

import { Copy, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';

import styles from './email-buttons.module.css';

const EMAIL = 'sebastiannavarro.fl@gmail.com';

const sendEmail = () => {
  window.location.href = `mailto:${EMAIL}`;
};

export default function EmailButtons() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error('Failed to copy email to clipboard');
      setCopied(false);
    }
  };

  return (
    <>
      <Button
        className={styles.buttonHover}
        variant="outline"
        size="icon"
        aria-label="Send email"
        onClick={sendEmail}
      >
        <Mail />
      </Button>
      <Button
        className={styles.buttonHover}
        variant="outline"
        size="icon"
        aria-label="Copy email"
        onClick={copyEmail}
      >
        <Copy />
      </Button>
      {copied && <small className={styles.message}>e-mail copied!</small>}
    </>
  );
}
