const buton=document.querySelector(".btn-toggle");
const menu=document.querySelector(".menu");
buton.addEventListener('click',()=>{
    menu.classList.toggle('active')
})