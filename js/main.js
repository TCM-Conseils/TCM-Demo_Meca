// Hide spinner on load
window.addEventListener('load', function() {
    document.getElementById('spinner').classList.add('hide');
});

// Back to top button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Newsletter form (simple alert)
const newsletter = document.querySelector('footer form');
if (newsletter) {
    newsletter.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert(`Merci de votre inscription ! Confirmation envoyée à ${email}`);
        this.reset();
    });
}

// Pulsing effect on chat icon
const chatIcon = document.querySelector('.chat-icon');
if (chatIcon) {
    setInterval(() => {
        chatIcon.style.transform = 'scale(1.1)';
        setTimeout(() => {
            chatIcon.style.transform = 'scale(1)';
        }, 300);
    }, 3000);
}

console.log('%c🔧 AutoExpert Québec - Site chargé avec succès! 🚗', 'color: #DC2626; font-size: 16px; font-weight: bold;');