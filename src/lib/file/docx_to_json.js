// @ts-nocheck
import { PlantDocument } from '$lib/models/plant';
import { Document } from 'docxyz'

export async function convertDocxToJson(docxFilePath) {


    let document = new Document(docxFilePath);
    let paragraphs = [];

    let paraTextIndexes = []

    let sections = ['taxonomy', 'morphology,', 'image', 'picture', 'reference']
    for (let [pi, para] of document.paragraphs.entries()) {
        var trimmedText = para.text.trim()

        if (trimmedText.length) {
            if(trimmedText.toLowerCase().includes('taxonomy')){
                console.log('taxonomy found: ',trimmedText)
                paraTextIndexes.push(trimmedText)
            }
            if(trimmedText.toLowerCase().includes('morphology')){
                console.log('morpho found : ',trimmedText)
                paraTextIndexes.push(trimmedText)
            }
            if(trimmedText.toLowerCase().includes('image')){
                console.log('image found : ',trimmedText)
                paraTextIndexes.push(trimmedText)
            }
            if(trimmedText.toLowerCase().includes('picture')){
                console.log('picture found : ',trimmedText)
                paraTextIndexes.push(trimmedText)
            }
            if(trimmedText.toLowerCase().includes('reference')){
                console.log('reference found : ',trimmedText)
                paraTextIndexes.push(trimmedText)
            }
            paragraphs.push(trimmedText);
        }
    }


    var name, taxonomy, morphology, reference
    for (let i = 0; i < paraTextIndexes.length; i++) {
        var para = paraTextIndexes[i]
        var paraIndex = paragraphs.indexOf(para)
        var nextSI = i === paraTextIndexes.length - 1
            ? undefined
            : paragraphs.indexOf(paraTextIndexes[i + 1])
       
        if (para.toLowerCase().includes('taxonomy')) {
  
            name = PlantDocument.makeNameFromTexts(paragraphs.slice(0, paraIndex))
      
            taxonomy = PlantDocument.makeTaxonomyFromTexts(paragraphs.slice(paraIndex+1, nextSI))
        }
        
        if (para.toLowerCase().includes('morphology')) {

        
            morphology = PlantDocument.makeMorphologyFromTexts(paragraphs.slice(paraIndex+1, nextSI))
        }
        
        if (para.toLowerCase().includes('reference')) {
            reference = PlantDocument.makeReferenceFromTexts(paragraphs.slice(paraIndex+1, nextSI))
        }

    }
    // var plant = new PlantDocument()
    // console.log('paragraphs====', paragraphs)
    return { name, taxonomy, morphology, reference}
}