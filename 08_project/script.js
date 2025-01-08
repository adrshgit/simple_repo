let Menuicon = document.querySelector('#menu-icon');
let Navbar = document.querySelector('.navbar');

// Toggle navbar and menu icon
Menuicon.onclick = () => {
    Menuicon.classList.toggle('bx-x');
    Navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header nav a');

// Combine the scroll functionality
window.onscroll = () => {
    // Highlight active section
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};
