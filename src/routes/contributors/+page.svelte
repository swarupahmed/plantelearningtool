<script>
	import TopBar from "$lib/sections/common/TopBar.svelte";
	import Contributors from "./Contributors.svelte";



</script>
<TopBar/>
<section>

    <Contributors/>
</section>

<style>
    section{
        margin: .3em 0;
    }

    @media (max-width:480px){

    :global(body) {
			font-size: 16px;
            transition: font-size .4s;
		}

    }

</style>