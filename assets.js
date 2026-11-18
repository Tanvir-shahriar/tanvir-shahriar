/**
 * assets.js — Assets, Vector Icons, & Interactive Components for Tanvir Shahriar Portfolio
 * Designed to reproduce the tactile paper-and-sticker reference aesthetic.
 */

export const DESIGN_TOKENS = {
  colors: {
    paperBg: '#FBF9F5',
    paperRule: '#E5E0D8',
    primaryYellow: '#FFD028',
    inkBlack: '#141416',
    inkMuted: '#666461',
    cardCream: '#F4EFE6',
    folderNavy: '#181E29',
    pastelPink: '#FFBBD3',
    pastelMint: '#B9E7CA',
    pastelBlue: '#BADBFB',
    pastelLavender: '#D6C7FB',
    pastelButter: '#FFF3A8',
    stickerOrange: '#FFB366',
    tapeIvory: 'rgba(251, 246, 217, 0.82)',
    figmaBlue: '#2563EB',
    trafficDots: {
      red: '#FF5F56',
      yellow: '#FFBD2E',
      green: '#27C93F'
    }
  },
  fonts: {
    pixel: "'Pixelify Sans', 'Silkscreen', monospace",
    mono: "'JetBrains Mono', 'Space Mono', monospace",
    hand: "'Caveat', 'Reenie Beanie', cursive",
    body: "'Plus Jakarta Sans', 'Inter', sans-serif"
  }
};

export const IMAGES = {
  // 1. Author Portrait
  author: {
    local: 'assets/images/author-portrait.jpg',
    original: 'images/my image.jpeg',
    alt: 'Tanvir Shahriar - Full-Stack Software Engineer & AI Systems Developer'
  },
  // 2. About Me - Workspace & Setup
  workspace: {
    local: 'assets/images/desk-setup.jpg',
    fallback: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
    alt: 'Developer desk setup with mechanical keyboard and ambient lighting'
  },
  // 3. Featured Works - Wayline Transit App
  wayline: {
    train: {
      local: 'assets/images/wayline-train.jpg',
      fallback: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
      alt: 'Passenger holding smartphone transit app in front of red subway car'
    },
    transitPhone: {
      local: 'assets/images/wayline-transit-phone.jpg',
      fallback: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80',
      alt: 'Smartphone showing map route navigation'
    },
    bus: {
      local: 'assets/images/wayline-bus.jpg',
      fallback: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80',
      alt: 'Commuter scanning digital ticket on city transit bus'
    },
    commuters: {
      local: 'assets/images/wayline-commuters.jpg',
      fallback: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      alt: 'Smiling commuters outside transit terminal'
    }
  },
  // 4. Featured Works - Tandem Audio / Health App
  tandem: {
    app: {
      local: 'assets/images/tandem-app.jpg',
      fallback: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=800&q=80',
      alt: 'Dark mode mobile UI interface with audio dial'
    },
    headphones: {
      local: 'assets/images/tandem-headphones.jpg',
      fallback: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      alt: 'Minimalist headphones on dark surface'
    }
  },
  // 5. Featured Works - Forge Developer Platform
  forge: {
    laptop: {
      local: 'assets/images/forge-laptop.jpg',
      fallback: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      alt: 'Developer coding on laptop with multiple terminal windows'
    },
    developer: {
      local: 'assets/images/forge-developer.jpg',
      fallback: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      alt: 'Engineering lead reviewing software architecture'
    }
  },
  // 6. Playground - Pinboard Collage Assets
  playground: {
    retroMac: {
      local: 'assets/images/retro-mac-photo.jpg',
      svg: 'assets/svg/retro-mac.svg',
      fallback: 'https://images.unsplash.com/photo-1517055729445-fa7d27394b48?auto=format&fit=crop&w=800&q=80',
      alt: 'Retro classic Macintosh computer with hello screen'
    },
    abstract3D: {
      local: 'assets/images/abstract-3d.jpg',
      fallback: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      alt: '3D abstract iridescent sphere render'
    },
    purpleKeyboard: {
      local: 'assets/images/purple-keyboard.jpg',
      fallback: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80',
      alt: 'Purple custom mechanical keyboard on creative desk'
    },
    sunset: {
      local: 'assets/images/sunset-silhouette.jpg',
      fallback: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
      alt: 'Silhouette of friends against sunset horizon'
    },
    desktopAccessories: {
      local: 'assets/images/desktop-accessories.jpg',
      fallback: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
      alt: 'Minimalist desktop accessories and phone stationery'
    }
  }
};

