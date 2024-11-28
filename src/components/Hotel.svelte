<script>
	// @ts-nocheck

	/**
	 * @type {{ url: any; empresa: any;  }}
	 */
	export let data;
</script>

{#if data}
	<div class="indicator max-h-auto  w-fit m-1">

		<div
			class="flex flex-col justify-center items-center w-[160px] lg:w-72 bg-base-100 shadow-xl rounded-xl"
		>

		<a href={data.link} target="_blank" class="cursor-pointer">
			<div
				class="p-3 flex flex-col w-full h-full justify-between items-center tooltip text-sm overscroll-contain"
				
			>
				<img src={data.url} alt={data.empresa} class="w-[90%] object-center" />

				<div class="h-1/2 w-full flex flex-col justify-start items-start">
					<div class="divider my-1" />
					<span class="w-full font-extrabold">Tarifa a partir de:</span>
					<span class="w-full font-extrabold">{data.tarifa}</span>
					<div class="divider my-1" />
					<span class="w-full font-extrabold">Reservas al:</span>
					<span class="w-full font-light">{data.phone}</span>
					{#if data.phone2}
						<span class="w-full font-light">{data.phone2}</span>
					{/if}
					<textarea disabled class="w-full font-light text-xs lg:text-sm resize-none text-center"
						>{data.email}</textarea
					>
					{#if data.promo_code}
					<div class="divider my-1" />
					<span class="w-full font-extrabold">Promo Code</span>
					<span class="w-full font-light">{data.promo_code}</span>
				{/if}
				</div>
			
			</div>
		</a>
		</div>
	</div>
{/if}
