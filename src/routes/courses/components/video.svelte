<script lang="ts">
	import type { videoT } from "../../../data/videos";

    export let video:videoT;
</script>
<div class="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
      <!-- <img
        src={video.image}
        alt="Album" /> -->
        {@html video.iFrame}
    </figure>
    <div class="card-body">
      <h2 class="card-title">{video.title}</h2>
      <p>{video.description}</p>
    </div>
  </div>