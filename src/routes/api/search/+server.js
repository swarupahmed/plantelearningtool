import { json } from '@sveltejs/kit';

import { fuzzySearch, indexFuzzySearch } from "$lib/globals/fuzzysearch"

console.log('running for first time root')



/** @type {import('./$types').RequestHandler}  */
export async function GET({ url }) {

    if(!fuzzySearch.haystack.length){
      await indexFuzzySearch()
    }
    var searchKey=url.searchParams.get('key')
    var documents = getSearch(searchKey,fuzzySearch)
    console.log('search result',documents)
// JSON.stringify(documents)
    return new Response( JSON.stringify(documents));
}

function getSearch(searchKey,searchIndex) {
    var result = []
    console.log('search index',searchIndex.haystack)
    if (searchIndex) {
        console.log('searchKey',searchKey)
      result = searchIndex.search(searchKey)
      result = result.map((d) => {
        // delete d.images
        delete d.morphology
        delete d.reference
        return d
      })
    }
    if (result.length > 12) {
      result = result.slice(0, 12)
    }
    return result
  }
  