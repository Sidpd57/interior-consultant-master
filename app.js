const navToggle = document.querySelector('.nav-toggle')
const nav = document.querySelector('.nav')
const logo = document.querySelector('.logo')
const rowFlex = document.querySelector('.row-flex')

let flag = true

const val1 ='<span class="material-symbols-outlined">close</span>'
const val2 ='<span class="material-symbols-outlined">menu</span>'
navToggle.addEventListener('click',()=>{
    nav.classList.toggle('nav--visible')
    rowFlex.classList.toggle('row-flex--new')
    logo.classList.toggle('logo--invisible')
    navToggle.classList.toggle('move-right')
    if(flag==true){
        navToggle.innerHTML=val1
        flag=false
    }
    else {
        navToggle.innerHTML=val2
        flag=true
    }
})