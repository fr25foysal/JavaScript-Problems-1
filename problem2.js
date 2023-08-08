// ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে

function isJavaScriptFile(x){
    if (typeof x !== 'string') {
        return "Please provide valid file name (String)"
    }
    else{
        if (x.toLowerCase().endsWith(".js") === true) {
            return true 
        }else{ 
            return false
        }
    }

}

let fileName = 10
console.log(isJavaScriptFile(10));