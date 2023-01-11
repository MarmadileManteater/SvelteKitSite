import { sveltekit } from '@sveltejs/kit/vite'
import type { UserConfig } from 'vite'
import { readdirSync } from 'fs'
import packageJSON from './package.json'
const config: UserConfig = {
	plugins: [sveltekit()],
  define: {
    emojiDirectory: {
      mutantstd: Array.from(readdirSync('data/public/emoji/mutantstd')),
      twemoji: Array.from(readdirSync('data/public/emoji/twemoji'))
    },
    "process.env.ENVIRONMENT_NAME": JSON.stringify(packageJSON.environment)
  }
};

export default config;
