<script lang='ts'>
  import type { IProject, ITag } from '@marmadilemanteater/gh-static-site-lib/src/models/project'
  import UnifiedContentList from '../unified-content-list/unified-content-list.svelte'

  export let projects : IProject[]
  export let tagData : ITag[]
  export let clientSideSorting: boolean = true
  export let sortType : string = 'featured'

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
<div
  class='project-list rounded-t-xl overflow-hidden'
>
  {#if clientSideSorting}
    <span 
      class={`${sortType === 'featured'?'decoration-solid underline cursor-default':'cursor-pointer'} select-none p-4 inline-block`}
      on:click={() => { sortType = 'featured' }}
      on:keydown={() => { sortType = 'featured' }}
    >
      Sort by featured
    </span>
    <span
      class={`${sortType === 'lastUpdate'?'decoration-solid underline cursor-default':'cursor-pointer'} select-none p-4 inline-block`}
      on:click={() => { sortType = 'lastUpdate' }}
      on:keydown={() => { sortType = 'lastUpdate' }}
    >
      Sort by last updated
    </span>
  {/if}
  <slot/>
  <UnifiedContentList
    content={projectsSorted()}
    startIndex={0}
    {tagData}
  />
</div>
