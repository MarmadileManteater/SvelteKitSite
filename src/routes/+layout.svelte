<script lang="ts">
  import '../global.css'
  import Header from '../components/header/header.svelte'
  import Footer from '../components/footer/footer.svelte'
  import GodotSceneBackground from '../components/godot-scene-background/godot-scene-background.svelte'
  import Emoji from '../components/emoji/emoji.svelte'
  import { csr } from './+layout'
  import { navigating } from '$app/stores'
  
  let loadGodot = false
  let enableGodot = () => {
    loadGodot = true
  }
</script>
<svelte:head>
  <link rel="icon" href="/favicon.ico" />
</svelte:head>
{#if loadGodot && csr}
  <GodotSceneBackground sceneUrl='/godot_background/index.html' />
{/if}

  {#if !loadGodot && csr}
    <span class='text-white absolute top-2 right-5 z-10 hover:underline cursor-pointer hidden lg:inline' on:click={enableGodot} on:keydown={enableGodot}>Load <Emoji emoji='🤖' />Godot background scene in browser</span>
  {/if}
  <div class='flex flex-col min-h-screen' data-semi-transparent={loadGodot?'true':'false'} >
    <div class='wrapper flex-1 flex flex-col relative' >
      <Header loadedGodot={loadGodot} />
      {#if $navigating}
        <div class="flex justify-center pt-10" >
        </div>
      {:else}
        <main class='max-w-full ml-auto mr-auto flex flex-col flex-1' style='width:1000px'>
          <section class='flex-1 flex flex-col relative' >
            <slot />
          </section>
        </main>
      {/if}
    </div>
  </div>
  {#if !$navigating}
    <footer class='relative flex flex-col-reverse'>
      <Footer loadedGodot={loadGodot} />
    </footer>
  {/if}
