<script>
	import TopBar from '$lib/sections/common/TopBar.svelte';
	import CategoryHeader from '$lib/sections/category_page/CategoryHeader.svelte';
	import Footer from '$lib/sections/common/Footer.svelte';
	import PlantIndexView from '$lib/sections/category_page/PlantIndexView.svelte';
	import PlantGridView from '$lib/sections/category_page/PlantGridView.svelte';
	import FamiliyIndex from '$lib/sections/common/FamiliyIndex.svelte';
	import PlantCard from '$lib/component/list_items/PlantCard.svelte';
	import { dev } from '$app/environment';
	import { Api } from '$lib/utils/api';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	async function load(href) {
		
		var pathNAmes = href.split('/');
		var url=pathNAmes.slice(0,3).join('/')
		var searchKey = $page.url.searchParams.get('key');
		var res=await fetch('/api/search?key=' + searchKey)
	
		// const searchDocuments = await Api.get();
		// const searchBody = await res.text();
		// console.log('searchBody',searchBody);
		const searchDocuments = await res.json();
		console.log('searchDocuments',searchDocuments);
		return { searchDocuments, searchKey };
	}

	export let data;
	let documentData;
	let searchDocuments;
	let searchKey;
	var families = [];

	console.log('exported data',data)

	onMount(async () => {
		var href = window.location.href;
		console.log(href)
		

		documentData = await load(href);
		searchDocuments = documentData.searchDocuments;
		searchKey = documentData.searchKey;
		console.log('cat', searchDocuments);
		for (let i = 0; i < searchDocuments.length; i++) {
			const pdoc = searchDocuments[i];
			console.log('pdoc', pdoc);
			let fTaxonomy = pdoc.taxonomy.filter((e) => e[0].toLowerCase().includes('family'));
			console.log('fTaxonomy', fTaxonomy);
			if (fTaxonomy.length) {
				families.push(fTaxonomy[0][1]);
			}
			var catDocMap=data.categories.map(e=>[e.id,e.plants.map(p=>p.title)])
			var catId=catDocMap.filter(cd=>cd[1].includes(pdoc.id))
			pdoc.categoryId=catId[0][0]
			console.log('catId',catId[0][0])
		}
		families = Array.from(new Set(families));
		console.log(families);
		console.log('data',data)

		
	});
</script>

<body>
	<TopBar />
	{#if searchDocuments}
		<main>
			<div class="plant_section">
				<header>
					{searchDocuments.length} resultes for '{searchKey}''
				</header>

				<section class="wrapper">
					{#each searchDocuments as plant}
						<div>
							<PlantCard  title={plant.id} {plant} categoryId={plant.categoryId} />
						</div>
					{/each}
				</section>
			</div>
			<div class="family_section">
				<FamiliyIndex {families} />
			</div>
		</main>

		<Footer />
		{/if}
	</body>

<style>
	header {
		font-weight: 500;
		opacity: 0.9;
		color: #444444;
		display: flex;
		gap: 0.3em;

		align-items: center;
		text-align: center;
	}
	section.wrapper {
		display: flex;
		flex-wrap: wrap;
		gap: 1.2em;
		padding: 1em 0;
		justify-content: space-evenly;
	}
	@media (min-width: 580px) {
		section.wrapper {
			gap: 2em;
		}
	}
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
		align-items: center;
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
