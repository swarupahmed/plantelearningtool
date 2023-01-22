// @ts-nocheck
import FuzzySearch from "fuzzy-search";
import fs from 'fs'



export let fuzzySearch= new  FuzzySearch([],['name.commonName','name.englishName','name.scientificName','taxonomy','morphology'], {
    caseSensitive: false,sort:true
  })

  export async function indexFuzzySearch(){

    const docParentFolder="static/plants"
    
    var cdirs=await mapDirs(docParentFolder)
    for (let i = 0; i < cdirs.length; i++) {
        const cdir = cdirs[i];
        var documentPaths=await mapDirs(`${docParentFolder}/${cdir}`)
        for (let dp = 0; dp < documentPaths.length; dp ++) {
            const dpath = documentPaths[dp];
            console.log('dpath',dpath)
            var rawdata=fs.readFileSync(`${docParentFolder}/${cdir}/${dpath}/${dpath}.json`)
            let document = JSON.parse(rawdata);
            fuzzySearch.haystack.push(document)
            console.log('haystack',fuzzySearch.haystack.length)
            // fuzzySearch= new  FuzzySearch(fuzzySearch.haystack,['name.commonName','name.englishName','name.scientificName','taxonomy','morphology'], {
            //   caseSensitive: false,sort:true
            // })

            var res=fuzzySearch.search('ash')
            console.log('fuzzySearch.search',res)
          
        }
    
    }
}

export function addFuzzyIndex(jsonPlant){
  fuzzySearch.haystack.push(jsonPlant)
  // fuzzySearch= new  FuzzySearch(fuzzySearch.haystack,['name.commonName','name.englishName','name.scientificName','taxonomy','morphology'], {
  //   caseSensitive: false,sort:true
  // })
  // fuzzySearch=indexFuzzySearch() //MAYBE TODO:
  console.log('haystack',fuzzySearch.haystack.length)
}

async function mapDirs(folder) {
    var files=fs.readdirSync(folder)
    var fFiles= files.filter(f=>!f.includes('.'))
    console.log('fFiles',fFiles)
    return fFiles
}
  //use in index and search and document