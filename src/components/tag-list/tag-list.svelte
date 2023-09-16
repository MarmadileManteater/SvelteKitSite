<script lang='ts'>
  import type { ITag } from '@marmadilemanteater/gh-static-site-lib/src/models/project'
  import Tag from '../tag/tag.svelte'

  export let tags : string[]
  export let tagData : ITag[]
  
  // Get the data for a tag by name
  const getTagData = (givenName : string) => {
    return tagData.find(({name}) => { return name === givenName })
  }

  // Get an array of tag data from an array of tag names
  const getTagArray = (tagArray : Array<string>) : Array<ITag> => {
    const dataArray = []
    for (let i = 0; i < tagArray.length; i++) {
      dataArray.push(getTagData(tagArray[i]))
    }
    return dataArray.filter(tag => tag !== undefined) as Array<ITag>
  }
</script>

{#each getTagArray(tags) as tag}
  <Tag {...tag} />
{/each}
