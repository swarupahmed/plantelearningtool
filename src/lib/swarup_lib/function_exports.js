// @ts-nocheck
export function downloadClientFile(file){
    const elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(file);
    elem.download = file.name; 
    elem.click()
}