var > we can redcalre and reassign
let > we cannot redcalre but can reassign
const > we cannot redcalre nor reassign

var a = 10
var a // declare the variable
a = 10 // assignment


> var a = 10
> a
10
> var a = 20
> a = 30
30
> a
30
> 

> let b = 10
undefined
> b
10
> let b = 20
Uncaught SyntaxError: Identifier 'b' has already been declared
> b = 20
20
> 

> const c = 10
undefined
> const c = 11
Uncaught SyntaxError: Identifier 'c' has already been declared
> c = 11
Uncaught TypeError: Assignment to constant variable.
> 
