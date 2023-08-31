<script>
  import Emoji from '../../components/emoji/emoji.svelte'
</script>

<div class='bg-white dark:bg-zinc-900 rounded-t-xl border-t lg:border border-solid border-black p-6 pb-2'>
  <h2 class='font-bold text-4xl pb-4'><Emoji emoji={'😭'} /> 404 - Not Found</h2>
  <p class='pb-4 text-lg' >
    The page you have requested was not found.
  </p>
</div>
<svelte:head>
  <title>404 - Not Found</title>
  <meta name='author' content='Emma (MarmadileManteater)' />
  <meta name='description' content="Hello! I'm MarmadileManteater. My real name is Emma, and you can look it up. This is actually an error page!" />
</svelte:head>
