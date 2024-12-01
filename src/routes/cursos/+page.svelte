<script>
	import { onMount } from "svelte";


	import Footer from "../landing/components/Footer.svelte";
    import Navbar from "../landing/components/Navbar.svelte";
	import Videos from "./components/videos.svelte";


	onMount(() => {
		checkLogin();
	});

	function checkLogin(){
		const user = localStorage.getItem('user');
		if(!user){
			window.location.href = '/ingresar';
		}
	}
</script>

<Navbar isCourse />
<Videos/>
<Footer/>