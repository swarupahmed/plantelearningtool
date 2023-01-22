<script>
// @ts-nocheck

	import TopBar from '$lib/sections/common/TopBar.svelte';
	import CategoryHeader from '$lib/sections/category_page/CategoryHeader.svelte';
	import Footer from '$lib/sections/common/Footer.svelte';
	import PlantIndexView from '$lib/sections/category_page/PlantIndexView.svelte';
	import PlantGridView from '$lib/sections/category_page/PlantGridView.svelte';
	import FamiliyIndex from '$lib/sections/common/FamiliyIndex.svelte';

	import { dev } from '$app/environment';
	import { Category } from '$lib/models/category';
	import { Api } from '$lib/utils/api';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';


	async function load(href) {
		var pathNAmes = href.split('/');
		console.log('params',$page.params)
		console.log('params',$page.url.searchParams.get('category'))
		console.log('params',$page.url.search)

	
		var url = pathNAmes.slice(0, 3).join('/');
		
		var catId = $page.url.searchParams.get('category')

		const res = data.categories;
	
		console.log(res[0])
		let categoryone=res.filter((c)=>c['id']===catId)[0]
	


		let category = Category.fromJson(categoryone);

		return { category };
	}

	export let data;

	let category;
	
	let indexView = true;
	onMount(async () => {
		var href = window.location.href;


		data = await load(href);
		category = data.category;
		
	});
</script>

<body>
	<TopBar />
	{#if category}
		<main>
			<div class="plant_section">
				<CategoryHeader bind:indexView categoryData={category} />
				{#if indexView === true}
					<PlantIndexView {category} />
				{:else}
					<PlantGridView {category} />
				{/if}
			</div>
			<div class="family_section">
				<FamiliyIndex families={category.families} />
			</div>
		</main>

		<Footer />
		{/if}
	</body>

<style>
	main {
		padding: 2em;
		display: flex;
		justify-content: space-evenly;
		gap: 1em;
		flex-direction: column;
	}

	@media (min-width: 580px) {
		main {
			gap: 3em;
		}
	}
	@media (min-width: 920px) {
		main {
			gap: 8em;
			padding: 2em 6em;
			padding-right: 2em;
			flex-direction: row;
		}
	}

	.plant_section {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		gap: 1em;
	}
	.family_section {
		min-width: 240px;
	}
	body {
		background-color: rgb(248, 252, 255);
	}
	@media (max-width: 480px) {
		:global(body) {
			font-size: 16px;
			transition: font-size .4s;
		}
	}
</style>
