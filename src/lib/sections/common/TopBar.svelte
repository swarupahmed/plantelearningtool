<script>
	import HstuLogo from '$lib/component/common/HstuLogo.svelte';
	import Logo from '$lib/component/common/Logo.svelte';
	import NavBar from '$lib/component/common/NavBar.svelte';

	export let withImage = false;
</script>

<section>
	<article class="top_sec">
		<Logo />
		<HstuLogo />
	</article>
	{#if withImage}
		<article class="home_img">
			<img src="/home-img.png" alt="Homepage" />
		</article>
	{/if}
	<article class="navbar">
		<NavBar />
	</article>
</section>

<style>
	.top_sec {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px 32px;
		background-color: white;
	}

	.home_img {
		padding-top: 4px;
		display: grid;
	}

	img {
		width: 100vw;
		height: 280px;
		object-fit: cover;
	}

	@media (max-width: 480px) {
		.top_sec {
			padding: 12px 16px;
		}
		img {
			height: 180px;
		}
	}
</style>
