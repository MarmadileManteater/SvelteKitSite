import { sveltekit } from '@sveltejs/kit/vite'
import type { UserConfig } from 'vite'
import { readdirSync } from 'fs'

const config: UserConfig = {
	plugins: [sveltekit()],
  define: {
    emojiDirectory: {
      mutantstd: Array.from(readdirSync('data/public/emoji/mutantstd')),
      twemoji: Array.from(readdirSync('data/public/emoji/twemoji'))
    }
  }
};

export default config;
