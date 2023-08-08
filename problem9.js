// you will be provided an array of numbers. you have to return array of prime numbers from that input array.

function primeNumbers(arr) {
    if (Array.isArray(arr) !== true) {
        return "Please provide an array as input"
        
    }
    else{
        let primes = [];
        for (const item of arr) {

            if(item>1){
                let isPrime = true;

                for (let index = 2; index < item; index++) {
                    if (item%index === 0) {
                        isPrime = false;
                        break
                    }
                    
                }
                if (isPrime === true) {
                    primes.push(item)
                    
                }
            }
            
        }
        return primes;
    }
    
}

let nums = [10,20,25,9,7,16,17,19,0,70,66,99]
console.log(primeNumbers(nums));