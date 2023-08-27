<script lang="ts">
  // import our logos through esmodule import bc they can be optimized through vite-imagetools that way
  // @ts-ignore
  import csharp from '../../images/csharp-logo.png?format=webp&w=40&h=40'
  // @ts-ignore
  import js from '../../images/js-logo.png?format=webp&w=40&h=40'
  // @ts-ignore
  import python from '../../images/python-logo.png?format=webp&w=40&h=48'
  import rust from '../../images/rust-logo-blk.svg'

  export let name : string
  export let link : string
  $: spanClass = [name, 'align-top', 'hover:underline', 'p-2', 'bg-zinc-200', 'dark:bg-zinc-700', 'dark:text-white', 'rounded-xl', 'mr-3','mb-2','mt-2', 'inline-block'].join(' ')
</script>
<a rel="noreferrer" href={link} target='_blank' style="--csharp: url({csharp}); --js: url({js}); --python: url({python}); --rust: url({rust})">
  <span class={spanClass}>{name}</span>
</a>
<style>
.csharp {
  background-image: var(--csharp);
  background-color: transparent;
  background-size: 40px;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  color: transparent;
  user-select: none;
  overflow: hidden;
}

.javascript {
  background-image: var(--js);
  background-color: transparent;
  background-size: 40px;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  color: transparent;
  user-select: none;
  overflow: hidden;
  border-radius: 0;
}

.python {
  background-image: var(--python);
  background-color: transparent;
  background-size: 40px;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  color: transparent;
  user-select: none;
  overflow: hidden;
  border-radius: 0;
}
.rust {
  background-image: var(--rust);
  background-color: transparent;
  background-size: 40px;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  color: transparent;
  user-select: none;
  overflow: hidden;
  border-radius: 0;
}

@media(prefers-color-scheme: dark) {
  .rust {
    filter: invert(100%);
  }
}
</style>
