<script lang="ts">
	import type { videoT } from "../../../data/data";

    export let video:videoT;
</script>
<div class="card lg:card-side bg-base-100 shadow-xl">
    <figure>
      <!-- <img
        src={video.image}
        alt="Album" /> -->
        {@html video.iFrame}
    </figure>
    <div class="card-body">
      <h2 class="card-title">{video.title}</h2>
      <p>{video.description}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Listen</button>
      </div>
    </div>
  </div>