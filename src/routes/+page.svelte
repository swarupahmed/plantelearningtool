
<script>
	import Footer from '$lib/sections/common/Footer.svelte';
	import TopBar from '$lib/sections/common/TopBar.svelte';

	import AboutProject from '$lib/sections/home_page/AboutProject.svelte';
	import Categories from '$lib/sections/home_page/Categories.svelte';
	import QuizSection from '$lib/sections/home_page/QuizSection.svelte';
	import DirectorsMessage from '$lib/sections/home_page/DirectorsMessage.svelte';
	import { dev } from '$app/environment';
	import { Api } from '$lib/utils/api';
	import { Category } from '$lib/models/category';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';


export let data;


let categories=data.categories

</script>


<body>
	<TopBar withImage={true}/>
	{#if categories}
	<main>
		<Categories {categories}/>
		<section class="side_info">

			<QuizSection/>
			<DirectorsMessage short={true}/>
		</section>
	</main>
	<section class="about">
		<AboutProject/>
	</section>
	<Footer/>
	{/if}
</body>
<style>
	

	section.about{
		margin: 5em 0;
	}
	section.side_info{
		display: flex;
		flex-direction: column;
		width: 320px;
		align-items: center;

	}

	@media (max-width: 1000px) {
		section.side_info {
			width: 560px;
		}
		main{
			flex-direction: column;
			align-items: center;
		
		}
	}
	@media (max-width: 640px) {
		section.side_info {
			width: 320px;
		}
		main{
			flex-direction: column;
			align-items: center;
		
		}
	}
	main {
		padding: 1.25em .1em;
		display: flex;
		gap: 1.5em;
	
		justify-content: space-evenly;
		

	}

	body {
		background: #ececec;
	}





	:global(.flex_center) {
		display: flex;
		align-items: center;
	}
	@media (max-width: 480px) {
		:global(body) {
			font-size: 16px;
			transition: font-size .4s;
		}
	}
</style>
