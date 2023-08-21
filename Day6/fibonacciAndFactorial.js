// //  

// const getFactr = (n , fact = 1, increNum = 1) => {
   
//     if(increNum === n) return fact;
    
//     increNum++;
//     fact = fact * increNum ;
//     return getFactr(n  , fact , increNum)
    
// }
// const n = 5;
// const factorial = getFactr(n , 1 , 1);
// console.log(`Factorial of ${n} is ${factorial}`);



function ticketNumberGen(type, res){
     const n = type;
     const r = Number(res);
      if (n < r) {
         return false;
     }
     const nFactorial = factorial(n);
     const nMinusRFactorial = factorial(n - r);
     const result = nFactorial / (nMinusRFactorial);
     return result; 
     }
    
function factorial(num) {
     if (num === 0 || num === 1) {
     return 1;
     } else {
     return num * factorial(num - 1);
     }
     }

    console.log(ticketNumberGen( 9 ,2 )) 