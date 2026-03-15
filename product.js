var menu = document.getElementById("menu")
var closenav = document.getElementById("closenav")
var sidenav = document.getElementById("sidenav")

menu.addEventListener("click",function(){
    sidenav.style.right="0%"
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

var productcontainer = document.getElementById("productcontainer")
var search = document.getElementById("search")
var products = productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUpperCase()

    for(count=0;count<products.length;count=count+1){

       var productname = products[count].querySelector("h1").textContent

         if(productname.toUpperCase().indexOf(enteredvalue)<0){
            products[count].style.display="none"
         }
         else{
            products[count].style.display="block"
         }
    }
    
})