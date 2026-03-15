var menu = document.getElementById("menu")
var closenav = document.getElementById("closenav")
var sidenav = document.getElementById("sidenav")

menu.addEventListener("click",function(){
    sidenav.style.right="0%"
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})