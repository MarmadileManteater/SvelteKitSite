<script lang='ts'>
  import type { PageData } from './$types'
  import type { IBlogPost } from '@marmadilemanteater/gh-static-site-lib/src/models/blog'
  import { csr } from '../+layout'
  import UnifiedContentList from '../../components/unified-content-list/unified-content-list.svelte'
  import Emoji from "../../components/emoji/emoji.svelte"

  export let data : PageData
    
  let tagData = data.props.tagData
  let pageCount = data.props.pageCount
  $: posts = data.props.blogPosts as IBlogPost[]
</script>
<div
  class='project-list overflow-hidden'
>
  <div
    class='md:rounded-t-xl'
  >
    <div
      class='rounded-t-xl lg:border border-solid border-black bg-white dark:bg-zinc-900 border-t'
    >
      <a
        download={csr ? "rss.xml":undefined}
        href='/blog/rss.xml'
        class='hover:underline p-2 block'
      ><Emoji emoji='📰' /> rss</a>
      <UnifiedContentList {...{ tagData, content: posts, startIndex: 0  }} />
      {#if pageCount > 1}
        <a
          href='/blog/page/1'
          class='p-5 inline-block hover:underline'
        >Next Page &raquo;
      </a>
      {/if}
    </div>
  </div>
</div>
<svelte:head>
  <title>Blog</title>
  <meta name='author' content='Emma (MarmadileManteater)' />
  <meta name='description' content='my blog; 🤷‍♀️i guess' />
</svelte:head>
