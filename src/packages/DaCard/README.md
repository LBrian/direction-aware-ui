# Direction-aware UI - DaCard

![svelte](https://img.shields.io/badge/svelte-3.32.1-blue)
![tailwindcss](https://img.shields.io/badge/tailwindcss-2.0.2-blue)
![Typescript](https://img.shields.io/badge/typescript-4.1.3-blue)
![snowpack](https://img.shields.io/badge/snowpack-3.0.11-blue)

## Playground & Doc

https://da-ui.brianypliu.com/?path=/story/dacard

## Install

```
npm i @da-ui/card --save
```

## Usage

### Default

```
import "@da-ui/card";

<da-card
    mediaSrc="/logo.svg"
    mediaAlt="svelte-avatar"
    avatarSrc="/logo.svg"
    avatarAlt="svelte-avatar"
    title="Svelte Avatar"
    mediaPlaceholderRes="800x600"
    description="This is figure layout of DaCard" />
```

### Custom content

```
<da-card mediaSrc="/logo.svg" mediaAlt="Svelte">
    <p>Edit <code>src/App.svelte</code> and save to reload.</p>
    <p>Page has been open for <code>{count}</code> seconds.</p>
    <p>
        <DaButton color="accent">Learn Svelte</DaButton>
    </p>
</da-card>
```
