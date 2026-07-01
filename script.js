/* ============================================================
   PORTFOLIO JAVASCRIPT
   ============================================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all event listeners
    initializeFormHandling();
    initializeScrollBehavior();
    initializeMobileMenu();
});

/* ============================================================
   FORM HANDLING
   ============================================================ */

function initializeFormHandling() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit(this);
        });
    }
}

function handleFormSubmit(form) {
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const subject = form.elements['subject'].value;
    const message = form.elements['message'].value;
    
    // Validate form
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Since this is a static website, show a success message
    // In a real implementation, this would send to a server
    showNotification('Thank you for your message! Please also send an email to sangeet.kattel@gmail.com to ensure I receive it.', 'success');
    
    // Reset form
    form.reset();
}

/* ============================================================
   NOTIFICATION SYSTEM
   ============================================================ */

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background-color: ${type === 'success' ? '#4CAF50' : '#ff6b6b'};
        color: white;
        border-radius: 5px;
        z-index: 1000;
        font-weight: bold;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 5 seconds
    setTimeout(function() {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(function() {
            notification.remove();
        }, 300);
    }, 5000);
}

/* ============================================================
   SCROLL BEHAVIOR
   ============================================================ */

function initializeScrollBehavior() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ============================================================
   MOBILE MENU
   ============================================================ */

function initializeMobileMenu() {
    // Add mobile menu toggle if needed
    const navLinks = document.querySelector('.nav-links');
    
    if (navLinks && window.innerWidth <= 768) {
        // Mobile menu logic can be added here
    }
}

/* ============================================================
   ANIMATIONS
   ============================================================ */

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

/* ============================================================
   UTILITY FUNCTIONS
   ============================================================ */

// Format date
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-AU', options);
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Get current year for copyright
function getYear() {
    return new Date().getFullYear();
}

/* ============================================================
   PAGE LOAD EFFECTS
   ============================================================ */

// Add fade-in effect on page load
window.addEventListener('load', function() {
    document.body.style.animation = 'fadeIn 0.5s ease';
});
