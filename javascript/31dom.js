// document object modal
// this is the way to access/manuplute html using javascript
> tagname
> className
> id

document.getElementsByTagName('h1')
HTMLCollection [h1]
document.getElementsByTagName('a')
HTMLCollection(24) [a, a, a, a, a, a, a, a, a, a.scroll, a.scroll, a.scroll, a.scroll, a.scroll, a, a, a, a, a, a, a, a, a, a#toTop, toTop: a#toTop]
document.getElementsByTagName('h1')[0]
<h1>​I'm AAKASH HANDA​</h1>​
document.getElementsByTagName('h1')[0].innerText="I m from Developer Funnel"
'I m from Developer Funnel'
document.getElementsByTagName('h1')[0].style.color="red"
'red'

document.getElementsByClassName('scroll')
HTMLCollection(5) [a.scroll, a.scroll, a.scroll, a.scroll, a.scroll]
document.getElementsByClassName('scroll')[1]
<a href=​"#youtube" class=​"scroll">​Youtube​</a>​
document.getElementsByClassName('scroll')[1].innerText
'Youtube'
document.getElementsByClassName('scroll')[1].innerText="Videos"
'Videos'


document.getElementById('scroll')