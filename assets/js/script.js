
'use strict';
const firebaseConfig = {
  apiKey: "AIzaSyBL9b840hVLfCI7O04eny_VpF7MSPXxgeU",
  authDomain: "poe-form.firebaseapp.com",
  databaseURL: "https://poe-form-default-rtdb.firebaseio.com",
  projectId: "poe-form",
  storageBucket: "poe-form.appspot.com",
  messagingSenderId: "1075555564946",
  appId: "1:1075555564946:web:8e7afbeef327f07debd54b"
};
// initialized firebase
 firebase.initializeApp(firebaseConfig);
 //reference your database
 var contactFormDB= firebase.database().ref('contactForm')

document.getElementById("contact").addEventListener("submit",submitForm);

function submitForm(e){
  e.preventDefault();

  var name=getElementval('name');
  var email=getElementval('email');
  var phone=getElementval('phone');
  var message=getElementval('message');

  saveMessages(name,email,phone,message);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  // //   remove the alert
  // setTimeout(() => {
  //   document.querySelector(".alert").style.display = "none";
  // }, 60);

  //   reset the form
  // document.getElementById("contact").reset();
}


const saveMessages=(name,email,phone,message)=>{
  var newContactForm=contactFormDB.push();

  newContactForm.set({
    name:name,
    email:email,
    phone:phone,
    message:message,
  });

};
const getElementval=(id)=>{
  return document.getElementById(id).value;


};




// variables for navbar toggle
const menuOpenBtn = document.querySelector('.menu-open-btn');
const menuCloseBtn = document.querySelector('.menu-close-btn');
const menu = document.querySelector('.nav');
const menuLinkBtn = document.querySelectorAll('.nav-link');

// navbar toggle function
const menuToggle = () => menu.classList.toggle('active');

// addEventListener on close and open button
menuOpenBtn.addEventListener('click', menuToggle);
menuCloseBtn.addEventListener('click', menuToggle);

// addEventListener on all navlink
for (let i = 0; i < menuLinkBtn.length; i++) {
  menuLinkBtn[i].addEventListener('click', menuToggle);
}



// variables for tab navigation
const tabButtons = document.querySelectorAll('.tab-button');
const tabContent = document.querySelectorAll('.tab-content');

// tab navigation funtionality
for (let i = 0; i < tabButtons.length; i++) {

  tabButtons[i].addEventListener('click', function () {

    for (let i = 0; i < tabContent.length; i++) {

      if (tabButtons[i].classList.contains('active')) tabButtons[i].classList.remove('active');

      if (tabContent[i].classList.contains('active')) tabContent[i].classList.remove('active');

      if (tabContent[i].classList.contains(this.classList[0])) tabContent[i].classList.add('active');

    }

    this.classList.add('active');

  });

}



// variables for portfolio carousel
const portfolioCarouselCards = document.querySelectorAll('.portfolio-carousel-card');
const portfolioCarouselInner = document.querySelector('.portfolio-carousel-inner');
const portfolioCarouselNext = document.querySelector('#portfolio-carousel-next');
const portfolioCarouselPrev = document.querySelector('#portfolio-carousel-prev');

// create initial value for transform
const totalPortfoCard = portfolioCarouselCards.length;
let portfoCount = 0;

// carousel function
const carouselFunc = function (countParam) {

  if (countParam >= totalPortfoCard - 1) portfoCount = totalPortfoCard - 1;

  if (countParam <= 0) portfoCount = 0;

  portfolioCarouselInner.style.transform = `translateX(-${100 / totalPortfoCard * portfoCount}%)`;

}

// addEventListener on carousel next button
portfolioCarouselNext.addEventListener('click', function () {
  portfoCount++;
  carouselFunc(portfoCount);
});

// addEventListener on carousel previous button
portfolioCarouselPrev.addEventListener('click', function () {
  portfoCount--;
  carouselFunc(portfoCount);
});