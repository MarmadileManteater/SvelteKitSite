
<script lang='ts'>
  import SocialPostsGrid from '../../components/social-posts/social-posts-grid.svelte'
  import Emoji from '../../components/emoji/emoji.svelte'
  // @ts-expect-error: vite-imagetools causes error prone imports in IDE only
  import profilepic from '../../images/02152bebd8e818f982e39fb74e92ff4b.png?format=webp&w=100&h=100'
  // @ts-expect-error: vite-imagetools causes error prone imports in IDE only
  import stars from '../../images/preview3_22.png?format=webp&h=100&w=320'
  import ProjectButton from '../project-button/project-button.svelte'
  
  export const PAGE_COUNT = 10
  export let page = 0
  export let socialPosts = []
  export let csr = false

  let pages = Math.ceil(socialPosts.length / PAGE_COUNT)
  let pageArray = Array.from(Array(pages).keys())
</script>
<div
  class='lg:mt-3'
>
  <SocialPostsGrid
    socialPosts={socialPosts.slice(page * PAGE_COUNT, (page * PAGE_COUNT) + PAGE_COUNT)}
  >
    <div
      class='lg:block flex justify-center'
    >
      <div
        class='lg:w-[330px]'
      >
        <div
          class='max-w-[230px] lg:max-w-[320px] bg-white dark:bg-zinc-900 lg:w-auto w-[100%] mb-7'
        >
          <div
            class='absolute z-1 bg-black w-[230px] lg:w-auto lg:h-[100px]'
          >
            <img
              src={stars}
              alt='banner'
              class='lg:w-[320px] w-[223px] rounded-t-xl overflow-hidden'
            />
          </div>
          <div
            class='flex'
          >
            <img
              src={profilepic}
              alt='me'
              class='z-2 relative rounded-full pt-4 pl-4 w-[100px] h-[100px] lg:w-[116px] lg:h-[116px]'
            />
            <div
              class='relative top-12 lg:top-[10px] left-6 lg:left-[120px]'
            >
              <ProjectButton
                fancy={false}
                raquo={false}
                index={0}
                link='/feed/feed.xml'
                download={csr ? 'feed.xml' : undefined}
              >
                <Emoji emoji='📰' /> rss
              </ProjectButton>
            </div>
          </div>
          <div
            class='p-4 pb-0 mb-[-10px] lg:block hidden'
          >
            <strong>
              Emma {'<MarmadileManteater>'}
            </strong>
          </div>
          <div 
            class='p-4'
          >
            <p>
              <Emoji emoji='🔥' />
              <em>
                ( she / her / hers )
              </em> &nbsp; 
              <Emoji emoji='🏳️‍⚧️' />
            </p>
            <p>
              Jill of all trades <Emoji emoji='🧙‍♀️' /> &
            </p>
            <p>
              a master of JavaScript <Emoji emoji='🙃' />
            </p>
          </div>
        </div>
      </div>
    </div>
  </SocialPostsGrid>
</div>
<div 
  class='text-center lg:text-left'
>
  <div
    class='inline-block'
  >
    <div
      class='overflow-hidden pl-4 pr-4 mt-4 mb-4 lg:mt-7 bg-white dark:bg-zinc-800 rounded flex'
    >
      {#each pageArray as _, i}
        <a 
          class={`inline-block hover:bg-zinc-200 dark:hover:bg-zinc-900 p-4 pt-5 pb-5 ${i == page ? 'font-bold underline dark:bg-zinc-900 bg-zinc-200 inline': ''}`}
          href={`/feed/${i}`}
        >
          {i + 1}
        </a>
      {/each}
    </div>
  </div>
</div>
