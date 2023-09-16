<script lang='ts'>
  import type { IProject } from '@marmadilemanteater/gh-static-site-lib/src/models/project'
  import type { PageData } from './$types'
  import ProjectList from '../../components/project-list/project-list.svelte'

  export let data : PageData

  let tagData = data.props.tagData
  $: projects = data.props.projectData as IProject[]
</script>
<div
  class='bg-white dark:bg-zinc-900 rounded-t-xl border-t lg:border border-solid border-black'
>
  <ProjectList 
    clientSideSorting={false}
    projects={projects}
    tagData={tagData}
  >
    <span
      class={'decoration-solid underline select-none p-4 inline-block'}
    >Sort by featured</span>
    <a
      class={'cursor-pointer select-none p-4 inline-block'}
      href='/projects/updated'
    >Sort by last updated</a>
  </ProjectList>
</div>
<svelte:head>
  <title>Projects</title>
  <meta name='author' content='Emma (MarmadileManteater)' />
  <meta name='description' content='my projects; 🤷‍♀️i guess' />
</svelte:head>
