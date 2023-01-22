<script>

	import { goto } from "$app/navigation";

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={()=>goto('/')} class="row">
	<img src="/favicon.png" alt="logo">
	<div class="title-col">
		<h1>Plant E-learning Tool</h1>
		<p>HSTU Horticulture Plants Database</p>
	</div>
</div>

<style>
	img {
		width: 2.3em;
		opacity: .9;
	
	}

	h1 {
		font-family: 'Oleo Script', cursive;
		margin: 2px;
		padding: 2px;
		color: #0047ff;
		font-size: 1.5em;
	}
	p {
		font-family: 'Zilla Slab', serif;
		margin: 2px;
		padding: 2px;
		color: #373a82;
		font-size: 0.9em;
	}
	.row {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 32px;
		user-select: none;
	}
	.row:hover{
		cursor: pointer;
	}
	@media (max-width: 480px) {
		.row {
			gap: 10px;
		}
		img {
			width: 1.8em;
		
		}
	}
</style>
