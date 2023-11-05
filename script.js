window.addEventListener('scroll', function () {
    console.log('Scroll event fired');
    var nav = document.querySelector('.nav');
    nav.classList.toggle('scrolled', window.scrollY > 0);
});

const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon=document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.ham-function')

toggleBtn.onclick=function(){
    dropDownMenu.classList.toggle('open')
    const isopen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isopen
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars'
}