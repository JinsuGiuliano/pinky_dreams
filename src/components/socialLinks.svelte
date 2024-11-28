<script>
	export let isMobile = false;
</script>

<div class="w-full flex flex-col h-full justify-between">
	<div class="flex flex-row-reverse item-center justify-center {isMobile? "gap-1":"py-2"} w-full">
	
		<a
			href="https://wa.link/itdmf5"
			target="_blank"
			class="{isMobile
				? 'w-[25px] h-[25px] '
				: 'w-[40px] h-[40px] '} m-[2px] cursor-pointer shadow-xl bg-[#2f9c8f] rounded-full items-center justify-center flex flex-row"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				class={isMobile?"w-3 h-3 lg:h-4 lg:w-4" :"w-4 h-4 lg:h-6 lg:w-6"}
				fill="currentColor"
				style="color: #ffffff"
				viewBox="0 0 24 24"
			>
				<path
					d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
				/>
			</svg></a
		>
		<a
			href="https://twitter.com/CCPyBr"
			target="_blank"
			class="{isMobile
				? 'w-[25px] h-[25px]'
				: 'w-[40px] h-[40px] '} m-[2px] cursor-pointer shadow-xl bg-sky-500  rounded-full items-center justify-center flex flex-row"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				class={isMobile?"w-3 h-3 lg:h-4 lg:w-4 fill-white" :"w-4 h-4 lg:h-6 lg:w-6 fill-white"}
				><path
					d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
				/></svg
			></a
		>
		<a
			href="https://www.youtube.com/@camaradecomercioparaguaybr3456"
			target="_blank"
			class="{isMobile
				? 'w-[25px] h-[25px]'
				: 'w-[40px] h-[40px] '} m-[2px] cursor-pointer shadow-xl bg-red-600 rounded-full items-center justify-center flex flex-row"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				class={isMobile?"w-3 h-3 lg:h-4 lg:w-4 fill-white" :"w-4 h-4 lg:h-6 lg:w-6 fill-white"}
				><path
					d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
				/></svg
			></a
		>
			
		<div class="tooltip tooltip-open tooltip-info" data-tip="VISITÁ NUESTRA APP">
			<a
				href="https://app.expoparaguaybrasil.com"
				target="_blank"
				class=" "
				>
				<div class="flex lg:hidden {isMobile
				? 'w-[25px] h-[25px]'
				: 'w-[40px] h-[40px] '} m-[2px] text-white cursor-pointer shadow-xl bg-gradient-to-r from-pink-500 to-blue-500 rounded-full items-center justify-center flex flex-row">
				APP
					</div>
				<div class="hidden lg:flex  w-auto p-2 m-[2px] cursor-pointer shadow-xl bg-gradient-to-r from-pink-500 to-blue-500 rounded-full items-center justify-center flex-row text-white">
				APP EXPO 2024
				</div>
			</a
			>
			</div>
		<a
			href="https://www.instagram.com/expoparaguaybrasil/"
			target="_blank"
			class="{isMobile
				? 'w-[25px] h-[25px]'
				: 'w-[40px] h-[40px] '} m-[2px] cursor-pointer shadow-xl bg-pink-600 rounded-full items-center justify-center flex flex-row"
			><svg
				class={isMobile?"w-3 h-3 lg:h-4 lg:w-4 text-white" :"w-4 h-4 lg:h-6 lg:w-6 text-white"}
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" /> <rect x="4" y="4" width="16" height="16" rx="4" />
				<circle cx="12" cy="12" r="3" /> <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg
			></a
		>
		<a
			href="https://www.linkedin.com/company/ccpybr/"
			target="_blank"
			class="{isMobile
				? 'w-[25px] h-[25px]'
				: 'w-[40px] h-[40px] '} m-[2px] cursor-pointer shadow-xl bg-white rounded-full items-center justify-center flex flex-row"
			><svg
				class={isMobile?"w-3 h-3 lg:h-4 lg:w-4 text-blue-500" :"w-4 h-4 lg:h-6 lg:w-6 text-blue-500"}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
				<rect x="2" y="9" width="4" height="12" /> <circle cx="4" cy="4" r="2" /></svg
			></a
		>
		<a
			href="https://www.facebook.com/CCPyBr"
			target="_blank"
			class="{isMobile
				? 'w-[25px] h-[25px]'
				: 'w-[40px] h-[40px] '} m-[2px] cursor-pointer shadow-xl bg-blue-600 rounded-full items-center justify-center flex flex-row"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				class={isMobile?"w-3 h-3 lg:h-4 lg:w-4 fill-white" :"w-4 h-4 lg:h-6 lg:w-6 fill-white"}
				><path
					d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
				/></svg
			></a
		>

		<a
			href="https://www.ccpb.org.py/"
			target="_blank"
			class="{isMobile
				? 'w-[25px] h-[25px]'
				: 'w-[40px] h-[40px] '} m-[2px] cursor-pointer shadow-xl bg-white rounded-full items-center justify-center flex flex-row"
			><svg
				class={isMobile?"w-3 h-3 lg:h-4 lg:w-4 text-gray " :"w-4 h-4 lg:h-6 lg:w-6 text-gray "}
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" /> <circle cx="12" cy="12" r="9" />
				<line x1="3.6" y1="9" x2="20.4" y2="9" /> <line x1="3.6" y1="15" x2="20.4" y2="15" />
				<path d="M11.5 3a17 17 0 0 0 0 18" /> <path d="M12.5 3a17 17 0 0 1 0 18" /></svg
			></a
		>
			<a
				href="https://accesosparaguay.com/FBrasil2024"
				target="_blank"
				>
				<div class="flex lg:hidden {isMobile
				? 'w-[25px] h-[25px]'
				: 'w-[40px] h-[40px] '} m-[2px] cursor-pointer shadow-xl bg-yellow-600 rounded-full items-center justify-center flex flex-row">
					<svg
					class={isMobile?"w-3 h-3 lg:h-4 lg:w-4 text-white " :"w-4 h-4 lg:h-6 lg:w-6 text-white "}
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
					</div>

			<div class="hidden lg:flex  w-auto p-2 m-[2px] cursor-pointer shadow-xl bg-yellow-500 rounded-full items-center justify-center flex-row text-white">
				<svg
				class="h-[18px] w-[18px] lg:h-6 lg:w-6 text-white"
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
				</div>
			</a
			>
		
	</div>
	{#if !isMobile}
	<div class="divider font-light bg-transparent text-[8px] lg:text-[12px] text-white p-0 m-0">
		NUESTRAS REDES
	</div>
	{/if}
</div>
