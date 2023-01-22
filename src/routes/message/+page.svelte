<script>
	import Footer from "$lib/sections/common/Footer.svelte";
import TopBar from "$lib/sections/common/TopBar.svelte";
	import DirectorsMessage from "$lib/sections/home_page/DirectorsMessage.svelte";

</script>

<TopBar/>
<section>

    <DirectorsMessage/>
</section>
<Footer/>

<style>
    section{
        background-color: white;
        padding: 2em;
        margin-top: .3em 1em;
    }
    
    @media (max-width:480px){
        section{
        background-color: white;

        margin-top: .3em .3em;
    }
    :global(body) {
			font-size: 16px;
            transition: font-size .4s;
		}

    }


</style>