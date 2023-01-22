<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
    
	/**
	 * @param {string} routeId
	 */

	function isRoute(routeId) {
		console.log('$page.routeId',$page.route.id)
		return $page.route.id  === routeId;
	}
</script>

<div class="row">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<svg on:click={()=>goto('/')} class:selected={isRoute('/')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
	</svg>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<p  on:click={()=>goto('/about')} class:selected={isRoute('/about')}>About</p>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<p  on:click={()=>goto('/reference')} class:selected={isRoute('/reference')}>Reference</p>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<p  on:click={()=>goto('/contributors')} class:selected={isRoute('/contributors')}>Contributors</p>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<p  on:click={()=>goto('/contact')} class:selected={isRoute('/contact')}>Contact</p>
</div>

<style>

	.selected {
		fill: #498f42;
		color: #498f42;
		opacity: 1;
		transition: fill .4s;
	}
	svg {
		fill: #131313;
		width: 1.33em;
		opacity: .9;
	}

	svg:hover {
		fill: #498f42;
	}
	.row {
		display: flex;
		align-items: center;
		gap: 1.1em;
		font-family: 'Kanit', sans-serif;
		font-weight: 500;
	}
	@media (max-width: 420px) {
		.row {
			gap:.3em;
		
		}
		p{
			font-size: 1em;
		}
	}
	p {
		margin: 4px;
		color: #131313;
		opacity: .95;
		font-size: .97em;
	}
	.row *:hover {
		color: #498f42;
		cursor: pointer;
	}
</style>
