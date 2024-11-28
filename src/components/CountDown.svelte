<script>
	import moment from 'moment'
	import { afterUpdate, onMount } from 'svelte';

	export let isMobile = false

	const targetTime = moment("2024-11-07");
	let currentTime = moment()
	$: timeBetween = moment.duration(targetTime.diff(currentTime));

	let isOpen = false;

	onMount(()=>{
		// const interval = setInterval(() => {
		// 	currentTime  = moment()
		// }, 1000);

		isOpen = true;
		// return () => clearInterval(interval);
	})


	

</script>
		
	<div class="w-1/2 lg:w-full p-1 ">
		{#if isMobile}
			<div class="divider font-light bg-transparent text-[8px] lg:text-[12px] text-white p-0 m-0">
				FALTAN SOLO
			</div>
		{/if}

		<!-- {#if false}
		<div class="relative flex flex-row items-center justify-start w-full">
			<div class="grid grid-flow-col gap-1 text-center auto-cols-max">
				<div class="flex flex-col p-2 bg-[#F3B6B5] rounded-box text-neutral-content">
					<span class="countdown text-lg lg:text-2xl">
						<span style="--value:{timeBetween.months()};" />
					</span>
					<span class="text-xs lg:text-lg">Mes.</span>
				</div>
				<div class="flex flex-col p-2 bg-[#0F3363] rounded-box text-neutral-content">
					<span class="countdown text-lg lg:text-2xl">
						<span style="--value:{timeBetween.days()};" />
					</span>
					<span class="text-xs lg:text-lg">Días</span>
				</div>
				<div class="flex flex-col p-2 bg-[#F3B6B5] rounded-box text-neutral-content">
					<span class="countdown text-lg lg:text-2xl">
						<span style="--value:{timeBetween.hours()};" />
					</span>
					<span class="text-xs lg:text-lg">Hs.</span>
				</div>
				<div class="flex flex-col p-2 bg-[#0F3363] rounded-box text-neutral-content">
					<span class="countdown text-lg lg:text-2xl">
						<span style="--value:{timeBetween.minutes()};" />
					</span>
					<span class="text-xs lg:text-lg">Min.</span>
				</div>
				<div class="flex flex-col p-2 bg-[#F3B6B5] rounded-box text-neutral-content">
					<span class="countdown text-lg lg:text-2xl">
						<span style="--value:{timeBetween.seconds()};" />
					</span>
					<span class="text-xs lg:text-lg">Seg.</span>
				</div>
			</div>
		</div>
		{/if} -->
		<!-- {#if false}
			<div class="divider font-light bg-transparent text-[8px] lg:text-[12px] text-white p-0 m-0">
				FALTAN SOLO
			</div>
		{/if} -->
	</div>
