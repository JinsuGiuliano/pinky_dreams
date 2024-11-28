<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import SocialLinks from '../components/socialLinks.svelte';
</script>

<div
	style="background-image: url(/images/white-texture.png);background-size:cover;background-position:center;background-attachment: fixed;"
>
	<Navbar />
	<slot />
</div>
