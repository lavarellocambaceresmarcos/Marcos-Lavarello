
//***** Hamburger menu *****//
document.querySelector(".hamburger_menu_button").addEventListener("click", () => {

  if (!document.querySelector(".hamburger_menu_button").classList.contains("open")) {
    const menu = document.querySelector(".hamburger_menu_button");
    menu.classList.toggle("open");
    document.querySelector(".nav_links").classList.toggle("open");
  } else {
    document.querySelector(".hamburger_menu_button").classList.remove("open");
    document.querySelector(".nav_links").classList.remove("open");
  }


});


//***** Scrolling navbar *****//

let stickyNavbar = document.querySelector('#main-nav');
let sections = document.querySelectorAll('.main-skills_container');


document.addEventListener('scroll', () => {

  if (window.scrollY > 36) {
    stickyNavbar.classList.add('scrolling-nav')
  } else {
    stickyNavbar.classList.remove('scrolling-nav')
  }

  sections.forEach(sec => {
    let top = window.scrollY;

    if (top >= 2000) {
      sec.classList.add('show-animate')
    }

    // else{
    //     sec.classList.remove('show-animate')
    // }
  })
})



// ANIMATIONS ON SCROLL - HEADING OF THE PAGE
let oldScrollY = window.scrollY;
let directionText = document.getElementById('hero-section-zone');

window.onscroll = function (e) {

  let locationCont = document.getElementsByClassName('location-container')[0];
  let globeIcon = document.getElementsByClassName('globe-icon')[0];
  let leftPhone = document.getElementsByClassName('left-phone')[0];
  let rightPhone = document.getElementsByClassName('right-phone')[0];
  let phoneContainer = document.getElementsByClassName('mobiles-container')[0];
  let positionText = document.getElementsByClassName('position-text')[0];

  if (oldScrollY < window.scrollY) {

    console.log('Down')

    locationCont.style.width = "200px"
    locationCont.style.transition = "all .5s ease"


    globeIcon.style.transform = "rotate(45deg)"
    globeIcon.style.transition = "all .5s ease"
    globeIcon.style.boxShadow = "0 0 5px black"


    // leftPhone.style.transform = "translatex(-30px)"
    // leftPhone.style.transition = "all .5s ease"

    // rightPhone.style.transform = "translatex(30px)"
    // rightPhone.style.transition = "all .5s ease"


    // phoneContainer.style.transform = "translateY(-80px)"
    // phoneContainer.style.transition = "all .5s ease"


    positionText.style.transform = "translatex(-80px)"
    positionText.style.transition = "all 1s ease"

  } else {

    locationCont.style.width = "170px"

    globeIcon.style.transform = "rotate(0deg)"
    globeIcon.style.boxShadow = "0 0 5px transparent"

    // leftPhone.style.transform = "translatex(0px)"

    // rightPhone.style.transform = "translatex(0px)"

    // phoneContainer.style.transform = "translateY(0px)"

    positionText.style.transform = "translatex(0px)"

    console.log('Up')


  }
  oldScrollY = window.scrollY;
}


// GALLERY SCROLL SCRIPT ANIMATION && HEADING TEXT SCROLL SCRIPT ANIMATION

const galleryBox = document.getElementsByClassName('galleryBox');
const mainBox = document.getElementsByClassName('mainBox');
const foldsContentTwo = Array.from(document.querySelectorAll('.fold-content-two'));

const mainBoxOne = document.getElementById('mainBoxOne');
const mainBoxTwo = document.getElementById('mainBoxOneTwo');
const mainBoxHeading = document.getElementById('mainBoxHeading');

for(let i in galleryBox){

  let targetScrollTwo = -(
    document.documentElement.scrollTop || document.body.scrollTop
  );
  let currentScrollTwo = targetScrollTwo;
  
  const animateGallery = () => {
    const overflowHeight = galleryBox[i].clientHeight - mainBox[i].clientHeight;
  
    document.body.style.height = `${overflowHeight + window.innerHeight}px`;
  
    targetScrollTwo = -(
      document.documentElement.scrollTop || document.body.scrollTop
    );
    currentScrollTwo += (targetScrollTwo - currentScrollTwo) * 0.1;
    
    foldsContentTwo.forEach(content => {

      if(content.parentElement == mainBoxOne){
        content.style.transform = `translateX(${currentScrollTwo/5}px)`;
      }
      if(content.parentElement == mainBoxTwo){
        content.style.transform = `translateX(${-currentScrollTwo/5}px)`;
      }
      if(content.parentElement == mainBoxHeading){
        content.style.transform = `translateX(${-currentScrollTwo}px)`;
      }

      
    });
  
    requestAnimationFrame(animateGallery);
  };

  animateGallery();
}



// ABOUT ME CURSOR ANIMATION
(function () {

  const link = document.querySelectorAll('div > .hover-this');

  const animateit = function (e) {
        const span = this.querySelector('.moving-frame');
        const { offsetX: x, offsetY: y } = e,
        { offsetWidth: width, offsetHeight: height } = this,

        move = 25,
        xMove = x / width * (move * 2) - move,
        yMove = y / height * (move * 2) - move;

        span.style.transform = `translate(${xMove}px, ${yMove}px)`;

        if (e.type === 'mouseleave') span.style.transform = '';
  };


  link.forEach(b => b.addEventListener('mousemove', animateit));
  link.forEach(b => b.addEventListener('mouseleave', animateit));

})();

const button = document.getElementsByClassName('sphere-wrapper');

for(let i=0; i< button.length; i++){

  let boundingRect = button[i].getBoundingClientRect();

  window.addEventListener('resize', ()=>{
    boundingRect = button[i].getBoundingClientRect();
  })

  button[i].addEventListener('mousemove', (e)=>{
    const mousePosX = e.pageX - boundingRect.left;
    const mousePosY = e.pageY - boundingRect.top;
  
    gsap.to(button, {
  
      x:(mousePosX - boundingRect.width / 10) * 0.1,
      y:(mousePosY - boundingRect.height / 10) * 0.01,
      duration:0.8,
      ease:'power3.out'
  
    })
  })
  button[i].addEventListener('mouseleave', ()=>{
    gsap.to(button[i], {
  
      x:0,
      y:0,
      duration:0.8,
      ease:'elastic.out(1,0.3)'
  
    })
  })
}




// CURSOR ANIMATION

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#73A3F0",
  
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
