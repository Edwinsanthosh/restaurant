let menuBtn = document.getElementById('menuBtn');
let menuBar = document.getElementById('menuBar');
let menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click',function(event){
    menuBar.classList.toggle('open');

    let isOpen = menuBar.classList.contains('open');
    menuBtnIcon.setAttribute('class',isOpen?"ri-close-line":"ri-menu-line");

})