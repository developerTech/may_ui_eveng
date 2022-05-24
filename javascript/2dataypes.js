var a = true;
var b = false;
true is equal to 1
false is equal to 0

true+true = 2
true+false
1
false+false
0
10+true
11
10/false
Infinity
"a"+true
'atrue'
"true"+"true"
'truetrue'
"true"-"true"
NaN

//es5
"10"+"5"
'105'
var a = "10"
var b = "5"
a+b
'105'
parseInt(a)
10
parseInt(b)
5
parseInt(a)+parseInt(b)
15

var a = "hii"
parseInt(a)
NaN

var a = "10.11"
var b = "5.2"
parseInt(a)+parseInt(b)
15
parseFloat(a)+parseFloat(b)
15.309999999999999

var a = "10"
var b = "5"
parseFloat(a)+parseFloat(b)
15

var a = "Delhi123"
var b = "123Delhi"
var c = "123Delhi456"
parseInt(a)
NaN
parseInt(b)
123
parseInt(c)
123

///es6
var a = "10.11"
var b = "5.2"
Number(a)+Number(b)
15.309999999999999

var a = "Delhi123"
var b = "123Delhi"
Number(a)
NaN
Number(b)
NaN