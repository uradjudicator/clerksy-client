const burger = document.querySelector('.burger')
const menuBack = document.querySelector('.menu-back')
const menu = document.querySelector('.mobile-menu')

burger.addEventListener('click', ()=> {
    menu.classList.toggle('active')
})

menuBack.addEventListener('click', ()=> {
    menu.classList.remove('active')
})

const counterParent = document.querySelector('.counter')
const counter = document.querySelector('.counter span')
const input = document.querySelector('.form .top input')

input.addEventListener('focus', ()=>{
    counterParent.classList.add('active')
})

input.addEventListener('blur', ()=>{
    counterParent.classList.remove('active')
})

input.addEventListener('input', ()=>{
    counter.innerText = input.value.length
})