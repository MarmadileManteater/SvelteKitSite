<script lang='ts'>
  import type { IMedia } from '@marmadilemanteater/gh-static-site-lib/src/models/social-posts'

  export let medias: IMedia[] = []
  export let descriptionText: string = ''

  const removeGhAssetsLinks = (image: {url: string, alt: string}) => {
    image.url = image.url?.replace('https://raw.githubusercontent.com/MarmadileManteater/MySocialFeed/development', '')
    return image
  }

  $: images = medias.filter(media => !media.url?.endsWith('mp4')).map(removeGhAssetsLinks)
  $: videos = medias.filter(media => media.url?.endsWith('mp4')).map(removeGhAssetsLinks)
</script>
<div
  class={`overflow-hidden media-grid grid max-w-full ${images.length < 2?'flex flex-col justify-center bg-black': ''}`}
>
  {#each images as image, i}
    {#if image.url !== undefined}
      <div
        class='overflow-hidden'
        data-image={i + 1}
        style={`grid-area: image${i + 1};`}
      >
        <a
          href={image.url}
          rel='noreferrer'
        >
          <img
            width='300'
            src={`${image.url}.webp`}
            alt={image.alt?image.alt:descriptionText}
            title={image.alt?image.alt:descriptionText}
            class='object-cover w-[100%]'
          />
        </a>
      </div>
    {/if}
  {/each}
</div>
<div
  class='overflow-hidden media-grid grid max-w-full flex flex-col justify-center bg-black'
>
  {#each videos as media, i}
    {#if media.url?.endsWith('.mp4')}
      <video
        src={media.url}
        style={`grid-area: video${i + 1}`}
        controls
      >
        <track kind='captions' />
      </video>
    {/if}
  {/each}
</div>

<style>
  /* okay, so i don't think you can do stuff like this in tailwind */
  /* but, maybe, I should just learn how to use tailwinds grid classes */
  .media-grid {
    grid: 'video1 video1'
          'video2 video2'
          'image1 image2'
          'image3 image3';
  }
</style>
