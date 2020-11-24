button = document.getElementById('button');
closeX = document.getElementsByClassName('fa-times');
menu = document.getElementsByClassName('fa-bars');
collapse = document.getElementById('collapse');
search = document.getElementById('search');
vehicles = document.getElementById('vehicles');
closeMenu = document.getElementById('close__menu');
disable = document.getElementById('disable');
buttonClose = document.getElementById('button__close');
privacy = document.getElementById('privacy');
let count = 0;
button.addEventListener('click',function () {
    if(closeX.length == 1){
        button.classList.remove('fa-times');
        button.classList.add('fa-bars');
        collapse.classList.remove('navbar__collapse_active');
        search.innerHTML = '';
        disable.classList.remove('enable');
        disable.classList.add('disable');
        collapse.classList.remove('navbar__collapse_menu');
        privacy.classList.remove('not-show');
    }else{
        button.classList.remove('fa-bars');
        button.classList.add('fa-times');
        collapse.classList.add('navbar__collapse_active');
        search.innerHTML = 'Search';
        privacy.classList.add('not-show');
    }
})

vehicles.addEventListener('click',function () {
    collapse.classList.add('navbar__collapse_menu');
    disable.classList.add('enable');
    disable.classList.remove('disable');
})

closeMenu.addEventListener('click',function () {
    collapse.classList.remove('navbar__collapse_menu');
    disable.classList.remove('enable');
    disable.classList.add('disable');
})

buttonClose.addEventListener('click',function () {
    collapse.classList.remove('navbar__collapse_menu');
    disable.classList.remove('enable');
    disable.classList.add('disable');
})


