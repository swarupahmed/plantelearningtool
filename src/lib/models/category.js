// @ts-nocheck
export class Category{
    constructor(id,title,families,plants,thumbnail){
        this.id=id
        this.title=title;
        this.families=families;
        this.plants=plants
        this.thumbnail=thumbnail
    }

    static fromJson(catJson){

        return new Category(catJson.id,catJson.title,catJson.families,catJson.plants,catJson.thumbnail)
    }
}