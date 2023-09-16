<script lang='ts'>
  import { convertEmojiToImages } from '@marmadilemanteater/gh-static-site-lib/src/helpers/emoji'

  export let emoji : string

  $: emojiImage = convertEmojiToImages(emoji)
</script>

<span>{@html emojiImage}</span>
