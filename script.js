// ==========================================================================
// Tanvir Shahriar - Retro Stationery Portfolio Client Controller
// Client Router, Works Switcher, Pinboard Zoom, and Contact Actions
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // --------------------------------------------------------------------------
    // 1. View Navigation & Routing
    // --------------------------------------------------------------------------
    const views = {
        'home': document.getElementById('view-home'),
        'about': document.getElementById('view-about'),
        'works': document.getElementById('view-works'),
        'playground': document.getElementById('view-playground'),
        'contact': document.getElementById('view-contact'),
        'project-detail': document.getElementById('view-project-detail')
    };

    const navPills = document.querySelectorAll('.nav-pill');
    let currentView = 'home';

    function switchView(viewName, shouldUpdateHash = true) {
        // If view doesn't exist, fallback to home
        const targetView = views[viewName] || views['home'];
        const actualViewName = views[viewName] ? viewName : 'home';

        // Hide all views
        Object.values(views).forEach(v => {
            if (v) {
                v.classList.remove('active-view');
                v.style.display = 'none';
            }
        });

        // Show target view
        targetView.style.display = 'block';
        // Force reflow for smooth animation
        targetView.offsetHeight;
        targetView.classList.add('active-view');

        // Scroll to top of view
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Update Nav Pills active state
        navPills.forEach(pill => {
            const pillTarget = pill.getAttribute('data-view');
            // If inside project-detail, highlight works tab
            const effectiveTarget = actualViewName === 'project-detail' ? 'works' : actualViewName;
            if (pillTarget === effectiveTarget) {
                pill.classList.add('active');
            } else {
                pill.classList.remove('active');
            }
        });

        currentView = actualViewName;

        if (shouldUpdateHash) {
            window.location.hash = actualViewName;
        }
    }
    window.switchView = switchView;

    // Attach click handlers to nav pills
    navPills.forEach(pill => {
        pill.addEventListener('click', (e) => {
            e.preventDefault();
            const target = pill.getAttribute('data-view');
            if (target) {
                switchView(target);
            }
        });
    });

    // Handle hash change from browser navigation
    function handleHashRoute() {
        const hash = window.location.hash.replace('#', '') || 'home';
        if (hash.startsWith('project/')) {
            const projectId = hash.replace('project/', '');
            loadProjectDetail(projectId, false);
        } else if (views[hash]) {
            switchView(hash, false);
        } else {
            switchView('home', false);
        }
    }

    window.addEventListener('hashchange', handleHashRoute);
    handleHashRoute();

    // --------------------------------------------------------------------------
    // 2. Project Detail View Loader
    // --------------------------------------------------------------------------
    const projectData = {
        'wayline': {
            title: 'WAYLINE',
            date: '• MAR 19, 2024',
            subtitle: "Making a whole city's transit app feel less like decoding a puzzle.",
            tags: ['MOBILITY', 'CONSUMER APP'],
            meta: {
                role: 'Lead Full-Stack Engineer',
                timeline: '3 months',
                team: '2 Designers, 4 Devs',
                year: '2024'
            },
            heroImage: 'assets/images/wayline-train.jpg',
            narrative: "Transit passengers don't want to decipher routing tables or wait indefinitely for static schedules to refresh. We redesigned Wayline from the ground up to surface contextual departures, live platform crowding indicators, and instant tap-to-pay ticketing with sub-second feedback.",
            results: {
                metric1: '47%',
                label1: 'DAILY ACTIVE COMMUTERS',
                metric2: '-55%',
                label2: 'TICKET PURCHASE FRICTION',
                metric3: '100k+',
                label3: 'ACTIVE PASSES ISSUED'
            },
            gallery: [
                'assets/images/wayline-bus.jpg',
                'assets/images/wayline-commuters.jpg'
            ]
        },
        'tandem': {
            title: 'TANDEM',
            date: '• MAR 3, 2024',
            subtitle: 'Audio habits and health tracking where tech meets daily rituals.',
            tags: ['AUDIO TECH', 'DARK MODE'],
            meta: {
                role: 'System Architect & Frontend',
                timeline: '4 months',
                team: 'Solo Project',
                year: '2024'
            },
            heroImage: 'assets/images/tandem-app.jpg',
            narrative: "Tandem is a focused listening habit companion that blends mindful ambient acoustics with audio telemetry. Built with low-latency audio pipelines, adaptive dark-mode visualizers, and offline-first IndexedDB caching.",
            results: {
                metric1: '92%',
                label1: 'USER RETENTION (DAY 30)',
                metric2: '<15ms',
                label2: 'AUDIO LATENCY',
                metric3: '50k+',
                label3: 'HOURS STREAMED'
            },
            gallery: [
                'assets/images/tandem-headphones.jpg',
                'assets/images/purple-keyboard.jpg'
            ]
        },
        'forge': {
            title: 'FORGE',
            date: '• JAN 2, 2024',
            subtitle: 'Building a developer workstation engine from day one to shipping without friction.',
            tags: ['DEV TOOLS', 'TYPESCRIPT'],
            meta: {
                role: 'Full-Stack Developer',
                timeline: '6 months',
                team: 'Core Team of 3',
                year: '2024'
            },
            heroImage: 'assets/images/forge-laptop.jpg',
            narrative: "Developer tools often sacrifice usability for raw power. Forge bridges both worlds with strict type-safety, rapid schema code generation, integrated terminal previews, and zero-config deployment workflows.",
            results: {
                metric1: '3.4x',
                label1: 'DEVELOPER VELOCITY',
                metric2: '0',
                label2: 'TYPE REGRESSIONS',
                metric3: '15k+',
                label3: 'CLI DOWNLOADS'
            },
            gallery: [
                'assets/images/forge-developer.jpg',
                'assets/images/desk-setup.jpg'
            ]
        }
    };

    function loadProjectDetail(projectId, updateHash = true) {
        const data = projectData[projectId] || projectData['wayline'];
        
        // Populate elements
        const titleEl = document.getElementById('project-detail-title');
        const dateEl = document.getElementById('project-detail-date');
        const subEl = document.getElementById('project-detail-sub');
        const heroEl = document.getElementById('project-detail-hero');
        const narrativeEl = document.getElementById('project-detail-narrative');
        const tagsContainer = document.getElementById('project-detail-tags');
        
        if (titleEl) titleEl.textContent = data.title;
        if (dateEl) dateEl.textContent = data.date;
        if (subEl) subEl.textContent = data.subtitle;
        if (heroEl) heroEl.src = data.heroImage;
        if (narrativeEl) narrativeEl.textContent = data.narrative;

        // Tags
        if (tagsContainer) {
            tagsContainer.innerHTML = data.tags.map(t => 
                `<span class="sticker-tag sticker-yellow text-xs">${t}</span>`
            ).join('');
        }

        // Metadata Bento
        const metaRole = document.getElementById('project-meta-role');
        const metaTime = document.getElementById('project-meta-timeline');
        const metaTeam = document.getElementById('project-meta-team');
        const metaYear = document.getElementById('project-meta-year');
        if (metaRole) metaRole.textContent = data.meta.role;
        if (metaTime) metaTime.textContent = data.meta.timeline;
        if (metaTeam) metaTeam.textContent = data.meta.team;
        if (metaYear) metaYear.textContent = data.meta.year;

        // Metrics
        const m1Val = document.getElementById('project-metric1-val');
        const m1Lbl = document.getElementById('project-metric1-lbl');
        const m2Val = document.getElementById('project-metric2-val');
        const m2Lbl = document.getElementById('project-metric2-lbl');
        const m3Val = document.getElementById('project-metric3-val');
        const m3Lbl = document.getElementById('project-metric3-lbl');
        if (m1Val) m1Val.textContent = data.results.metric1;
        if (m1Lbl) m1Lbl.textContent = data.results.label1;
        if (m2Val) m2Val.textContent = data.results.metric2;
        if (m2Lbl) m2Lbl.textContent = data.results.label2;
        if (m3Val) m3Val.textContent = data.results.metric3;
        if (m3Lbl) m3Lbl.textContent = data.results.label3;

        // Gallery
        const gal1 = document.getElementById('project-gallery-1');
        const gal2 = document.getElementById('project-gallery-2');
        if (gal1 && data.gallery[0]) gal1.src = data.gallery[0];
        if (gal2 && data.gallery[1]) gal2.src = data.gallery[1];

        // Switch to project-detail view
        switchView('project-detail', false);

        if (updateHash) {
            window.location.hash = `project/${projectId}`;
        }
    }
    window.loadProjectDetail = loadProjectDetail;

    // --------------------------------------------------------------------------
    // 3. Featured Works View Switcher (Folder Grid vs Stacked Folders)
    // --------------------------------------------------------------------------
    const tabGridBtn = document.getElementById('btn-works-grid');
    const tabStackBtn = document.getElementById('btn-works-stacked');
    const worksGridSection = document.getElementById('works-folder-grid');
    const worksStackSection = document.getElementById('works-stacked-folders');

    if (tabGridBtn && tabStackBtn && worksGridSection && worksStackSection) {
        tabGridBtn.addEventListener('click', () => {
            tabGridBtn.classList.add('bg-black', 'text-white');
            tabGridBtn.classList.remove('bg-white', 'text-black');
            tabStackBtn.classList.remove('bg-black', 'text-white');
            tabStackBtn.classList.add('bg-white', 'text-black');
            worksGridSection.classList.remove('hidden');
            worksStackSection.classList.add('hidden');
        });

        tabStackBtn.addEventListener('click', () => {
            tabStackBtn.classList.add('bg-black', 'text-white');
            tabStackBtn.classList.remove('bg-white', 'text-black');
            tabGridBtn.classList.remove('bg-black', 'text-white');
            tabGridBtn.classList.add('bg-white', 'text-black');
            worksStackSection.classList.remove('hidden');
            worksGridSection.classList.add('hidden');
        });
    }

    // --------------------------------------------------------------------------
    // 4. Playground Canvas Zoom & Drag Controls
    // --------------------------------------------------------------------------
    const playgroundCanvas = document.getElementById('playground-pinboard');
    let currentZoom = 1;

    window.zoomPlayground = function(factor) {
        if (!playgroundCanvas) return;
        currentZoom = Math.min(Math.max(currentZoom + factor, 0.75), 1.35);
        playgroundCanvas.style.transform = `scale(${currentZoom})`;
        showToast(`Playground Zoom: ${Math.round(currentZoom * 100)}%`);
    };

    window.resetPlayground = function() {
        if (!playgroundCanvas) return;
        currentZoom = 1;
        playgroundCanvas.style.transform = `scale(1)`;
        showToast('Playground Reset to 100%');
    };

    // --------------------------------------------------------------------------
    // 5. Contact Form Submission
    // --------------------------------------------------------------------------
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = (document.getElementById('contact-name') || {}).value || 'Someone';
            const email = (document.getElementById('contact-email') || {}).value || '';
            const message = (document.getElementById('contact-msg') || {}).value || '';

            const mailtoBody = encodeURIComponent(
                `Hi Tanvir,\n\n${message}\n\nFrom: ${name} (${email})`
            );
            const mailtoLink = `mailto:tanvirshahriar106@gmail.com?subject=${encodeURIComponent('Portfolio Inquiry: ' + name)}&body=${mailtoBody}`;

            showToast('Opening your email client...');
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
            showToast('Email copied to clipboard: tanvirshahriar106@gmail.com');
        }).catch(() => {
            showToast('tanvirshahriar106@gmail.com');
        });
    };

    // --------------------------------------------------------------------------
    // 7. Toast Notification Handler
    // --------------------------------------------------------------------------
    function showToast(message) {
        let toast = document.getElementById('toast-notification');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toast-notification';
            toast.className = 'sticker-tag sticker-mint px-4 py-2.5 shadow-xl text-sm font-bold flex items-center space-x-2 border-2 border-black';
            document.body.appendChild(toast);
        }
        toast.innerHTML = `
            <span>🌸</span>
            <span>${message}</span>
        `;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2800);
    }
    window.showToast = showToast;
});
