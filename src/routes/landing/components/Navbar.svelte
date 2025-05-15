<script>
	import { goto } from "$app/navigation";

	import { Icons } from "$lib/icons/icons";
	import { data } from "../../../data/data";
	import { createEventDispatcher } from "svelte";
	
	export let isCourse = false
	export let isProduct = false
 
	let dispatch = createEventDispatcher();

	function logout(){
		dispatch('logout')
	}
	// make this function logout

</script>
<div class="navbar bg-base-100 fixed top-0 z-40 ">
	<div class="navbar-start">
	  <div class="dropdown">
		<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
		  <svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor">
			<path
			  stroke-linecap="round"
			  stroke-linejoin="round"
			  stroke-width="2"
			  d="M4 6h16M4 12h8m-8 6h16" />
		  </svg>
		</div>
	  </div>
	  <a class="btn btn-ghost text-xl" href="/">Pinky Dreams <span class="font-thin">{isProduct?"Insumos":"Studio"}</span></a>
	</div>
	
	{#if !isCourse}
		<div class="navbar-end">
		<div class="btn fixed bottom-2 lg:bottom-none lg:top-2 shadow-md" 
		on:keypress
		on:click={()=>{
			goto(data.whatsappLink)
		  }}
		>
			{@html Icons.whatsapp("#63263B")}
			Quiero Inscribirme 
		</div>
		</div>
	{:else}
	<div class="navbar-end">
		<div class="btn fixed bottom-2 lg:bottom-none lg:top-2 shadow-md" 
		on:keypress
		on:click={logout}
		>
			{@html Icons.logout()}
			Salir 
		</div>
		</div>
	{/if}
  </div>