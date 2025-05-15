<script>
	import { onMount } from "svelte";


	import Footer from "../landing/components/Footer.svelte";
    import Navbar from "../landing/components/Navbar.svelte";
	import Videos from "./components/videos.svelte";
	
	let timeOut = null;

	onMount(() => {
		checkLogin();
		logoutAfterInactivity();

		document.addEventListener("mousemove", function(){
			timeOut && clearTimeout(timeOut);
			logoutAfterInactivity();
		});
	});
	
	function logoutAfterInactivity(){
		timeOut = setTimeout(function(){
			logout()
		}, 1800000); // 30 minutes
	}
	


	function logout(){
		localStorage.removeItem('user');
		window.location.href = '/ingresar';
	}

	function checkLogin(){
		const user = localStorage.getItem('user');
		if(!user){
			window.location.href = '/ingresar';
		}
	}
</script>

<Navbar isCourse on:logout={logout} />
<Videos/>
<Footer/>