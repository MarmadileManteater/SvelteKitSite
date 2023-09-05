<script lang="ts">
  export let link: string
  export let target: string
  export let index: number = 0
</script>
<a
  href={link}
  rel="noreferrer"
  class={`p-3 inline-block hover:underline dark:bg-zinc-700 ${index % 2 === 0?'bg-blue-600':'bg-blue-800'}  text-white rounded-lg mr-5 mb-3 relative z-[1] pb-5`}
>
  <div 
    class="{index % 2 === 0?'bg-blue-500':'bg-blue-700'} dark:bg-zinc-600 w-full absolute h-12 rounded-lg z-[-1] top-0 left-0"
  ></div>
  <slot /> &raquo;
</a>
<style scoped>
</style>
