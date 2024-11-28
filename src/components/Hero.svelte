<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import CountDown from './CountDown.svelte';
	import SocialLinks from './socialLinks.svelte';

	let carouselElement; // carouselElement has to hold the HTMLElement of the carousel

	onMount(() => {
		var w = window.innerWidth;
		console.log('width:', w);
		if (w > 600) {
			window.scroll({
				top: 160,
				left: 0,
				behavior: 'smooth'
			});
		}
	});

	function scrollCarousel(targetImageNumber) {
		let carouselWidth = carouselElement.clientWidth;
		console.log('cosas');
		// Images are numbered from 1 to 4 so thats why we substract 1
		let targetImage = targetImageNumber - 1;

		let targetXPixel = carouselWidth * targetImage + 1;

		carouselElement.scrollTo(targetXPixel, 0);
	}
</script>

<div class="relative w-full snap-center mb-10">
	<div class="carousel snap-center w-full lg:h-[900px]">
		<div id="slide1" class="carousel-item snap-none relative w-full h-[400px] lg:h-full">
			<div class="hero h-full">
				<div class="flex flex-col items-center justify-start lg:justify-center w-full h-full">
					<div
				class="hidden lg:flex hero min-h-full bg-base-200 place-items-start lg:place-items-center"
				style="background-image: url(/images/expoSdt2024.webp);background-size:cover;background-repeat: no-repeat;background-position:cover"	>
						<!-- <div
							class="w-full h-[600px] hidden lg:block"
							style="background-image: url(/images/expoSdt2024.webp);background-size:contain;background-repeat: no-repeat;background-position:center"
						/> -->
					</div>
				</div>
				<div
				class="flex lg:hidden hero min-h-full bg-base-200 place-items-start lg:place-items-center"
				style="background-image: url(/images/expoSdt2024_1x1.webp);background-size:cover;background-repeat: no-repeat;background-position:cover"			>
						<!-- <div
							class="w-full h-[600px] hidden lg:block"
							style="background-image: url(/images/expoSdt2024.webp);background-size:contain;background-repeat: no-repeat;background-position:center"
						/> -->
					</div>
				
				<div
					class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
				>
					<a
						href="#slide7"
						on:change={() => scrollCarousel(6)}
						class="hidden lg:flex btn text-white text-3xl bg-transparent border-none">❮</a
					>
					<a
						href="#slide2"
						on:change={() => scrollCarousel(2)}
						class="hidden lg:flex btn text-white text-3xl bg-transparent border-none">❯</a
					>
				</div>
			</div>
		</div>
		<div id="slide2" class="carousel-item snap-none relative w-full h-[400px] lg:h-full">
			<div
				class="hero min-h-full bg-base-200 place-items-start lg:place-items-center"
				style="background-image: url(/images/gallery/galeria2.jpg);"
			>
				<div class="hero-overlay bg-opacity-60 bg-gradient-to-r from-blue-500 ..." />
				<div class="hero-content flex-col lg:flex-row-reverse items-center justify-end w-full">
					<div class="w-4/12 flex flex-row justify-end items-center">
						<img
							src="/images/icons/RUEDA_DE_NEGOCIOS.svg"
							class="w-full lg:max-w-sm rounded-lg"
							alt=""
						/>
					</div>
					<div class="flex flex-col items-center lg:items-start justify-between w-10/12 lg:w-6/12">
						<h1
							class="text-center lg:text-start text-lg lg:text-4xl font-semibbold text-white p-3 w-full"
						>
							Un espacio dedicado a generar oportunidades de negocio
						</h1>
						<!-- <button class="btn bg-white text-blue w-10/12">INSCRIBIRME</button> -->
					</div>
				</div>
			</div>
			<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				<a
					href="#slide1"
					class="hidden lg:flex bg-opacity-40 btn text-white text-3xl bg-transparent border-none"
					>❮</a
				>
				<a
					href="#slide3"
					class="hidden lg:flex bg-opacity-40 btn text-white text-3xl bg-transparent border-none"
					>❯</a
				>
			</div>
		</div>
		<div id="slide3" class="carousel-item snap-none relative w-full h-[400px] lg:h-full">
			<div
				class="hero min-h-full bg-base-200 place-items-start lg:place-items-center"
				style="background-image: url(/images/gallery/galeria15.jpg);"
			>
				<div class="hero-overlay bg-opacity-60 bg-gradient-to-r from-purple-500 ..." />
				<div class="hero-content flex-col lg:flex-row-reverse items-center justify-end w-full">
					<div class="w-4/12 flex flex-row justify-end items-center">
						<img
							src="/images/icons/EXPOSICIONES.svg"
							class="w-full lg:max-w-sm rounded-lg"
							alt=""
						/>
					</div>
					<div class="flex flex-col items-center lg:items-start justify-between w-10/12 lg:w-6/12">
						<h1
							class="text-center lg:text-start text-lg lg:text-4xl font-semibbold text-white p-3 w-full"
						>
							Un espacio ideal para divulgar los productos y servicios a los visitantes
						</h1>
						<button class="btn bg-white text-blue w-10/12 my-2">Cómo participar</button>
						<button class="btn bg-white text-blue w-10/12 my-2">Expositores confirmados</button>
					</div>
				</div>
			</div>
			<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				<a href="#slide2" class="hidden lg:flex btn text-white text-3xl bg-transparent border-none"
					>❮</a
				>
				<a href="#slide4" class="hidden lg:flex btn text-white text-3xl bg-transparent border-none"
					>❯</a
				>
			</div>
		</div>

		<div id="slide4" class="carousel-item snap-none relative w-full h-[400px] lg:h-full">
			<div
				class="hero min-h-full bg-base-200 place-items-start lg:place-items-center"
				style="background-image: url(/images/gallery/galeria5.jpg);"
			>
				<div class="hero-overlay bg-opacity-60 bg-gradient-to-r from-green-500 ..." />
				<div class="hero-content flex-col lg:flex-row-reverse items-center justify-end w-full">
					<div class="w-4/12 flex flex-row justify-end items-center">
						<img
							src="/images/icons/CONFERENCIAS.svg"
							class="w-full lg:max-w-sm rounded-lg"
							alt=""
						/>
					</div>
					<div class="flex flex-col items-center lg:items-start justify-between w-10/12 lg:w-6/12">
						<h1
							class="text-center lg:text-start text-lg lg:text-4xl font-semibbold text-white p-3 w-full"
						>
							Programa de conferencias nacionales e internacionales de oportunidades de negocios
						</h1>
						<button class="btn bg-white text-blue w-10/12 my-2">PROGRAMA OFICIAL</button>
						<!-- <button class="btn bg-white text-blue w-10/12 my-2">INCRIPCIÓN</button> -->
					</div>
				</div>
			</div>
			<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				<a href="#slide3" class="hidden lg:flex btn text-white text-3xl bg-transparent border-none"
					>❮</a
				>
				<a href="#slide5" class="hidden lg:flex btn text-white text-3xl bg-transparent border-none"
					>❯</a
				>
			</div>
		</div>
		<div id="slide5" class="carousel-item snap-none relative w-full h-[400px] lg:h-full">
			<div
				class="hero min-h-full bg-base-200 place-items-start lg:place-items-center"
				style="background-image: url(/images/gallery/galeria9.jpg);"
			>
				<div class="hero-overlay bg-opacity-60 bg-gradient-to-r from-red-500 ..." />
				<div class="hero-content flex-col lg:flex-row-reverse items-center justify-end w-full">
					<div class="w-4/12 flex flex-row justify-end items-center">
						<img
							src="/images/icons/INSTITUCIONAL.svg"
							class="w-full lg:max-w-sm rounded-lg"
							alt=""
						/>
					</div>
					<div class="flex flex-col items-center lg:items-start justify-between w-10/12 lg:w-6/12">
						<h1
							class="text-center lg:text-start text-lg lg:text-4xl font-semibbold text-white p-3 w-full"
						>
							Área especialmente pensada para aliados estratégicos nacionales e internacionales
						</h1>
						<button class="btn bg-white text-blue w-10/12"
							>Cómo participar como aliado estratégico</button
						>
					</div>
				</div>
			</div>
			<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				<a href="#slide4" class="hidden lg:flex btn text-white text-3xl bg-transparent border-none"
					>❮</a
				>
				<a href="#slide6" class="hidden lg:flex btn text-white text-3xl bg-transparent border-none"
					>❯</a
				>
			</div>
		</div>
		<div id="slide6" class="carousel-item snap-none relative w-full h-[400px] lg:h-full">
			<div
				class="hero min-h-full bg-base-200 place-items-start lg:place-items-center"
				style="background-image: url(/images/gallery/galeria11.jpg);"
			>
				<div class="hero-overlay bg-opacity-60 bg-gradient-to-r from-orange-500 ..." />
				<div class="hero-content flex-col lg:flex-row-reverse items-center justify-end w-full">
					<div class="w-4/12 flex flex-row justify-end items-center">
						<img src="/images/icons/STARTUPS.svg" class="w-full lg:max-w-sm rounded-lg" alt="" />
					</div>
					<div class="flex flex-col items-center lg:items-start justify-between w-10/12 lg:w-6/12">
						<h1
							class="text-center lg:text-start text-lg lg:text-4xl font-semibbold text-white p-3 w-full"
						>
							Área exclusivamente diseñada para empresas emergentes de diferentes sectores del
							mercado
						</h1>
						<button class="btn bg-white text-blue w-10/12">Cómo ser parte</button>
					</div>
				</div>
			</div>
			<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				<a href="#slide5" class="hidden lg:flex btn text-white text-3xl bg-transparent border-none"
					>❮</a
				>
				<a href="#slide7" class="hidden lg:flex btn text-white text-3xl bg-transparent border-none"
					>❯</a
				>
			</div>
		</div>
		<div id="slide7" class="carousel-item snap-none relative w-full h-[400px] lg:h-full">
			<div
				class="hero min-h-full bg-base-200 place-items-start lg:place-items-center"
				style="background-image: url(/images/gallery/galeria16.jpg);"
			>
				<div class="hero-overlay bg-opacity-60 bg-gradient-to-r from-blue-800 ..." />
				<div class="hero-content flex-col lg:flex-row-reverse items-center justify-end w-full">
					<div class="w-4/12 flex flex-row justify-end items-center">
						<img src="/images/icons/CULTURAL.svg" cclass="w-full lg:max-w-sm rounded-lg" alt="" />
					</div>
					<div class="flex flex-col items-center lg:items-start justify-between w-10/12 lg:w-6/12">
						<h1
							class="text-center lg:text-start text-lg lg:text-4xl font-semibbold text-white p-3 w-full"
						>
							Los visitantes podrán disfrutar de competencias culinarias y exposiciones de artes
						</h1>
						<button class="btn bg-white text-blue w-10/12">Actividades internas y externas</button>
					</div>
				</div>
			</div>
			<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				<a href="#slide6" class="hidden lg:flex btn text-white text-3xl bg-transparent border-none"
					>❮</a
				>
				<a href="#slide1" class="hidden lg:flex btn text-white text-3xl bg-transparent border-none"
					>❯</a
				>
			</div>
		</div>
	</div>
	<div
		class=" fixed z-50 bottom-0  lg:flex-row lg:pt-2 items-center justify-center bg-gradient-to-r from-[#0F3363] to-[#F3B6B5] w-full"
	>
	<CountDown />

	<SocialLinks />
	</div>
		<!-- <div class=" w-9/12 flex-col p-1"> -->
			<!-- <div class="w-full flex flex-row justify-center gap-3 items-start p-2 text-xs">
				<button
					on:click={() =>
						window.open(
							'https://accesosparaguay.com/FBrasil2024',
							'_blank' // <- This is what makes it open in a new window.
						)}
					on:keypress
					class="btn btn-xs lg:btn-md bg-white text-blue w-auto text-[6px] p-[1px] gap-0"
				>
					<svg
						class="h-[18px] w-[18px] lg:h-6 lg:w-6 text-gray-700"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" /> <circle cx="12" cy="12" r="9" />
						<line x1="9" y1="9" x2="9.01" y2="9" /> <line x1="15" y1="9" x2="15.01" y2="9" />
						<path d="M8 13a4 4 0 1 0 8 0m0 0H8" /></svg
					>
					ACREDITACIONES
				</button>
				<button
					on:click={() =>
						window.open(
							'https://forms.gle/eftgP7M7qhaBjz8g8',
							'_blank' // <- This is what makes it open in a new window.
						)}
					on:keypress
					class="btn btn-xs lg:btn-md bg-orange-400 text-white w-auto text-[8px] p-[1px] gap-0 hover:bg-orange-400"
				>
					<img
						src="/images/icons/STARTUPS.png"
						width="35"
						height="35"
						alt=""
						class="bg-orange-400 mr-[3px]"
					/>

					Startups
				</button>
				<button
					on:click={() =>
						window.open(
							'https://forms.gle/A8kpE99rEmjUFj2F7',
							'_blank' // <- This is what makes it open in a new window.
						)}
					on:keypress
					class="btn btn-xs lg:btn-md bg-purple-400 text-white w-auto text-[8px] p-[1px] gap-0 hover:bg-purple-400"
				>
					<img
						src="/images/icons/EXPOSICIONES.png"
						width="35"
						height="35"
						alt=""
						class="bg-purple-400 mr-[3px]"
					/>
					QUERÉS SER EXPOSITOR?
				</button>
					<button
						onclick="rueda_modal.showModal()"
						on:keypress
						class="btn btn-xs lg:btn-md bg-blue-400 text-white w-[26%] text-[8px] p-[1px] gap-0 hover:bg-blue-400"
					>
						<!-- <svg
							class="h-[12px] w-[12px] lg:h-6 lg:w-6 text-gray-700"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
							/>
						</svg> -->
						<!-- <img
							src="/images/icons/RUEDA_DE_NEGOCIOS.png"
							width="35"
							height="35"
							alt=""
							class="bg-blue-400 mr-[3px]"
						/>
						Rueda de Negocios
					</button>
			</div>
			<div class="divider flex font-light bg-transparent text-[12px] text-white w-full p-0 m-0">
				QUIERO PARTICIPAR COMO
			</div>
		</div> -->
	</div>
	<!-- <div
		class="fixed z-50 bottom-0 pb-1 pt-0 lg:hidden flex-col-reverse lg:flex-row items-center justify-center bg-gradient-to-r from-[#0F3363] to-[#F3B6B5] w-full"
	> -->
	<!-- <div class="divider flex font-light bg-transparent text-[8px] text-white p-0 m-0">
		QUIERO PARTICIPAR COMO:
	</div>
		<div class="w-full lg:w-7/12 flex flex-row justify-center items-center p-0 gap-2">
			<button
				on:click={() =>
					window.open(
						'https://accesosparaguay.com/FBrasil2024',
						'_blank' // <- This is what makes it open in a new window.
					)}
				on:keypress
				class="btn btn-xs lg:btn-md bg-white text-blue w-[21%] text-[10px] p-[1px] gap-0"
			>
				ACREDITACIONES
			</button>
			<button
				on:click={() =>
					window.open(
						'https://forms.gle/eftgP7M7qhaBjz8g8',
						'_blank' // <- This is what makes it open in a new window.
					)}
				on:keypress
				class="btn btn-xs lg:btn-md bg-orange-400 text-white w-[21%] text-[10px] p-[1px] gap-0 hover:bg-orange-400"
			>
				Startup
			</button>
			<button
				on:click={() =>
					window.open(
						'https://forms.gle/A8kpE99rEmjUFj2F7',
						'_blank' // <- This is what makes it open in a new window.
					)}
				on:keypress
				class="btn btn-xs lg:btn-md bg-purple-400 text-white w-[21%] text-[10px] p-[1px] gap-0 hover:bg-purple-400"
			>
				QUERÉS SER EXPOSITOR?
			</button>
			<button
				onclick="rueda_modal.showModal()"
				on:keypress
				class="btn btn-xs lg:btn-md bg-blue-400 text-white w-[32%] text-[9px] p-[1px] gap-0 hover:bg-blue-400"
			>
				Rueda de Negocios
			</button>
			
		</div> -->
			<!-- <CountDown isMobile />
			<SocialLinks isMobile /> -->
	<!-- </div> -->
