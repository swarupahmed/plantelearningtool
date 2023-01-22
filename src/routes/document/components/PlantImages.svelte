<script>
	import { goto } from "$app/navigation";


	export let plant;
    export let categoryId
	let images = plant.images;
</script>

<section>

    <div class='wrapper'>

        <div class="title_header">Images</div>
        
        <div class="img_wrapper">
            {#each images as image}
            <picture>
                <!--This is the optional AVIF image-->
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <img on:click={()=>goto(`/plants/${categoryId}/${plant.id}/${image}`)} src={`/plants/${categoryId}/${plant.id}/${image}`} alt="oops">
            </picture>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
            {/each}
        </div>
    </div>
</section>

<style>
    section{
        display: grid;
        place-items: center;;
        
    }
	.title_header {
		padding: 1.5em 0.4em;
		font-style: italic;
		color: #b60b0b;
		font-weight: 500;
		text-align: center;
	}
    .img_wrapper{

        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap:2em;

    }
    img{
        width: 18em;
        height: 18em;
        object-fit: cover;
    }
</style>
