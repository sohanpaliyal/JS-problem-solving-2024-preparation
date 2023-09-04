
const getFactr = (n , fact = 1, increNum = 1) => {
   
    if(increNum === n) return fact;
    
    increNum++;
    fact = fact * increNum ;
    return getFactr(n  , fact , increNum)
    
}
const n = 5;
const factorial = getFactr(n , 1 , 1);
console.log(`Factorial of ${n} is ${factorial}`);



const fibonacci = (  number , first = 0 , second = 1  ) => {
    const sum = first + second;
    console.log(`the fibonacci of number ${first} & ${second} is = ${sum}`) 
    first++;
    second++;
    if(number < second) return 
    return fibonacci(number , first , second )
}



// fibonacci(10)


// [a ,b] = [b ,a]

// console.log("a , b" ,  a , b )

// o(n)




const checkPrimaryNumber = (number)=>{
    if(number < 1) return false;
   let isPrime  = true;
   for (let i = 2; i < number ; i++) {
     
        if(number % i === 0 ){
            isPrime = false;
            break;
        }
    
   }
   return isPrime;
}


// console.log(checkPrimaryNumber(47))
