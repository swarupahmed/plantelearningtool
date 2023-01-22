<script>
// @ts-nocheck

	import TopBar from '$lib/sections/common/TopBar.svelte';

	import Reference from './Reference.svelte';
	import { dev } from '$app/environment';

	import { Api } from '$lib/utils/api';
	import { onMount } from 'svelte';

	async function load(url) {
		
		const res = await Api.get('/api/references');
		var references = res;
		return { references };
	}
	let data;
	let references;
	console.log(references);
	onMount(async () => {
		var href = window.location.href;

		var origin = href.split('/').slice(0, 3).join('/');

		data = await load(origin);
		references = data.references;
	});
</script>

<TopBar />
{#if references}
	<section>
		<Reference {references} />
	</section>
{/if}

<style>
	section {
		margin: 0.3em 0;
		overflow-wrap: break-word;
	}

	@media (max-width: 480px) {

		:global(body) {
			font-size: 16px;
			transition: font-size .4s;
		}
	}
</style>
