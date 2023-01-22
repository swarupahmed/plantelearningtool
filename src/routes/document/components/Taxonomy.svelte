<script>
	import { goto } from "$app/navigation";


    export let plant
    export let categoryId
    let taxonomies=plant.taxonomy || []
</script>

<section>
    <article>
        <div class="header">Taxonomy</div>
        <div class="fields">
            {#each taxonomies as taxonomy,i}
     
                
                <div class="tag">          
                    <span class="dash" style="width:{(((i+1)*.75)/(1+(i*.08)))+'em'}"></span>
                    <span class="title">{taxonomy[0]}</span>
                    {#if taxonomy[0].toLowerCase()==='species'}
                        
                    <span class="text">
                        <i>{taxonomy[1]} </i>
                        
                    </span>
                    {:else}
                    <span class="text">{taxonomy[1]} </span>
                    {/if}
                </div>
          
            {/each}
        </div>
    </article>
    <picture>
 
            <img on:click={()=>goto(`/plants/${categoryId}/${plant.id}/${plant.images[0]}`)} src={`/plants/${categoryId}/${plant.id}/${plant.images[0]}`} alt={plant.images[0]}>
    </picture>
</section>

<style>
    article{
        width: min-content;
        padding: 0 1em;
    }
    img{
        width: 18em;
        max-height: 18em;
        padding: 1em;
        object-fit: cover;
    }
    .header{
        border-bottom: 1px solid #858585;
        width: min-content;
        padding: .2em .4em;
        font-style: italic;
        color: #B60B0B;
        font-weight: 500;

    }
    .fields{
        display: grid;
        gap:.75em;
        border-left: 1px solid #858585;
        padding-top: .6em;
       
    }
    .title{
        padding: .2em .5em ;
        border: 1px solid #363636;
        border-radius: .4em;
        font-size: .75em;
        text-transform: lowercase;
        font-family: 'Fira Code', monospace;
    }
    .text{
        padding: 0 1em;
    }
    .dash{
        height: 1px;
        background-color: #858585;
    }
    .tag{
        display: flex;
        align-items: center;

    }


    section{
        display: flex;
        align-items: center;
        gap:4em;
        padding-bottom: 2em;
    
    }
    @media (max-width:900px){
        section{
        flex-direction: column-reverse;

     gap:1em
    }
    }
</style>