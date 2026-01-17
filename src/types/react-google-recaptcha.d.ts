declare module 'react-google-recaptcha' {
  import { Component } from 'react';

  interface ReCAPTCHAProps {
    sitekey: string;
    onChange?: (token: string | null) => void;
    onExpired?: () => void;
    onError?: () => void;
    theme?: 'light' | 'dark';
    type?: 'image' | 'audio';
    tabindex?: number;
    size?: 'compact' | 'normal';
    stoken?: string;
    hl?: string;
    badge?: 'bottomright' | 'bottomleft' | 'inline';
  }

  class ReCAPTCHA extends Component<ReCAPTCHAProps> {
    getValue(): string | null;
    reset(): void;
    execute(): void;
    executeAsync(): Promise<string | null>;
  }

  export default ReCAPTCHA;
}
