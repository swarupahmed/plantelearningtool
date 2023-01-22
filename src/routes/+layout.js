/** @type {import('./$types').LayoutLoad} */
export async function load({fetch}) {
    var catRes=await fetch('/api/categories')
    var cat=await catRes.json()
    console.log('catres',cat)
    return {
        categories:cat
    };
  }