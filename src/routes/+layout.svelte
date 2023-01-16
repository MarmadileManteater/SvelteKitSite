<script lang="ts">
  import '../global.css'
  import Header from '../components/header/header.svelte'
  import Footer from '../components/footer/footer.svelte'
  import InvidiousVideoBackground from '../components/invidious-video-background/invidious-video-background.svelte'

  export const prerender = true
</script>
<svelte:head>
  <link rel="icon" href="/favicon.ico" />
</svelte:head>
<div class='flex flex-col min-h-screen' >
  <div class='wrapper flex-1 flex flex-col relative' >
    <InvidiousVideoBackground videoId='XvtpXPbbiVA' itag='136' />
    <Header />
    <main class='max-w-full ml-auto mr-auto flex flex-col flex-1' style='width:1000px'>
      <section class='flex-1 flex flex-col relative' >
        <slot />
      </section>
    </main>
  </div>
  <footer class='relative flex flex-col-reverse'>
    <Footer />
  </footer>
</div>
