<script>

	import { goto } from "$app/navigation";



    export let category;
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<article class="flex_center" on:click={()=>goto('/category?category='+category.id)}>
    <img src={category.thumbnail} alt={category.title}>
    <div class="texts">
        <h4>{category.title}</h4>
        <div class="count">

            <p>{category.families.length} families</p>
            <div class="circle_divider"></div>
            <p>{category.plants.length} plants</p>
        </div>
    </div>
</article>

<style>

article:hover{
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
        transition: box-shadow .4s;
    }
    article{
        /* flex-direction: column; */
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
    background-color: white;
    border-radius: .15em;
    overflow: hidden;
}


@media (max-width: 640px) {
    article {
			flex-direction: column;
		}
	}
    article>*{
        width: 300px;
    }
    img{
        object-fit: cover;   
        height: 220px;

    }
    
    h4{
        font-size: 1.15em;
        margin: 2px;
        text-align: center;
        font-weight: 500;
    }
    p{
        font-size: .9em;
        margin: 0;
    }
    .circle_divider{
        width: .45em;
        height:.45em;
        
        background: rgb(82, 82, 82);
        border-radius: 12px;
     
    }
    .count{

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1em;
     
        
    }
    .texts{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 8em;
        gap: 1em;
    }

</style>