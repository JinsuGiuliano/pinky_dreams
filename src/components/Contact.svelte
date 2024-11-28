<div
	class="p-5 flex flex-col-reverse justify-center items-center bg-gradient-to-b lg:bg-gradient-to-r from-[#0F3363] via-primary to-transparent w-full h-full lg:min-h-[500px]"
>
	<div
		class="flex flex-col lg:flex-row items-center justify-around w-full h-10/12 bg-white p-5 rounded-3xl"
	>
		<div class="flex flex-col justify-around items center w-full lg:w-4/12">
			<div class="flex flex-col lg:flex-row items-center justify-center">
				<img src="/images/icons/RUEDA_DE_NEGOCIOS.svg" alt="" class="w-10/12 lg:w-3/12" />
			</div>
			<h1 class="text-center text-4xl font-thin w-full">INSCRIPCIONES</h1>
			<div class="flex flex-col lg:flex-row w-full p-5">
				<div
					onclick="pronto_link.showModal()"
					class="flex flex-row w-full rounded-box place-items-center text-md p-4 text-center bg-secondary text-white cursor-pointer"
				>
					Soy un empresario paraguayo y deseo registrarme para la Rueda de Negocios<br />
					(sujeto a aprobación por parte de la organización)
				</div>
				<div class="divider lg:divider-horizontal">ó</div>
				<div
					onclick="pronto_link.showModal()"
					class="grid flex-grow rounded-box place-items-center p-4 text-md text-center bg-primary text-white cursor-pointer"
				>
					Sou um empresário brasileiro e desejo me registrar na Rodada de Negócios<br />
					(sujeito a aprovação por parte da organização)
				</div>
			</div>
		</div>
		<div
			class="w-full mb-5 lg:m-0 lg:w-6/12 shadow-lg h-96 rounded-3xl"
			style="background-image: url(/images/gallery/galeria2.jpg);background-size: cover;"
		/>
	</div>
</div>

<dialog id="pronto_link" class="modal modal-bottom sm:modal-middle">
	<form method="dialog" class="modal-box bg-opacity-90">
		<h3 class="font-bold text-lg text-center">Falta poco!</h3>
		<p class="py-4 font-thin text-start">
			Pronto habilitaremos la inscripción vía web. Por favor, sientase libre de contactarnos por
			cualquiera de los medios disponibles en este sitio para cualquier consulta
		</p>
		<div class="modal-action">
			<!-- if there is a button in form, it will close the modal -->
			<button class="btn">Cerrar</button>
		</div>
	</form>
</dialog>
