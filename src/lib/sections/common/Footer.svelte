<script>
	import LocationIcon from "$lib/component/svg_icons/LocationIcon.svelte";

</script>
<section>

    <article>
        <div class="links">
            <ul>
               
                <li><a href="/about">About</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/reference">Reference</a></li>
                <li><a href="/contributors">Contributors</a></li>
                <li><a href="/contacts">Contacts</a></li>
            </ul>
            <ul>
                <li><a href="/usage_policy">Usage Policy</a></li>
            </ul>
        </div>
        <div class="info">
            <LocationIcon width="1.5em"/>
            <p class="location">
                Hajee Mohammed Danesh Science and Technology University, Dinajpur-5200
            </p>
        </div>
     
    </article>
    <footer>
        <p>Developer @<a href="https://jajabor.com">Swarup Ahmed</a></p>
    </footer>
</section>

<style>
    a{
        text-align: center;
        color:#4d4c4c;
    }
    section{
        margin-top: 8em;
    }
    footer{
        background-color: #D9D9D9;
        
    }
    footer>p{
        margin: 0;
        text-align: right;
        padding: 1.5em;
        font-size: .85em;
        color:#515151;
    }
    .info{
        max-width: 480px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding-inline: 1.5em;
    }

    article{
        display: flex;
        gap:1.5em;
        justify-content: space-between;

        margin-top: 3em;
        padding: 3em 0;
        background-color: #D9D9D9;
    }
    @media (max-width: 940px) {
        article{
            flex-direction: column;
            align-items: center;
        }
        .info{
     
        align-items: center;
      
    }
    .location{
        text-align: center;
    }
    footer>p{
        text-align: center;
    }
    }

    
   
    li{
        list-style: none;
        padding: .2em 0;
        font-size: .9em;
    }
    a{
        text-decoration: none;
        color: #343434;
    }
    a:hover{
        text-decoration: underline;
        color: #B5189C;
    }

    .links{
        width: 360px;
        display: flex;
        justify-content: space-between;
        
    }
    .location{
        width: 340px;
        text-align: right;
        color: #343434;
        font-size: .95em;
      
    }

    @media (max-width: 480px) {
        article{
            padding: 3em 0;
        }
        ul{
        list-style-type: none;
        padding-inline-start: 20px;
        padding-inline-end: 20px;
    }
    .location{
        text-align: center;
    }
    }
</style>