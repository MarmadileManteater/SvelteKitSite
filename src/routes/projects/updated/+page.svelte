<script lang='ts'>
  import type { PageData } from './$types'
  import type { IProject } from '@marmadilemanteater/gh-static-site-lib/src/models/project'
  import ProjectList from '../../../components/project-list/project-list.svelte'

  export let data : PageData

  let tagData = data.props.tagData
  $: projects = data.props.projectData as IProject[]
</script>
<div
  class='bg-white dark:bg-zinc-900 rounded-t-xl border-t lg:border border-solid border-black'
>
  <ProjectList
    sortType="lastUpdate"
    clientSideSorting={false}
    projects={projects}
    tagData={tagData}
  >
    <a
      class={'cursor-pointer select-none p-4 inline-block'}
      href='/projects'
    >Sort by featured</a>
    <span
      class={'decoration-solid underline cursor-default select-none p-4 inline-block'}
    >Sort by last updated</span>
  </ProjectList>
</div>
<svelte:head>
  <title>Projects</title>
  <meta name='author' content='Emma (MarmadileManteater)' />
  <meta name='description' content='my projects; 🤷‍♀️i guess' />
</svelte:head>
