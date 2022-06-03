regex
> regular expression
// if pattern match it will return the array else null
^$

var a = "hii"
a.match("^([a-z])$")

var a = "hii"
a.match("^([a-z])$")
null
// only match for single charater od string in lowercase
var a = "h"
a.match("^([a-z])$")
(2) ['h', 'h', index: 0, input: 'h', groups: undefined]

// exact match 3
var a = "hii"
a.match("^([a-z]{3})$")
(2) ['hii', 'hii', index: 0, input: 'hii', groups: undefined]

// match between range of 3 to 8
var a = "hii"
a.match("^([a-z]{3,8})$")
(2) ['hii', 'hii', index: 0, input: 'hii', groups: undefined]

// match between any length of charater
var a = "hii"
a.match("^([a-z]+)$")

var a = "Hii"
a.match("^([A-Za-z]+)$")
(2) ['Hii', 'Hii', index: 0, input: 'Hii', groups: undefined]

var a = "Hii8"
a.match("^([A-Za-z0-9$]+)$")
(2) ['Hii', 'Hii', index: 0, input: 'Hii', groups: undefined]

var b = 9876543212
b.match("^([0-9]{10})$")
VM184:2 Uncaught TypeError: b.match is not a function
    at <anonymous>:2:3

var b = 9876543212
b.toString().match("^([0-9]{10})$")
(2) ['9876543212', '9876543212', index: 0, input: '9876543212', groups: undefined]

var str = "this hat is hot haat"
str.match(/h.t/g)
['hat', 'hot']

str.match(/h..t/g)
['haat']

var email = "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ['a@a.com', 'a', 'a', 'com', index: 0, input: 'a@a.com', groups: undefined]
var email = "@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "a@.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null