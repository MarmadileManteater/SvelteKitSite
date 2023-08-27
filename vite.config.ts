import { sveltekit } from '@sveltejs/kit/vite'
import { imagetools } from 'vite-imagetools'
import type { UserConfig } from 'vite'
import { readdirSync } from 'fs'
import packageJSON from './package.json'

const config: UserConfig = {
	plugins: [sveltekit(), imagetools({
    defaultDirectives: (url) => {
      if (url.href.endsWith(".jpg")) {
        return new URLSearchParams({ format: 'webp' })
      }
      return new URLSearchParams({ })
    }
  })],
  define: {
    emojiDirectory: {
      mutantstd: Array.from(readdirSync('data/public/emoji/mutantstd')),
      twemoji: Array.from(readdirSync('data/public/emoji/twemoji'))
    },
    "process.env.ENVIRONMENT_NAME": JSON.stringify(packageJSON.environment)
  }
};

export default config;
