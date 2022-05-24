 =  // assignment
 == // compare the data
 === // compare the data and datatype

var a = 10 //assignment
var b = "10"

a == b   //it will only compare the data
true
a===b //it will only compare the data & datatype
false

var c = 20
a == c
false

var a = true
var b = "true"
a == b
false

var a = 1
var b = true
a == b
true
a === b
false


var a = "john"
var b = "John"
a == b
false

a>b
false
a<b
true
a <=b
true
a => b (wrong)
a => b
a >= b (right)
false
a !== b
true

////negation
var a = true
!a
false

var a = false
!a
true

var a = 1
!a
false

var a = 0
!a
true

var a = -1
!a
false

var a = "hii"
!a
false

truthy => any number except 0 weather +ve or -ve, any string, true
falsy => 0, false, null, undefined

isNaN(1) is not a number
false
isNaN('Hii')
true
isNaN(true)
false
isNaN('true')
true