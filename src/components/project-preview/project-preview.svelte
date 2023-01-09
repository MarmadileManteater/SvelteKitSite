<script lang="ts">
  import UnifiedContentList from "../unified-content-list/unified-content-list.svelte"
  import type { IProject, ITag } from "@marmadilemanteater/gh-static-site-lib/src/models/project"
  export let projects : IProject[]
  export let tagData : ITag[]
</script>
<div class='project-list rounded-t-xl' style='overflow:hidden;'>
  <UnifiedContentList {...{ content: projects, tagData: tagData, startIndex: 1 }} ></UnifiedContentList>
  <a href='./projects' class='p-5 inline-block hover:underline'>View more &raquo;</a>
</div>
