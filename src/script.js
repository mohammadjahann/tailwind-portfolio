const hamburger = document.querySelector('#hamburger')
const menu =document.querySelector('#menu')
const hlinks = document .querySelectorAll('#hlink')
const moonBtn = document.querySelectorAll('#dark-mode')

hamburger.addEventListener('click',(event)=>{
    menu.classList.toggle('hidden')
    hamburger.classList.toggle('bg-white')
    
})

hlinks.forEach(link=>{
    link.addEventListener('click',(event)=>{
        menu.classList.toggle('hidden')
        
    })
})

moonBtn.forEach(moon=>{
    moon.addEventListener('click',()=>{
        document.body.classList.toggle('dark')
        menu.classList.toggle('hidden')
    })
})