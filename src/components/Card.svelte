<script>
	export let item;
</script>

<div class="card card-compact bg-base-100 m-2">
	<a href={item.url} target="blank" class="w-full">
		{#if item.img}
			<figure class="w-full max-h-96">
				<img src={item.img} class="w-full" alt="Shoes" />
			</figure>
		{/if}
		<div class="card-body">
			{#if item.title}
				<h2 class="card-title text-3xl font-bold">"{item.title}"</h2>
			{/if}
			<div class="divider m-1" />
			{#if item.date}
				<div class="flex flex-row items-end justify-end w-full">
					<p class="font-thin mx-4">{item.date}</p>
				</div>
			{/if}
			{#if item.author}
				<div class="flex flex-row items-end justify-end w-full">
					<p class="font-thin mx-4">{item.author}</p>
				</div>
			{/if}
			{#if item.text}
				<p class="text-lg font-extralight">{item.text}</p>
			{/if}
		</div>
	</a>
</div>
