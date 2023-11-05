window.addEventListener('scroll', function () {
    console.log('Scroll event fired');
    var nav = document.querySelector('.nav');
    nav.classList.toggle('scrolled', window.scrollY > 0);
});
