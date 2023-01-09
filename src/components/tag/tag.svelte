<script lang="ts">
  export let name : string
  export let link : string
  $: spanClass = [name, 'align-top', 'hover:underline', 'p-2', 'bg-zinc-200', 'dark:bg-zinc-700', 'dark:text-white', 'rounded-xl', 'mr-3','mb-2','mt-2', 'inline-block'].join(' ')
</script>
<a rel="noreferrer" href={link} target='_blank' >
  <span class={spanClass}>{name}</span>
</a>
<style>
.csharp {
  background-image: url('../../images/csharp-logo.png');
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
  background-image: url('../../images/js-logo.png');
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
  background-image: url('../../images/python-logo.png');
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
</style>
