<script>
    export let plant
    let morphologies=plant.morphology||[]
</script>


<section>
    <div class="wrapper">

        <div class="title_header">
    Morphology
        </div>
        <div class="m_wrapper">
            {#each morphologies as morphology,i}
                <article >
                    <header>{morphology[0]}</header>
                    <div class='text'>{morphology[1]}</div>
                </article>
            {/each}
        </div>
    </div>
</section>

<style>
    .wrapper{

  
        display: grid;
        place-content: center;
    }
    @media (max-width:900px){
        .wrapper{
            max-width: min-content;
        }
    }
    
    section{
        display: grid;
        place-items: center;
        padding: 2em 0;
    }
    .title_header{
        padding: 1em .4em;
        font-style: italic;
        color: #B60B0B;
        font-weight: 500;
        max-width: min-content;
    }
    header{
        font-weight: 500;
    }
    .m_wrapper{
        display: flex;
        max-width: 41em;
        flex-wrap: wrap;
        gap:.7em
    }
    article{
        background-color: #F2F2F2;
        width: 20em;
        padding: .3em 0;
    }
    article>*{
        padding: .4em 1em;

    }
</style>