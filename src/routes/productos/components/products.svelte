<script lang="ts">
	import Product from "./product.svelte";
    import { allCategories, productT } from "../../../data/products";
	import { data } from "../../../data/data";

    let showModal = false
    let selectedProduct:productT = {} as productT;
    function showProduct(e: CustomEvent){
        selectedProduct = e.detail;
        showModal = true;
    }
</script>
<div class="w-full px-2 py-4">
    <div class='flex flex-col items-center justify-center'>
      <a 
      href="/#"
      class="text-2xl uppercase font-bold">
        Pinky Dreams
      </a>
    </div>
        {#each allCategories as category}
            <div class="p-4">
                <div class="divider divider-start text-xl font-bold uppercase">{category.title}</div>
                <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3"> 
                    {#each category.products as product, index}
                        <div id="item{index+1}" class="carousel-item w-full flex justify-center">
                            <Product {product} on:showProduct={showProduct}/>
                        </div>
                    {/each}
                </div>
            </div>
          
        {/each}
</div>


{#if showModal}
  <div class="modal modal-open">
    <div class="modal-box px-0 py-0 rounded-xl">
      <div class="modal-header">  
      </div>
      <div class="modal-body">
        <div class="carousel rounded-box w-full">
          {#each selectedProduct.images as image}
          <div class="carousel-item w-full">
            <img
                src={image}
                class="w-full"
                alt="Album" /> 
          </div>
          {/each}
        </div>
          <div class="flex justify-between">
            <div class="w-full p-2">
              <h2 class="text-2xl font-bold">{selectedProduct.title}</h2>
            </div>
          </div>
          <div class="px-2 py-4">
          <span>{@html selectedProduct.description}</span>
          </div>
        <div class="flex items-center justify-between pt-1 gap-1">
          <button class="btn rounded-md w-1/2" on:click={()=>showModal = false}>volver</button>
          <button class="btn btn-primary rounded-md w-1/2" on:click={()=>window.open(data.whatsAppProduct(selectedProduct), "_blank")}>
            <!-- {@html Icons.whatsapp("#63263B")} -->
            Pedir 
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}