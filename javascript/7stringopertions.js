var city = "lonDOn"
undefined
city.toUpperCase()
'LONDON'
city.toLowerCase()
'london'
city.length
6
city[0]
'l'
city.charAt(0)
'l'
city.at(0)
'l'

city.at(5)
'n'
city[city.length-1]
'n'
city.charAt(-1)
''
city.at(-1)
'n'
city.at(-2)
'O'

var uname = "  Nikita  "
uname.trim()
'Nikita'

var uname = "  Nikita .  "
uname.trim()
'Nikita .'

var a = 'John'
var b = 'john'

undefined
 a==b
false
a.toUpperCase() == b.toUpperCase()

var city = "amsTErDaM"
"Amsterdam"

var city = "amsTErDaM"
undefined
city.slice(1)
'msTErDaM'
city.slice(2)
'sTErDaM'
city.slice(2,6)
'sTEr'
city.slice(0,4)
'amsT'
city.slice(-1)
'M'
city.slice(-2)
'aM'
city.slice(0,-2)
'amsTErD'
city.slice(2,-2)
'sTErD'
city.slice(-2,2)
''
city.slice(-4,-1)
'rDa'


var city = "amsTErDaM"
undefined
city.at(0).toUpperCase()
'A'
city.slice(1).toLowerCase()
'msterdam'
city.at(0).toUpperCase()+city.slice(1).toLowerCase()
'Amsterdam'
var city= "paRIS"
undefined
city.at(0).toUpperCase()+city.slice(1).toLowerCase()
'Paris'

var a = "I am Learning JavaScript"
undefined
a.replace('JavaScript','JS')
'I am Learning JS'
var a = "JavaScript I am Learning JavaScript"
undefined
a.replace('JavaScript','JS')
'JS I am Learning JavaScript'
a.replace(/JavaScript/g,'JS')
'JS I am Learning JS'
var uname = "  Nikita .  "
undefined
uname.replace(/ /g,'').replace('.','')
'Nikita.'

var url = "https://github.com/Aakashdeveloper/NestJs-Api"
url.split('/')
(5) ['https:', '', 'github.com', 'Aakashdeveloper', 'NestJs-Api']
var a = url.split('/')
undefined
a[a.length-1]
'NestJs-Api'

var a = 'JS I am Learning JS'
undefined
a.split(' ')
(5) ['JS', 'I', 'am', 'Learning', 'JS']
var a = "JavaScript"
undefined
a.split('')
(10) ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
var a = ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
undefined
a.toString()
'J,a,v,a,S,c,r,i,p,t'
a.toString().replace(/,/g,'')
'JavaScript'

var a = 10
a.toString()
'10'
""+a
'10'