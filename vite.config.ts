import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/bulletin-board/",
  plugins: [
    sveltekit({
      prerender: {
        handleHttpError: ({ path, referrer, message }) => {
          // ignore deliberate link to shiny 404 page
          if (
            path === "/not-found" &&
            referrer === "/blog/how-we-built-our-404-page"
          ) {
            return;
          }

          // otherwise fail the build
          throw new Error(message);
        },
      },
      compilerOptions: {
        // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
        runes: ({ filename }) =>
          filename.split(/[/\\]/).includes("node_modules") ? undefined : true,
      },

      // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
      // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
      // See https://svelte.dev/docs/kit/adapters for more information about adapters.
      adapter: adapter(),
    }),
  ],
});
