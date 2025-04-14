const menu = document.getElementById("menu");
const openMenu = document.getElementById("list-menu");
menu.textContent="soal";
const ms = document.getElementById("ms");
const openMs = document.getElementById("open-ms");
menu.addEventListener("click", event =>{

    if(openMenu.style.display==="none"){
       openMenu.style.display="block";
        menu.textContent="video";
       }else{
       openMenu.style.display="none";
        menu.textContent="soal";
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
