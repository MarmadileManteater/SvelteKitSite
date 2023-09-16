<script lang='ts'>
  import type { ITag } from '@marmadilemanteater/gh-static-site-lib/src/models/project'
  import { convertEmojiToImages } from '@marmadilemanteater/gh-static-site-lib/src/helpers/emoji'
  import TagList from '../tag-list/tag-list.svelte'

  export let title : string
  export let titleLink : string = ''
  export let summary : string = ''
  export let tags : string[]
  export let tagData : ITag[]
  export let index : number
  export let thumbnail : string|undefined = undefined
</script>
<div 
  class={`content-card md:pt-0 ${thumbnail?'pt-4':'pt-0'} block lg:flex ${index % 2 === 0?'bg-zinc-100':''} ${index % 2 === 0?'dark:bg-zinc-800':''} dark:text-white`}
>
  {#if thumbnail}
    <div 
      class='p-4 pr-0 min-w-[200px] flex justify-center flex-col text-center'
    >
      <a 
        href={titleLink}
      >
        <img
          src={`/thumbnails/${title.replace('?', '').replace('!', '')}.webp`}
          alt={title}
          class='max-h-[153px] max-w-[182px] inline-block'
        />
      </a>
    </div> 
  {/if}
  <div
    class='p-4 pl-4'
  >
    <TagList
      {tags}
      {tagData}
    />
    <a 
      href={titleLink} 
      class='hover:underline'
    >
      <h2 
        class={`font-bold text-2xl mb-4 ${title.search(' ') === -1?'break-all':'break-words'}`}
      >{@html convertEmojiToImages(title)}</h2>
    </a>
    <p 
      class='mb-3'
    >
      {@html convertEmojiToImages(summary)}
    </p>
    <slot />
  </div>
</div>
