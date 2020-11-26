button = document.getElementById('button');
closeX = document.getElementsByClassName('fa-times');
menu = document.getElementsByClassName('fa-bars');
collapse = document.getElementById('collapse');
search = document.getElementById('search');
vehicles = document.getElementById('vehicles');
closeMenu = document.getElementById('close__menu');
privacy = document.getElementById('privacy');

headerCar = document.getElementById('header__car');
headerButton = document.getElementById('header__button');
headerX = document.getElementById('header__X');

headerCarTwo = document.getElementById('header__car__two');
headerButtonTwo = document.getElementById('header__button__two');
headerY = document.getElementById('header__Y');


collapseActive = document.getElementById('collapse__active');
collapseVehicles = document.getElementById('collapse__vehicles');

carousel = document.getElementById('carousel');

intro = document.getElementById('intro');

button.addEventListener('click',function () {
    if(closeX.length == 1){
        button.classList.remove('fa-times');
        button.classList.add('fa-bars');
        // 
        search.innerHTML = '';
        privacy.classList.remove('not-show');
        // 
        collapseActive.classList.remove('collapse-show')
        // 
        headerCarTwo.classList.remove('show-car-2');
    }else{
        button.classList.remove('fa-bars');
        button.classList.add('fa-times');
        // 
        search.innerHTML = 'Search';
        privacy.classList.add('not-show');
        // 
        collapseActive.classList.add('collapse-show')
        // 
        headerCar.classList.remove('show-car');
        
    }
})


collapseVehicles.addEventListener('click', function () {
    headerCarTwo.classList.add('show-car-2');
})

headerButtonTwo.addEventListener('click', function () {
    headerCarTwo.classList.remove('show-car-2');
})

headerY.addEventListener('click', function () {
    headerCarTwo.classList.remove('show-car-2');
})

vehicles.addEventListener('click',function () {
    headerCar.classList.add('show-car');
})

headerButton.addEventListener('click', function () {
    headerCar.classList.remove('show-car');
})


headerX.addEventListener('click', function () {
    headerCar.classList.remove('show-car');
})



window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll)
    if(scroll > 0){
        // intro.classList.add('intro-animate');
        // intro.classList.remove('intro-0-animate');
        intro.classList.add('view');
    }
    else if(scroll == 0){
        // intro.classList.remove('intro-animate');
        // intro.classList.add('intro-0-animate');
        intro.classList.remove('view');
    }
});




