<svelte:options tag="da-button" />

<script lang="ts">
  /**
   * DaButton
   * @component
   */

  import type { Size, Shape, Color } from './index';

  /**
   * Color
   */
  export let color: Color = '';
  /**
   * size
   */
  export let size: Size = '';
  /**
   * shape
   */
  export let shape: Shape = '';
  /**
   * block
   */
  export let block = false;
  /**
   * outline
   */
  export let outline = false;
  /**
   * loading
   */
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
</style>
