<script>
	import Video from "./video.svelte";
    import { videos } from "../../../data/data";
	import { goto } from "$app/navigation";

    $: selected = 0
</script>
<div class="min-w-screen px-2">
<div class='flex flex-col items-center justify-center'>
    Carousel with indicator buttons
    This slider works with anchor links so the browser will snap vertically to the image when you click buttons.
</div>

<div class="carousel py-10 w-full">
    {#each videos as video, index}
        <div id="item{index+1}" class="carousel-item w-full flex justify-center">
            <Video {video}/>
        </div>
    {/each}
</div>
<div class="flex w-full justify-center gap-2 py-2">
    <ul class="steps">
        {#each videos as _, index}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li 
                on:click={() => {
                    console.log(index)
                    selected = index
                    goto(`#item${index+1}`)
                }}
                class="step {selected>=index?'step-primary':''} hover:cursor-pointer text-xs">
            </li>
        {/each}
      </ul>
</div>
</div>