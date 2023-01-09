<script lang="ts">
  export let link: string
  export let target: string
  export let index: number = 0
</script>
<a
  href={link}
  target={target}
  class={`p-3 inline-block hover:underline ${index % 2 === 0?'dark:bg-zinc-900':'dark:bg-zinc-700'} ${index % 2 === 0?'bg-blue-600':'bg-blue-900'}  text-white dark:bg-zinc-600 rounded-lg mr-5 mb-3`}
><slot /> &raquo;</a>
