import { dev } from '$app/environment';
import { page } from '$app/stores';

export class Api {


    static async get(pathWithSlash) {

        var endPoint = pathWithSlash
        const res = await fetch(endPoint);
        console.log(' only res without Json',res)
        var resJson = await res.json();
        console.log('resJson',resJson)
        return resJson
    }
}