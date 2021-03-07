interface DaCard {
  title?: string;
  description?: string;
  color?: string;
  bgColor?: string;
  rotateX?: number;
  rotateY?: number;
  width?: string;
  perspective?: string;
  avatarBrdWidth?: string;
  avatarBrdColor?: string;
  avatarAlt?: string;
  avatarSrc?: string;
  mediaSrc?: string;
  mediaAlt?: string;
  mediaPlaceholderRes?: string;
  layout?: "figure";
}

declare global {
  interface HTMLElementTagNameMap {
    "da-card": DaCard;
  }
}
declare namespace global.JSX {
  interface IntrinsicElements {
    "da-card": DaCard;
  }
}
declare namespace svelte.JSX {
  interface IntrinsicElements {
    "da-card": DaCard;
  }
}

//@ts-ignore
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "da-card": DaCard;
    }
  }
}
