<script lang='ts'>
  import Emoji from '../emoji/emoji.svelte'

  export let options: Array<{ name: string, link: string, emoji?: string }> = []
  export let selected: number = 0
</script>
<div class='flex flex-row flex-wrap'>
  <span
    class=' pr-0 italic font-bold  p-4 pb-0'
  >
    Sort by:
  </span>
  <span
    class='p-4 pl-0 sm:pt-4 flex'
  >
    {#each options as option, i}
      {#if i != selected}
        <a
          class={`cursor-pointer select-none inline-block pl-4 pr-4`}
          href={option.link}
        >
          {#if option.emoji}
            <Emoji emoji={option.emoji} />
          {/if}
          {option.name}
        </a>
        {#if i !== options.length - 1}
        <span 
          class='text-zinc-400 dark:text-zinc-500'
        >
          |
        </span>
        {/if}
      {/if}
      {#if i == selected}
        <span
          class={`decoration-solid underline cursor-default pl-4 pr-4 select-none inline-block `}
        >
          {#if option.emoji}
            <Emoji emoji={option.emoji} />
          {/if}
          {option.name}
        </span>
        {#if i !== options.length - 1}
        <span
          class='text-zinc-400 dark:text-zinc-500'
        >
          |
        </span>
        {/if}
      {/if}
    {/each}
  </span>
</div>
