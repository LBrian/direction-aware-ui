<script lang="ts">
  /**
   * DaCard
   * @component
   */
  import { onMount } from "svelte";

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
   * Width (optional)
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
  export let avatarSrc = `https://via.placeholder.com/80?text=${
    title ? title.slice(0, 1) : "DA"
  }`;
  /**
   * Media image src (optional)
   */
  export let mediaSrc = "";
  /**
   * Media img alt (optional)
   */
  export let mediaAlt = "DaCard media image";

  onMount(() => {
    const container = document.querySelector("article");
    const card = container && container.querySelector("article");

    if (container) {
      color && container.style.setProperty("--da-card-color", color);
      width && container.style.setProperty("--da-card-width", width);
      perspective &&
        container.style.setProperty("--da-card-perspective", perspective);
      avatarBrdWidth &&
        container.style.setProperty(
          "--da-card-avatar-brd-width",
          avatarBrdWidth
        );
      avatarBrdColor &&
        container.style.setProperty(
          "--da-card-avatar-brd-color",
          avatarBrdColor
        );
    }

    if (card) {
      const { x, y, width, height } = card.getBoundingClientRect();

      const cx = x + width / 2;
      const cy = y + height / 2;

      // TODO: Storybook doc parsing error for TS
      // @ts-ignore
      const handleMouseMove = (e) => {
        const dx = (cx - e.pageX) / (width / 2);
        const dy = (cy - e.pageY) / (height / 2);

        card.style.setProperty("--da-card-rotateY", `${rotateY * dx}deg`);
        card.style.setProperty("--da-card-rotateX", `${rotateX * dy * -1}deg`);
      };

      bgColor && card.style.setProperty("--da-card-bg-color", bgColor);

      card.addEventListener("mousemove", handleMouseMove);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
      };
    }
  });
</script>

<article {...$$restProps} class="da-card-container">
  <article
    class="da-card"
    class:hide-overflow={mediaSrc}
    class:top-space={!mediaSrc}
  >
    {#if mediaSrc}
      <img loading="lazy" src={mediaSrc} alt={mediaAlt} class="da-card-media" />
    {/if}
    <figure class="da-card-avatar">
      <img loading="lazy" src={avatarSrc} alt={avatarAlt} />
    </figure>
    <div>
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
    @apply flex flex-col items-center leading-normal rounded-xl mx-2 mb-2 duration-200 transition-transform ease-out shadow-2xl;
    background-color: var(--da-card-bg-color);
    width: var(--da-card-width);
  }

  .da-card.hide-overflow {
    @apply overflow-hidden;
  }

  .da-card.top-space {
    @apply mt-16;
  }

  .da-card:hover {
    transform: rotateX(var(--da-card-rotateX)) rotateY(var(--da-card-rotateY));
  }

  .da-card-media {
    @apply w-full;
    min-height: 180px;
  }

  .da-card-avatar {
    @apply w-20 h-20 rounded-full -mt-10 relative;
  }

  .da-card-avatar:before {
    @apply absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 shadow;
    content: "";
    border-radius: inherit;
    border: var(--da-card-avatar-brd-width) solid
      var(--da-card-avatar-brd-color);
  }

  .da-card-avatar img {
    @apply w-full h-full object-cover;
    border-radius: inherit;
  }

  .da-card div {
    @apply text-center m-8;
  }

  .da-card-title {
    @apply uppercase tracking-wider;
  }

  .da-card-description {
    @apply relative mt-4 mb-8;
  }
</style>
