// @ts-nocheck
import fs from 'fs'

/** @type {import('./$types').RequestHandler}  */
export async  function GET({ url }) {
    var categories=await getCategories()

    // var cat=url.searchParams.get('category')
    // var doc=url.searchParams.get('document')
    // var document=await getDocument(cat,doc)
    return new Response(categories);
}





  async function getCategories(){
    var catJsonPath=`static/plants/categories.json`
    var categories=fs.readFileSync(catJsonPath,'utf-8')
    console.log('categories from file----',categories)
    return categories;
}