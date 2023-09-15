<script lang="ts">
  export let link: string
  export let index: number = 0
  export let raquo : bool = true
  export let download: string = undefined
  export let fancy: bool = true
</script>
<a
  href={link}
  rel="noreferrer"
  class={`p-3 inline-block hover:underline dark:bg-zinc-700 ${index % 2 === 0?'bg-blue-600':'bg-blue-800'}  text-white rounded-lg mr-5 mb-3 relative z-[1] ${fancy?'pb-5':''}`}
  download={download}
>
  {#if fancy}<div 
    class="{index % 2 === 0?'bg-blue-500':'bg-blue-700'} dark:bg-zinc-600 w-full absolute h-12 rounded-lg z-[-1] top-0 left-0"
  ></div>{/if}
  <slot /> {#if raquo}&raquo;{/if}
</a>
<style scoped>
  a {
    color: white !important;
  }
</style>
