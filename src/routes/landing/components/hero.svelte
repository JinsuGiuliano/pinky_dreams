<script lang="ts">
	import { Icons } from "$lib/icons/icons";
	import { onMount } from "svelte";
	import type { Curso } from "../../../data/cursos";
	import { data } from "../../../data/data";
	import { loadCourses } from "$lib/resources";
	import { CourseStore } from "$lib/store";


  let showCurso: Curso | null = null;
  let showPreview: Curso | null = null;
  let payButtonPressed = 0;

  onMount(() => {
    const p = localStorage.getItem('payButtonPressed');
    if (p) {
      payButtonPressed = JSON.parse(p);
    }


		loadCourses();
  });

  function openPayLink(curso: Curso) {
    window.open(curso.linkPago, "_blank");
    payButtonPressed = curso.ID;
    localStorage.setItem('payButtonPressed', JSON.stringify(payButtonPressed));
  }

  function showCursoModal(curso:Curso){
    showCurso = curso
  }

  function hidePreviewModal(){
    showPreview = null
  }

  function openLink(curso:Curso){
    window.open(curso.linkPago, "_blank")
  }

  function openPagoRealizado(curso:Curso){
    window.open(curso.linkPagoRealizado, "_blank")
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
      {#each $CourseStore as curso, i}
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
                        <div class="flex items-center justify-start gap-2 text-lg font-thin">
                          + Más información del curso
                        </div>
                    </div>
                    <div class="collapse-content text-sm py-0">{@html curso.description}</div>
                   
                  </div>
                    {#if curso.linkPago != ""}
                      <button 
                        class="btn w-full bg-blue-600/10 hover:bg-blue-600/30 rounded-md border-[1px] hover:border-blue-600 border-blue-600 text-blue-600" 
                        on:click={()=>showPreview = curso}>
                        <div class="w-full flex items-center justify-between gap-2">
                          <div>{@html Icons.mercadoPago()}</div> 
                          <div class="text-2xl font-thin">${curso.precio}</div>
                        </div>
                      </button>
                    {/if}
                    {#if !curso.linkPagoRealizado && curso.linkPagoRealizado != "" && payButtonPressed == curso.ID}
                      <button class="btn w-full bg-green-600/10 hover:bg-green-600/20 border-[1px] border-green-600 hover:border-green-600 text-green-600 rounded-md" 
                        on:click={()=>openPagoRealizado(curso)}>
                        <div class="w-full flex items-center justify-start gap-2">
                          <div>{@html Icons.whatsapp('#16a34a', 20)}</div>
                          <div>Notificar pago via whatsapp</div>
                        </div>
                      </button>
                    {:else}
                      <button class="btn w-full bg-green-600/10 hover:bg-green-600/20 border-[1px] border-green-600 hover:border-green-600 text-green-600 rounded-md" on:click={()=>window.open(data.whatsappLink, "_blank")}>
                        <div class="w-full flex items-center justify-start gap-2">
                        <div>{@html Icons.whatsapp("#16a34a", 20)}</div>
                        <div>Contáctanos</div>
                        </div>
                      </button>
                    {/if}
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
        <button 
          class="btn w-full bg-blue-600/10 hover:bg-blue-600/30 rounded-md border-[1px] hover:border-blue-600 border-blue-600 text-blue-600" 
          on:click={()=>openLink(showCurso)}>
            <div class="w-full flex items-center justify-between gap-2">
            <div>{@html Icons.mercadoPago()}</div> 
            <div class="text-2xl font-thin">${showCurso.precio}</div>
          </div>
        </button>
          
        </div>
      </div>
    </div>
  </div>
{/if}


{#if showPreview != null}
 <div class="modal modal-open">
    <div class="modal-box px-0 py-0 rounded-xl w-[90%] lg:min-w-[600px] border-2 border-pink-600/20">
      <div class="modal-header text-center bg-pink-600/20">  
        <div class="text-3xl py-2 font-thin">{showPreview.title}</div>
       
      </div>
      <div class="modal-body">
        <div class="flex flex-col lg:flex-row items-start justify-between p-2">
          <div class="w-full text-start p-2 italic">
            <h1 class="text-2xl font-bold">Aviso importante</h1>
            <h2 class="text-lg font-thin">Luego de realizar el pago,</h2>  
            <h2 class="text-lg font-thin">envía el comprobante a nuestro WhatsApp</h2>
          </div>
          <div class="divider divider-horizontal"/>
        <div class="flex w-full flex-col items-center justify-end pt-1 gap-1">
          <button 
            class="btn w-full bg-blue-600/10 hover:bg-blue-600/30 rounded-md border-[1px] hover:border-blue-600 border-blue-600 text-blue-600" 
            on:click={()=>openPayLink(showPreview)}>
              <div class="w-full flex items-center justify-between gap-1">
              <div>Comprar</div> 
              <div class="text-2xl font-thin">${showPreview.precio}</div>
            </div>
          </button>
          {#if payButtonPressed == showPreview.ID}
            <button class="btn w-full bg-green-600/10 hover:bg-green-600/20 border-[1px] border-green-600 hover:border-green-600 text-green-600 rounded-md" 
              on:click={()=>openPagoRealizado(showPreview)}>
              <div class="w-full flex items-center justify-start gap-1">
                <div>{@html Icons.whatsapp('#16a34a', 20)}</div>
                <div>Notificar pago via whatsapp</div>
              </div>
            </button>
          {/if}
          <button class="btn rounded-md w-full" on:click={hidePreviewModal}>volver</button>
        </div>
      </div>
      </div>
    </div>
  </div>
{/if}