
var main=document.querySelector('main')
var btn=document.querySelector('button')

var arr=['Hey! I am Yash','Full Stack Developmer','This is my Style','Coding is the part of live','This task is very Smart']

btn.addEventListener('click',function(){
    var h1=document.createElement('h1')
    //console.log(h1)
    var x=Math.random()*80
    var y=Math.random()*80
    var rot = Math.random()*360
    var scl=Math.random()*3
    var a = Math.floor(Math.random()*arr.length)
    var c1=Math.floor(Math.random()*256)
    var c2=Math.floor(Math.random()*256)
    var c3=Math.floor(Math.random()*256)
    
    h1.innerHTML=arr[a]
    h1.style.position='absolute'
    h1.style.left=x+'%'
    h1.style.top=y+'%'
    h1.style.rotate=rot+'deg'
    h1.style.scale=scl
    h1.style.color=`rgb(${c1},${c2},${c3})`
    //h1.style.color='red'
    main.appendChild(h1)

})