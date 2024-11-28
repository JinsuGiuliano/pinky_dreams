<script>
	import { noticias } from '../data/data';
</script>

<div
	id="noticias"
	class="flex flex-col items-center justify-center p-4 w-full "
>
	<div class="py-12 text-center">
		<h2
			class="text-3xl lg:text-5xl font-bold text-secondary text-transparent bg-clip-text bg-gradient-to-r from-[#0F3363] to-[#F3B6B5]"
		>
			BLOG DE NOTICIAS
		</h2>
		<span>(Deslice para ver más)</span>
	</div>
	<div class="flex flex-row w-full lg:overflow-scroll overflow-auto ">
		{#each noticias.reverse() as item}
		{#if item.type && item.type == 'instagram'}
			{@html item.img}
		{:else}
			<div
				class="carousel-item bg-white flex flex-col justify-between w-10/12 lg:w-4/12 shadow-lg rounded-2xl border-gray border-solid border-2 mx-4 lg:mx-10"
			>
				<div class="rounded-xl p-4">
					<div
						class="h-56 w-full"
						style="background-image: url({item.img});background-size: cover;"
					/>
					<div class="p-1">
						<span class="font-bold text-center text-md lg:text-lg py-1">{item.title}</span>
						<br /><br />
						<div class="h-[200px] overflow-y-auto">
							<span class="font-light text-sm py-1">{item.text}</span>
							<br /><br />
						</div>

						<span class="font-light lg:text-sm py-1">{item.author}, {item.date}</span>
					</div>
				</div>
				<button class="btn glass" on:click={() => (window.location.href = item.url)}>
					ver noticia
				</button>
			</div>
			{/if}
		{/each}
	</div>
</div>

<div id="galeria" class="lg:min-h-max w-full flex flex-col justify-center items-center m-0 p-8">
	<div
		class="rounded-3xl flex flex-col justify-center items-start bg-gradient-to-b lg:bg-gradient-to-r from-[#0F3363] via-[#F3B6B5] to-transparent w-full lg:w-10/12"
	>
		<div class="lg:relative flex flex-col lg:flex-row justify-between items-center w-full">
			<div class="w-full lg:w-1/2 p-8 lg:p-15 h-full">
				<h2 class="text-4xl lg:text-5xl font-bold text-white py-4">BAÚL DE LOS RECUERDOS</h2>
				<p class="text-base lg:text-lg font-semibold text-white py-4">
					Te invitamos a echar un vistazo a nuestra galería, donde encontrarás nuestros mejores
					recuerdos de ediciones anteriores de la EXPO PARAGUAY BRASIL.
				</p>
				<a
					href="https://www.flickr.com/photos/camaradecomercioparaguaybrasil/"
					target="_blank"
					class="btn bg-white text-primary text-lg py-2">IR A GALERÍA</a
				>
			</div>
			<div
				class="lg:absolute lg:right-0 w-full lg:w-1/2 h-[450px]"
				style="background-image: url(/images/COFRE.png);background-size:cover;background-repeat: no-repeat;background-position:left;"
			/>
		</div>
	</div>
</div>
