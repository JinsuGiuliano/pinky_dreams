<script>

	import { Icons } from "$lib/icons/icons";
	import { data } from "../../../data/data";

</script>
<footer class="footer footer-center bg-base-200 text-base-content rounded p-20 !w-full">
	<nav>
	  <div class="grid grid-flow-col gap-4">
		<a href="{data.instagramLink}" target="_blank">
			<div class="flex items-center gap-2">Seguime en Instagram como <strong>Pinky Dreams Nails</strong> {@html Icons.instagram()}</div>
		</a>
		
	  </div>
	</nav>
	<aside>
	  <p>Copyright © {new Date().getFullYear()} - Pinky Dreams Studio</p>
	</aside>
  </footer>