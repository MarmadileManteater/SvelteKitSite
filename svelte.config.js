import adapter from '@sveltejs/adapter-static';
import adapterNode from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { readFileSync } from 'fs';
let isStatic = true;
try {
  const packageJSON = JSON.parse(readFileSync('./package.json'));
  isStatic = packageJSON.adapter === 'static';
} catch {
  isStatic = true;
}
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: isStatic?adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true,
    }):adapterNode(),
    prerender: {
      crawl: true
    }
	}
};

export default config;
