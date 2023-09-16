<script lang='ts'>
  import type { IProject, ITag } from '@marmadilemanteater/gh-static-site-lib/src/models/project'
  import UnifiedContentList from '../unified-content-list/unified-content-list.svelte'

  export let projects : IProject[]
  export let tagData : ITag[]
</script>
<div
  class='project-list rounded-t-xl overflow-hidden'
>
  <UnifiedContentList
    {tagData}
    content={projects}
    startIndex={1}
  />
  <a
    href='./projects'
    class='p-5 inline-block hover:underline'
  >
    View more &raquo;
  </a>
</div>
