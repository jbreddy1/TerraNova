// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Language switching functionality
function changeLanguage() {
    const languageSelect = document.getElementById('languageSelect');
    const selectedLanguage = languageSelect.value;
    
    // Update all elements with data attributes
    document.querySelectorAll('[data-en], [data-hi], [data-or]').forEach(element => {
        const text = element.getAttribute(`data-${selectedLanguage}`);
        if (text) {
            element.textContent = text;
        }
    });
    
    // Update page direction for RTL languages if needed
    if (selectedLanguage === 'hi' || selectedLanguage === 'or') {
        document.documentElement.setAttribute('dir', 'ltr'); // Keep LTR for now
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }
}

// Role selection functionality
function selectRole(role) {
    // Add visual feedback
    const roleCards = document.querySelectorAll('.role-card');
    roleCards.forEach(card => {
        card.style.transform = 'scale(0.95)';
        card.style.opacity = '0.7';
    });
    
    // Show loading state
    const selectedCard = document.querySelector(`.${role}-card`);
    if (selectedCard) {
        selectedCard.classList.add('loading');
    }
    
    // Simulate role selection process
    setTimeout(() => {
        if (role === 'farmer') {
            // Redirect to farmer interface
            alert('Redirecting to Farmer Dashboard...\n\nIn the full application, this would:\n- Show OTP login for farmers\n- Collect basic farm information\n- Display personalized yield predictions');
            // window.location.href = '/farmer-dashboard';
        } else if (role === 'government') {
            // Redirect to government interface
            alert('Redirecting to Government Portal...\n\nIn the full application, this would:\n- Show secure login for government officers\n- Display district-level analytics\n- Provide policy decision support tools');
            // window.location.href = '/government-portal';
        }
        
        // Reset card states
        roleCards.forEach(card => {
            card.style.transform = '';
            card.style.opacity = '';
            card.classList.remove('loading');
        });
    }, 1000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to features section
function scrollToFeatures() {
    document.getElementById('features').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Modal functionality
const modal = document.getElementById('signInModal');

function openSignInModal() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeSignInModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeSignInModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeSignInModal();
    }
});

// Form submission handling
const signinForm = document.querySelector('.signin-form');
signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Basic validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate sign in process
    const submitBtn = signinForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing In...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // For demo purposes, just show success message
        alert('Sign in successful! Redirecting to dashboard...');
        closeSignInModal();
        
        // Reset form
        signinForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // In a real application, you would redirect to the dashboard
        // window.location.href = '/dashboard';
    }, 2000);
});

// Show sign up form (placeholder)
function showSignUp() {
    alert('Sign up functionality will be implemented in the next phase!');
}

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards and stakeholder cards
document.querySelectorAll('.feature-card, .stakeholder-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Counter animation for hero stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 50;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroObserver.observe(heroSection);
}

// Floating cards animation enhancement
function enhanceFloatingCards() {
    const cards = document.querySelectorAll('.floating-card');
    
    cards.forEach((card, index) => {
        // Add mouse interaction
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
        
        // Staggered animation on load
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Initialize floating cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.floating-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease';
    });
    
    setTimeout(enhanceFloatingCards, 500);
});

// Add loading animation for buttons
function addButtonLoading(button, text = 'Loading...') {
    const originalText = button.innerHTML;
    button.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${text}`;
    button.disabled = true;
    
    return () => {
        button.innerHTML = originalText;
        button.disabled = false;
    };
}

// Enhanced form validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

// Real-time form validation
document.getElementById('email').addEventListener('blur', function() {
    const email = this.value;
    const isValid = validateEmail(email);
    
    if (email && !isValid) {
        this.style.borderColor = '#e74c3c';
        showFieldError(this, 'Please enter a valid email address');
    } else {
        this.style.borderColor = '#4a7c59';
        hideFieldError(this);
    }
});

document.getElementById('password').addEventListener('blur', function() {
    const password = this.value;
    const isValid = validatePassword(password);
    
    if (password && !isValid) {
        this.style.borderColor = '#e74c3c';
        showFieldError(this, 'Password must be at least 6 characters');
    } else {
        this.style.borderColor = '#4a7c59';
        hideFieldError(this);
    }
});

function showFieldError(field, message) {
    hideFieldError(field); // Remove existing error
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '0.8rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
}

function hideFieldError(field) {
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

// Add smooth reveal animation for sections
function revealSections() {
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        sectionObserver.observe(section);
    });
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
    revealSections();
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Tab navigation for modal
    if (modal.style.display === 'block') {
        const focusableElements = modal.querySelectorAll('input, button, a');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                }
            } else {
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        }
    }
});

// Add ripple effect to buttons
function addRippleEffect(button) {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}

// Apply ripple effect to all buttons
document.querySelectorAll('button').forEach(addRippleEffect);

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    button {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);