<!-- </div> -->
<!-- <dialog id="pronto_link" class="modal modal-bottom sm:modal-middle">
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
	<form method="dialog" class="modal-box bg-opacity-90">
		<h3 class="font-bold text-lg text-center">
			Bienvenido a la Expo &#x1F1F5;&#x1F1FE; &#x1F1E7;&#x1F1F7; 2023!
		</h3>
		<p class="py-4 font-thin text-center">Elige el tipo de inscripción que deseas realizar:</p>
		<div class="w-full flex flex-col items-center justify-center">
			<button
				on:click={() =>
					window.open(
						'https://forms.gle/2evVcVBHXrSadd597',
						'_blank' // <- This is what makes it open in a new window.
					)}
				on:keypress
				class="btn btn-sm lg:btn-lg bg-white text-blue w-10/12 m-1"
				>QUIERO VISITAR LA EXPO <svg
					class="h-6 w-6 text-gray-700"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" /> <circle cx="12" cy="12" r="9" />
					<line x1="9" y1="9" x2="9.01" y2="9" /> <line x1="15" y1="9" x2="15.01" y2="9" />
					<path d="M8 13a4 4 0 1 0 8 0m0 0H8" /></svg
				></button
			>
			<button
				on:click={() =>
					window.open(
						'https://forms.gle/otfmZJDs9hVwCLfb6',
						'_blank' // <- This is what makes it open in a new window.
					)}
				on:keypress
				class="btn btn-sm lg:btn-lg bg-white text-blue w-10/12 m-1"
				>TENGO UNA STARTUP <svg
					class="h-6 w-6 text-gray-700"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" />
					<path
						d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"
					/> <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" /> <circle cx="15" cy="9" r="1" /></svg
				></button
			>
			<button
				on:click={() =>
					window.open(
						'https://forms.gle/2MjPevQCdwKPHLSk6',
						'_blank' // <- This is what makes it open in a new window.
					)}
				on:keypress
				class="btn btn-sm lg:btn-lg bg-white text-blue w-10/12 m-1"
				>QUIERO SER EXPOSITOR <svg
					class="h-6 w-6 text-gray-700"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" />
					<rect x="3" y="4" width="18" height="12" rx="1" /> <line x1="7" y1="20" x2="17" y2="20" />
					<line x1="9" y1="16" x2="9" y2="20" /> <line x1="15" y1="16" x2="15" y2="20" /></svg
				></button
			>
			<button
				onclick="rueda_modal.showModal()"
				on:keypress
				class="btn btn-sm lg:btn-lg bg-white text-blue w-10/12 m-1"
				>RUEDA DE NEGOCIOS <svg
					class="h-6 w-6 text-gray-700"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
					/>
				</svg></button
			>
		</div>
	</form>
