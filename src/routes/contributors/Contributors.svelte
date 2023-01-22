<script>
    let contributors=['Contributor A','Contributor B','Contributor C','Contributor D','Contributor A','Contributor B','Contributor C','Contributor D']
</script>

<section>
    <h3>Contributors</h3>
    <div class='wrapper'>

        {#each contributors as contributor}
            <p>{contributor}</p>
        {/each}
    </div>
</section>

<style>
    .wrapper{
        display: flex;
        flex-wrap: wrap;

    }
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
        min-width: 150px
    }
</style>