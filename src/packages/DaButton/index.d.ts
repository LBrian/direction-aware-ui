export type Shape = 'circle' | 'square';
export type Size = 'lg' | 'sm' | 'xs';
export type Color =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'ghost'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'transparent';

interface DaButton extends HTMLButtonElement {
  size?: Size;
  color?: Color;
  shape?: Shape;
}

declare global {
  interface HTMLElementTagNameMap {
    'da-button': DaButton;
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'da-button': DaButton;
    }
  }
}
declare namespace svelte.JSX {
  interface IntrinsicElements {
    'da-button': DaButton;
  }
}

declare namespace preact.JSX {
  interface IntrinsicElements {
    'da-button': DaButton;
  }
}
