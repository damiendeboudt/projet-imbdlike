let menu = document.getElementById("menu")

function menuVisible (){
    menu.style.transform = 'translateY(0px)'
    menu.style.zIndex = '1'
}

document.getElementById("buttonMenu").addEventListener("click", menuVisible)
 document.getElementById("closemenu").addEventListener("click", ()=>{
     menu.style.zIndex = '-1'
 })