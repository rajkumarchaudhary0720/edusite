// Scroll to specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Enroll course function
function enrollCourse(courseName) {
    alert(`You have enrolled in: ${courseName}\n\nThank you for choosing EduSite! Check your email for further instructions.`);
    console.log(`User enrolled in: ${courseName}`);
}

// Submit contact form
function submitForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Get form values
    const name = form.elements[0].value;
    const email = form.elements[1].value;
    const message = form.elements[2].value;
    
    // Validate email
    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Log form data (in a real app, this would be sent to a server)
    console.log('Form submitted:', {
        name: name,
        email: email,
        message: message,
        timestamp: new Date().toISOString()
    });
    
    // Show success message
    alert(`Thank you, ${name}!\nWe have received your message and will get back to you soon.`);
    
    // Reset form
    form.reset();
}

// Email validation function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add smooth scroll effect to navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                scrollToSection(href.substring(1));
            }
        });
    });
});

// Add animation to course cards on scroll
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', function() {
    const courseCards = document.querySelectorAll('.course-card');
    
    courseCards.forEach(card => {
        if (isElementInViewport(card)) {
            card.style.opacity = '1';
        }
    });
});

// Console welcome message
console.log('%c🎓 Welcome to EduSite', 'color: #3498db; font-size: 20px; font-weight: bold;');
console.log('%cYour Gateway to Quality Education', 'color: #667eea; font-size: 14px;');
console.log('For support, visit: https://github.com/rajkumarchaudhary0720/edusite');