<script>
	import GridIcon from "$lib/component/svg_icons/GridIcon.svelte";
	import ListIcon from "$lib/component/svg_icons/List_Icon.svelte";
	import NextIcon from "$lib/component/svg_icons/NextIcon.svelte";

    export let categoryData;
    export let indexView

    // $:indSelected=indexView

    function enableIndexView(){
        indexView=true
        console.log('sel',indexView)
    }
    function disableIndexView(){
        indexView=false
        console.log('sel',indexView)
    }
</script>

<section>
    <header>
        <div class="header_text">

           <span>

               {categoryData.title}
           </span>
        </div>
    </header>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="view_buttons">

        <span class="icon" class:selected={indexView===false} on:click={disableIndexView}>
            <GridIcon/>
        </span>
        <span class="icon" class:selected={indexView===true} on:click={enableIndexView}>
            <ListIcon/>
        </span>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
    </div>

</section>

<style>
    .header_text{
        font-weight: 500;
        opacity: .9;
        color: #444444;
        display: flex;
        gap: .3em;
        width: max-content;
        align-items: center;
   
    }
    .view_buttons{
        display: flex;
        align-items: center;
    }
    .icon{
        opacity: .8;
        width: 1.2em;
        height: 1.2em;
        margin:0 4px;
        padding: 1px;
        display: grid;
        justify-content: center;
        align-items: center;
    }
    section{
        display: flex;
        justify-content: space-between;
        gap:1em
    }
    .selected{
        border: 1px solid grey;
        border-radius: 2px;
        border-color: #3A7284;
    }
</style>