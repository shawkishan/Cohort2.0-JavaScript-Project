var inc = document.querySelector('#inc')
var dec = document.querySelector('#decr')
var h1 = document.querySelector('h1')

var a = 0

inc.addEventListener('click',function(){
    a++
    h1.innerHTML = a
})
dec.addEventListener('click',function(){
    a--
    h1.innerHTML = a
})