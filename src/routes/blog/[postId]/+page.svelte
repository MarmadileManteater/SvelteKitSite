<script lang='ts'>
  import type { PageData } from './$types'
  import type { IBlogPost } from '@marmadilemanteater/gh-static-site-lib/src/models/blog'
  import TagList from '../../../components/tag-list/tag-list.svelte'
  import { convertEmojiToImages } from '@marmadilemanteater/gh-static-site-lib/src/helpers/emoji'

  export let data : PageData

  let post = data.props.blogPost as IBlogPost
  let tagData = data.props.tagData
  // Without this, client side routing on this url param just doesn't work right
  // See https://github.com/sveltejs/kit/issues/1449#issuecomment-842433085
  $: data,  (()=>{
    // and here you do the update (its like watch in vuejs)
    post = data.props.blogPost as IBlogPost
    if (typeof document !== 'undefined' && post) {
      document.title = `${post.title}`
    }
  })()
</script>
<div 
  class='bg-white border-t dark:bg-zinc-900 rounded-t-xl lg:border border-solid border-black'
>
  <div 
    class='p-6 pb-2'
  >
    {#if post !== null && post !== undefined}
      <h2
        class='text-4xl pb-2'
      >{@html convertEmojiToImages(post.title)}</h2>
      <TagList
        {tagData}
        tags={post.tags}
      />
      <p
        class='pb-2 text-zinc-500 dark:text-zinc-400'
      >
        <em>Last updated {new Date(post.gittime).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'GMT' })} GMT</em>
      </p>
      <div>{@html convertEmojiToImages(post.html)}</div>
    {/if}
  </div>
</div>
<svelte:head>
  {#if post !== null && post !== undefined}
    <title>{post.title}</title>
    <meta name='author' content='Emma (MarmadileManteater)' />
    <meta name='description' content={post.shortDescription} />
  {/if}
</svelte:head>
