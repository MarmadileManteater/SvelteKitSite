<script>
  import { page } from '$app/stores'
  import Emoji from '../components/emoji/emoji.svelte'
  let message, emoji

  switch ($page.status) {
    case 404:
      message = 'The page you have requested was not found.'
      emoji = '😭'
      break
    case 500:
      emoji = '🤕'
      message = 'Well, that wasn\'t supposed to happen.'
      break
    default:
      emoji = '❓'
  }
</script>

<div class='bg-white dark:bg-zinc-900 rounded-t-xl border-t lg:border border-solid border-black p-6 pb-2'>
  <h2 class='font-bold text-4xl pb-4'><Emoji emoji={emoji} /> {$page.status} - {$page.error.message}</h2>
  {#if message}
    <p class='pb-4 text-lg' >
      {message}
    </p>
  {/if}
</div>
<svelte:head>
  <title>{$page.status} - {$page.error.message}</title>
</svelte:head>
