# Spotify clone with Astro

> This is a Study Project to learn Astro with implementation of React, Svelte and Zustand + View Transitions

This is a Spotify clone built with Astro, Tailwind CSS, React and Svelte. And for the global state I'm using Zustand.

I'm trying to create a App that looks like a SPA using view transitions.

For the data I'm using a Mock.

Vercel -> https://vercel.com/templates/astro/view-transitions

### Svelte usage

I'm using Svelte to create some components like the greetings container

### React usage

I'm using React to use the React Hooks and to persist the state of the player.

By adding a transition name and the transision persist to the player component I can persist the state of the player.
<br>
Astro, using the view transitions, will not unmount the component and will persist the state of the player.
<br>
`<Player client:load transition:name="media-player" transition:persist />`
<br>
<br>

> For now this is only [working on Chrome, Opera and Edge browsers only.](https://caniuse.com/?search=View%20Transition%20API)

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |
