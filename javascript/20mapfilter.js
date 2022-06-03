Map
> map is use to iterate over the array 
> it always return the same length of output as input array
> it is use to modify/apply logics on values(Add,mul,bind in html)

var a = [4,58,67,34,51,9,21,71,16,5]
a.map((data) => {return data *2})
[8, 116, 134, 68, 102, 18, 42, 142, 32, 10]


var a = [4,58,67,34]
a.map((data) => {return `<p>${data *2}</p>`})
(4) ['<p>8</p>', '<p>116</p>', '<p>134</p>', '<p>68</p>']

Filter
> it use to filter out the data
> it may or may not return the same length of output as input Array
> it only return those value for which condition/output is true


var a = [4,58,67,34,51,9,21,71,16,5]
a.filter((data) => {return data>30})
[58, 67, 34, 51, 71]

var a = [4,58,67,34,51,9,21,71,16,5]
a.map((data) => {return data>30})
[false, true, true, true, true, false, false, true, false, false]


var city =  ['Delhi', 'Helsinki', 'Venice', 'Amsterdam', 'Boston', 'Pune']
city.filter((data) => {return data.indexOf('a')>-1})
['Amsterdam']

var city =  ['Delhi', 'Helsinki', 'Venice', 'Amsterdam', 'Boston', 'Pune']
city.filter((data) => {return data.indexOf('i')>-1})
(3) ['Delhi', 'Helsinki', 'Venice']

var a = [-1,0,1,2,3]
a.filter((data) => {return data*2})
[-1, 1, 2, 3]

a.map((data) => {return data*2})
[-2, 0, 2, 4, 6]