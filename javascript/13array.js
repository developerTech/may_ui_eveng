// Array is a collection of homogeneous as well as heterogeneous data type 
var a = ['Hii',"hello","Test"]  // array of string
var b = [1,6,77,33.4,5] // array of Number
var c = [true,true,false,true]  // array of boolean

var d = ['dfbdfb',435,436,true,345,'dgdf',false,false]

var city = ["Delhi","Helsinki","Venice","Amsterdam"]
undefined
city.length
4
city[0]
'Delhi'
city[1]
'Helsinki'
city[1]
'Helsinki'
city[city.length-1]
'Amsterdam'
typeof(city)
'object'


var city = ["Delhi","Helsinki","Venice","Amsterdam"]
undefined
city.push('Boston')
5
city
(5) ['Delhi', 'Helsinki', 'Venice', 'Amsterdam', 'Boston']
city.push('Pune')
6
city
(6) ['Delhi', 'Helsinki', 'Venice', 'Amsterdam', 'Boston', 'Pune']

var city =  ['Delhi', 'Helsinki', 'Venice', 'Amsterdam', 'Boston', 'Pune']
undefined
city.pop()
'Pune'
city
(5) ['Delhi', 'Helsinki', 'Venice', 'Amsterdam', 'Boston']
city.pop(2)
'Boston'
city.pop(2000)
'Amsterdam'

var city =  ['Delhi', 'Helsinki', 'Venice', 'Amsterdam', 'Boston', 'Pune']
undefined
city.pop()
'Pune'
city
(5) ['Delhi', 'Helsinki', 'Venice', 'Amsterdam', 'Boston']
city.pop(2)
'Boston'
city.pop(2000)
'Amsterdam'
city.shift()
'Delhi'
city.unshift('Nice')
3
city
(3) ['Nice', 'Helsinki', 'Venice']

push > add in the end of array
pop > always remove the last value of array
shift > remove the first value of array
unshift > add in the beginning of array

var city =  ['Delhi', 'Helsinki', 'Venice', 'Amsterdam', 'Boston', 'Pune']
undefined
city.slice(1)
(5) ['Helsinki', 'Venice', 'Amsterdam', 'Boston', 'Pune']
city.slice(2)
(4) ['Venice', 'Amsterdam', 'Boston', 'Pune']
city.slice(-1)
['Pune']
city.slice(0,-1)
(5) ['Delhi', 'Helsinki', 'Venice', 'Amsterdam', 'Boston']
city.slice(2,-4)
[]
city.slice(2,4)
(2) ['Venice', 'Amsterdam']

splice(index number, delete count, values)

var city =  ['Delhi', 'Helsinki', 'Venice', 'Amsterdam', 'Boston', 'Pune']

// remove one value from index number2
city.splice(2,1)
['Venice']

// on index number 3 dont remove but add 2 values
city.splice(3,0,'Dubai','Paris')
[]
city
(7) ['Delhi', 'Helsinki', 'Amsterdam', 'Dubai', 'Paris', 'Boston', 'Pune']

// on index number 1 remove  2 values and add 1 values
city.splice(1,2,'Mumbai')
(2) ['Helsinki', 'Amsterdam']
city
(6) ['Delhi', 'Mumbai', 'Dubai', 'Paris', 'Boston', 'Pune']

var city = ['Delhi', 'Helsinki', 'Amsterdam', 'Dubai', 'Paris', 'Boston', 'Pune']
city.indexOf('Amsterdam')
2
city.indexOf('Delhi')
0
city.indexOf('Mumbai')
-1
city.indexOf('Nice')
-1

var a = ['a','b','c',1]
var b = [1,3,7,4]
a+b
'a,b,c,11,3,7,4'
a.concat(b)
(8) ['a', 'b', 'c', 1, 1, 3, 7, 4]

var a = "Hii"
var b = ["Hiii"]
Array.isArray(a)
false
Array.isArray(b)
true

var city = ['Venice', 'Amsterdam',['Red',['Bmw','Audi','Merc'],'Yellow','Green'], 'Boston', 'Pune']

city[0]
'Venice'
city[2]
(4) ['Red', Array(3), 'Yellow', 'Green']
city[2][0]
'Red'
city[2][2]
'Yellow'
city[2][1]
(3) ['Bmw', 'Audi', 'Merc']
city[2][1][0]
'Bmw'