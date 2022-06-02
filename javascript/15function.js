function
method
arrow function
IFFI
Generator Functions
////////////////////////////////////////////////////////////////
var a = 10
var b = 20
a+b
30
///////////
keyword nameoffunction(parameters){
    return output
}

function add(a,b){
    return a+b
}

add(1,2)
3
add(5,0)
5
add(8,123)
131
add("hi","Aakash")
'hiAakash'

function isEven(userInput){
    let out;
    if(userInput%2==0){
        out = `Number ${userInput} is even`
    }else{
        out =  `Number ${userInput} is odd` 
    }
    return out
}

isEven(5)
'Number 5 is odd'
isEven(52)
'Number 52 is even'

////////////////Method
>> function assign to variable

let add = function(a,b){
    return a+b
}

add(3,7)

////////////////arrow>es6
let add = (a,b) => {return a+b}
add(4,8)
12