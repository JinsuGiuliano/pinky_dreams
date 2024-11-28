<script>
	import { data } from '../data/data.js';
	import Empresa from './Empresa.svelte';
</script>

<div id="participantes" class=" flex flex-col justify-center items-center w-full">
	<div>
		<div class="w-full p-3 text-center">
			<h2 class="text-3xl font-thin">ORGANIZADOR</h2>
		</div>

		<div class="w-full flex flex-row justify-center items-center py-3">
			<Empresa data={data.organizador} />
		</div>
	</div>
	{#if data.patrocinador.length}
		<div>
			<div class="divider" />

			<div class="p-3 text-center">
				<h2 class="text-3xl font-thin">PATROCINADORES OFICIALES ({data.patrocinador.length})</h2>
			</div>

			<div class="w-full flex items-center justify-center">
				<div class="w-screen carousel carousel-end rounded-box py-3">
					<div class="carousel-item">
						{#each data.patrocinador as exp}
							<Empresa data={exp} />
						{/each}
					</div>
				</div>
			</div>
		</div>
	{/if}
	{#if data.apoyan.length}
		<div>
			<div class="divider" />

			<div class="p-3 text-center">
				<h2 class="text-3xl font-thin">APOYAN ({data.apoyan.length})</h2>
			</div>

			<div class="w-full">
				<div class="w-screen carousel carousel-end rounded-box py-3">
					<div class="carousel-item">
						{#each data.apoyan as exp}
							<Empresa data={exp} />
						{/each}
					</div>
				</div>
			</div>
		</div>
	{/if}
	{#if data.especial.length}
		<div>
			<div class="divider" />

			<div class="p-3 text-center">
				<h2 class="text-3xl font-thin">PARTICIPACIÓN ESPECIAL ({data.especial.length})</h2>
			</div>

			<div class="w-full">
				<div class="w-screen carousel carousel-end rounded-box py-3">
					<div class="carousel-item">
						{#each data.especial as exp}
							<Empresa data={exp} />
						{/each}
					</div>
				</div>
			</div>
		</div>
	{/if}
	{#if data.hoteles.length}
		<div id="hoteles">
			<div class="divider" />

			<div class="p-3 text-center">
				<h2 class="text-md font-thin">Hoteles con tarifas especiales para participantes ({data.hoteles.length})</h2>
			</div>

			<div class="w-full">
				<div class="w-screen carousel carousel-end rounded-box py-3">
					<div class="carousel-item">
						{#each data.hoteles as hotel}
							<Empresa data={hotel} />
						{/each}
					</div>
				</div>
			</div>
		</div>
	{/if}
	{#if data.ruedaNegocio.length}
		<div>
			<div class="divider" />

			<div class="p-3 text-center">
				<h2 class="text-3xl font-thin">RUEDA DE NEGOCIOS ({data.ruedaNegocio.length})</h2>
			</div>

			<div class="w-full">
				<div class="w-screen carousel carousel-end rounded-box py-3 ">
					<div class="carousel-item">
						{#each data.ruedaNegocio as exp}
							<Empresa data={exp} />
						{/each}
					</div>
				</div>
			</div>
		</div>
	{/if}
	{#if data.mediaPartners.length}
		<div>
			<div class="divider" />

			<div class="p-3 text-center">
				<h2 class="text-3xl font-thin">MEDIA PARTNERTS ({data.mediaPartners.length})</h2>
			</div>

			<div class="w-full">
				<div class="w-screen carousel carousel-end rounded-box py-3">
					<div class="carousel-item">
						{#each data.mediaPartners as exp}
							<Empresa data={exp} />
						{/each}
					</div>
				</div>
			</div>
		</div>
	{/if}
	{#if data.conferencias.length}
		<div>
			<div class="divider" />

			<div class="p-3 text-center">
				<h2 class="text-3xl font-thin">CONFERENCIAS ({data.conferencias.length})</h2>
			</div>

			<div class="w-10/12">
				<div class="w-screen carousel carousel-center rounded-box py-3">
					<div class="carousel-item">
						{#each data.conferencias as exp}
							<Empresa data={exp} />
						{/each}
					</div>
				</div>
			</div>
		</div>
	{/if}
	{#if data.expositores.length}
		<div>
			<div class="divider" />

			<div class="p-3 text-center">
				<h2 class="text-3xl font-thin">EXPOSITORES ({data.expositores.length})</h2>
			</div>

			<div class="w-10/12">
				<div class="w-screen carousel carousel-center rounded-box py-3">
					<div class="carousel-item">
						{#each data.expositores as exp}
							<Empresa data={exp} />
						{/each}
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.carousel {
		-ms-overflow-style: none;
		scrollbar-width: 2px !important;
	}
	.carousel::-webkit-scrollbar {
		display: block !important;
	}
</style>
