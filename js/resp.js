hamburger =  document.querySelector('.hamburger')
navbar =  document.querySelector('.navbar')
rightNav =  document.querySelector('.rightNav')
navList =  document.querySelector('.nav-list')

hamburger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})