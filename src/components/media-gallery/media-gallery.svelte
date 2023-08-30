<script lang="ts">
  import type { IMedia } from "@marmadilemanteater/gh-static-site-lib/src/models/social-posts"

  export let medias: IMedia[] = []
  $: images = medias.filter(media => !media.url?.endsWith("mp4"))
  $: videos = medias.filter(media => media.url?.endsWith("mp4"))
</script>
<div class="overflow-hidden media-grid grid max-w-full {images.length < 2?"flex flex-col justify-center bg-black": ""}">
  {#each images as image, i}
    <div data-image="{i + 1}" style={`grid-area: image${i + 1}; overflow: hidden;`}>
      <a target="_blank" href={image.url?.replace("https://raw.githubusercontent.com/MarmadileManteater/MySocialFeed/development", "")} rel="noreferrer" >
        <img width="300" height="auto" src={`${image.url?.replace("https://raw.githubusercontent.com/MarmadileManteater/MySocialFeed/development", "")}.webp`} alt={image.alt} title={image.alt} style="object-fit: cover; width: 100%;"/>
      </a>
    </div>
  {/each}
</div>
<div class="overflow-hidden media-grid grid max-w-full flex flex-col justify-center bg-black">
  {#each videos as media, i}
    {#if media.url?.endsWith(".mp4")}
      <video src={media.url?.replace("https://raw.githubusercontent.com/MarmadileManteater/MySocialFeed/development", "")} style={`grid-area: video${i + 1}`} controls>
        <track kind="captions" />
      </video>
    {/if}
  {/each}
</div>

<style>
  .media-grid {
    grid: 'video1 video1'
          'video2 video2'
          'image1 image2'
          'image3 image3';
  }

  :global([data-image="3"]) {
    display: flex;
    justify-content: center;
    background: black;
  }

  @media(min-width: 1024px) {
    :global([data-image]:last-child:not([data-image="2"])) {
      max-height: 200px;
    }
  }

  :global([data-image] img) {
    height: 100%;
  }

  :global([data-image]:last-child:not([data-image="2"]) img) {
    height: auto;
  }
</style>
