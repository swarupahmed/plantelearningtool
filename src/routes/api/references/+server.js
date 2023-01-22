import { fuzzySearch } from "lib//globals/fuzzysearch";

export async  function GET({ url }) {
    var references=await getReferences()
    console.log('references',references)

    // var cat=url.searchParams.get('category')
    // var doc=url.searchParams.get('document')
    // var document=await getDocument(cat,doc)
    return new Response(JSON.stringify(references));
}

async function getReferences(){
    var refs=[]
    fuzzySearch.haystack.forEach((e)=>refs=[...refs,...e.reference])
    var set =new Set(refs)
    return Array.from(set)
}