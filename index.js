// Toggle navbar on smaller screens
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('open');
});

// Typed.js for typing animation
new Typed('#typed-text', {
    strings: ['Python', 'Java', 'Artificial Intelligence', 'Machine Learning', 'Data Science', 'Web Development'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Toggle navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Toggle mobile menu
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('open', true);
});

function close_mobile_menu(){
    document.querySelector(".nav-links").classList.remove('open');
}

// Highlight active nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-link.active')?.classList.remove('active');
        link.classList.add('active');
    });
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Intersection Observer for typing project titles
// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             new Typed(entry.target.querySelector('.project-title'), {
//                 strings: [entry.target.dataset.title],
//                 typeSpeed: 50,
//                 showCursor: false,
//             });
//             observer.unobserve(entry.target);
//         }
//     });
// }, { threshold: 0.5 });

// document.querySelectorAll('.project').forEach(project => {
//     observer.observe(project);
// });

