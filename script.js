// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
let isMenuOpen = false;

mobileMenuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        mobileMenuBtn.classList.add('open');
        mobileMenu.classList.remove('max-h-0', 'opacity-0');
        mobileMenu.classList.add('max-h-80', 'opacity-100');
    } else {
        mobileMenuBtn.classList.remove('open');
        mobileMenu.classList.remove('max-h-80', 'opacity-100');
        mobileMenu.classList.add('max-h-0', 'opacity-0');
    }
});

// Close mobile menu when clicking on navigation links
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        isMenuOpen = false;
        mobileMenuBtn.classList.remove('open');
        mobileMenu.classList.remove('max-h-80', 'opacity-100');
        mobileMenu.classList.add('max-h-0', 'opacity-0');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.classList.add('glass-nav');
    } else {
        navbar.classList.remove('glass-nav');
    }
});

// Typing animation for hero section
const typingText = document.getElementById('typing-text');
const text = 'Developer';
let index = 0;
let isDeleting = false;

function typeWriter() {
    if (isDeleting) {
        typingText.textContent = text.substring(0, index - 1);
        index--;
    } else {
        typingText.textContent = text.substring(0, index + 1);
        index++;
    }

    if (!isDeleting && index === text.length) {
        setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && index === 0) {
        isDeleting = false;
    }

    const speed = isDeleting ? 100 : 200;
    setTimeout(typeWriter, speed);
}

// Start typing animation
typeWriter();

// Skill bar animation with Intersection Observer
const skillsSection = document.getElementById('skills');
const skillProgressBars = document.querySelectorAll('.skill-progress');

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            skillProgressBars.forEach((bar, index) => {
                const width = bar.getAttribute('data-width');
                if (width) {
                    setTimeout(() => {
                        bar.style.width = width;
                    }, index * 200); // Stagger the animations
                }
            });
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Parallax effect for background blobs
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const blobs = document.querySelectorAll('.blob');
    
    blobs.forEach((blob, index) => {
        const speed = index === 0 ? 0.05 : 0.03;
        const yPos = scrollPosition * speed;
        blob.style.transform = `translateY(${yPos}px)`;
    });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    console.log('Form submitted:', data);
    
    // Here you would typically send the data to a server
    // For this demo, we'll just show an alert
    alert('Thank you for your message! I\'ll get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// Add scroll-based animations for elements coming into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in animation to cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.card-hover, .project-card');
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInObserver.observe(el);
    });
});

// Social Modal Functions
function openSocialModal() {
    const modal = document.getElementById('socialModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeSocialModal() {
    const modal = document.getElementById('socialModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.getElementById('socialModal').addEventListener('click', (e) => {
    if (e.target.id === 'socialModal') {
        closeSocialModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSocialModal();
    }
});