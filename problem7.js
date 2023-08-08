// function name printDetails(). you will be provided an object. you have to use the properties of the object and make a meaning full sentence. if there are any property missing you have to print there (nai);

function printDetails(obj){
    if (typeof obj !== 'object') {
        return "Please provide an array as input"
        
    }
    else{

        const name = obj["name"] || "nai"
        const Age = obj["Age"] || "nai"
        const address = obj["address"] || "nai"
        let Output = "My name is "+ name + "."+ " I'm "+ Age + " years old. I live in " + address + "."
        return Output

    }
}

let obj= {
    name: "Foysal Rahman",
    Age: 20 ,
    address: "Dinajpur"
}

console.log(printDetails(obj));