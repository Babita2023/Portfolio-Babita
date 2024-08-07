document.addEventListener('DOMContentLoaded', () => {
    // Elements
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    let header = document.querySelector('header');

    // Toggle Menu Icon and Navbar
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    };

    // Highlight Active Link on Scroll
    window.onscroll = () => {
        let top = window.scrollY;

        sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => link.classList.remove('active'));
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            }
        });

        // Sticky Navbar
        header.classList.toggle('sticky', top > 100);
    };

    // Close Navbar on Link Click (for mobile)
    navbar.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            menuIcon.classList.remove('fa-xmark');
            navbar.classList.remove('active');
        }
    });
});


/*let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick=() => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*---scroll section active link---*
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
        navLinks.forEach.apply(links =>{
        links.classList.remove('active');
       document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
         });
        };
    });

       /*---sticky navbar---*
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

    /*---remove toggle icon and navbar---*
  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');


};*/

/*scroll reveal*/
ScrollReveal({ 
    distance:'80px',
    duration: 2000,
    delay: 200,

 });

 ScrollReveal().reveal('.home-content, heading', {origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
 ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-contact p, .about-content', {origin: 'right' });

 /*typed js*/
 const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});
