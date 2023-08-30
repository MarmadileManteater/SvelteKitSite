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
      {#if showTitle}
        <span class="font-bold p-4">
          {@html convertEmojiToImages(post.title)}
        </span>
      {/if}
      <span class="pt-4 pb-4 pl-4 pr-4 {truncateContent?"shorten":""}" >
        {@html convertEmojiToImages(post.description.replace("https://raw.githubusercontent.com/MarmadileManteater/MySocialFeed/development", ""))}
      </span>
      {#if truncateContent}
        <div style="background: linear-gradient(#ffffff00, #000000ff); height: 100px; position: relative; margin-top: -100px; line-height: 160px; text-align:center;" class="show-more">
          <a class="hover:underline show-more text-white" href={post.originalUrl}>Show more &raquo;</a>
        </div>
      {/if}
      <MediaGallery medias={post.media} />
      <div class="flex-1 flex flex-col justify-end">
        <a class="bg-zinc-100 dark:bg-zinc-800 p-4 md:text-base text-xl block hover:underline text-blue-600 dark:text-red-300" href={post.originalUrl}>
          🔗 Permalink
        </a>
      </div>
    </div>
  </div>
{/if}

<style >
  :global(.post img[rel="emoji"]) {
    display: inline;
  }
  :global(.post a:not(.show-more)) {
    color: rgb(37 99 235);
    cursor: pointer;
    word-wrap: anywhere;
  }
  :global(.post a:hover) {
    text-decoration: underline;
  }
  @media (prefers-color-scheme: dark) {
    :global(.post a:not(.show-more)) {
      color: rgb(252 165 165);
    }
  }
  :global(.shorten) {
    max-height: 200px;
    overflow: hidden;
  }
  @media (max-width: 768px) {
    :global(.shorten) {
      max-height: 100000px;
    }
    .show-more {
    display: none;
  }
  }
</style>
