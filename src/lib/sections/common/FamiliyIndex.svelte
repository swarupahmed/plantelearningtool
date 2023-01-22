<script>
    export let families
</script>


<section>

    <div class='family_header'>
        Families
    </div>
    <div>

        {#each families as family}
            <div class='family_text'>
                <a href={`/search?key=${family}`}>

                    {family}
                </a>
            </div>
        {/each}
    </div>
</section>

<style>
    .family_header{
        color:#444444;
        font-weight: 500;
        opacity: .9;
        font-size: .95em;
    }
    section{
        display: flex;
        flex-direction: column;
        gap:1em
    }
    .family_text{
        padding: .2em 0;
    }
    a{
        
        text-decoration:none;
        font-size:.9em
    }
    a:hover{
        text-decoration:underline
    }
</style>