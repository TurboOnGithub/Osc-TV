// Utility function to handle style transitions
const transitionStyle = (element, property, value, duration = '0.3s') => {
    element.style.transition = `${property} ${duration} ease-in-out`;
    element.style[property] = value;
};

// Debounce function for efficient search
const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
};

// Search functionality with debounce for better performance
const searchVideos = (searchText) => {
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        const videoTitle = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = videoTitle.includes(searchText) ? 'block' : 'none';
    });
};

// Button hover effects with smooth transition
const setupButtonHoverEffects = () => {
    const buttons = document.querySelectorAll('.video-card button, .submit-form button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            transitionStyle(button, 'transform', 'scale(1.05)');
        });
        button.addEventListener('mouseleave', () => {
            transitionStyle(button, 'transform', 'scale(1)');
        });
    });
};

// Form validation with feedback
const validateForm = (form) => {
    let isValid = true;
    form.querySelectorAll('input, textarea').forEach(input => {
        const hasValue = input.value.trim() !== '';
        input.style.borderColor = hasValue ? '#333' : '#ff6347';
        if (!hasValue) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    // Optional: Highlight success feedback
    const errorFields = form.querySelectorAll('.error');
    if (isValid) {
        alert('Form submitted successfully!');
    } else {
        alert(`Please fill out the missing fields: ${errorFields.length}`);
    }

    return isValid;
};

// Scroll progress bar setup and update
const setupProgressBar = () => {
    const progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.height = '4px';
    progressBar.style.backgroundColor = '#ff6347';
    progressBar.style.zIndex = '1000';
    document.body.appendChild(progressBar);

    const updateProgressBar = () => {
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPosition = window.scrollY;
        const scrollPercentage = (scrollPosition / scrollHeight) * 100;
        progressBar.style.width = `${scrollPercentage}%`;
    };

    // Throttle the scroll events for performance
    const onScroll = () => requestAnimationFrame(updateProgressBar);
    window.addEventListener('scroll', onScroll);
    updateProgressBar();  // Initial call
};

// Initialize the event listeners and functionality
document.addEventListener('DOMContentLoaded', () => {
    // Setup search functionality with debounce
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('input', debounce(() => {
        const searchText = searchInput.value.toLowerCase();
        searchVideos(searchText);
    }, 300)); // 300ms debounce

    // Setup hover effects
    setupButtonHoverEffects();

    // Setup form validation
    const form = document.querySelector('.submit-form form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validateForm(form)) {
            form.submit();
        }
    });

    // Setup progress bar
    setupProgressBar();
});
