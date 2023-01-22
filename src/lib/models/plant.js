// @ts-nocheck
export class PlantDocument {
    constructor(id,name, taxonomy, morphology, reference,images) {
        this.id=id;
        this.name = name;
        this.taxonomy = taxonomy;
        this.morphology = morphology;
        this.reference = reference;
        this.images = images;
    }

    toJson(){
        return {
            'id':this.id,
            "name":this.name,
            "taxonomy":this.taxonomy, //[]
            "morphology":this.morphology, //[]
            'reference' :this.reference, //[]
            'images':this.images //[]
        }
    }

    static makedocId(filename){
        var title=filename.split('.')[0]
        return title.toLowerCase().split(' ').join('_')
    }
    static makeNameFromTexts(texts){
     console.log('name texts: ',texts)
        var cName = texts[0].split(':')[1].trim()
        var eName = texts[1].split(':')[1].trim()
        var sName = texts[2].split(':')[1].trim()
        var name={
            "commonName": cName, 
            "englishName": eName,
            "scientificName": sName
        }
        console.log(name)
        return name
      
    }

    static makeTaxonomyFromTexts(texts){
        var taxs=[]
        for (const txt of texts) {
            taxs.push(txt.split(':').map(e=>e.trim()))
        }
        console.log('taxonomies===',taxs)
        return taxs
    }
    static makeMorphologyFromTexts(texts){
        var morphs=[]
        for (const txt of texts) {
            morphs.push(txt.split(':').map(e=>e.trim()))
        }
        console.log('morphologyes===',morphs)
        return morphs
    }
    static makeReferenceFromTexts(texts){
        console.log('references===',texts)
        return texts
    }

    
}


