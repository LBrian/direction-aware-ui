<script lang="typescript">
  import { onMount } from 'svelte';
  import DaCard from './packages/DaCard/index.svelte';
  import DaButton from './packages/DaButton/index.svelte';

  let count: number = 0;
  onMount(() => {
    const interval = setInterval(() => count++, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<div class="App">
  <DaCard mediaSrc="/logo.svg" mediaAlt="Svelte">
    <p>Edit <code>src/App.svelte</code> and save to reload.</p>
    <p>Page has been open for <code>{count}</code> seconds.</p>
    <p>
      <DaButton color="transparent">Learn Svelte</DaButton>
    </p>
  </DaCard>
  <DaCard
    mediaSrc="/logo.svg"
    mediaAlt="svelte-avatar"
    avatarSrc="/logo.svg"
    avatarAlt="svelte-avatar"
    title="Svelte Avatar"
    mediaPlaceholderRes="800x600"
    description="This is figure layout of DaCard"
  />
  <div>
    <DaCard
      width="600px"
      mediaSrc="/logo.svg"
      mediaAlt="svelte-figure"
      layout="figure"
      title="Svelte Figure"
      mediaPlaceholderRes="800x600"
      description="This is figure layout of DaCard"
    />
  </div>
</div>

<style type="text/postcss">
  :global(body) {
    @apply m-0;
    font-family: Arial, Helvetica, sans-serif;
  }

  :global(html) {
    @apply bg-base-content;
  }

  .App {
    @apply text-center text-xl my-20;
  }
  .App code {
    @apply bg-secondary px-1 py-2 rounded font-bold;
  }
  .App p {
    @apply m-2;
  }

  .App header {
    @apply bg-white text-black flex flex-col items-center justify-center min-h-screen;
  }
  .App-link {
    @apply text-primary;
  }
  .App-logo {
    height: 36vmin;
    @apply mb-12 pointer-events-none;
  }
</style>
