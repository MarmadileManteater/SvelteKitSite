<header>
  <a href='/'>
    <h2 class='text-4xl sm:text-6xl md:text-7xl lg:text-8xl p-8 text-center pb-10'>
      <span class='red text-outline text-blue-500 drop-shadow-lg'>Marmadile</span> 
      <span class='green text-outline text-blue-400'>Manteater</span>
    </h2>
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
  
  .red {
    --outline-color: #00247d;
  }
  
  .green {
    --outline-color: #0a3083;
  }
  
  .text-outline {
    /*
        style adapted from this answer by Elvin Mammadov
        https://stackoverflow.com/a/47884204
    */
    text-shadow: 4px 0 0 var(--outline-color),
                -4px 0 0 var(--outline-color),
                0 4px 0 var(--outline-color),
                0 -4px 0 var(--outline-color),
                2px 2px var(--outline-color),
                -2px -2px 0 var(--outline-color),
                2px -2px 0 var(--outline-color),
                -2px 2px 0 var(--outline-color);
  }
  
  header {
    max-width: 100%;
  }
</style>
