<script lang='ts'>
  import Emoji from '../emoji/emoji.svelte'
  
  export let sceneUrl: string
</script>
<span class='z-10 relative top-2 left-0 md:absolute'>
  <a 
    href='https://github.com/MarmadileManteater/JustThreeBlocksBackground'
    rel='noreferrer'
    target='_blank'
    class='pt-2 pl-2 hover:underline text-white'
  >
    Background
  </a>
  <a 
    class='pt-2 hover:underline text-white'
    href='https://godotengine.org/'
  >
    made with <Emoji emoji='🤖' />Godot
  </a>
</span>
<iframe 
  title='godot scene'
  src={sceneUrl}
  class='w-screen h-screen fixed top-0 left-0 z-0'
></iframe>
