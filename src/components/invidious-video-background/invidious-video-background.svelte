<script lang='ts'>
  /* dunno if I will bring this back 🤷‍♀️ */
  import { onMount } from 'svelte'
  import Emoji from '../emoji/emoji.svelte'

  export let videoId: string
  export let server: string = 'https://invidious.sethforprivacy.com'
  export let itag: string = '22'

  $: videoUrl = `${server}/latest_version?id=${videoId}&itag=${itag}&local=true`
  $: invidiousUrl = `${server}/watch?v=${videoId}`
  let video : HTMLVideoElement
  let dataActive = false
  const invidiousInstanceList = [
    'https://invidious.sethforprivacy.com',
    'https://vid.puffyan.us',
    'https://yt.artemislena.eu'
  ]
  onMount(() => {
    const onFirstInteraction = () => {
      const timeUpdate = () => {
        if (video.currentTime > 3) {
          dataActive = true
          video.removeEventListener('timeupdate', timeUpdate)
        }
      }
      const onError = async () => {
        console.warn(`Issue loading from instance '${server}'; attempting another . . . `)
        try {
          let tryServer = server
          while (tryServer === server) {
            tryServer = invidiousInstanceList[Math.floor(invidiousInstanceList.length * Math.random())]
          }
          server = tryServer
          // in the browser, play the video whenever it's attributes change
          new MutationObserver((_, observer) => {
            video.play()
            observer.disconnect()
          }).observe(video, { attributes: true, characterData: false, characterDataOldValue: false, childList: false })
        } catch (error) {
          console.error(error)
        }
      }
      video.addEventListener('error', onError)
      video.addEventListener('timeupdate', timeUpdate)
      setTimeout(() => {
        if (video.currentTime == 0) {
          // Timeout error
          onError()
        }
      }, 6000)
      cleanUp()
      video.play()
    }
    const cleanUp = () => {
      window.removeEventListener('click', onFirstInteraction)
      window.removeEventListener('keypress', onFirstInteraction)
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('click', onFirstInteraction)
      window.addEventListener('keypress', onFirstInteraction)
    }
  })
</script>
<div
  class='flex justify-center fixed top-0 left-0 w-screen h-screen'
  data-active={dataActive}
>
  <video 
    bind:this={video}
    loop
    muted
    src={videoUrl}
  >
    <slot/>
  </video>
</div>
<a 
  rel='noreferrer'
  target='_blank'
  href={invidiousUrl}
  class='z-10 hover:underline text-blue text-blue-600 dark:text-red-300 dark:bg-zinc-900 bg-white p-3'
>
  Watch this video on 
  <span
    class='icon link'
  >
    <Emoji emoji='🔗' />
  </span>
  <span 
    class='icon'
  >
    <Emoji emoji='📺' />
  </span>
  Invidious
</a>
<style>
/* 🙈 don't look at this, I swear, I'm using tailwind in all the parts of the website I still use */
a, video {
  position: fixed;
  opacity: 0;
  transition: opacity 1s ease;
  font-size: 0;
}

div[data-active="true"] + a {
  top: 0px;
  left: 0px;
  right: auto;
  bottom: auto;
  border-radius: 0 0 5px 0;
  position: fixed;
  border-top: 0;
  border-left: 0;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  font-size: 1em;
}

div[data-active="true"] + a span.link { 
  display: none;
}

@media (max-width: 1500px) {
  div[data-active="true"] + a {
    position: absolute;
  }
}

@media (max-width: 1368px) {
  div[data-active="true"] + a {
    top: 0px;
    left: 0px;
    right: auto;
    bottom: auto;
    border-radius: 0 0 5px 0;
    padding: 3px;
    font-size: 0;
  }
  div[data-active="true"] + a .icon {
    font-size: initial;
  }
  div[data-active="true"] + a span.link { 
    display: inline;
  }
}

video {
  z-index: -1;
  top: 0;
  left: 50%;
  margin-left: -50%;
  min-width: 100%;
  height: 100vh;
}

div[data-active="true"] video, div[data-active="true"] + a {
  opacity: 1;
}

@media (max-width: 768px) {
  video {
    top: -100px;
    width: 100%;
    height: auto;
  }
}

@media (max-width: 500px) {
  video {
    top: -50px;
    width: 100%;
    height: auto;
  }
}
</style>
