// =============================================================
// ANIMATION ENGINE — Carusos Premium Restaurant Experience
// =============================================================

// ─── 1. PAGE LOADER ──────────────────────────────────────────
function initPageLoader() {
    const loader = document.getElementById('pageLoader');
    if (!loader) return;

    const hideLoader = () => {
        setTimeout(() => {
            loader.classList.add('hide');
            setTimeout(() => {
                if (loader.parentNode) loader.parentNode.removeChild(loader);
            }, 700);
        }, 400);
    };

    if (document.readyState === 'complete') {
        setTimeout(hideLoader, 1800);
    } else {
        window.addEventListener('load', () => setTimeout(hideLoader, 1800));
    }
}

// ─── 2. SCROLL REVEAL ────────────────────────────────────────
function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal, .reveal-stagger, .section-header');
    if (!revealEls.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Animate section subtitle underline
                const subtitle = entry.target.querySelector('.section-subtitle');
                if (subtitle) subtitle.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach(el => observer.observe(el));
}

// ─── 3. MENU CARD STAGGER ANIMATION ──────────────────────────
function animateMenuCards() {
    const cards = document.querySelectorAll('#menuGrid .menu-card');
    cards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(28px) scale(0.97)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        card.style.transitionDelay = (i * 0.07) + 's';
        // Double rAF ensures layout is painted before transition
        requestAnimationFrame(() => requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'none';
        }));
    });
}

// ─── 4. FLOATING PARTICLES CANVAS ────────────────────────────
function initParticles() {
    const canvas = document.getElementById('particlesCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    const CHARS = ['🍕', '⭐', '🌿', '✦', '·', '❤', '✿', '◆'];
    const COUNT = 30;

    function Particle() {
        this.reset = function(initial) {
            this.x        = Math.random() * canvas.width;
            this.y        = initial ? Math.random() * canvas.height : canvas.height + 20;
            this.size     = Math.random() * 13 + 7;
            this.speedY   = -(Math.random() * 0.45 + 0.12);
            this.speedX   = (Math.random() - 0.5) * 0.3;
            this.opacity  = Math.random() * 0.15 + 0.05;
            this.rotation = Math.random() * Math.PI * 2;
            this.rotSpeed = (Math.random() - 0.5) * 0.007;
            this.char     = CHARS[Math.floor(Math.random() * CHARS.length)];
        };
        this.reset(true);

        this.update = function() {
            this.y        += this.speedY;
            this.x        += this.speedX;
            this.rotation += this.rotSpeed;
            if (this.y < -30) this.reset(false);
        };

        this.draw = function() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.font = this.size + 'px serif';
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.fillText(this.char, -this.size / 2, this.size / 2);
            ctx.restore();
        };
    }

    var particles = [];
    for (var i = 0; i < COUNT; i++) particles.push(new Particle());

    var rafId;
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(function(p) { p.update(); p.draw(); });
        rafId = requestAnimationFrame(animate);
    }
    animate();

    // Pause animation when tab is not visible (saves CPU)
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            cancelAnimationFrame(rafId);
        } else {
            animate();
        }
    });
}

// ─── 5. CART BADGE POP ANIMATION ─────────────────────────────
function animateCartBadge() {
    var badge = document.getElementById('cartBadge');
    if (!badge) return;
    badge.classList.remove('pop');
    void badge.offsetWidth; // force reflow to restart animation
    badge.classList.add('pop');
    setTimeout(function() { badge.classList.remove('pop'); }, 400);
}

// ─── 6. ACTIVE NAV SECTION HIGHLIGHT ─────────────────────────
function initActiveNavOnScroll() {
    var sections = document.querySelectorAll('section[id]');
    var navItems = document.querySelectorAll('.nav-item a');

    var obs = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var id = entry.target.id;
                navItems.forEach(function(link) {
                    link.parentElement.classList.toggle(
                        'active',
                        link.getAttribute('href') === ('#' + id)
                    );
                });
            }
        });
    }, { threshold: 0.4 });

    sections.forEach(function(s) { obs.observe(s); });
}

