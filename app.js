
//***** Hamburger menu *****//
document.querySelector(".hamburger_menu_button").addEventListener("click", () => {

  if (!document.querySelector(".hamburger_menu_button").classList.contains("open")) {
    const menu = document.querySelector(".hamburger_menu_button");
    menu.classList.toggle("open");
    document.querySelector(".nav_links").classList.toggle("open");
    // document.querySelector(".logo").classList.toggle("light-logo");

  } else {
    document.querySelector(".hamburger_menu_button").classList.remove("open");
    document.querySelector(".nav_links").classList.remove("open");
    // document.querySelector(".logo").classList.remove("light-logo");
  }


});


//***** Scrolling navbar *****//

let stickyNavbar = document.querySelector('#main-nav');

document.addEventListener('scroll', () => {

  if (window.scrollY > 36) {
    stickyNavbar.classList.add('scrolling-nav')
  } else {
    stickyNavbar.classList.remove('scrolling-nav')
  }

})


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



// CURSOR ANIMATION

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#242323",
  
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



// tabs JS
// script.js
document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
      button.addEventListener('click', function() {
          const targetTab = this.getAttribute('data-tab');

          // Remove 'active' class from all buttons and contents
          tabButtons.forEach(btn => btn.classList.remove('active'));
          tabContents.forEach(content => {
              content.classList.remove('active');
              content.style.opacity = 0;  // Start fading out
          });

          // Add 'active' class to the clicked button
          this.classList.add('active');
          
          // Show and fade in the corresponding content
          const targetContent = document.getElementById(targetTab);
          targetContent.classList.add('active');

          // Set a small timeout to trigger the opacity transition
          setTimeout(() => {
              targetContent.style.opacity = 1; // Fade-in effect
          }, 350); // Timeout needed to trigger CSS transition
      });
  });
});


// Skill bars animation
document.getElementById('tab2_button').addEventListener('click', function() {

  document.querySelectorAll('.html').forEach(function(element) {
    element.style.width = '90%';
  });
  
  document.querySelectorAll('.css').forEach(function(element) {
    element.style.width = '90%';
  });
  
  document.querySelectorAll('.React').forEach(function(element) {
    element.style.width = '60%';
  });
  
  document.querySelectorAll('.javascript').forEach(function(element) {
    element.style.width = '90%';
  });
  
  document.querySelectorAll('.adobe').forEach(function(element) {
    element.style.width = '80%';
  });
  
  document.querySelectorAll('.wordpress').forEach(function(element) {
    element.style.width = '70%';
  });
  
  document.querySelectorAll('.ui').forEach(function(element) {
    element.style.width = '70%';
  });
  
  document.querySelectorAll('.rwd').forEach(function(element) {
    element.style.width = '80%';
  });
});

