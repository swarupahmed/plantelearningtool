<script>
	import Footer from '$lib/sections/common/Footer.svelte';
	import TopBar from '$lib/sections/common/TopBar.svelte';

	import PlantHeader from './components/PlantHeader.svelte';
	import CommonNames from './components/CommonNames.svelte';
	import Taxonomy from './components/Taxonomy.svelte';
	import Morphology from './components/Morphology.svelte';
	import PlantImages from './components/PlantImages.svelte';

	import { Api } from '$lib/utils/api';

	import { onMount } from 'svelte';

	import { dev } from '$app/environment';
	import { page } from '$app/stores';
    import { PlantDocument } from 'lib//models/plant';

	async function load(href) {
        
        var pathNAmes = href.split('/');
		var docId = $page.url.searchParams.get('document')
		 catId = $page.url.searchParams.get('category')
		var url = pathNAmes.slice(0, 3).join('/');

		const res = await Api.get(`/api/document?category=${catId}&document=${docId}`);
		console.log(res);
		var document = new PlantDocument(
			docId,
			res.name,
			res.taxonomy,
			res.morphology,
			res.reference,
			res.images
		);
		console.log('load', document);
		return { document };
	}

	onMount(async () => {
		var href = window.location.href;


		data = await load(href);
		plant = data.document || [];
	});
	let data;
	let plant;
	let catId
	console.log(plant);
</script>

<body>
	<TopBar />
	{#if plant}
		<PlantHeader {plant} />
		<section>
			<CommonNames {plant} />
			<Taxonomy categoryId={catId} {plant} />
		</section>
		<Morphology {plant} />
		<PlantImages categoryId={catId} {plant} />
		<Footer />
		{/if}
	</body>

<style>
	section {
		background-color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1em 0;
	}
	@media (max-width: 480px) {
		:global(body) {
			font-size: 16px;
			transition: font-size .4s;
		}
	}
</style>
