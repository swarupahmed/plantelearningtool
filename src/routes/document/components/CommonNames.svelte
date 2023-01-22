<script>
    export let plant
    let commonName=plant.name.commonName
    let englishName=plant.name.englishName
    
</script>


<section>
    <div class="wrapper">
        <span class='title'>Common Name : </span>
        <span class='text'> {commonName}</span>
    </div>
    <div class="wrapper">
        <span class='title'>English Name : </span>
        <span class='text'> {englishName}</span>
    </div>
</section>

<style>
    .wrapper{
        padding: .5em 0;
    }
    section{
        padding: 1em 2em;
    }

    .title{
        color:#5E2B2B
    }

    span{
        font-size: .95em;
    }
</style>