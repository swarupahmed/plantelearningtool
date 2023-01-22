<script>
    // @ts-nocheck
	import { goto } from "$app/navigation";


    export let title
    export let plant
    export let categoryId
    console.log('plant',plant)
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<article on:click={()=>goto(`/document?category=${categoryId}&document=${title}`)}>
    <picture>
        <!--This is the optional AVIF image-->
        <!-- <source type="image/webp" srcset={`/plant_images/${title}/${plant.thumbnail}.avif`}> -->
        <!--This is the fallback JPEG image-->
        
        <img src={`plants/${categoryId}/${title}/${plant.images[0]}`} alt="{plant.thumbnail}">
      </picture>
    <div class="text">

        <p>{title.split('_').join(' ')}</p>
    </div>
</article>

<style>
    .text{
        height: 3.25em;
        display: grid;
        place-items: center;
    }
    article:hover{
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
        transition: box-shadow .4s;
    }
    article{
        width: 9em;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
        background-color: white;
    }
    img{
        height: 8em;
        width: 9em;
        object-fit: cover;

    }
    @media (max-width: 580px) {
		article, img{
            width: 8em;
            
        }
        img{
            width: 8em;
            height: 7em;
        }

	}
    p{
        text-align: center;
        font-size: .9em;
        margin: 0;
        text-transform: capitalize;
    }
</style>