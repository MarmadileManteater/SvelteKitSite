<script lang="ts">
  import type { ITag } from '@marmadilemanteater/gh-static-site-lib/src/models/project'
  import { convertEmojiToImages } from '@marmadilemanteater/gh-static-site-lib/src/helpers/emoji'
  import TagList from '../tag-list/tag-list.svelte'

  export let title : string
  export let titleLink : string = ''
  export let summary : string = ''
  export let thumbnail : string|undefined = undefined
  export let tags : string[]
  export let tagData : ITag[]
  export let index : number
  
</script>
<div class={`content-card md:pt-0 ${thumbnail?'pt-4':'pt-0'} outer-grid ${index % 2 === 0?'bg-zinc-100':''} ${index % 2 === 0?'dark:bg-zinc-800':''} dark:text-white`}>
  {#if thumbnail}
    <div class='p-4 pr-0 image-grid'>
      <a href={titleLink}><img src={`/thumbnails/${title.replace("?", "").replace("!", "")}.webp`} alt={title} style='max-height: 153px; max-width: 182px; display: inline-block;' /></a>
    </div> 
  {/if}
  <div class='p-4 pl-4'>
    
    <TagList {...{ tags, tagData }} />
    
    <a href={titleLink} class='hover:underline'><h2 class={`font-bold text-2xl mb-4 ${title.search(' ') === -1?'break-all':'break-words'}`}>{@html convertEmojiToImages(title)}</h2></a>
    <p class='mb-3'>{@html convertEmojiToImages(summary)}</p>
    <slot />
  </div>
</div>
<style>
.outer-grid {
    display: flex;
}

.image-grid {
    min-width: 200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}

@media (max-width: 768px) {
    .outer-grid {
        display: block;
    }
}
</style>
