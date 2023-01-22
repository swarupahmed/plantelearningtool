<script>
// @ts-nocheck

    import { PlantDocument } from "$lib/models/plant";

    // @ts-nocheck
    import convertToWebp from "webp-converter-clientside";


    let fileInput;
    let docxFiles;
    let imageFiles;
    let files;
    let avatar;
    export let data;
    let categories=data.categories
    let categoryIds=categories.map(e=>e.id)
    let selectedCategory
    let password
    let passWordInputVisible=false
    let error
    let confirmbtnDisabled=false
    console.log(data)

 


    async function convertImage(file) {
        // var file=imageFiles[0]
        const convertedFile = await convertToWebp(file, 0.35);

        console.log(file.name, file.length);
        console.log(convertedFile.name, convertedFile.length);
        return convertedFile
    }

    async function getFormData() {
        const formData = new FormData();
        formData.append("docx", docxFiles[0]);
        if (!imageFiles) {
            //popup to add images :or: form validation
            return formData;
        }
        for (let i = 0; i < imageFiles.length; i++) {
            // const file = imageFiles[i];
            const file =await convertImage(imageFiles[i]);
            formData.append("image", file);
        }
        return formData;
    }
    async function uploadFormData(url, formData) {
        console.log(formData)
        console.log(url, formData);
        try {
            
            var res=await fetch(url, {
                method: "POST",
                body: formData,
            })
            if(res.status>=500){
                error=res.statusText
                console.log(error,'error')
            }
            return true

        } catch (err) {
            error=err
            return false
        }
            
     
    }

    async function uploadData() {
        error=undefined
        confirmbtnDisabled=true
        console.log("uploading");
       
        console.log('selected category',selectedCategory)
        if(!imageFiles?.length){
            error='please select Images'
        }

        if(!docxFiles?.length){
            error='please select a docx file'
        }

        if(selectedCategory==='none'){
            error='please select a category'
        }
        if(!error){
            await uploadFormData(`/api/document?category=${selectedCategory}&password=${password}`, await getFormData());
        }
        passWordInputVisible=false
        confirmbtnDisabled=false
        ///////TODO page.goto(doc)
        // var docId=PlantDocument.makedocId(docxFiles[0].name)
        // var r2=await fetch(`/api/document?category=${selectedCategory}&document=${docId}`)
        // console.log('doc response saved with',await r2.json())

    }
  
</script>

<div class="container">
  
    <div class="top">

        <select name="category" id="category_selector" bind:value={selectedCategory} on:change={()=>console.log('selectedCategory',selectedCategory)}>
            <option value="none" selected disabled hidden>Select a Category</option>
            <!-- svelte-ignore missing-declaration -->
            {#each categories as cat}
            <option  style="font-size: 1.1em;" value={cat.id}>{cat.title}</option>
                
            {/each}
        </select>
    </div>

    <label id='docx-to-upload-label'>
        <div class='docx-holder centered-flex'>
            <div class="centered_text">Choose docx</div> 

           {#if docxFiles&&docxFiles.length}
           <div class='choose-again'>choose again</div>
            <div>{docxFiles[0].name}</div>
           {/if}
        </div>
        <input
            class="hidden"
            id="docx-to-upload"
            type="file"
            accept=".docx"
            style="display: none"
            bind:files={docxFiles}
            bind:this={fileInput}
            on:change={() => console.log("docx selected")}
        />
    </label>
    <label id='file-to-upload-label'>
        <div class='image-holder centered-flex'>
           <div class="centered_text">Choose images (multiple)</div> 
            {#if imageFiles&&imageFiles.length}
            <div class='choose-again'>choose again</div>
            {#each imageFiles as ifile}
                
            <div><img class="chosen-image" src={URL.createObjectURL(ifile)} alt=""></div>
            <!-- <div>{ifile.name}</div> -->
            {/each}
           {/if}
        </div>
        <input
            class="hidden"
            id="file-to-upload"
            type="file"
            multiple
            accept=".png,.jpg"
            style="display: none"
            bind:files={imageFiles}
            bind:this={fileInput}
           
        />
    </label>

    {#if passWordInputVisible}
    <label for="password"> 
        <div style="padding: 4px; text-align: center;">password</div>
        <input style="padding: 4px;" type="password" name='password' bind:value={password}>
    </label>
    
    <button class="btn" disabled={confirmbtnDisabled} on:click={() => uploadData()}>Confirm</button>
    {:else}
    <button class="btn" on:click={() => passWordInputVisible=true}>Upload Document</button>
    {/if}
    {#if error}
        <div style="color: red;">!:  {error}</div>
    {/if}

</div>


<style>

    select{
        padding: 6px;
    }
    .btn{
        padding: 6px;
        font-size: .8em;
    }
    .container{
        font-size: 1.2em;
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: center;
        padding: 16px;
    }
    .docx-holder{
        background-color: rgb(243, 255, 255);
        border-radius: 6px;
        padding: 12px;
        width:280px;
        border:1px solid grey;

    }
    .image-holder{
        border-radius: 6px;
        background-color: azure;
        padding: 12px;
        width:280px;
        border:1px solid grey
    }
    .centered-flex{
        display: flex;
        flex-direction: column;
        gap: 4px;
        align-items: center;
    }


    .centered_text{
        text-align: center;
    }
    .chosen-image{
        width: 150px;
        height: 150px;
    }
    .choose-again{
        padding: 4px;
        border: 1px solid gray;
        border-radius: 4px;
    }
</style>
