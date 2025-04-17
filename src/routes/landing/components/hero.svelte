<script lang="ts">
	import { goto } from "$app/navigation";
	import { Icons } from "$lib/icons/icons";
	import { data } from "../../../data/data";

  type cursoT = {
      title: string;
      image: string;
      available: boolean;
      description: string;
  }

  let showCurso: cursoT | null = null;

  function showCursoModal(curso:cursoT){
    showCurso = curso
  }

</script>
<div class="hero bg-base-400 min-h-screen w-full">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img
      alt="Abigail Montero"
      src="/images/abigailMontero2.jpeg"
      class="lg:max-w-lg rounded-lg shadow-xl" />
    <div>
      <h1 class="text-5xl font-bold">{@html data.hero.parr1.title}</h1>
      <p class="py-6">
        {@html data.hero.parr1.description}
      </p>
    </div>
  </div>
</div>

<div class="hero bg-base-200 min-h-screen w-full">
  <div class="hero-content flex-col lg:flex-row">
    <div class="flex flex-col">
      <img
        alt="Abigail Montero"
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
      <a
      href="/#"
      class="text-4xl px-6 uppercase font-thin">
        Nuestros Cursos
    </a>
  </div>
  <div class="p-4 w-full">
    <div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3"> 
      {#each data.cursos as curso, i}
            <div 
            class="cursor-pointer card card-compact bg-base-100 max-w-sm shadow-xl {curso.available?"":"disabled grayscale"}">
              <figure 
              on:keypress            
              on:click={()=>
                curso.available &&
                showCursoModal(curso)
              }
              >
                  <img
                    src={curso.image}
                    alt="Album" /> 
                </figure>
                <div class="card-body">
                  <h2 class="card-title">{curso.title}</h2>
                  <div class="collapse bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion" />
                    
                      <div class="collapse-title font-semibold">
                        <div class="flex items-center justify-start gap-2">
                          + Más información del curso
                          <div>
                            {@html Icons.graduated("#000000")}
                          </div>
                        </div>
                    </div>
                    <div class="collapse-content text-sm py-0">{@html curso.description}</div>
                   
                  </div>
                    <button class="btn btn-primary rounded-md  w-full" on:click={()=>window.open(data.whatsappLink, "_blank")}>
                      Quiero Inscribirme 
                    </button>
                </div>
              </div>
      {/each}
    </div>
  </div>
</div>


{#if showCurso}
  <div class="modal modal-open">
    <div class="modal-box px-0 py-0 rounded-xl">
      <div class="modal-header">  
      </div>
      <div class="modal-body">
        <img
          src={showCurso.image}
          alt="Album" /> 
          <div class="flex justify-between">
            <div class="w-full p-2">
              <h2 class="text-2xl font-bold">{showCurso.title}</h2>
            </div>
          </div>
          <div class="px-2 py-4">
          <span>{@html showCurso.description}</span>
          </div>
        <div class="flex items-center justify-between pt-1 gap-1">
          <button class="btn rounded-md w-1/2" on:click={()=>showCurso = null}>volver</button>
          <button class="btn btn-primary rounded-md  w-1/2" on:click={()=>window.open(data.whatsappLink, "_blank")}>
            Quiero Inscribirme 
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}