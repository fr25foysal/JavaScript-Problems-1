// function name sumOfN(). you will be provided a number n. you have to calculate the total of all numbers between 1 to n . use function recursion



function sumOfN(n) {
    if (typeof n !== "number" || n <= 0) {
        return "Please provide a valid number as an input"
    }
    else{
        if (n === 1) {
            return 1
            
        }
        else{
            let sum = n + sumOfN( n-1)
            return sum
        }
    }
    
}

console.log(sumOfN(0));



// function sumOfN(n) {
//     if (typeof n !== "number") {
//         return "Please provide a valid number as an input"
//         
        
//     }
//     else{
//         let sum= 0
//         for (let I = 1; I <= n; I++) {
//             const element =I;

//             sum +=I
            
//         }
//         return sum
//     }
    
// }

// console.log(sumOfN(3));