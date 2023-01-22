<script>
	import { goto } from '$app/navigation';
	import SearchIcon from '$lib/component/svg_icons/SearchIcon.svelte';

	/** @type {string} */
	let searchInput;
	function search() {
		if (searchInput) {
			goto(`/search?key=${searchInput}`);
		}
	}

	function onEnter(event) {
		switch (event.key) {
			case 'Enter':
				search();
				event.preventDefault();
				break;
		}
	}
</script>

<div class="search_bar">
	<input bind:value={searchInput} on:keyup={onEnter} type="text" placeholder="search.." />
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div on:click={search} class="iconWrapper" >
		<SearchIcon />
	</div>
</div>

<style>
	.iconWrapper {
		display: grid;
		place-items: center;
	}
	.search_bar {
		display: flex;
		align-items: center;
		padding: 0.3em 1.2em;
		gap: 16px;
		width: fit-content;
		border-radius: 4px;
		box-shadow: 0px 0.2em 0.2em rgba(96, 10, 205, 0.25), 0px -0.2em 0.2em rgba(96, 10, 205, 0.25);
	}
	input {
		width: 240px;
		font-size: 1em;
		border: none;
		color: #001aff;
	}
	input::placeholder {
		color: #001aff;
		opacity: 0.9;
		font-family: 'Kanit', sans-serif;
	}
	input:focus {
		border: none;
		outline: none;
		
		font-family: 'Kanit', sans-serif;
		transition: padding .4s;
		transition: height .4s;
	}
</style>
