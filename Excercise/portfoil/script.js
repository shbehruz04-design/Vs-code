// ============================================
// PREMIUM PORTFOLIO - JAVASCRIPT
// BDex Group - Full Stack Agency
// ============================================

'use strict';

// ============================================
// Configuration
// ============================================
const CONFIG = {
    API_BASE_URL: 'http://localhost:8080/api',
    TYPING_SPEED: 100,
    TYPING_DELAY: 2000,
    ANIMATION_THRESHOLD: 0.2,
};

// ============================================
// Utility Functions
// ============================================
const utils = {
    /**
     * Check if user prefers reduced motion
     */
    prefersReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    },

    /**
     * Debounce function for performance
     */
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Throttle function for scroll events
     */
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    /**
     * Smooth scroll to element
     */
    smoothScrollTo(element) {
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
};

// ============================================
// Mobile Menu Toggle
// ============================================
class MobileMenu {
    constructor() {
        this.toggle = document.querySelector('.mobile-menu-toggle');
        this.menu = document.querySelector('.links');
        this.links = document.querySelectorAll('.links nav a');
        this.init();
    }

    init() {
        if (!this.toggle || !this.menu) return;

        this.toggle.addEventListener('click', () => this.toggleMenu());
        
        // Close menu when clicking links
        this.links.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.toggle.contains(e.target) && !this.menu.contains(e.target)) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        this.toggle.classList.toggle('active');
        this.menu.classList.toggle('active');
        
        // Update ARIA attribute
        const isOpen = this.menu.classList.contains('active');
        this.toggle.setAttribute('aria-expanded', isOpen);
    }

    closeMenu() {
        this.toggle.classList.remove('active');
        this.menu.classList.remove('active');
        this.toggle.setAttribute('aria-expanded', 'false');
    }
}

// ============================================
// Header Scroll Effect
// ============================================
class HeaderScroll {
    constructor() {
        this.header = document.getElementById('header');
        this.init();
    }

    init() {
        if (!this.header) return;

        const handleScroll = utils.throttle(() => {
            if (window.scrollY > 50) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }
        }, 100);

        window.addEventListener('scroll', handleScroll);
    }
}

// ============================================
// Active Navigation Link
// ============================================
class ActiveNavigation {
    constructor() {
        this.sections = document.querySelectorAll('section[id]');
        this.navLinks = document.querySelectorAll('.links nav a');
        this.init();
    }

    init() {
        if (!this.sections.length || !this.navLinks.length) return;

        const handleScroll = utils.throttle(() => {
            this.updateActiveLink();
        }, 100);

        window.addEventListener('scroll', handleScroll);
    }

    updateActiveLink() {
        const scrollPosition = window.scrollY + 100;

        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

// ============================================
// Typing Effect for Hero Role
// ============================================
class TypingEffect {
    constructor(element, texts, speed = 100, delay = 2000) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.delay = delay;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.init();
    }

    init() {
        if (!this.element || utils.prefersReducedMotion()) {
            // Show first text if reduced motion is preferred
            if (this.element && this.texts.length > 0) {
                this.element.textContent = this.texts[0];
            }
            return;
        }

        this.type();
    }

    type() {
        const currentText = this.texts[this.textIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        let typeSpeed = this.speed;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.charIndex === currentText.length) {
            typeSpeed = this.delay;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// ============================================
// Scroll Reveal Animation
// ============================================
class ScrollReveal {
    constructor() {
        this.sections = document.querySelectorAll('section');
        this.init();
    }

    init() {
        if (utils.prefersReducedMotion()) {
            // Make all sections visible immediately
            this.sections.forEach(section => section.classList.add('visible'));
            return;
        }

        const observerOptions = {
            threshold: CONFIG.ANIMATION_THRESHOLD,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        this.sections.forEach(section => {
            observer.observe(section);
        });
    }
}

// ============================================
// Animated Statistics Counter
// ============================================
class StatCounter {
    constructor() {
        this.stats = document.querySelectorAll('.stat-number');
        this.hasAnimated = false;
        this.init();
    }

    init() {
        if (!this.stats.length) return;

        const observerOptions = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.hasAnimated) {
                    this.animateStats();
                    this.hasAnimated = true;
                }
            });
        }, observerOptions);

        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            observer.observe(aboutSection);
        }
    }

    animateStats() {
        this.stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target;
                }
            };

            updateCounter();
        });
    }
}

// ============================================
// Skill Progress Bars Animation
// ============================================
class SkillBars {
    constructor() {
        this.skillItems = document.querySelectorAll('.skill-item');
        this.hasAnimated = false;
        this.init();
    }

