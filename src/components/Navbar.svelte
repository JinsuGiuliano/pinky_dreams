<script>
// @ts-nocheck

	import BannerGol from './bannerGol.svelte';
	import jQuery from 'jquery';

	const close = () => {
		jQuery('#close_button').click();
	};
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-label-has-associated-control -->
<!-- svelte-ignore a11y-missing-attribute -->
<div class="navbar bg-white sticky top-0 z-40 p-0 shadow-lg">
	<div class=" lex-none lg:hidden bg-white">
		<button class="hidden btn bg-white p-1 border-none" on:click={() => window.menu_mobile.showModal()}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-6 h-6 stroke-current bg-white"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/></svg
			>
		</button>
	</div>
	<div class="flex flex-col justify-center items-center w-full">
		<div class="flex flex-row justify-between items-center w-full">
			<div class="flex navbar w-4/12">
					<img src="/images/logo_expo.png" class="w-full" />
			</div>
			<div
				class="flex justify-center items-center w-8/12 hover:cursor-pointer"
				on:click={() =>
					window.open(
						'https://goo.gl/maps/9k3d5RVJWabEy32T7',
						'_blank' // <- This is what makes it open in a new window.
					)}
				on:keypress
			>
					<img alt="" src="/images/date.png" class="w-10/12 object-contain drop-shadow-lg" />
				<!-- <CountDown /> -->
			</div>
			<div class="navbar-end w-4/12 flex-col  justify-start items-start lg:flex">
					<span class="hidden lg:flex text-slate-800 font-thin">Un evento organizado por:</span>
					<img src="/images/camaracomercio01.png" class="w-10/12" />
			</div>
		</div>
		<!-- <div class="hidden navbar-start overflow-auto lg:overscroll-none lg:hidden flex-row w-full p-0">
			<ul class="menu menu-horizontal lg:w-full text-lg justify-start p-0 m-0">
				<li class="flex flex-row justify-center items-center w-[12.5%]">
					<a class=" font-thin rounded-none text-center" href="#aliados"> Aliados </a>
				</li>
				<li class="flex flex-row justify-center items-center w-[12.5%]">
					<a class="font-thin rounded-none" href="#areas"> Áreas de la Expo </a>
				</li>
				<li class="flex flex-row justify-center w-[12.5%]">
					<a class="font-thin rounded-none" href="#atracciones"> Atracciones </a>
				</li>
				<li class="flex flex-row justify-center items-center w-[12.5%]">
					<a class="font-thin rounded-none text-md" href="#porque"> Por qué participar? </a>
				</li>

				<li class="flex flex-row justify-center items-center w-[12.5%]">
					<a class="font-thin rounded-none" href="#hoteles"> Hoteles </a>
				</li>
				<li class="flex flex-row justify-center items-center w-[12.5%]">
					<div
						class="font-thin rounded-none"
						on:click={() => window.gol_banner.showModal()}
						on:keypress
					>
						Vuelos
					</div>
				</li>
				<li class="flex flex-row justify-center items-center w-[12.5%]">
					<a class="font-thin rounded-none" href="#noticias"> Noticias </a>
				</li>
				<li class="flex flex-row justify-center items-center w-[12.5%]">
					<a class="font-thin rounded-none" href="#faq"> FAQ </a>
				</li>
			</ul>
		</div> -->
	</div>
</div>

<dialog id="menu_mobile" class="hidden modal modal-bottom sm:modal-middle">
	<!-- <form method="dialog" class="modal-box">
		<div class="modal-action m-0">
			<button id="close_button" class="btn rounded-full">x</button>
		</div>
		<ul class="menu p-4 h-full w-full bg-white">
			<li><img src="/images/logo_expo.png" class="w-full" alt="" /></li>
			<li class="shadow-md rounded-md my-2 items-center justify-center">
				<a class="text-lg font-light" href="#aliados" on:click={close}> Aliados </a>
			</li>
			<li class="shadow-md rounded-md my-2 items-center justify-center">
				<a class="text-lg font-light" href="#areas" on:click={close}> Áreas de la Expo </a>
			</li>
			<li class="shadow-md rounded-md my-2 items-center justify-center">
				<a class="text-lg font-light" href="#atracciones" on:click={close}> Atracciones </a>
			</li>
			<li class="shadow-md rounded-md my-2 items-center justify-center">
				<a class="text-lg font-light" href="#porque" on:click={close}> Por qué participar? </a>
			</li>
			<li class="shadow-md rounded-md my-2 items-center justify-center">
				<a class="text-lg font-light" href="#hoteles" on:click={close}> Hoteles </a>
			</li>
			<li class="shadow-md rounded-md my-2 items-center justify-center">
				<div
					class="text-lg font-light"
					on:click={() => {
						window.gol_banner.showModal();
						close();
					}}
					on:keypress
				>
					Vuelos
				</div>
			</li>
			<li class="shadow-md rounded-md my-2 items-center justify-center">
				<a class="text-lg font-light" href="#noticias" on:click={close}> Noticias </a>
			</li>
			<li class="shadow-md rounded-md my-2 items-center justify-center">
				<a class="text-lg font-light" href="#faq" on:click={close}> FAQ </a>
			</li>
		</ul>
	</form> -->
</dialog>

<dialog id="gol_banner" class="modal w-full modal-bottom sm:modal-middle">
	<form method="dialog" class="modal-box lg:w-full lg:max-w-3xl items-center p-0">
		<!-- <BannerGol /> -->
	</form>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
