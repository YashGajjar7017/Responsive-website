burger = document.querySelector('.burger') 
navbar = document.querySelector('.navbar') 
navlist = document.querySelector('.nav-list') 
rightNav = document.querySelector('.rightNav') 
login = document.querySelector('.login')
logout = document.querySelector('.logout')

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp')
    navlist.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp')
})
