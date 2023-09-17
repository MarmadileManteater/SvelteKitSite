<script lang='ts'>
  import type { PageData } from './$types'
  import type { IProject } from '@marmadilemanteater/gh-static-site-lib/src/models/project'
  import ProjectList from '../../../components/project-list/project-list.svelte'
  import SortByLinks from '../../../components/sort-by-links/sort-by-links.svelte'
  import linksData from '../../../data/sort-by-links.json'

  export let data : PageData

  let tagData = data.props.tagData
  $: projects = data.props.projectData as IProject[]
</script>
<div
  class='bg-white dark:bg-zinc-900 rounded-t-xl border-t lg:border border-solid border-black'
>
  <ProjectList
    sortType="stars"
    clientSideSorting={false}
    projects={projects}
    tagData={tagData}
  >
    <SortByLinks 
      options={linksData}
      selected={2}
    />
  </ProjectList>
</div>
<svelte:head>
  <title>Projects</title>
  <meta name='author' content='Emma (MarmadileManteater)' />
  <meta name='description' content='my projects; 🤷‍♀️i guess' />
</svelte:head>
