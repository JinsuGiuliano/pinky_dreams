<script>
	import { areas } from '../data/data';
</script>

<div class=" flex flex-col justify-center items-center p-3 w-full pb-20">
	<h2
		class="text-3xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0F3363] to-[#F3B6B5] pt-8"
	>
		Patrocinadores Oficiales
	</h2>
	<div class=" flex flex-col lg:flex-row justify-start lg:justify-center items-center w-full">
		<div class=" flex justify-center p-1 w-full lg:w-1/3">
			<img
				alt=""
				src="/images/empresas/itaipubinacional.png"
				class="w-[80%] h-[80%] drop-shadow-lg"
			/>
		</div>
		<div class=" flex justify-center p-1 lg:hidden">
			<img
				alt=""
				src="/images/empresas/patrocinadorOficialVert.png"
				class="w-full h-full drop-shadow-lg"
			/>
		</div>
		<div class="justify-center p-1 hidden lg:flex w-full lg:w-1/3">
			<img
				alt=""
				src="/images/empresas/patrocinadorOficial.png"
				class="w-full h-full drop-shadow-lg"
			/>
		</div>
		<div class=" flex justify-center p-1 w-full lg:w-1/3">
			<img
				alt=""
				src="/images/empresas/Logotipo-Embajada-del-Brasil-2016.png"
				class="w-[25%] h-[25%] drop-shadow-lg"
			/>
		</div>
	</div>
