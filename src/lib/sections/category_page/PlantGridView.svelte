<script>
	import PlantCard from "$lib/component/list_items/PlantCard.svelte";


    export let category
    let plants=category.plants
</script>

<section class='wrapper'>
    {#each plants as plant}
        <div>
            <PlantCard title={plant.title} {plant} categoryId={category.id}/>
        </div>
    {/each}
</section>

<style>
    section.wrapper{
        display: flex;
        flex-wrap: wrap;
        gap: 1.2em;
        padding: 1em 0;
        justify-content: space-evenly;
    }
    @media (min-width:580px){

        section.wrapper{
            gap: 2em;
}
}
</style>