// ─── 7. STAT COUNTER ENTRANCE ────────────────────────────────
function initStatCounters() {
    var statItems = document.querySelectorAll('.stat-item');
    if (!statItems.length) return;

    var obs = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('counting');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.6 });

    statItems.forEach(function(s) { obs.observe(s); });
}

// ─── 8. HERO PARALLAX ON MOUSE MOVE ──────────────────────────
function initHeroParallax() {
    var heroBg     = document.querySelector('.hero-bg');
    var heroCircle = document.querySelector('.hero-circle-bg');
    if (!heroBg) return;

    var ticking = false;
    document.addEventListener('mousemove', function(e) {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function() {
            var x = (e.clientX / window.innerWidth  - 0.5) * 22;
            var y = (e.clientY / window.innerHeight - 0.5) * 22;
            heroBg.style.transform = 'translate(' + (x * 0.3) + 'px,' + (y * 0.3) + 'px)';
            if (heroCircle) {
                heroCircle.style.transform = 'translate(' + (x * 0.55) + 'px,' + (y * 0.55) + 'px)';
            }
            ticking = false;
        });
    }, { passive: true });
}

// ─── 9. BUTTON RIPPLE EFFECT ─────────────────────────────────
function initRippleEffect() {
    // Inject ripple keyframe once
    if (!document.getElementById('carusos-ripple-style')) {
        var st = document.createElement('style');
        st.id  = 'carusos-ripple-style';
        st.textContent = '@keyframes carusosRipple{to{transform:scale(2.8);opacity:0}}';
        document.head.appendChild(st);
    }

    document.addEventListener('click', function(e) {
        var btn = e.target.closest('.btn');
        if (!btn) return;

        var ripple = document.createElement('span');
        var rect   = btn.getBoundingClientRect();
        var size   = Math.max(rect.width, rect.height);

        ripple.style.cssText = [
            'position:absolute',
            'border-radius:50%',
            'width:'  + size + 'px',
            'height:' + size + 'px',
            'left:'   + (e.clientX - rect.left - size / 2) + 'px',
            'top:'    + (e.clientY - rect.top  - size / 2) + 'px',
            'background:rgba(255,255,255,0.22)',
            'transform:scale(0)',
            'animation:carusosRipple 0.55s ease forwards',
            'pointer-events:none',
            'z-index:9'
        ].join(';');

        btn.appendChild(ripple);
        setTimeout(function() {
            if (ripple.parentNode) ripple.parentNode.removeChild(ripple);
        }, 600);
    });
}

// ─── 10. PATCH EXISTING APP FUNCTIONS ────────────────────────
// Wait for app.js to define functions, then patch them
window.addEventListener('DOMContentLoaded', function() {
    // Patch addItemToOrder → trigger badge pop
    if (typeof addItemToOrder === 'function') {
        var _origAdd = addItemToOrder;
        window.addItemToOrder = function(itemId) {
            _origAdd(itemId);
            animateCartBadge();
        };
    }

    // Patch initMenu → stagger cards after render
    if (typeof initMenu === 'function') {
        var _origMenu = initMenu;
        window.initMenu = function() {
            _origMenu();
            setTimeout(animateMenuCards, 50);
            setTimeout(initScrollReveal, 100);
        };
    }
});

// ─── BOOT ─────────────────────────────────────────────────────
(function bootAnimations() {
    // These run immediately (before DOMContentLoaded)
    initPageLoader();
    initParticles();

    // These need DOM
    function onDomReady() {
        initScrollReveal();
        initStatCounters();
        initActiveNavOnScroll();
        initHeroParallax();
        initRippleEffect();
        setTimeout(animateMenuCards, 300);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', onDomReady);
    } else {
        onDomReady();
    }
})();
