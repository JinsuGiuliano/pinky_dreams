<script lang="ts">
	import Video from "./video.svelte";
    import { categories } from "../../../data/videos";
	import { onMount } from "svelte";
	import { User } from "../../../data/users";

    let user:User
    onMount(()=>{
       let t = JSON.parse(JSON.stringify(localStorage.getItem('user')))
       if(t){
        user = JSON.parse(t)
       }
    })

</script>
{#if user}
    <div class="w-full px-2 py-4">
        <div class='flex flex-col items-center justify-center'>
        <a 
        href="/#"
        class="text-2xl uppercase font-bold">
            Academia Pinky Dreams
        </a>
        </div>
        {#each categories as category}
            {#if user.cursos?.includes(category.id)}
            <div class="p-4">
                <div class="divider divider-start text-xl font-bold uppercase">{category.title}</div>
                <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3"> 
                    {#each category.videos as video, index}
                        <div id="item{index+1}" class="carousel-item w-full flex justify-center">
                            <Video {video}/>
                        </div>
                    {/each}
                </div>
            </div>
            {/if}
        {/each}
    </div>
{/if}