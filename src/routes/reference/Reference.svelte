<script>
// @ts-nocheck

    export let references
</script>

<section>
    <h3>Reference</h3>
    <div>

        {#each references as reference}
            <p>{reference}</p>
        {/each}
    </div>
</section>

<style>
    section{
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 4em 2em;
        gap: 1.2em;
        
    }
    section>*{
        max-width: 800px;
        
    }
    h3{
        text-align: center;
        color: #B5189C;
        font-weight: 600;
        font-size: 1.25em;
        margin: 0;
    }
    p{
        font-weight: 400;
        font-size: .9em;
        margin: .5em;
        text-align: center;
        
    }
</style>