    init() {
        if (!this.skillItems.length || utils.prefersReducedMotion()) {
            // Show full progress bars immediately if reduced motion
            this.skillItems.forEach((item, index) => {
                const progressBar = item.querySelector('.skill-progress');
                const width = progressBar.getAttribute('data-width');
                progressBar.style.width = `${width}%`;
                item.classList.add('animate');
            });
            return;
        }

        const observerOptions = {
            threshold: 0.3
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.hasAnimated) {
                    this.animateSkills();
                    this.hasAnimated = true;
                }
            });
        }, observerOptions);

        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            observer.observe(skillsSection);
        }
    }

    animateSkills() {
        this.skillItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate');
                const progressBar = item.querySelector('.skill-progress');
                const width = progressBar.getAttribute('data-width');
                progressBar.style.width = `${width}%`;
            }, index * 100);
        });
    }
}

// ============================================
// Contact Form Validation & Submission
// ============================================
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => this.handleSubmit(e));

        // Real-time validation
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearError(input));
        });
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        let errorMessage = '';

        // Required validation
        if (!value) {
            isValid = false;
            errorMessage = 'This field is required';
        }

        // Email validation
        if (fieldName === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }

        // Name validation
        if (fieldName === 'name' && value) {
            if (value.length < 2) {
                isValid = false;
                errorMessage = 'Name must be at least 2 characters';
            }
        }

        // Message validation
        if (fieldName === 'message' && value) {
            if (value.length < 10) {
                isValid = false;
                errorMessage = 'Message must be at least 10 characters';
            }
        }

        this.showError(field, isValid ? null : errorMessage);
        return isValid;
    }

    validateForm() {
        const inputs = this.form.querySelectorAll('input, textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });

        return isValid;
    }

    showError(field, message) {
        const formGroup = field.closest('.form-group');
        let errorElement = formGroup.querySelector('.form-error');

        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'form-error';
            formGroup.appendChild(errorElement);
        }

        if (message) {
            field.classList.add('error');
            errorElement.textContent = message;
            errorElement.classList.add('show');
        } else {
            field.classList.remove('error');
            errorElement.classList.remove('show');
        }
    }

    clearError(field) {
        field.classList.remove('error');
        const formGroup = field.closest('.form-group');
        const errorElement = formGroup.querySelector('.form-error');
        if (errorElement) {
            errorElement.classList.remove('show');
        }
    }

    showSuccess(message) {
        let successElement = this.form.querySelector('.form-success');
        
        if (!successElement) {
            successElement = document.createElement('div');
            successElement.className = 'form-success';
            this.form.insertBefore(successElement, this.form.firstChild);
        }

        successElement.textContent = message;
        successElement.classList.add('show');

        setTimeout(() => {
            successElement.classList.remove('show');
        }, 5000);
    }

    async handleSubmit(e) {
        e.preventDefault();

        if (!this.validateForm()) {
            return;
        }

        const submitButton = this.form.querySelector('button[type="submit"]');
        const formData = new FormData(this.form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        try {
            const response = await fetch(`${CONFIG.API_BASE_URL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            
            // Show success message
            this.showSuccess('Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
            
            // Reset form
            this.form.reset();

        } catch (error) {
            console.error('Error submitting form:', error);
            
            // Show error message
            this.showSuccess('Oops! Something went wrong. Please try again or email us directly.');
        } finally {
            // Re-enable button
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        }
    }
}

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
class SmoothScroll {
    constructor() {
        this.links = document.querySelectorAll('a[href^="#"]');
        this.init();
    }

    init() {
        this.links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                if (href === '#' || href === '') return;

                e.preventDefault();
                const target = document.querySelector(href);
                utils.smoothScrollTo(target);
            });
        });
    }
}

// ============================================
// Initialize All Modules
// ============================================
class App {
    constructor() {
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeModules());
        } else {
            this.initializeModules();
        }
    }

    initializeModules() {
        // Initialize all components
        new MobileMenu();
        new HeaderScroll();
        new ActiveNavigation();
        new ScrollReveal();
        new StatCounter();
        new SkillBars();
        new ContactForm();
        new SmoothScroll();

        // Initialize typing effect
        const typingElement = document.querySelector('.typing-text');
        if (typingElement) {
            const roleInput = document.getElementById('heroRole');
            let roles = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Tech Enthusiast'];
            
            // Get roles from admin input if available
            if (roleInput && roleInput.value) {
                roles = roleInput.value.split(',').map(role => role.trim());
            }
            
            new TypingEffect(typingElement, roles, CONFIG.TYPING_SPEED, CONFIG.TYPING_DELAY);
        }

        // Load dynamic name if available
        this.loadDynamicContent();

        console.log('✨ BDex Group Portfolio Initialized');
    }

    loadDynamicContent() {
        // This would typically load from admin settings
        // For now, we'll just set a default name
        const nameElement = document.querySelector('.name');
        if (nameElement && nameElement.textContent === '...') {
            nameElement.textContent = 'Bexruz';
        }
    }
}

// ============================================
// Start Application
// ============================================
new App();

// ============================================
// Export for use in other modules if needed
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { App, utils, CONFIG };
}