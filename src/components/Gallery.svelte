<script>
	// @ts-nocheck
	import { data, gallery } from '../data/data.js';
	import Empresa from './Empresa.svelte';
	import Hotel from './Hotel.svelte';


	let not = [""]
	let main = ["patrocinadores", "apoyo especial", "organizador","hoteles"]
</script>

	<div class="w-full flex flex-col justify-center items-center m-0 p-8">
		{#if data }
			{#if Object.values(data).length}
				{#each  Object.values(data) as item}
					{#if item && !not.includes(item.title)  && item.images.length}
						<div class="pt-12  w-full
						{!main.includes(item.title)?"text-start":"text-start lg:text-center"}"
						>
							<span
								class="text-lg uppercase lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0F3363] to-[#F3B6B5]"
							>
							{item.title == "hoteles"? item.subtitle: item.title}
							</span>
						</div>
							{#if item.title != "hoteles"}
								<div class="w-full flex 
								{main.includes(item.title)?"gap-1 justify-start lg:justify-center":"grid grid-cols-4 lg:grid-cols-10 grid-flow-row gap-2" }  
								rounded-lg py-3 ">

								
									{#each item.images as d}
										<div class="carousel-item">
											<Empresa data={d} 
											isMain={main.includes(item.title)}
											/>
										</div>
									{/each}
							

								</div> 
							{:else}				
									<div class="w-full flex flex-col-4 carousel">
										{#each item.images as hot}
										<div class="carousel-item">
												<Hotel data={hot} />
											</div>
										{/each}
									</div>
							{/if}
						<div class="divider"/>
					{/if}
				
				{/each}
			{/if}
		{/if}

		<!-- {#if data.hoteles}
				<div id="hoteles" class="w-full y-40">
					<div class="p text-center">
						<span
						class="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0F3363] to-[#F3B6B5]"
					>
						Hoteles con tarifas especiales para participantes
						</span>
					</div>
					<div class="w-full flex 
					{main.includes(data.hoteles.title)?"justify-center":"lg:overflow-scroll overflow-x-auto"}  
					rounded-box py-1">
					
					</div>
				</div>
		{/if} -->
	</div>