export const SVG_ICONS = {
  // Smiley Yellow (Screen 9 Let's Talk)
  smileyYellow: `<svg viewBox="0 0 100 100" width="100%" height="100%" class="sticker-smiley">
    <circle cx="50" cy="50" r="45" fill="#FFD028" stroke="#141416" stroke-width="4"/>
    <ellipse cx="36" cy="40" rx="4.5" ry="7.5" fill="#141416"/>
    <ellipse cx="64" cy="40" rx="4.5" ry="7.5" fill="#141416"/>
    <path d="M 27 58 C 32 76, 68 76, 73 58" fill="none" stroke="#141416" stroke-width="4.5" stroke-linecap="round"/>
  </svg>`,

  // Smiley Green (Screen 1 headline)
  smileyGreen: `<svg viewBox="0 0 60 60" width="100%" height="100%" class="inline-block w-6 h-6 align-middle">
    <circle cx="30" cy="30" r="26" fill="#B9E7CA" stroke="#141416" stroke-width="3"/>
    <ellipse cx="22" cy="24" rx="2.8" ry="4.5" fill="#141416"/>
    <ellipse cx="38" cy="24" rx="2.8" ry="4.5" fill="#141416"/>
    <path d="M 18 36 C 22 47, 38 47, 42 36" fill="none" stroke="#141416" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  // Flower Pink (Screen 1 headline)
  flowerPink: `<svg viewBox="0 0 80 80" width="100%" height="100%" class="inline-block w-7 h-7 align-middle">
    <g fill="#FFBBD3" stroke="#141416" stroke-width="2.5">
      <ellipse cx="40" cy="18" rx="9" ry="14" />
      <ellipse cx="40" cy="62" rx="9" ry="14" />
      <ellipse cx="18" cy="40" rx="14" ry="9" />
      <ellipse cx="62" cy="40" rx="14" ry="9" />
      <ellipse cx="24" cy="24" rx="14" ry="9" transform="rotate(45 24 24)" />
      <ellipse cx="56" cy="56" rx="14" ry="9" transform="rotate(45 56 56)" />
      <ellipse cx="56" cy="24" rx="14" ry="9" transform="rotate(-45 56 24)" />
      <ellipse cx="24" cy="56" rx="14" ry="9" transform="rotate(-45 24 56)" />
    </g>
    <circle cx="40" cy="40" r="8.5" fill="#141416"/>
    <circle cx="38" cy="38" r="2" fill="#FFFFFF" opacity="0.8"/>
  </svg>`,

  // Masking Tape Strip
  tapeStrip: `<svg viewBox="0 0 140 36" preserveAspectRatio="none" class="w-full h-full">
    <path d="M 8,2 L 132,2 L 135,6 L 131,10 L 137,15 L 132,20 L 138,25 L 133,30 L 136,34 L 8,34 L 5,30 L 9,25 L 4,20 L 8,15 L 3,10 L 7,6 Z" 
          fill="#FBF6D9" fill-opacity="0.82" stroke="rgba(215, 205, 175, 0.4)" stroke-width="0.8" />
    <line x1="15" y1="10" x2="125" y2="10" stroke="rgba(255,255,255,0.45)" stroke-width="1.5" stroke-dasharray="12 8" />
  </svg>`,

  // Curved Arrow
  arrowCurved: `<svg viewBox="0 0 100 60" width="100%" height="100%">
    <path d="M 10,18 C 35,6 72,12 82,42" fill="none" stroke="#141416" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M 68,36 L 83,44 L 85,28" fill="none" stroke="#141416" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  // Loop Arrow
  arrowLoop: `<svg viewBox="0 0 120 70" width="100%" height="100%">
    <path d="M 12,48 C 35,46 52,14 68,18 C 80,22 75,44 60,40 C 44,36 62,62 104,52" fill="none" stroke="#141416" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M 90,44 L 106,53 L 95,64" fill="none" stroke="#141416" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  // Swoop Arrow
  arrowSwoop: `<svg viewBox="0 0 80 80" width="100%" height="100%">
    <path d="M 18,16 Q 64,22 48,64" fill="none" stroke="#141416" stroke-width="3" stroke-linecap="round"/>
    <path d="M 36,54 L 49,66 L 58,52" fill="none" stroke="#141416" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  // Sparkle 4-point Star
  sparkle: `<svg viewBox="0 0 60 60" width="100%" height="100%">
    <path d="M 30,4 Q 30,30 4,30 Q 30,30 30,56 Q 30,30 56,30 Q 30,30 30,4 Z" 
          fill="#D6C7FB" stroke="#141416" stroke-width="2.5" stroke-linejoin="round"/>
  </svg>`,

  // Multi-Ray Starburst
  starburst: `<svg viewBox="0 0 80 80" width="100%" height="100%">
    <g stroke="#141416" stroke-width="2.8" stroke-linecap="round">
      <line x1="40" y1="8" x2="40" y2="72" />
      <line x1="8" y1="40" x2="72" y2="40" />
      <line x1="17" y1="17" x2="63" y2="63" />
      <line x1="17" y1="63" x2="63" y2="17" />
      <circle cx="40" cy="40" r="5" fill="#FFD028" stroke="#141416" stroke-width="2"/>
    </g>
  </svg>`,

  // Scribble Underline
  scribbleUnderline: `<svg viewBox="0 0 240 28" width="100%" height="100%" preserveAspectRatio="none">
    <path d="M 6,12 Q 35,4 65,14 T 125,12 T 185,15 T 234,10" fill="none" stroke="#FFD028" stroke-width="4" stroke-linecap="round"/>
    <path d="M 230,18 Q 175,24 120,18 T 12,22" fill="none" stroke="#FFD028" stroke-width="2.5" stroke-linecap="round" opacity="0.75"/>
  </svg>`,

  // Scribble Circle
  scribbleCircle: `<svg viewBox="0 0 180 80" width="100%" height="100%">
    <path d="M 24,42 C 18,22 62,10 115,14 C 158,17 166,36 154,58 C 142,74 74,78 30,66 C 12,56 16,32 50,24 C 85,16 142,20 162,38" 
          fill="none" stroke="#141416" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  // Traffic Light Window Dots
  trafficDots: `<svg viewBox="0 0 60 16" width="60" height="16" class="inline-block">
    <circle cx="10" cy="8" r="5.5" fill="#FF5F56" stroke="rgba(0,0,0,0.15)" stroke-width="1"/>
    <circle cx="30" cy="8" r="5.5" fill="#FFBD2E" stroke="rgba(0,0,0,0.15)" stroke-width="1"/>
    <circle cx="50" cy="8" r="5.5" fill="#27C93F" stroke="rgba(0,0,0,0.15)" stroke-width="1"/>
  </svg>`,

  // Folder Tab Left Bevel
  folderTabLeft: `<svg viewBox="0 0 400 48" preserveAspectRatio="none" width="100%" height="100%">
    <path d="M 0,48 L 0,8 Q 0,0 8,0 L 140,0 Q 148,0 154,6 L 174,42 Q 177,48 184,48 L 400,48" 
          fill="currentColor" stroke="#141416" stroke-width="2.5" stroke-linejoin="round"/>
  </svg>`,

  // Retro Macintosh 128K
  retroMac: `<svg viewBox="0 0 160 210" width="100%" height="100%">
    <g>
      <rect x="20" y="18" width="120" height="172" rx="6" fill="#E5DFD1" stroke="#141416" stroke-width="3"/>
      <rect x="30" y="28" width="100" height="84" rx="8" fill="#6E6B65" stroke="#141416" stroke-width="2.5"/>
      <rect x="34" y="32" width="92" height="76" rx="6" fill="#222428" stroke="#141416" stroke-width="1.5"/>
      <path d="M 48,76 C 48,58 53,52 55,52 C 57,52 57,60 57,74 M 57,64 C 62,56 68,58 68,66 L 68,74 M 73,68 C 73,60 81,60 81,67 C 81,69 73,69 73,71 C 73,75 80,75 82,73 M 87,52 L 87,74 M 93,52 L 93,74 M 99,66 C 99,60 107,60 107,67 C 107,75 99,75 99,66 Z M 111,73 A 1.5,1.5 0 1,1 111,73.1" 
            fill="none" stroke="#F5F3E9" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="32" y="128" width="8" height="10" rx="1" fill="#FFD028" stroke="#141416" stroke-width="1"/>
      <rect x="82" y="128" width="44" height="5" rx="1.5" fill="#141416"/>
      <line x1="32" y1="172" x2="128" y2="172" stroke="#141416" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="32" y1="177" x2="128" y2="177" stroke="#141416" stroke-width="1.5" stroke-linecap="round"/>
    </g>
  </svg>`
};

/**
 * Helper to create a realistic masking tape strip
 * @param {'tl'|'tr'|'bl'|'br'|'tc'|'bc'} position
 * @param {'h'|'v'} orientation
 * @param {'default'|'yellow'|'mint'|'pink'} variant
 */
export function createTape(position = 'tl', orientation = 'h', variant = 'default') {
  const tape = document.createElement('div');
  const posClass = {
    tl: 'tape-tl',
    tr: 'tape-tr',
    bl: 'tape-bl',
    br: 'tape-br',
    tc: 'tape-top-center',
    bc: 'tape-bottom-center'
  }[position] || 'tape-tl';

  const orientClass = orientation === 'v' ? 'tape-v' : 'tape-h';
  const varClass = variant !== 'default' ? `tape-${variant}` : '';

  tape.className = `tape ${orientClass} ${posClass} ${varClass}`.trim();
  tape.setAttribute('aria-hidden', 'true');
  return tape;
}

/**
 * Helper to wrap an image into an authentic polaroid photo frame
 */
export function createPolaroid({
  src,
  caption = '',
  rotation = 0,
  tape = 'tl',
  className = '',
  width = 240
}) {
  const wrapper = document.createElement('div');
  wrapper.className = `polaroid ${className}`.trim();
  wrapper.style.width = `${width}px`;
  wrapper.style.transform = `rotate(${rotation}deg)`;

  if (tape) {
    wrapper.appendChild(createTape(tape));
  }

  const img = document.createElement('img');
  img.src = src;
  img.alt = caption || 'Polaroid photograph';
  img.loading = 'lazy';
  wrapper.appendChild(img);

  if (caption) {
    const cap = document.createElement('div');
    cap.className = 'caption';
    cap.textContent = caption;
    wrapper.appendChild(cap);
  }

  return wrapper;
}

/**
 * Helper to create an interactive Figma selection bounding box with 8 drag handles
 */
export function createBoundingBox(text = 'CONTACT', { tag = 'div', className = '' } = {}) {
  const container = document.createElement(tag);
  container.className = `figma-box ${className}`.trim();

  // Handles
  ['h-tl', 'h-tc', 'h-tr', 'h-ml', 'h-mr', 'h-bl', 'h-bc', 'h-br'].forEach(hClass => {
    const h = document.createElement('span');
    h.className = `handle ${hClass}`;
    h.setAttribute('aria-hidden', 'true');
    container.appendChild(h);
  });

  const content = document.createElement('span');
  content.className = 'font-pixel text-4xl sm:text-5xl tracking-tight text-ink-black inline-block';
  content.textContent = text;
  container.appendChild(content);

  return container;
}

/**
 * Interaction helper for Playground: makes pinned elements draggable
 */
export function initPlaygroundPinboard(selector = '.pinboard-item') {
  const items = document.querySelectorAll(selector);

  items.forEach(item => {
    let isDragging = false;
    let startX = 0, startY = 0;
    let initialX = 0, initialY = 0;

    item.addEventListener('mousedown', e => {
      // Don't drag if clicking buttons or links inside
      if (['A', 'BUTTON', 'INPUT'].includes(e.target.tagName)) return;

      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;

      const rect = item.getBoundingClientRect();
      const parentRect = item.parentElement.getBoundingClientRect();
      initialX = rect.left - parentRect.left;
      initialY = rect.top - parentRect.top;

      item.style.position = 'absolute';
      item.style.left = `${initialX}px`;
      item.style.top = `${initialY}px`;
      item.style.zIndex = 40;

      function onMouseMove(e) {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        item.style.left = `${initialX + dx}px`;
        item.style.top = `${initialY + dy}px`;
      }

      function onMouseUp() {
        isDragging = false;
        item.style.zIndex = '';
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
      }

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    });

    // Touch support for mobile/tablet
    item.addEventListener('touchstart', e => {
      if (['A', 'BUTTON', 'INPUT'].includes(e.target.tagName)) return;
      const touch = e.touches[0];
      isDragging = true;
      startX = touch.clientX;
      startY = touch.clientY;

      const rect = item.getBoundingClientRect();
      const parentRect = item.parentElement.getBoundingClientRect();
      initialX = rect.left - parentRect.left;
      initialY = rect.top - parentRect.top;

      item.style.position = 'absolute';
      item.style.left = `${initialX}px`;
      item.style.top = `${initialY}px`;
      item.style.zIndex = 40;

      function onTouchMove(e) {
        if (!isDragging) return;
        const t = e.touches[0];
        item.style.left = `${initialX + (t.clientX - startX)}px`;
        item.style.top = `${initialY + (t.clientY - startY)}px`;
      }

      function onTouchEnd() {
        isDragging = false;
        item.style.zIndex = '';
        window.removeEventListener('touchmove', onTouchMove);
        window.removeEventListener('touchend', onTouchEnd);
      }

      window.addEventListener('touchmove', onTouchMove, { passive: true });
      window.addEventListener('touchend', onTouchEnd);
    }, { passive: true });
  });
}

/**
 * Loads Google Fonts dynamically if not present
 */
export function injectFonts() {
  const id = 'google-fonts-scrapbook';
  if (!document.getElementById(id)) {
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=JetBrains+Mono:wght@400;500;700&family=Pixelify+Sans:wght@700&family=Plus+Jakarta+Sans:wght@400;500;600&family=Silkscreen:wght@700&display=swap';
    document.head.appendChild(link);
  }
}
