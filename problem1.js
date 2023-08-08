// এমন একটা ফাংশন বানাতে হবে যেটা একটি সংখ্যা ইনপুট নিবে। function টির নাম হবেঃ isInteger()। আউটপুট হিসেবে একটি boolean রিটার্ন করবেঃ

// সংখ্যাটি integer হলে true রিটার্ন করবে। অন্যথায় false রিটার্ন করবে।

function isInteger(x){

    if(typeof x !== "number"){
        return "Please Provide a Number as Input"
    }
    else{
        if(x%1==0){
            return true
        }
        else{
            return false
        }
    } 
    
}

let output = isInteger('20.1')

console.log(output);
