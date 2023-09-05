// get second largest number in an array of ints


const arr = [1,2,5,523,3626,264,6,426]

const findLargest = (arr) =>{
    let lar = 0;
    let secLar = -1
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];


        if(element > lar){
            secLar = lar;
            lar= element;
        }else if(element > secLar && element < lar) secLar = element;

    }
    return secLar;
}


console.log(findLargest(arr))