// @ts-nocheck
import fs from 'fs'

export function updateCategory(catJsonPath,categoryId,docId,plant){
    var catstr=fs.readFileSync(catJsonPath,'utf-8')
    var catjson=JSON.parse(catstr)

    console.log('catjson, updating')
    console.log(catjson)
    var catIndex=catjson.map(e=>e.id).indexOf(categoryId)
    var docTitles=catjson[catIndex].plants.map(e=>e.title)
    var docIndex=docTitles.includes(docId)?docTitles.indexOf(docId):undefined
    console.log('doc index for deleting',docIndex)
    console.log(docTitles,docId)

    console.log('catjson[catIndex].plants',catjson[catIndex].plants)

    if(docIndex!==undefined){
        console.log('common doc found',docIndex)
        catjson[catIndex].plants.splice(docIndex,1)
        console.log('spliced')
    } 
    var plnt=catjson[catIndex].plants
    var fam=catjson[catIndex].families
    plnt.push({title:plant.id,thumbnail:plant.images[0]})
    //families push
    plant.taxonomy.forEach(tx => {
        if(tx[0].toLowerCase().includes('family')){
            fam.push(tx[1])
        }
        
    })
    var setFam=new Set(fam)
    console.log('setFam',setFam)
    catjson[catIndex].families=Array.from(setFam)
    console.log('after setFam ',fam)
    console.log('new length',catjson[catIndex].plants.length)
    console.log(catjson)
    if(p)
    return catjson
    
}

export function handleDirectoryExistance(catPath, docPath) {
    console.log('catPath,docPath')
    console.log(catPath,docPath)
    var overRiding=false
    if (fs.existsSync(catPath)) {
        if (fs.existsSync(docPath)) {
            console.log('deleting',docPath)
            fs.rmSync(docPath, { recursive: true, force: true })
            overRiding=true

        }
        console.log('making',docPath)
        fs.mkdirSync(docPath);
    } else {
        console.log('making',catPath)
        fs.mkdirSync(catPath);
        console.log('making',docPath)
        fs.mkdirSync(docPath);
    }
    return {overRiding}
}

export async function saveFile(path, file) {
    console.log('file saving   >',file);

    var arrayBuffer = await file.arrayBuffer();
    var dataBuffer = Buffer.from(arrayBuffer);

    fs.writeFileSync(path, dataBuffer);
    console.log('file saved>', path);
    return path
}

export async function getDocument(category,title){
    var document=fs.readFileSync(`static/plants/${category}/${title}/${title}.json`,'utf-8')
    
    return document;
}

