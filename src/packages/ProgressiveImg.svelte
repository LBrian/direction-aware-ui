<svelte:options tag="progressive-img" />

<script lang="ts">
  /**
   * ProgressiveImg
   * @component
   */
  import { onMount } from 'svelte';

  let element: HTMLImageElement;

  /**
   * img src
   * Declaration takes out from $$restProps in order to manipulate it
   */
  export let src: string | undefined;
  /**
   * Placeholder resolution
   */
  export let resolution = '80x80';
  /**
   * Filter blur transition duration (CSS)
   */
  export let duration = '0.5s';
  /**
   * Filter blur radius (CSS)
   */
  export let blurRadius = '0.4em';

  onMount(() => {
    const [width, height] = resolution.split('x');

    element.style.setProperty('--fast-img-blur-radius', blurRadius);
    element.style.setProperty('--fast-img-blur-duration', duration);
    element.style.setProperty('--fast-img-placeholder-height', `${height}px`);
    element.style.setProperty('--fast-img-placeholder-width', `${width}px`);

    if (src) {
      element.setAttribute('data-src', src);
      element.setAttribute('src', `https://via.placeholder.com/${resolution}?text=FastImg`);
      element.onload = () => {
        if (src) {
          element.setAttribute('src', src);
          element.removeAttribute('data-src');
          element.onload = null;
        }
      };
    }
  });
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img loading="lazy" bind:this={element} {...$$restProps} />

<!-- svelte-ignore a11y-missing-attribute -->
<style type="postcss">
  img[data-src] {
    height: var(--fast-img-placeholder-height);
    width: var(--fast-img-placeholder-width);
    filter: blur(var(--fast-img-blur-radius));
  }

  img {
    filter: blur(0em);
    transition: filter var(--fast-img-blur-duration);
    @apply w-full h-full object-cover;
  }
</style>
