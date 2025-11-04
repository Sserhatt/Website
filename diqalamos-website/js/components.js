// Interactive components for diQalamos website

// Service cards expansion on click
function initServiceCards() {
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', function() {
            // Remove expanded class from all cards
            document.querySelectorAll('.service-card').forEach(c => {
                if (c !== this) c.classList.remove('expanded');
            });
            
            // Toggle expanded class on clicked card
            this.classList.toggle('expanded');
        });
    });
}

// Project card hover effects
function initProjectCards() {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}


// Contact form handling (placeholder)
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real implementation, this would send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
}

// Initialize all components
document.addEventListener('DOMContentLoaded', function() {
    initServiceCards();
    initProjectCards();
    initLanguageVisualization();
    initContactForm();
});

// Contact form with animated submission button

function initContactForm() {
    const contactForm = document.getElementById('projectForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.submit-btn');
            const btnText = submitBtn.querySelector('.btn-text');
            submitBtn.disabled = true;
                btnText.textContent = 'Message Sent!';
                    contactForm.reset();
                    btnText.textContent = 'Send Project Inquiry';
                    btnIcon.className = 'fas fa-paper-plane';
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('submit-success');
                }, 3000);
            }, 2000);