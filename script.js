// ==========================================================================
// Tanvir Shahriar - Portfolio Interactive Scripts
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // --------------------------------------------------------------------------
    // 1. Mobile Menu Toggle
    // --------------------------------------------------------------------------
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenuBtn.classList.add('open');
                mobileMenu.classList.remove('max-h-0', 'opacity-0');
                mobileMenu.classList.add('max-h-96', 'opacity-100');
            } else {
                mobileMenuBtn.classList.remove('open');
                mobileMenu.classList.remove('max-h-96', 'opacity-100');
                mobileMenu.classList.add('max-h-0', 'opacity-0');
            }
        });

        // Close menu on link click
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                mobileMenuBtn.classList.remove('open');
                mobileMenu.classList.remove('max-h-96', 'opacity-100');
                mobileMenu.classList.add('max-h-0', 'opacity-0');
            });
        });
    }

    // --------------------------------------------------------------------------
    // 2. Navbar Scroll Effect & Active Section Tracking
    // --------------------------------------------------------------------------
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        // Glass navbar toggle
        if (window.scrollY > 20) {
            navbar?.classList.add('glass-nav');
        } else {
            navbar?.classList.remove('glass-nav');
        }

        // Active link tracking
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id') || '';
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }, { passive: true });

    // --------------------------------------------------------------------------
    // 3. Typing Animation
    // --------------------------------------------------------------------------
    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
        const phrases = [
            'Full-Stack Software Engineer',
            'MERN & Next.js Specialist',
            'Multi-Tenant SaaS Architect',
            'AI & LangGraph Developer',
            'Clean Architecture Practitioner'
        ];

        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 90;

        function typeLoop() {
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 40;
            } else {
                typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 80;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                typeSpeed = 2200; // Pause at end of phrase
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typeSpeed = 400; // Pause before next phrase
            }

            setTimeout(typeLoop, typeSpeed);
        }

        typeLoop();
    }

    // --------------------------------------------------------------------------
    // 4. Scroll Reveal Animations
    // --------------------------------------------------------------------------
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-8');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');
        revealObserver.observe(el);
    });

    // --------------------------------------------------------------------------
    // 5. Contact Form Submission
    // --------------------------------------------------------------------------
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = (document.getElementById('name') || {}).value || 'Someone';
            const email = (document.getElementById('email') || {}).value || '';
            const subject = (document.getElementById('subject') || {}).value || 'Portfolio Inquiry';
            const message = (document.getElementById('message') || {}).value || '';

            // Construct mailto link
            const mailtoBody = encodeURIComponent(
                `Hi Tanvir,\n\n${message}\n\nFrom: ${name} (${email})`
            );
            const mailtoLink = `mailto:tanvirshahriar106@gmail.com?subject=${encodeURIComponent(subject)}&body=${mailtoBody}`;

            showToast(`Opening your email client to message Tanvir...`);
            
            setTimeout(() => {
                window.location.href = mailtoLink;
            }, 600);

            contactForm.reset();
        });
    }

    // --------------------------------------------------------------------------
    // 6. Copy to Clipboard Functionality
    // --------------------------------------------------------------------------
    window.copyEmail = function() {
        const email = 'tanvirshahriar106@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
            showToast('Email address copied to clipboard!');
        }).catch(() => {
            showToast('tanvirshahriar106@gmail.com');
        });
    };

    // --------------------------------------------------------------------------
    // 7. Toast Notification Handler
    // --------------------------------------------------------------------------
    function showToast(message) {
        let toast = document.getElementById('toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toast';
            toast.className = 'glass-card px-5 py-3 text-sm font-medium text-white flex items-center space-x-3 shadow-2xl border border-indigo-500/30';
            document.body.appendChild(toast);
        }
        toast.innerHTML = `
            <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
            </span>
            <span>${message}</span>
        `;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3200);
    }
    window.showToast = showToast;

    // --------------------------------------------------------------------------
    // 8. Social / Quick Connect Modal
    // --------------------------------------------------------------------------
    const socialModal = document.getElementById('socialModal');

    window.openSocialModal = function() {
        if (!socialModal) return;
        socialModal.classList.remove('hidden');
        socialModal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    };

    window.closeSocialModal = function() {
        if (!socialModal) return;
        socialModal.classList.add('hidden');
        socialModal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    };

    if (socialModal) {
        socialModal.addEventListener('click', (e) => {
            if (e.target === socialModal) {
                window.closeSocialModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            window.closeSocialModal();
        }
    });

    // --------------------------------------------------------------------------
    // 9. Parallax Effect for Ambient Blobs
    // --------------------------------------------------------------------------
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const blobs = document.querySelectorAll('.blob');
        blobs.forEach((blob, idx) => {
            const factor = idx === 0 ? 0.04 : (idx === 1 ? -0.03 : 0.02);
            blob.style.transform = `translateY(${scrollPosition * factor}px)`;
        });
    }, { passive: true });
});
