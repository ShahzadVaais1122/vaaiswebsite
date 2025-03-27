document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Active navigation link based on scroll position
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
            }
        });
        
        // Show/hide back to top button
        const backToTopButton = document.getElementById('backToTop');
        if (scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
        
        // Add shadow to header on scroll
        const header = document.querySelector('header');
        if (scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
    
    // Chatbot functionality
    const chatbotButton = document.getElementById('chatbotButton');
    const chatbotContainer = document.getElementById('chatbotContainer');
    const closeChatbot = document.getElementById('closeChatbot');
    const userMessageInput = document.getElementById('userMessage');
    const sendMessageButton = document.getElementById('sendMessage');
    const chatbotMessages = document.getElementById('chatbotMessages');
    
    // Toggle chatbot
    chatbotButton.addEventListener('click', () => {
        chatbotContainer.style.display = chatbotContainer.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Close chatbot
    closeChatbot.addEventListener('click', () => {
        chatbotContainer.style.display = 'none';
    });
    
    // Send message function
    function sendMessage() {
        const message = userMessageInput.value.trim();
        if (message !== '') {
            // Add user message
            addMessage(message, 'user-message');
            
            // Clear input
            userMessageInput.value = '';
            
            // Simulate bot response after a short delay
            setTimeout(() => {
                const botResponse = getBotResponse(message);
                addMessage(botResponse, 'bot-message');
            }, 600);
        }
    }
    
    // Send message on button click
    sendMessageButton.addEventListener('click', sendMessage);
    
    // Send message on Enter key
    userMessageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Add message to chat
    function addMessage(message, className) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', className);
        messageElement.innerHTML = `<p>${message}</p>`;
        chatbotMessages.appendChild(messageElement);
        
        // Scroll to bottom of chat
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    // Simple bot responses based on keywords
    function getBotResponse(message) {
        message = message.toLowerCase();
        
        if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
            return 'Hello! How can I assist you with our AI solutions today?';
        } else if (message.includes('services') || message.includes('offer')) {
            return 'We offer various AI services including AI-Powered Automation, Machine Learning & Data Analytics, Computer Vision, NLP, and AI Software Development. Would you like to know more about any specific service?';
        } else if (message.includes('contact') || message.includes('reach') || message.includes('email')) {
            return 'You can reach us at info@vaais.com or call us at +1 (555) 123-4567. Alternatively, you can fill out the contact form on our website.';
        } else if (message.includes('price') || message.includes('cost') || message.includes('pricing')) {
            return 'Our pricing varies based on project requirements. Please contact our team for a customized quote tailored to your specific needs.';
        } else if (message.includes('thank')) {
            return 'You\'re welcome! Is there anything else I can help you with?';
        } else {
            return 'Thank you for your message. Our team will get back to you shortly. If you have specific questions about our AI solutions, please let me know!';
        }
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to a server
            // For demo purposes, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been received. We'll get back to you shortly.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get email value
            const email = newsletterForm.querySelector('input[type="email"]').value;
            
            // In a real application, you would send this to a server
            // For demo purposes, we'll just show an alert
            alert(`Thank you for subscribing to our newsletter with ${email}!`);
            
            // Reset form
            newsletterForm.reset();
        });
    }
    
    // Animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.service-card, .industry-card, .why-us-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial styles for animation
    document.querySelectorAll('.service-card, .industry-card, .why-us-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});
