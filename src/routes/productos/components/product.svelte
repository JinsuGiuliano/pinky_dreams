<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import type { productT } from "../../../data/products";
	import { pagos } from "../../../data/data";
 
  let dispatch = createEventDispatcher();

  export let product:productT;
</script>
<div 
  role="button"
  tabindex="0"
  on:keypress
  on:click={()=>{
    dispatch('showProduct', product)
  }}
  class="card card-compact bg-base-100 w-full shadow-xl">
  <div class="carousel rounded-box w-full">
          {#each product.images as image}
          <div class="carousel-item w-full">
            <img
                src={image}
                class="w-full"
                alt="Album" />
          </div>
          {/each}
  </div>
  
    <div class="card-body">
      <h2 class="card-title">{product.title}</h2>
      <p class="text-2xl font-bold">${product.price}</p>
      <p class="truncate">{@html product.description}</p>
      <p class="text-md font-thin">Stock: {product.stock}</p>
      <p class="text-md font-thin px-2 py-1 bg-pink-600 text-purple-100 w-fit rounded-md uppercase">{product.category}</p>
      {@html pagos.botonLinkPago}
    </div>
  </div>