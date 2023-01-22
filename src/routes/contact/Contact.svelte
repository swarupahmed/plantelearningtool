<script>
    var adminEmail='hassan@hstu.ac.bd'
    var sub='';
    var body='';
    var subPlaceholder='Feedback for Plant E-learning tool';
    $: mailSub=sub.length>0?sub:subPlaceholder;
    $: mailUrl=`mailto:${adminEmail}?subject=${mailSub}&body=${body}`
</script>

<section>
    <h4>Address</h4>
    <div>
            <p>Hajee Mohammed Danesh Science and Technology University, Dinajpur-5200</p>
    </div>

    <h4>Phone Numbers</h4>
    <div>
        <p>01719468999</p>
        
    </div>
    <h4>Send us an Email</h4>
    <div class="input-wrapper">

        <label for="sub">Subject</label>
        <input type="text" name="sub" bind:value={sub} placeholder={subPlaceholder}>
    </div>
    <div class="input-wrapper">

        <label for="body">Message</label>
        <textarea name="body" bind:value={body} rows="6" placeholder="write your message..."></textarea>
    </div>

    <a href={mailUrl}>
        <button on:click={()=>console.log(mailUrl)}>Send</button>
    </a>
</section>

<style>
    button{
        width: 316px;
        padding: 8px;
        background-color: #B5189C;
        color: white;
        border: none;
        font-size: 1em;
        border-radius: 3px;
    }
    .input-wrapper{
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    input,textarea{
        width: 300px;
        padding: 8px;
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
    h4{
        text-align: center;
        color: #B5189C;
        font-weight: 600;
        font-size: 1.1em;
        margin: 0;
    }
    p{
        font-weight: 400;
        font-size: .9em;
        margin: .5em;
        text-align: center;
    }
</style>