<script>

	import { goto } from "$app/navigation";

</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<img on:click={()=>goto('https://hstu.ac.bd/')} src="/hstu_logo.png" alt="HSTU Logo"/>

<style>
    img{
        width: 3em;
        width: 3em;
    }
    @media (max-width: 480px) {
		img{
        width: 2em;
        width: 2em;
    }
	}
</style>