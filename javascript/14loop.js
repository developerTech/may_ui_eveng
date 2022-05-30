for
while
dowhile
for of
for in >>> object
////////////////////////////////
Map
filter

//////////for > help to print the series of value as well as help to iterate
for(starting,condition,increment)

for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var city = ['Delhi', 'Mumbai', 'Dubai', 'Paris', 'Boston', 'Pune']
for(i=0;i<city.length;i++){
    console.log(city[i])
}

Delhi
Mumbai
Dubai
Paris
Boston
Pune

var city = ['Venice', 'Amsterdam',['Red','Yellow','Green'], 'Boston', 'Pune']
for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])
    }
}


//////////
while
///////
var i = 10
while(i<5){
    console.log(i);
    i++
}

//////////
Do while
///////
var i = 10
do{
    console.log(i);
    i++
}
while(i<5)


/// for of
var city = ['Delhi', 'Mumbai', 'Dubai', 'Paris', 'Boston', 'Pune']
for(mycity of city){
    console.log(mycity)
}



var city = ['Venice', 'Amsterdam',['Red','Yellow','Green'], 'Boston', 'Pune']
for(mycity of city){
    if(Array.isArray(mycity)){
        for(Color of mycity){
            console.log(Color)
        }
    }else{
        console.log(mycity)
    }
}
