// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// CO2 Calculator Function
function calculateEmissions() {
    const distance = parseFloat(document.getElementById('travel-distance').value) || 0;
    const transport = document.getElementById('transport-mode').value;
    const electricity = parseFloat(document.getElementById('electricity').value) || 0;
    const diet = document.getElementById('diet').value;
    const waste = document.getElementById('waste').value;

    // Emission factors (kg CO2 per unit)
    const transportEmissions = {
        car: distance * 0.21,
        electric: distance * 0.05,
        bus: distance * 0.089,
        train: distance * 0.041,
        motorcycle: distance * 0.113,
        bicycle: 0
    };

    const dietEmissions = {
        meat: 7.2,
        moderate: 5.6,
        low: 4.7,
        vegetarian: 3.8,
        vegan: 2.9
    };

    const wasteEmissions = {
        none: 2.5,
        some: 1.5,
        most: 0.5
    };

    // Calculate total
    const transportCO2 = transportEmissions[transport];
    const electricityCO2 = electricity * 0.5; // Average grid intensity
    const dietCO2 = dietEmissions[diet];
    const wasteCO2 = wasteEmissions[waste];

    const totalDaily = transportCO2 + electricityCO2 + dietCO2 + wasteCO2;
    const totalYearly = totalDaily * 365;

    // Display results
    document.getElementById('total-emissions').textContent = totalDaily.toFixed(2) + ' kg';
    document.getElementById('yearly-emissions').textContent = totalYearly.toFixed(2) + ' kg';

    // Generate suggestions
    const suggestions = [];
    
    if (transport === 'car' && distance > 0) {
        suggestions.push('<i class="fas fa-check"></i> Switch to public transport or carpool to reduce emissions by 60%');
    }
    if (electricity > 10) {
        suggestions.push('<i class="fas fa-check"></i> Use energy-efficient appliances and LED bulbs');
    }
    if (diet === 'meat') {
        suggestions.push('<i class="fas fa-check"></i> Try "Meatless Mondays" to reduce dietary emissions by 15%');
    }
    if (waste === 'none') {
        suggestions.push('<i class="fas fa-check"></i> Start recycling to reduce waste emissions by 80%');
    }
    if (totalDaily < 5) {
        suggestions.push('<i class="fas fa-star"></i> Great job! You\'re already below the sustainable target');
    } else if (totalDaily > 15) {
        suggestions.push('<i class="fas fa-exclamation-triangle"></i> Your footprint is high. Small changes can make a big difference!');
    }

    const suggestionsList = document.getElementById('suggestions-list');
    suggestionsList.innerHTML = suggestions.map(s => '<li>' + s + '</li>').join('');

    // Show results
    document.getElementById('result').classList.add('show');
    document.getElementById('result').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Countdown Timer Function
function startCountdown() {
    // Earth Hour 2025: Last Saturday of March (March 29, 2025, 8:30 PM)
    const earthHour = new Date('2025-03-29T20:30:00').getTime();

    const updateTimer = () => {
        const now = new Date().getTime();
        const distance = earthHour - now;

        if (distance < 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            document.getElementById('motivation-text').textContent = 'Earth Hour has begun! Turn off your lights for one hour!';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

        // Motivational messages
        if (days > 30) {
            document.getElementById('motivation-text').textContent = 'Start planning your Earth Hour event!';
        } else if (days > 7) {
            document.getElementById('motivation-text').textContent = 'Spread the word and invite others to join!';
        } else if (days > 0) {
            document.getElementById('motivation-text').textContent = 'The countdown is on! Get ready to switch off!';
        } else {
            document.getElementById('motivation-text').textContent = 'Today is the day! Prepare to make a statement!';
        }
    };

    updateTimer();
    setInterval(updateTimer, 1000);
}

// Start countdown if on countdown page
if (window.location.pathname.includes('countdown.html')) {
    startCountdown();
}

// Image Slider for Gallery
document.addEventListener('DOMContentLoaded', () => {
    const sliderHandles = document.querySelectorAll('.slider-handle');
    
    sliderHandles.forEach((handle) => {
        let isDragging = false;
        
        const slider = handle.closest('.slider-container');
        const afterImg = slider.querySelector('.after-img');
        
        handle.addEventListener('mousedown', () => isDragging = true);
        document.addEventListener('mouseup', () => isDragging = false);
        
        slider.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const rect = slider.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percentage = (x / rect.width) * 100;
            
            if (percentage >= 0 && percentage <= 100) {
                handle.style.left = percentage + '%';
                afterImg.style.opacity = (percentage / 100);
            }
        });
        
        // Touch support for mobile
        handle.addEventListener('touchstart', () => isDragging = true);
        document.addEventListener('touchend', () => isDragging = false);
        
        slider.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            
            const rect = slider.getBoundingClientRect();
            const x = e.touches[0].clientX - rect.left;
            const percentage = (x / rect.width) * 100;
            
            if (percentage >= 0 && percentage <= 100) {
                handle.style.left = percentage + '%';
                afterImg.style.opacity = (percentage / 100);
            }
        });
    });
});

// Contact Form Handler
function handleSubmit(event) {
    event.preventDefault();
    
    // Simulate form submission
    const btn = event.target.querySelector('.submit-btn');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        btn.style.background = '#4ade80';
        
        setTimeout(() => {
            event.target.reset();
            btn.innerHTML = originalText;
            btn.style.background = '';
            btn.disabled = false;
            
            alert('Thank you for your commitment to climate action! Together we can make a difference.');
        }, 2000);
    }, 1500);
}

// Smooth scrolling for anchor links
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