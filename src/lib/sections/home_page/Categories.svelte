<script>
	import CategoryCard from "$lib/component/list_items/CategoryCard.svelte";

	// mongodb scema
	/// categoryIndex[]


	/// docxItems[]

    export let categories
    

</script>

<section>
	<header>Categories</header>

        
    {#each  categories as category}
        <CategoryCard {category}/>
    {/each}

</section>

<style>
    header{
        font-weight: 500;
    }
    section{
        display: flex;
        flex-direction: column;
        gap: 1.1em;
        width: fit-content;
    }
    @media (max-width: 950px) {
    header {
			text-align: center;
		}
	}
</style>
