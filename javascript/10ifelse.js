if(condition){
    // Do Something
}else{
    // do something
}

var a = 3535
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 3535 is odd

var a = 3534
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
VM45:3 Number 3534 is even

var uname = "Bhumika"
if(uname == "Priya"){
    console.log(`Hi ${uname} you are admin`)
}else if(uname == "Bhumika"){
    console.log(`Hi ${uname} you are super admin`)
}else{
    console.log(`Hi ${uname} you are unknown`)
}

var uname = "Shruti"
var role = "Admin"

if(role == "Admin"){
    if(uname == "Shruti"){
        console.log(`Hi ${uname} you are admin`)
    }else if(uname == "Bhumika"){
        console.log(`Hi ${uname} you are super admin`)
    }else{
        console.log(`Hi ${uname} you are unknown admin`)
    }
}else if(role == "User"){
    if(uname == "Priya"){
        console.log(`Hi ${uname} you are user`)
    }else if(uname == "Bhumika"){
        console.log(`Hi ${uname} you are super user`)
    }else{
        console.log(`Hi ${uname} you are unknown user`)
    }
}else{
    console.log(`Hi ${uname} you are unknown`)
}

var uname = "Amit"
var role = "Admin"

// both condition should match
if(uname == "Amit" && role == "Admin"){

}

// Any one should match
if(uname == "Amit" || role == "Admin"){

}


var a = 0
if(a){
    console.log('Hiiii')
}else{
    console.log('Bie')
}
>Bie

var a = 1
if(a){
    console.log('Hiiii')
}else{
    console.log('Bie')
}
> Hiiii
var a = -1
if(a){
    console.log('Hiiii')
}else{
    console.log('Bie')
}
> Hiiii


(single line if else condition)
condition ? if condition true : if condition false

var a = 10
a>10?"Hiii":"Bie"
'Bie'
var a = 10
a==10?"Hiii":"Bie"
'Hiii'


var a = 10
a>10?a+1:a-1
9
var a = 10
a==10?a+1:a-1
11