// @ts-nocheck
import { convertDocxToJson } from '$lib/file/docx_to_json';
import { addFuzzyIndex } from '$lib/globals/fuzzysearch';
import { PlantDocument } from '$lib/models/plant';
import fs from 'fs'
import { getDocument, handleDirectoryExistance, saveFile, updateCategory } from './helpers';

/** @type {import('./$types').RequestHandler}  */
export async function GET({ url }) {


    var cat=url.searchParams.get('category')
    var doc=url.searchParams.get('document')
    var document=await getDocument(cat,doc)
    return new Response(document);
}


export async function POST(param) {
    let  password='abcd1234'
    // console.log('constructor',param.);
    console.log('my param', param.request);
    // const data = JSON.parse((await param.request.body.read()).toString());

    var formData = await param.request.formData()
    var categoryId = new URLSearchParams(param.request.url.split('?')[1]).get('category')
    var paramPassword = new URLSearchParams(param.request.url.split('?')[1]).get('password')
    console.log('paramPassword',paramPassword)
    if(password!==paramPassword){
        throw error('501', 'Password does not match') 
    }
    console.log('category', categoryId)

    var docxFile = formData.get('docx')
    var imageFiles = formData.getAll('image')

    console.log('Files', docxFile, imageFiles);
    var possibleOverRiding = false

    
    const docId=PlantDocument.makedocId(docxFile.name)
    var catJsonPath=`static/plants/categories.json`
    var catDirPath = `static/plants/${categoryId}`
    var docDirPath = `static/plants/${categoryId}/${docId}`
    console.log('0docPath',docDirPath)
    possibleOverRiding = handleDirectoryExistance(catDirPath, docDirPath);
    var newDocxPath=`${docDirPath}/${docxFile.name}`
    await saveFile(newDocxPath, docxFile);
    console.log('docx pathname', newDocxPath)
    var docxJson = await convertDocxToJson(newDocxPath)
    var validdoc=docxJson.name&& docxJson.name.commonName &&docxJson.name.scientificName &&docxJson.name.englishName && docxJson.taxonomy && docxJson.taxonomy.length
    if(!validdoc){
        throw error(501,'Document Must have Common, English & Scientific Name, and Taxonomy. use linebreaks/new lines where necessary ');
    }




    console.log(possibleOverRiding.overRiding)
    try {
        
        for (let i = 0; i < imageFiles.length; i++) {
            const imageFile = imageFiles[i];
            
            var pathName = `${docDirPath}/${imageFile.name}`
            await saveFile(pathName, imageFile);
        }
        var imageFileNames=imageFiles.map(e=>e.name)
        console.log(imageFileNames)
        console.log('docxJson',docxJson)
        var plant=new PlantDocument(docId,docxJson.name,docxJson.taxonomy, docxJson.morphology, docxJson.reference,imageFileNames)
        console.log('plant.toJson()')
        console.log(plant.toJson())
  
        var category=updateCategory(catJsonPath,categoryId,docId,plant)
        fs.writeFileSync(catJsonPath,JSON.stringify(category))
        var docJsonPath=`${docDirPath}/${docId}.json`
        fs.writeFileSync(docJsonPath,JSON.stringify(plant.toJson()))
        addFuzzyIndex(plant.toJson())
      //TODO:
        return new Response(String('document saved'))
    } catch (err) {
        console.log(err)
        throw error('501', 'err')

    }
}

