<script lang="ts">
  import ProjectList from "../../components/project-list/project-list.svelte"
  import type { PageData } from "./$types"
  export let data : PageData
  import type { IProject } from "@marmadilemanteater/gh-static-site-lib/src/models/project"
  let tagData = data.props.tagData
  $: projects = data.props.projectData as IProject[]
</script>
<div class='bg-white dark:bg-zinc-900 md:rounded-t-xl md:border md:border-solid md:border-black'>
  <ProjectList projects={projects} tagData={tagData} />
</div>
<svelte:head>
  <title>Projects</title>
</svelte:head>
