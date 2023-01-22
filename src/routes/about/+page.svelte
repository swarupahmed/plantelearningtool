<script>
	import TopBar from "$lib/sections/common/TopBar.svelte";
	import AboutProject from "$lib/sections/home_page/AboutProject.svelte";

</script>
<TopBar/>
<section>

    <AboutProject/>
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