<script lang="ts">
  import UnifiedContentList from "../unified-content-list/unified-content-list.svelte"
  import type { IProject, ITag } from "@marmadilemanteater/gh-static-site-lib/src/models/project"
  export let projects : IProject[]
  export let tagData : ITag[]
  let sortType : string = 'featured'
  $: projectsSorted = () => {
    switch (sortType) {
    case 'lastUpdate':
      return projects.map(p => p).sort((a, b) => { return new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime() })
    case 'featured':
    default:
      return projects.map(p => p)
    }
  }
</script>
<div class='project-list rounded-t-xl' style='overflow:hidden;'>
  <span class={`${sortType === 'featured'?'decoration-solid underline cursor-default':'cursor-pointer'} select-none p-4 inline-block`} on:click={() => { sortType = 'featured' }} on:keydown={() => { sortType = 'featured' }}>Sort by featured</span><span class={`${sortType === 'lastUpdate'?'decoration-solid underline cursor-default':'cursor-pointer'} select-none p-4 inline-block`} on:click={() => { sortType = 'lastUpdate' }} on:keydown={() => { sortType = 'lastUpdate' }}>Sort by last updated</span>
  <UnifiedContentList {...{ content: projectsSorted(), tagData: tagData, startIndex: 0 }} ></UnifiedContentList>
</div>
