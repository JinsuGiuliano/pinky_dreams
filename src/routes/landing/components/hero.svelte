<script>
	import { goto } from "$app/navigation";


	import { data } from "../../../data/data";

</script>
<div class="hero bg-base-400 min-h-screen w-full">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img
      src="/images/abigailMontero2.jpeg"
      class="max-w-md rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">{data.hero.parr1.title}</h1>
      <p class="py-6">
        {@html data.hero.parr1.description}
      </p>
      <button class="btn btn-primary" on:click={()=>{
        goto("https://wa.link/t3vdb5")
      }}>Quiero inscribirme</button>
    </div>
  </div>
</div>

<div class="hero bg-base-200 min-h-screen w-full">
  <div class="hero-content flex-col lg:flex-row">
    <div class="flex flex-col">
      <img
        src={data.hero.parr2.img2}
        class="max-w-xs rounded-lg shadow-2xl" />
    </div>
    <div>
      <h1 class="text-5xl font-bold text-center">{data.hero.parr2.title}</h1>
      <p class="py-6 text-center">
        {@html data.hero.parr2.description}
      </p>
    </div>
  </div>
</div>

<div class="py-20 min-h-screen w-full">
  <div class='flex flex-col items-start justify-center'>
      <a class="text-4xl px-6 uppercase font-thin">
        Nuestros Cursos
    </a>
  </div>

  <div class="p-4 w-full">
    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3"> 
      {#each data.cursos as curso}
                <div class="card card-compact bg-base-100 max-w-sm shadow-xl">
                  <figure>
                      <img
                        src={curso.image}
                        alt="Album" /> 
                    </figure>
                    <div class="card-body">
                      <h2 class="card-title">{curso.title}</h2>
                    </div>
                  </div>
      {/each}
    </div>
  </div>
  

</div>