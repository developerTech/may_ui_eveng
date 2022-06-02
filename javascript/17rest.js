function add(a,b){
    return a+b
}

add(1,2)
3
add(1,2,3)
3
add(1)
NaN


function add(...args){
    console.log(args)
}

function add(...args){
    console.log(args)
}
undefined
add(1,5,9)
VM505:2 (3) [1, 5, 9]
undefined
add(1,5,9,5)
VM505:2 (4) [1, 5, 9, 5]
undefined
add(1)
VM505:2 [1]

// rest allow to pass ant number of parameters
function add(...args){
    let out = 0
    for(data of args){
        out = out+data
    }
   return out
}

add(3,7,5)
15
add(3,7,5,1)
16

//spread
var a = [3,7,9,4]
function add(a,b,c,d){
    return a+b+c+d
}

add(a)
'3,7,9,4undefinedundefinedundefined'


var a = [3,7,9,4]
function add(a,b,c,d){
    return a+b+c+d
}

add(...a)
23

var a = [1,4,7]
var b =[9,0,1]

var c = [...a,...b]
[1, 4, 7, 9, 0, 1]




var a = [3,7,9,4]
function add(...args){  ///rest
    let out = 0
    for(data of args){
        out = out+data
    }
   return out
}

add(...a) ///spread

... in function defination is rest
... in function calling is spread