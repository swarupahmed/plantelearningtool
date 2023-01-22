<script>
	import { goto } from "$app/navigation";


    export let short=false
    // let message='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English'
    let message=Array.from(Array(400).keys()).map(e=>' ').join('');
</script>

<div class="wrapper" >
    
        <img src="/project_director_img.png" alt="director">
        <header>Message from Principal Investigator</header>
        <div class="description">
            {#if short===true}
                
            <p>{message.slice(0,300)}...</p>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <p class='more' on:click={()=>goto('/message')}> Read More</p>

            {:else}
            <p >{message}</p>
            {/if}
        </div>
 
</div>

<style>
    header{
        font-weight: 500;
        text-align: center;
    }
    .description{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .8em;
    }
    img{
        border-radius: 50%;
        width: 6em;
    }
        .wrapper{
        width:100%;
        display: flex;
        background-color: white;
            flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 1.5em;
        padding: 1.75em 0;
        border-radius: .3em;
        
    }
    .wrapper>*{
        padding: 0 2em;
    }
    p{
        margin: 0;
        font-size: .85em;
    }
    .more{
        font-size: 90%;
        color: blue;

    }
    .more:hover{
        cursor: pointer;
        user-select: none;
        text-decoration: underline;
        transition: text-decoration .4s;
    }
   
</style>