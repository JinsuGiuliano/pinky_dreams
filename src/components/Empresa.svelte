<script>
	// @ts-nocheck

	/**
	 * @type {{ url: any; empresa: any;  }}
	 */
	export let data;
	export let isMain = false;
</script>

{#if data}
		<div
			class="hidden lg:flex flex-col justify-center items-center p-2 bg-base-100 shadow-lg rounded-lg"
		>
				<img src={data.url} alt="" class="{isMain?"w-20 lg:w-[300px]":"w-20 lg:w-40"}  object-center" />
		</div>

		<div
		class=" flex  lg:hidden flex-col justify-center items-center p-1 bg-base-100 shadow-lg rounded-lg"
	>
			<img src={data.urlMobile? data.urlMobile : data.url} alt="" class="{isMain?"w-20 lg:w-[300px]":"w-20 lg:w-40"}  object-center" />
	</div>
{/if}
