localStorage
> presistant Storage
> wrt to browser
> we have to remove it manully

localStorage.setItem('myCity','Delhi')
undefined
localStorage.getItem('myCity')
'Delhi'
localStorage.removeItem('myCity')
undefined
localStorage.setItem('myCity','Delhi')
undefined
localStorage.setItem('ltk','843757384676437')
undefined

sessionStorage
> temporary Storage
> save wrt to tab
> remove as soon as you close the tab

sessionStorage.setItem("CountryCode","+91")
undefined
sessionStorage.getItem("CountryCode")
'+91'
sessionStorage.removeItem("CountryCode")
undefined
sessionStorage.setItem("CountryCode","+91")
undefined

cookies
> save wrt to website
> expire intime

document.cookie
document.cookie ="testCookie=cookiedata; expires=Fri, 27 May 2022 01:00:00 UTC"
'testCookie=cookiedata; expires=Fri, 27 May 2022 01:00:00 UTC'