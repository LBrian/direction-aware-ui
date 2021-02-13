<script lang="ts">
  /**
   * ProgressiveImg
   * @component
   */
  import { onMount } from "svelte";

  let element: HTMLImageElement;

  /**
   * Placeholder resolution
   */
  export let resolution = "80x80";
  /**
   * Filter blur transition duration (CSS)
   */
  export let duration = "0.5s";
  /**
   * Filter blur radius (CSS)
   */
  export let blurRadius = "0.4em";

  onMount(() => {
    const dataSrc = element.getAttribute("src");

    element.style.setProperty("--fast-img-blur-radius", blurRadius);
    element.style.setProperty("--fast-img-blur-duration", duration);

    if (dataSrc) {
      element.setAttribute("data-src", dataSrc);
      element.setAttribute(
        "src",
        `https://via.placeholder.com/${resolution}?text=FastImg`
      );
      element.onload = () => {
        element.setAttribute("src", dataSrc);
        element.removeAttribute("data-src");
        element.onload = null;
      };
    }
  });
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img loading="lazy" bind:this={element} {...$$restProps} />

<!-- svelte-ignore a11y-missing-attribute -->
<style type="postcss">
  img[data-src] {
    filter: blur(var(--fast-img-blur-radius));
  }

  img {
    filter: blur(0em);
    transition: filter var(--fast-img-blur-duration);
    @apply w-full h-full object-cover;
  }
</style>
