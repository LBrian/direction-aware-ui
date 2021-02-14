<script lang="ts">
  /**
   * DaCard
   * @component
   */
  import { onMount } from "svelte";
  import ProgressiveImg from "../ProgressiveImg.svelte";

  let cardRef: HTMLElement;
  let containerRef: HTMLElement;
  /**
   * Title text (optional)
   */
  export let title = "";
  /**
   * Description text (optional)
   */
  export let description = "";

  /**
   * Text color (optional)
   */
  export let color = "inherit";
  /**
   * Background color (optional)
   */
  export let bgColor = "#fff";

  /**
   * Vertical rotation degree based on cursor position (optional)
   */
  export let rotateX = 10;
  /**
   * Horizontal rotation degree based on cursor position (optional)
   */
  export let rotateY = 10;
  /**
   * Card width
   * @required
   */
  export let width = "350px";
  /**
   * CSS perspective of Card (optional), see https://developer.mozilla.org/en-US/docs/Web/CSS/perspective
   */
  export let perspective = "600px";

  /**
   * Avatar image border width (optional)
   */
  export let avatarBrdWidth = "1rem";
  /**
   * Avatar image border color (optional)
   */
  export let avatarBrdColor = "#eee";
  /**
   * Avatar img alt (optional)
   */
  export let avatarAlt = "DaCard avatar image";
  /**
   * Avatar image src (optional)
   */
  export let avatarSrc = "";
  /**
   * Media image src (optional)
   */
  export let mediaSrc = "";
  /**
   * Media img alt (optional)
   */
  export let mediaAlt = "DaCard media image";
  /**
   * Meida placeholder resolution
   * @required
   */
  export let mediaPlaceholderRes = "350x350";
  /**
   * Card layout styles
   */
  export let layout = "";

  onMount(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { x, y, width, height } = cardRef.getBoundingClientRect();
      const cx = x + width / 2;
      const cy = y + height / 2;
      const dx = (cx - e.pageX) / (width / 2);
      const dy = (cy - e.pageY) / (height / 2);

      cardRef.style.setProperty("--da-card-rotateY", `${rotateY * dx}deg`);
      cardRef.style.setProperty("--da-card-rotateX", `${rotateX * dy * -1}deg`);
    };

    // card css variables
    cardRef.style.setProperty("--da-card-bg-color", bgColor);

    // container css variables
    color && containerRef.style.setProperty("--da-card-color", color);
    width && containerRef.style.setProperty("--da-card-width", width);
    perspective &&
      containerRef.style.setProperty("--da-card-perspective", perspective);
    avatarBrdWidth &&
      containerRef.style.setProperty(
        "--da-card-avatar-brd-width",
        avatarBrdWidth
      );
    avatarBrdColor &&
      containerRef.style.setProperty(
        "--da-card-avatar-brd-color",
        avatarBrdColor
      );

    cardRef.addEventListener("mousemove", handleMouseMove);

    return () => {
      cardRef.removeEventListener("mousemove", handleMouseMove);
    };
  });
</script>

<article {...$$restProps} class="da-card-container" bind:this={containerRef}>
  <article
    class="da-card"
    bind:this={cardRef}
    class:hide-overflow={mediaSrc}
    class:figure={layout === "figure"}
    class:top-space={!mediaSrc || (avatarSrc && layout === "figure")}
  >
    {#if mediaSrc}
      <ProgressiveImg
        alt={mediaAlt}
        src={mediaSrc}
        class="da-card-media"
        resolution={mediaPlaceholderRes}
      />
    {/if}
    {#if avatarSrc}
      <figure class="da-card-avatar">
        <ProgressiveImg alt={avatarAlt} src={avatarSrc} resolution="80x80" />
      </figure>
    {/if}
    <div class="da-card-body" class:figure={layout === "figure"}>
      {#if title}
        <h1 class="da-card-title">{title}</h1>
      {/if}
      {#if description}
        <p class="da-card-description">
          {description}
        </p>
      {/if}
    </div>
  </article>
</article>

<style type="postcss">
  .da-card-container {
    @apply inline-block;
    color: var(--da-card-color);
    perspective: var(--da-card-perspective);
  }

  .da-card {
    @apply flex flex-col items-center leading-normal rounded-xl mx-2 mb-2 duration-200 transition-transform ease-out shadow-2xl relative;
    background-color: var(--da-card-bg-color);
    width: var(--da-card-width);
  }

  .da-card.figure {
    @apply ml-20;
  }

  .da-card.hide-overflow:not(.figure) {
    @apply overflow-hidden;
  }

  .da-card.top-space.figure {
    @apply mt-12;
  }
  .da-card.top-space:not(.figure) {
    @apply mt-16;
  }

  .da-card:hover {
    transform: rotateX(var(--da-card-rotateX)) rotateY(var(--da-card-rotateY));
  }

  .da-card-media {
    min-height: 220px;
  }

  .da-card-avatar {
    @apply w-20 h-20 rounded-full -mt-10 mx-auto relative;
  }

  .da-card.figure .da-card-avatar {
    @apply absolute;
  }

  .da-card-avatar:before {
    @apply absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 shadow;
    content: "";
    border-radius: inherit;
    border: var(--da-card-avatar-brd-width) solid
      var(--da-card-avatar-brd-color);
  }

  .da-card-avatar > :global(img) {
    border-radius: inherit;
  }

  .da-card-body:not(.figure) {
    @apply text-center mx-8;
  }

  .da-card-body.figure {
    @apply absolute bottom-0 -left-20 w-2/3;
  }

  .da-card-body.figure .da-card-title {
    @apply text-4xl;
    text-shadow: 1px 1px 4px #999;
  }

  .da-card-title {
    @apply uppercase tracking-wider;
  }

  .da-card-description {
    @apply relative mt-4 mb-8;
  }
  .da-card-body.figure .da-card-description {
    text-shadow: 1px 1px 1px #999;
  }
</style>
