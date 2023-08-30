<script lang="ts">
  import type { ISocialPost } from "@marmadilemanteater/gh-static-site-lib/src/models/social-posts"
  import { convertEmojiToImages } from "@marmadilemanteater/gh-static-site-lib/src/helpers/emoji"
  import Emoji from "../emoji/emoji.svelte"
  import MediaGallery from "../media-gallery/media-gallery.svelte"
  export let post: ISocialPost = null

  $: handle = post.handle.indexOf(" on ") === -1?post.handle:post.handle.split(" on ")[0]
  $: postfixHandle = post.handle.indexOf(" on ") === -1?"":post.handle.split(" on ")[1]
  // remove my subdomains
  $: platformUrl = post.platformUrl.replace("marmadilemanteater.", "")
  $: icon = post.platformUrl.indexOf("gamemaking.social") !== -1 ? '🐘' : 
            post.platformUrl.indexOf("pxlmo.com") !== -1 ? '📷' :
            post.platformUrl.indexOf("programming.dev") !== -1 ? '🐀' :
            post.platformUrl.indexOf("marmadilemanteater.dev") !== -1 ? '📝' :
            post.platformUrl.indexOf("itch.io") !== -1 ? '🕹' :
            post.platformUrl.indexOf("opengameart.org") !== -1 ? '🎨' :
            ''
  $: descriptionText = post.description.replace(/<\/*?[^>]*?>/g, "")
  $: showTitle = !post.title.endsWith("...") && !descriptionText.startsWith(post.title)
  $: truncateContent = descriptionText.length > 250 && post.media[0].url !== undefined || platformUrl.startsWith("https://opengameart.org");


</script>

{#if post !== null}
  <div class="w-[100%]">
    <div class="post flex flex-col lg:max-w-[300px] bg-white dark:bg-zinc-900 lg:rounded-t-xl overflow-hidden flex flex-col lg:w-auto w-[100%]">
      <span class="text-sm pl-4 pr-4 pt-4">
        <a 
          class="hover:underline text-blue-600 dark:text-red-300"
          rel="me noreferrer"
          href={post.authorUrl}
        >
          {#if icon !== "" && postfixHandle === ""}
            <Emoji emoji={icon} />
          {/if}
          {handle}
        </a> 
        {#if postfixHandle !== ""}
          <span class="ml-1">
            {postfixHandle !== "" ? " on ":""}
            <a 
              class="hover:underline text-blue-600 dark:text-red-300 whitespace-nowrap"
              rel="me noreferrer"
              href={platformUrl}
            >
              {#if icon !== "" }
                <span class="mr-[-5px]">
                  <Emoji emoji={icon} />
                </span>
              {/if}
              {postfixHandle}
            </a>
          </span>
        {/if}
      </span>
      <em class="italic p-4 pt-2 pb-0 mb-[-10px] text-zinc-500 dark:text-zinc-400">{post.date}</em>
      {#if showTitle}
        <span class="font-bold p-4 pb-0 mb-[-10px]">
          {@html convertEmojiToImages(post.title)}
        </span>
      {/if}
      <span class="p-4 {truncateContent?"overflow-hidden lg:max-h-[200px]":""}" >
        {@html convertEmojiToImages(post.description.replace("https://raw.githubusercontent.com/MarmadileManteater/MySocialFeed/development", ""))}
      </span>
      {#if truncateContent}
        <div class="z-10 linear-gradient-black-to-alpha mt-[-100px] leading-[160px] h-[100px] text-center relative hidden lg:block">
          <a class="hover:underline hidden lg:inline show-more text-white" href={post.originalUrl}>Show more &raquo;</a>
        </div>
      {/if}
      <MediaGallery {descriptionText} medias={post.media} />
      <div class="flex-1 flex flex-col justify-end">
        <a class="bg-zinc-100 dark:bg-zinc-800 p-4 pt-3 pb-2 text-md block hover:underline text-blue-600 dark:text-red-300 text-xs" href={post.originalUrl}>
          <Emoji emoji="🔗" /> Permalink
        </a>

      </div>
    </div>
  </div>
{/if}

<style scoped>
  .linear-gradient-black-to-alpha {
    background: linear-gradient(#ffffff00, #000000ff);
  }
</style>