</div>
<div id="areas" class="flex flex-col items-center justify-center">
	<div class="text-center">
		<h2
			class="text-3xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0F3363] to-[#F3B6B5]"
		>
			Áreas de la Expo
		</h2>
		<span>(Seleccione un Area para ver más información)</span>
	</div>
	<div class="lg:hidden block">
		<div
			class="lg:hidden flex carousel carousel-end rounded-box w-full h-[300px] lg:w-10/12 lg:h-96"
		>
			{#each areas as area}
				<dialog id="area_modal_{area.name}" class="modal modal-bottom sm:modal-middle">
					<form method="dialog" class="modal-box bg-opacity-90 {area.bg}">
						<h3 class="font-bold text-lg text-center text-white">{area.name}</h3>
						<p class="py-4 font-thin text-start text-white">{area.text}</p>
						<div class="modal-action">
							<!-- if there is a button in form, it will close the modal -->
							<button class="btn">Cerrar</button>
						</div>
					</form>
				</dialog>
				<div
					class="carousel-item w-8/12 lg:w-4/12 m-4 rounded-lg flex flex-col justify-center items-center hover:cursor-pointer"
					on:click={() => window[`area_modal_${area.name}`].showModal()}
					on:keypress
					style="background-image: url({area.img});background-size: cover;"
				>
					<div
						class="flex flex-col rounded-lg justify-center items-center p-4b bg-opacity-60 {area.bg} w-full h-full"
					>
						<img src={area.url} alt="Rueda de Negocios" class="w-6/12" />
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="hidden lg:flex flex-row rounded-box w-full h-[300px] lg:w-10/12 lg:h-96">
		{#each areas as area, i}
			{#if i > -1 && i < 3}
				<dialog id="area_modal_lg_{area.name}" class="modal modal-bottom sm:modal-middle">
					<form method="dialog" class="modal-box bg-opacity-90 {area.bg}">
						<h3 class="font-bold text-lg text-center text-white">{area.name}</h3>
						<p class="py-4 font-thin text-start text-white">{area.text}</p>
						<div class="modal-action">
							<!-- if there is a button in form, it will close the modal -->
							<button class="btn">Cerrar</button>
						</div>
					</form>
				</dialog>
				<div
					class="w-8/12 lg:w-4/12 m-4 rounded-lg flex flex-col justify-center items-center hover:cursor-pointer"
					on:click={() => window[`area_modal_lg_${area.name}`].showModal()}
					on:keypress
					style="background-image: url({area.img});background-size: cover;"
				>
					<div
						class="flex flex-col rounded-lg justify-center items-center p-4b bg-opacity-60 {area.bg} w-full h-full"
					>
						<img src={area.url} alt="Rueda de Negocios" class="w-6/12" />
					</div>
				</div>
			{/if}
		{/each}
	</div>
	<div class="hidden lg:flex flex-row rounded-box w-full h-[300px] lg:w-10/12 lg:h-96">
		{#each areas as area, i}
			{#if i > 2 && i < 7}
				<dialog id="area_modal_lg_{area.name}" class="modal modal-bottom sm:modal-middle">
					<form method="dialog" class="modal-box bg-opacity-90 {area.bg}">
						<h3 class="font-bold text-lg text-center text-white">{area.name}</h3>
						<p class="py-4 font-thin text-start text-white">{area.text}</p>
						<div class="modal-action">
							<!-- if there is a button in form, it will close the modal -->
							<button class="btn">Cerrar</button>
						</div>
					</form>
				</dialog>
				<div
					class="w-8/12 lg:w-4/12 m-4 rounded-lg flex flex-col justify-center items-center hover:cursor-pointer"
					on:click={() => window[`area_modal_lg_${area.name}`].showModal()}
					on:keypress
					style="background-image: url({area.img});background-size: cover;"
				>
					<div
						class="flex flex-col rounded-lg justify-center items-center p-4b bg-opacity-60 {area.bg} w-full h-full"
					>
						<img src={area.url} alt="Rueda de Negocios" class="w-6/12" />
					</div>
				</div>
			{/if}
		{/each}
	</div>
	<div class="hidden lg:flex flex-row rounded-box justify-center w-10/12 p-2">
		<button
			class="btn glass text-white w-full mt-2 mx-1 lg:w-1/3 text-md font-light hover:border-2 hover:border-gray-700 hover:border-solid hover:shadow hover:cursor-pointer bg-gradient-to-r from-[#0F3363] to-[#F3B6B5]"
			on:click={() =>
				window.open(
					'https://drive.google.com/file/d/15swGMO5ZpzMZD6xS8G1fkDUwC0KT25ev/view?usp=sharing',
					'_blank' // <- This is what makes it open in a new window.
				)}
			on:keypress
		>
			PLANIMETRÍA DE LA EXPO <svg
				class="h-8 w-8 text-white"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
				<line x1="8" y1="2" x2="8" y2="18" /> <line x1="16" y1="6" x2="16" y2="22" /></svg
			>
		</button>
		<button
			class="btn glass text-white w-full mt-2 mx-1 lg:w-1/3 text-md font-light hover:border-2 hover:border-gray-700 hover:border-solid hover:shadow hover:cursor-pointer bg-gradient-to-r from-[#0F3363] to-[#F3B6B5]"
			on:click={() =>
				window.open(
					'https://drive.google.com/file/d/12wbtmUzRk8lD22M0iZ8jB_eoyQOv4aFY/view?usp=sharing',
					'_blank' // <- This is what makes it open in a new window.
				)}
			on:keypress
		>
			Descargar Programa Oficial en Español
		</button>
		<button
			class="btn glass text-white w-full mt-2 mx-1 lg:w-1/3 text-md font-light hover:border-2 hover:border-gray-700 hover:border-solid hover:shadow hover:cursor-pointer bg-gradient-to-r from-[#0F3363] to-[#F3B6B5]"
			on:click={() =>
				window.open(
					'https://drive.google.com/file/d/1BDLtQ0gsHLepCz5bltXmy6lglsy7ZNV7/view?usp=sharing',
					'_blank' // <- This is what makes it open in a new window.
				)}
			on:keypress
		>
			Baixar Programa Oficial em Português
		</button>
	</div>
	<div class="flex lg:hidden flex-col rounded-box justify-center w-full p-2">
		<button
			class="btn glass text-white w-full mt-2 mx-1 lg:w-1/3 text-md font-light hover:border-2 hover:border-gray-700 hover:border-solid hover:shadow hover:cursor-pointer bg-gradient-to-r from-[#0F3363] to-[#F3B6B5]"
			on:click={() =>
				window.open(
					'https://drive.google.com/file/d/15swGMO5ZpzMZD6xS8G1fkDUwC0KT25ev/view?usp=sharing',
					'_blank' // <- This is what makes it open in a new window.
				)}
			on:keypress
		>
			PLANIMETRÍA DE LA EXPO <svg
				class="h-8 w-8 text-white"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
				<line x1="8" y1="2" x2="8" y2="18" /> <line x1="16" y1="6" x2="16" y2="22" /></svg
			>
		</button>
		<button
			class="btn glass text-white w-full mt-2 mx-1 lg:w-1/3 text-md font-light hover:border-2 hover:border-gray-700 hover:border-solid hover:shadow hover:cursor-pointer bg-gradient-to-r from-[#0F3363] to-[#F3B6B5]"
			on:click={() =>
				window.open(
					'https://drive.google.com/file/d/12wbtmUzRk8lD22M0iZ8jB_eoyQOv4aFY/view?usp=sharing',
					'_blank' // <- This is what makes it open in a new window.
				)}
			on:keypress
		>
			Descargar Programa Oficial en Español
		</button>
		<button
			class="btn glass text-white w-full mt-2 mx-1 lg:w-1/3 text-md font-light hover:border-2 hover:border-gray-700 hover:border-solid hover:shadow hover:cursor-pointer bg-gradient-to-r from-[#0F3363] to-[#F3B6B5]"
			on:click={() =>
				window.open(
					'https://drive.google.com/file/d/1BDLtQ0gsHLepCz5bltXmy6lglsy7ZNV7/view?usp=sharing',
					'_blank' // <- This is what makes it open in a new window.
				)}
			on:keypress
		>
			Baixar Programa Oficial em Português
		</button>
	</div>
</div>

<style>
	.carousel {
		display: inline-flex;
		overflow-x: scroll;
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;
		-ms-overflow-style: none;
		scrollbar-width: 2px !important;
	}
	.carousel::-webkit-scrollbar {
		display: block !important;
	}
</style>
