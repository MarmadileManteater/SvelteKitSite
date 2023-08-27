<script lang="ts">
  export let loadedGodot: Boolean;
</script>
<header>
  <a href="/" class="justify-center flex sm:pt-2 pb-5">
    <!-- <h2 class='z-1 relative text-4xl sm:text-6xl md:text-7xl lg:text-8xl p-8 text-center pb-10'>
        <span class='section1'><span class='colour1 text-outline text-red-400 drop-shadow-lg'>Marma</span><span class='colour2 text-outline text-green-400 drop-shadow-lg'>dile</span></span>
        <span class='section2'><span class='colour2 text-outline text-green-400 drop-shadow-lg'>M</span><span class='colour3 text-outline text-blue-400'>anteater</span></span>
    </h2> -->
    <div class="{loadedGodot?'xl:pt-0 lg:pt-10 sm:pt-0':''} lg:ml-[-40px]">
      <img src="/images/name-pink.gif" alt="emma" class="m-0 hidden dark:inline self-center" width="500" />
      <img src="/images/name-blue.gif" alt="emma" class="m-0 dark:hidden inline self-center" width="500" />
      
      <img src="/images/username.gif" alt="<MarmadileManteater>" class="m-0 lg:mt-3 lg:ml-[-30px] self-center sm:block lg:inline hidden" width="500" />
    </div>
  </a>
</header>
<style>
  :root {
    --outline-color: #000;
  }

  header h2 {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 420px) {
    header h2 {
      flex-direction: column;
    }
  }

  .colour1 {
    --outline-colour: #651111;
  }

  .colour2 {
    --outline-colour: #0a831a;
  }

  .colour3 {
    --outline-colour: #120a83;
  }


  .text-outline {
    /*
        style adapted from this answer by Elvin Mammadov
        https://stackoverflow.com/a/47884204
    */
    text-shadow: 4px 0 0 var(--outline-colour),
                -4px 0 0 var(--outline-colour),
                0 4px 0 var(--outline-colour),
                0 -4px 0 var(--outline-colour),
                2px 2px var(--outline-colour),
                -2px -2px 0 var(--outline-colour),
                2px -2px 0 var(--outline-colour),
                -2px 2px 0 var(--outline-colour);
  }

  header {
    max-width: 100%;
  }
  @media (max-width: 420px) {
    .section1 .colour2 {
      color: #F87171;
      --outline-colour: #651111;
    }
    .section2 .colour2 {
      color: #60A5FA;
      --outline-colour: #120a83;
    }
  }

</style>
