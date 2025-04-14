const menu = document.getElementById("menu");
const openMenu = document.getElementById("open-menu");
const cls = document.getElementById("close");
menu.addEventListener("click", event =>{

    if(openMenu.style.display==="none"){
       openMenu.style.display="block";

       }else{
       openMenu.style.display="none";
  
       }
/*    menu.textContent="Close";
    openMenu.style.display="none";
   
    menu.style.color="white";
    menu.style.textAlign="center";
    menu.style.fontSize="16pt";*/

})
/*openMenu.style.display="none";
menu.textContent="Show";
menu.style.color="white";
menu.style.textAlign="center";
menu.style.fontSize="16pt";*/
cls.addEventListener("click", event=>{
    openMenu.style.display="none";
})