</dialog> -->

<dialog id="rueda_modal" class="modal modal-bottom sm:modal-middle">
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
	<form method="dialog" class="modal-box bg-opacity-90">
		<h3 class="font-bold text-lg text-center">
			Inscripción a la Rueda de Negocios Expo Py Br 2024
		</h3>
		<p class="py-4 font-thin text-center">Elige el tipo de inscripción que deseas realizar:</p>
		<div class="w-full flex flex-col items-center justify-center">
			<button
				on:click={() =>
					window.open(
						'https://ruedaexpoparaguaybrasil2024.koyag.com/signinups/formulario-de-inscripcion/register',
						'_blank' // <- This is what makes it open in a new window.
					)}
				on:keypress
				class="btn btn-sm lg:btn-lg bg-white text-blue w-10/12 m-1"
				>EMPRESA PARAGUAYA &#x1F1F5;&#x1F1FE;</button
			>
			<button
				on:click={() =>
					window.open(
						'https://ruedaexpoparaguaybrasil2024.koyag.com/signinups/ficha-de-inscricao/register',
						'_blank' // <- This is what makes it open in a new window.
					)}
				on:keypress
				class="btn btn-sm lg:btn-lg bg-white text-blue w-10/12 m-1"
				>EMPRESA BRASILERA &#x1F1E7;&#x1F1F7;</button
			>
			{#if false}
			<button
				on:click={() =>
					window.open(
						'https://ruedaexpoparaguaybrasil2023.koyag.com/signinups/formulario-de-inscripcion-internacionales/register',
						'_blank' // <- This is what makes it open in a new window.
					)}
				on:keypress
				class="btn btn-sm lg:btn-lg bg-white text-blue w-10/12 m-1"
				>EMPRESA OTROS PAISES &#x1F5FA;</button
			>
			{/if}
		</div>
	</form>
</dialog>
