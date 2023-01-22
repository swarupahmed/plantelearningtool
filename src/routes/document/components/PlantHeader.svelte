<script>
    export let plant
    let title=plant.id.split('_').join(' ')
    let scientificName=plant.name.scientificName

</script>

<section>
    <p class='title'>{title}</p>
    <p class='sname'><i>{scientificName}</i></p>
</section>

<style>
    .title{
        font-weight: 600;
        font-size: 1.1em;
        text-transform: capitalize;
    }
    p{
        font-weight: 500;
        margin:  .5em 0;
        text-align: center;
        font-size: .95em;
    }

    section{
        padding: 1.2em;
    }

</style>