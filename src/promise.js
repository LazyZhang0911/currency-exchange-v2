export function processData(input){
    return new Promise((resolve, reject)=> {
        if(input){
            const result = input.toUpperCase();
            resolve(result);
        }else{
            reject("Input is required");
        }})
}