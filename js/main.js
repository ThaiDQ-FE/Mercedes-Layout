button = document.getElementById('button');
closeX = document.getElementsByClassName('fa-times');
menu = document.getElementsByClassName('fa-bars');

search = document.getElementById('search');
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
channel = document.getElementById('channel');

tabNew = document.getElementById('tab-new');
tabPopular = document.getElementById('tab-popular');
tabVideos = document.getElementById('tab-videos');

body = document.getElementById('body');

button.addEventListener('click',function () {
    if(closeX.length == 1){
        body.classList.remove('overflow');
        // 
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
        body.classList.add('overflow');
        // 
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
    headerCar.classList.remove('show-car');
})

headerY.addEventListener('click', function () {
    headerCarTwo.classList.remove('show-car-2');
    headerCar.classList.remove('show-car');
})

document.getElementById('vehicles').addEventListener('click',function () {
    headerCar.classList.add('show-car');
    body.classList.add('overflow');
})

headerButton.addEventListener('click', function () {
    headerCar.classList.remove('show-car');
    body.classList.remove('overflow');
})


headerX.addEventListener('click', function () {
    headerCar.classList.remove('show-car');
    body.classList.remove('overflow');
})



window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    var width = window.innerWidth;
    console.log(scroll)
    console.log(width);
    if(scroll > 0){
        intro.classList.add('view');
    }
    else if(scroll == 0){
        intro.classList.remove('view');
    }
    if(width < 800 && scroll > 200){
        channel.classList.add('view');
    }
    else if(scroll < 200){
        channel.classList.remove('view');
    }
    if ((width > 768 && scroll > 80)||(width < 1023.98 && scroll > 80)){
        channel.classList.add('view');
    }else if(scroll < 80){
        channel.classList.remove('view');
    }
    if(width > 1280 && scroll > 300){
        channel.classList.add('view');
    }else if(scroll < 300){
        channel.classList.remove('view');
    }
});


function openTabs(tabsName) {
    var i;
    var x = document.getElementsByClassName("tabs");
    for (i = 0; i < x.length; i++) {
    //   x[i].style.display = "none";
      x[i].classList.add('tab-view-y');
      x[i].classList.remove('tab-view-x');
    }
    document.getElementById(tabsName).classList.add('tab-view-x');
    document.getElementById(tabsName).classList.remove('tab-view-y');
}

  function opMoreNew() {
    var moreTab = document.getElementsByClassName("tab-more-new");
    for (let i = 0; i < moreTab.length; i++) {
        moreTab[i].style.display = 'block';
    }
    document.getElementById('tab-button-new').style.display = 'none';
  }

  function opMorePopular() {
    var moreTab = document.getElementsByClassName("tab-more-popular");
    for (let i = 0; i < moreTab.length; i++) {
        moreTab[i].style.display = 'block';
    }
    document.getElementById('tab-button-popular').style.display = 'none';
  }

  function opMoreVideo() {
    var moreTab = document.getElementsByClassName("tab-more-video");
    for (let i = 0; i < moreTab.length; i++) {
        moreTab[i].style.display = 'block';
    }
    document.getElementById('tab-button-video').style.display = 'none';
  }
  

function clickTabPopular() {
    tabPopular.classList.add('tab-popular');
    tabNew.classList.remove('tab-new');
    tabVideos.classList.remove('tab-videos');
}

function clickTabNew() {
    tabPopular.classList.remove('tab-popular');
    tabNew.classList.add('tab-new');
    tabVideos.classList.remove('tab-videos');
}

function clickTabVideos() {
    tabPopular.classList.remove('tab-popular');
    tabNew.classList.remove('tab-new');
    tabVideos.classList.add('tab-videos');
}


(function(){
    var doc = document.documentElement;
    var w = window;
    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;
    var header = document.getElementById('navbar');
  
    var checkScroll = function() {
      curScroll = w.scrollY || doc.scrollTop;
      if (curScroll > prevScroll) { 
        direction = 2;
      }
      else if (curScroll < prevScroll) { 
        direction = 1;
      }
  
      if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
      }
      prevScroll = curScroll;
    };
  
    var toggleHeader = function(direction, curScroll) {
      if (direction === 2 && curScroll > 52) { 
        header.classList.add('hide');
        header.classList.remove('show');
        prevDirection = direction;
      }
      else if (direction === 1) {
        header.classList.remove('hide');
        header.classList.add('show');
        prevDirection = direction;
      }
    };
    
    window.addEventListener('scroll', checkScroll);
  
  })();

  
$(document).ready(function() {
    $("#click-search").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 680 }, "slow");
        return false;
    });
});

$(document).ready(function() {
    $("#footer-to-top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});

