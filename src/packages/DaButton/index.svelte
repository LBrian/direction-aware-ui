<svelte:options tag="da-button" />

<script lang="ts">
  /**
   * DaButton
   * @component
   */

  import type { Size, Shape, Color } from './index';

  /**
   * primary | secondary | accent | ghost | link | info | success | warning | error | transparent
   * see https://daisyui.netlify.app/components/button
   *
   */
  export let color: Color | undefined = undefined;
  /**
   * xs | sm | lg |
   */
  export let size: Size | undefined = undefined;
  /**
   * circle | square
   */
  export let shape: Shape | undefined = undefined;
  /**
   * Display as block
   */
  export let block = false;
  export let outline = false;
  export let loading = false;
</script>

<button
  class="da-button"
  class:block
  class:outline
  class:loading
  class:lg={size === 'lg'}
  class:sm={size === 'sm'}
  class:xs={size === 'xs'}
  class:circle={shape === 'circle'}
  class:square={shape === 'square'}
  class:link={color === 'link'}
  class:info={color === 'info'}
  class:error={color === 'error'}
  class:ghost={color === 'ghost'}
  class:accent={color === 'accent'}
  class:success={color === 'success'}
  class:warning={color === 'warning'}
  class:primary={color === 'primary'}
  class:secondary={color === 'secondary'}
  class:transparent={color === 'transparent'}
>
  <slot>DaButton</slot>
</button>

<style lang="postcss" scoped>
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .da-button {
    @apply btn;
  }

  .link {
    @apply btn-link;
  }
  .info {
    @apply btn-info;
  }
  .error {
    @apply btn-error;
  }
  .ghost {
    @apply btn-ghost;
  }
  .accent {
    @apply btn-accent;
  }
  .success {
    @apply btn-success;
  }
  .warning {
    @apply btn-warning;
  }
  .primary {
    @apply btn-primary;
  }
  .secondary {
    @apply btn-secondary;
  }
  .transparent {
    @apply glass;
  }

  .lg {
    @apply btn-lg;
  }
  .sm {
    @apply btn-sm;
  }
  .xs {
    @apply btn-xs;
  }

  .circle {
    @apply btn-circle;
  }
  .square {
    @apply btn-square;
  }

  .block {
    @apply btn-block;
  }

  .outline {
    @apply btn-outline;
  }

  .loading::before {
    @apply border-solid;
  }
</style>
