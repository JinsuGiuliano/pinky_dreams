<script>
	// @ts-nocheck

	import { areas } from '../data/data.js';
</script>

<div />

<div id="areas" class="min-h-screen flex flex-col justify-center">
	<div class="py-12 text-center">
		<h2 class="text-5xl font-thin">Áreas <strong class="font-light">de la Expo</strong></h2>
	</div>

	<div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 lg:gap-3 gap-1">
		<div class="grid gap-1 lg:gap-2">
			{#each areas as area, i}
				{#if i < 2}
					<div class="collapse h-auto {area.bg} p-2 shadow-inner-lg">
						<input type="radio" name="areas-1" checked={area.checked} />
						<div class="collapse-title p-1 flex flex-col lg:flex-row items-center">
							<img src={area.url} alt={area.name} class="w-3/12" />
							<span
								class="text-center {area.color} italic text-xl font-light lg:text-start lg:text-lg p-3"
								>"{area.sub.toUpperCase()}"</span
							>
						</div>
						<div
							class="collapse-content text-2xl lg:text-lg font-sans font-extralight text-center lg:text-start"
						>
							<p>{area.text}</p>
						</div>
					</div>
				{/if}
			{/each}
		</div>
		<div class="grid gap-1 lg:gap-2">
			{#each areas as area, i}
				{#if i > 1 && i < 4}
					<div class="collapse h-auto {area.bg} p-2 shadow-inner-lg">
						<input type="radio" name="areas-1" checked={area.checked} />
						<div class="collapse-title p-1 flex flex-col lg:flex-row items-center">
							<img src={area.url} alt={area.name} class="w-3/12" />
							<span
								class="text-center {area.color} italic text-xl font-light lg:text-start lg:text-lg p-3"
								>"{area.sub.toUpperCase()}"</span
							>
						</div>
						<div
							class="collapse-content text-2xl lg:text-lg font-sans font-extralight text-center lg:text-start"
						>
							<p>{area.text}</p>
						</div>
					</div>
				{/if}
			{/each}
		</div>
		<div class="grid gap-1 lg:gap-2">
			{#each areas as area, i}
				{#if i > 3 && i < 6}
					<div class="collapse h-auto {area.bg} p-2 shadow-inner-lg">
						<input type="radio" name="areas-1" checked={area.checked} />
						<div class="collapse-title p-1 flex flex-col lg:flex-row items-center">
							<img src={area.url} alt={area.name} class="w-3/12" />
							<span
								class="text-center {area.color} italic text-xl font-light lg:text-start lg:text-lg p-3"
								>"{area.sub.toUpperCase()}"</span
							>
						</div>
						<div
							class="collapse-content text-2xl lg:text-lg font-sans font-extralight text-center lg:text-start"
						>
							<p>{area.text}</p>
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>
