<script>

	import { Icons } from "$lib/icons/icons";

</script>
<footer class="footer footer-center bg-base-200 text-base-content rounded p-20 !w-full">
	<nav>
	  <div class="grid grid-flow-col gap-4">
		<a href="https://www.instagram.com/dreams_pinky_/">
			{@html Icons.instagram()}
		</a>
		<a href="/">
			{@html Icons.youtube()}	
		</a>
	  </div>
	</nav>
	<aside>
	  <p>Copyright © {new Date().getFullYear()} - Pinky Dreams Studio</p>
	</aside>
  </footer>