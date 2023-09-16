<script>
  import { page } from '$app/stores'
  import Emoji from '../components/emoji/emoji.svelte'
  export let status, statusMessage, message, emoji

  switch ($page.status) {
    case 404:
      status = 404
      statusMessage = 'Not Found'
      message = 'The page you have requested was not found.'
      emoji = '😭'
      break
    case 500:
      status = 500
      statusMessage = 'Internal Server Error'
      emoji = '🤕'
      message = 'Well, that wasn\'t supposed to happen.'
      break
    default:
      if (emoji === undefined)
        emoji = '❓'
  }
</script>

<div
  class='bg-white dark:bg-zinc-900 rounded-t-xl border-t lg:border border-solid border-black p-6 pb-2'
>
  <h2
    class='font-bold text-4xl pb-4'
  ><Emoji emoji={emoji} /> {status} - {statusMessage}</h2>
  {#if message}
    <p class='pb-4 text-lg' >
      {message}
    </p>
  {/if}
</div>
<svelte:head>
  <title>{emoji} {status} - {statusMessage}</title>
  <meta name='author' content='Emma (MarmadileManteater)' />
  <meta name='description' content="Hello! I'm MarmadileManteater. My real name is Emma, and you can look it up. This is actually an error page!" />
</svelte:head>
