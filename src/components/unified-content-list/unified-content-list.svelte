<script lang='ts'>
  import type { IProject, ITag } from '@marmadilemanteater/gh-static-site-lib/src/models/project'
  import type { IBlogPost } from '@marmadilemanteater/gh-static-site-lib/src/models/blog'
  import ContentCard from '../content-card/content-card.svelte'
  import ProjectButton from '../project-button/project-button.svelte'

  export let content : Array<IBlogPost|IProject>
  export let tagData : Array<ITag>
  export let startIndex : number = 0
</script>
{#each content as contentItem, i}
  {#if contentItem.type === 'IProject'}
    <ContentCard
      title={contentItem.title}
      titleLink={contentItem.buttons[0].link}
      summary={contentItem.summary}
      thumbnail={contentItem.thumbnail}
      tags={contentItem.tags}
      tagData={tagData}
      index={startIndex + i}
    >
      {#each contentItem.buttons as button, k}
        <ProjectButton
          {...button}
          index={k}
        >{button.prefix} <strong>{button.locationName}</strong></ProjectButton>
      {/each}
    </ContentCard>
  {/if}
  {#if contentItem.type === 'IBlogPost'}
    <ContentCard
      title={contentItem.title}
      titleLink={`/blog/${contentItem.id}`}
      summary={contentItem.shortDescription}
      tags={contentItem.tags}
      tagData={tagData}
      index={startIndex + i}
    >
      <p
        class='pb-2 text-zinc-500 dark:text-zinc-400'
      >
        <em>
          Last updated {new Date(contentItem.gittime).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'GMT' })} GMT
        </em>
      </p>
  </ContentCard>
  {/if}
{/each}
