<script>
    // [
    // { title: 'ashseora', thumbnail: '1_thumb' },
    // { title: 'baobab', thumbnail: '1_thumb' },]

    function getPlantIndex(plants){
        let letters='abcdefghijklmnopqrstuvwxyz'.split('')
        var index=[]
        letters.forEach((l)=>{
            var ip=plants.filter((e)=>e.title.startsWith(l))
            if(ip.length){
                index.push({index:l,plants:ip})
            }
        })
        console.log(index)
        return index
    }
    export let category
    let plants=category.plants
    console.log(plants)
    console.log(plants.length)

    var plantIndex=getPlantIndex(plants)
</script>

<div class='wrapper'>

    {#each plantIndex as pIndex}
        <div class="index_wrapper">
            <div class="index">{pIndex["index"].toUpperCase()}:</div>
            <div class="title_list">

                {#each pIndex["plants"] as plant}
                    
                <div class='title'>
                    
                    <a href={`/document?category=${category.id}&document=${plant.title}`}>

                        {plant["title"].split('_').join(' ')}
                    </a>
                </div>
                {/each}
            </div>
        </div>
    {/each}
</div>

<style>
    .index_wrapper{
        padding-bottom: .5em;
    }
    .wrapper{
        font-size: .95em;
    }
    .index{
        padding: .25em;
        font-weight: 500;
        opacity: .8;
    }
    .title_list{
        padding: .25em 1.5em;
    }
    .title{
        padding: .2em;
        text-transform: capitalize;
        
    }
    a{
    
        text-decoration: none;
        color: #225ED1 ;
    }
    a:hover{
        text-decoration:underline
    }
</style>