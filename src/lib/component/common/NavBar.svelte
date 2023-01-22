<script>
	import NavLinks from '$lib/component/common/nav_bar/NavLinks.svelte';
	import SearchBar from './nav_bar/SearchBar.svelte';


</script>

<section>

    <div class="links">
        <NavLinks/>
    </div>
    <div class="search">
        <SearchBar/>
    </div>
</section>

<style>
    section{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1em 4em ;
        background-color: #fff;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
        gap:1em;
        transition: height .4s;
    }
    
    @media (max-width: 1000px) {
		section {
			padding: 1em 1em ;
		}

	}
    @media (max-width: 840px) {
		section {
			flex-direction: column;
		}

	}

</style>