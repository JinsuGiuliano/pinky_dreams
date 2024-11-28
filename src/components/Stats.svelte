<div class=" flex flex-col lg:justify-center items-center">
	<div class="chat chat-end w-full lg:w-1/2">
		<div class="chat-bubble chat-bubble-secondary text-gray-200 w-full text-4xl font-thin p-5">
			El mayor evento comercial entre Paraguay y Brasil
		</div>
	</div>
	<div class="chat chat-start w-full lg:w-1/2">
		<div class="chat-bubble chat-bubble-primary text-white w-full text-4xl font-thin p-5">
			El 2do mayor evento <strong>Internacional de Negocios de Paraguay</strong>
		</div>
	</div>
	<div class="chat chat-end w-full lg:w-1/2">
		<div class="chat-bubble chat-bubble-info text-gray-200 w-full text-4xl font-thin p-5">
			Uno de los <strong>Mayores Eventos de Negocios de Paraguay</strong>
		</div>
	</div>

	<!-- <div class="stats w-full lg:w-8/12 m-24">
		<div class="stat place-items-center">
			<div class="stat-title text-lg">Conferencias</div>
			<div class="stat-value text-4xl">+190</div>
			<div class="stat-desc text-md">Nivel Internacional</div>
		</div>

		<div class="stat place-items-center">
			<div class="stat-title text-sky-900">Visitantes</div>
			<div class="stat-value text-info">18.500</div>
			<div class="stat-desc text-info">de Brasil y Paraguay</div>
		</div>

		<div class="stat place-items-center">
			<div class="stat-title">Empresas</div>
			<div class="stat-value">+ 3500</div>
			<div class="stat-desc">en las Ruedas de Negocios</div>
		</div>
	</div> -->

	<div class="flex justify-center w-full lg:w-8/12 lg:my-12">
		<button
			class="btn bg-primary text-base text-white hover:bg-blue-400 w-10/12 lg:w-4/12"
			onclick="video_presentacion.showModal()"
		>
			Video Presentación <img src="/images/icons/video.png" class="w-8" /></button
		>
		<dialog id="video_presentacion" class="modal">
			<form method="dialog" class="modal-box w-screen">
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/uCr_S2MuOzk"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				/>
				<!-- <video width="800" height="400" controls>
					<source src="https://www.youtube.com/embed/4idVqhvEfFg" type="video/mp4" />
					<source src="movie.ogg" type="video/ogg" />
					Your browser does not support the video tag.
				</video> -->
			</form>
			<form method="dialog" class="modal-backdrop">
				<button>x</button>
			</form>
		</dialog>
	</div>
</div>
