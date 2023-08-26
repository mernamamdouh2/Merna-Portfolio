/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document. getElementById('nav-toggle'),
navClose = document. getElementById('nav-close')


/*===== CHANGE JOB TITLES =====*/
const jobTitleElement = document.getElementById('jobTitle');
const jobTitleElement1 = document.getElementById('jobTitle1');
const jobTitles = ['UI/UX Designer','Branding Designer','Front-end Developer'];
let currentIndex = 0;
function changeJobTitle() {
  jobTitleElement.classList.add('fade-out');
  jobTitleElement1.classList.add('fade-out');
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % jobTitles.length;
    jobTitleElement.textContent = jobTitles[currentIndex];
    jobTitleElement1.textContent = jobTitles[currentIndex];
    jobTitleElement.classList.remove('fade-out');
    jobTitleElement1.classList.remove('fade-out');
  }, 500);
}
setInterval(changeJobTitle, 2000);
// -----------------------------
// function isInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// function animateOnScroll() {
//   const homeSection = document.getElementById('home');
//   const homeContent = document.querySelector('.home__content');
//   const homeSocial = document.querySelector('.home__social');
//   const homeData = document.querySelector('.home__data');
//   const homeScroll = document.querySelector('.home__scroll');

//   if (isInViewport(homeSection)) {
//     homeContent.classList.add('animate');
//     homeSocial.classList.add('animate');
//     homeData.classList.add('animate');
//     homeScroll.classList.add('animate');
//   }
// }

// window.addEventListener('scroll', animateOnScroll);
// window.addEventListener('resize', animateOnScroll);
// window.addEventListener('load', animateOnScroll);
// -----------------------------

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
         navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
  let itemClass = this.parentNode.className;
  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close';
  }
  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open';
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');
const srr = ScrollReveal({
  distance: '45px',
  duration: 2500,
  reset: true,
});

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification__active');
    });
    target.classList.add('qualification__active');
    tabs.forEach(tab => {
      tab.classList.remove('qualification__active');
    });
    tab.classList.add('qualification__active');
    
    if (target.classList.contains('qualification__active')) {
      srr.reveal('.leftt', { delay: 250, origin: 'left', easing: 'ease-in-out' });
      srr.reveal('.rightt', { delay: 250, origin: 'right', easing: 'ease-in-out' });
    }
  });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal');
const modalBtns = document.querySelectorAll('.services__button');
const modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modaLCLick){
  modalViews[modaLCLick].classList.add('active-modal')
}

modalBtns.forEach((modaLBtn, i) => {
  modaLBtn.addEventListener('click', () =>{
    modal(i) 
  })
})

modalCloses.forEach((modaLCLose) => {
  modaLCLose.addEventListener('click', () =>{
    modalViews.forEach((modaLView) =>{
      modaLView.classList.remove('active-modal')
    })
  })
})
/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container' ,{
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

/*==================== TESTIMONIAL ====================*/
// let swiperTestimonial = new Swiper('.testimonial__container' ,{
//   loop: true,
//   grabCursor: true,
//   spaceBetween: 48,
//   pagination:{
//     el: '.swiper-pagination',
//     clickable: true,
//     dynamicBullets: true,
//   },
//   breakpoints:{
//     568:{
//         slidesPerView: 2,
//       }
//   }
// });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current => {
     const sectionHeight = current.offsetHeight
     const sectionTop = current.offsetTop - 50;
     const sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else{
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})


/*Animation for all page*/
const sr = ScrollReveal ({
  distance : '45px',
  duration : 2500,
  reset : true,
})

sr.reveal('.top',{ delay:250, origin:'top' , easing: 'ease-in-out'})
sr.reveal('.left',{ delay:250, origin:'left' , easing: 'ease-in-out'})
sr.reveal('.right',{ delay:250, origin:'right' , easing: 'ease-in-out'})
sr.reveal('.bottom',{ delay:250, origin:'bottom' , easing: 'ease-in-out'})

// sr.reveal('.home__data',{ delay:250, origin:'left' , easing: 'ease-in-out'})
// sr.reveal('.home__scroll',{ delay:250, origin:'left' , easing: 'ease-in-out'})
// sr.reveal('.home__img',{ delay:250, origin:'right' , easing: 'ease-in-out'})

// sr.reveal('.about__img',{ delay:250, origin:'left' , easing: 'ease-in-out'})
// sr.reveal('.about__data',{ delay:250, origin:'right' , easing: 'ease-in-out'})


// sr.reveal('.leftt',{ delay:250, origin:'left' , easing: 'ease-in-out'})
// sr.reveal('.rightt',{ delay:250, origin:'right' , easing: 'ease-in-out'})

// sr.reveal('.gallery-image',{ delay:250, origin:'top' , easing: 'ease-in-out'})


// sr.reveal('.container-products',{ delay:250, origin:'top' , easing: 'ease-in-out'})

// sr.reveal('.review_card',{ delay:250, origin:'top' , easing: 'ease-in-out'})

// sr.reveal('.team_box',{ delay:250, origin:'bottom' , easing: 'ease-in-out'})

// sr.reveal('.box',{ delay:250, origin:'top' , easing: 'ease-in-out'})

// sr.reveal('.before',{ delay:250, origin:'bottom' , easing: 'ease-in-out'})

// sr.reveal('.footer-logo',{ delay:250, origin:'bottom' , easing: 'ease-in-out'})
/*Animation for all page*/