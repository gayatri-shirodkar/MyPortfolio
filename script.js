// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Skill descriptions
const skillDescriptions = {
    'Java': 'Java is a versatile, object-oriented programming language that I use extensively for building robust backend applications. I have strong knowledge of core Java concepts including OOP principles, multithreading, collections, and exception handling. Java is the foundation of my full-stack development expertise.',
    'Spring Boot': 'Spring Boot is a modern framework I\'m currently learning for building enterprise-level applications. It simplifies Spring configuration and enables rapid development of microservices. I\'m gaining hands-on experience with dependency injection, MVC patterns, and RESTful APIs.',
    'Hibernate': 'Hibernate is an ORM (Object-Relational Mapping) framework that I have intermediate knowledge of. It helps map Java objects to database tables, reducing boilerplate code and providing a cleaner approach to database operations. I use it for efficient data persistence and manipulation.',
    'SQL': 'SQL is essential for database management and querying. I have solid knowledge of writing optimized queries, understanding database design principles, joins, indexing, and transactions. SQL enables me to design efficient databases and retrieve data effectively.',
    'HTML CSS JS': 'HTML, CSS, and JavaScript form the core of frontend development. I use HTML for structure, CSS for responsive styling and animations, and JavaScript for interactive user experiences. I focus on creating clean, semantic HTML and maintainable CSS with modern JavaScript ES6+ features.',
    'JSP Servlets': 'JSP (JavaServer Pages) and Servlets are technologies I use for building dynamic web applications. Servlets handle server-side logic and request processing, while JSP allows embedding Java code in HTML templates. Together, they form the traditional Java web development approach.',
    'JDBC': 'JDBC (Java Database Connectivity) is the Java API for database connectivity. I use JDBC to establish connections, execute queries, and manipulate data in relational databases. It\'s fundamental for building database-driven applications in Java.',
    'MySQL': 'MySQL is a popular relational database management system that I use for storing and managing application data. I have experience in database design, creating tables, relationships, indexes, and writing efficient queries to optimize performance.',
    'Python': 'Python is a versatile language I\'ve learned for various applications, particularly for data processing and automation. I\'ve used Python for developing the face recognition attendance system with OpenCV, leveraging its simplicity and powerful libraries.',
    'OpenCV': 'OpenCV is a computer vision library I used in my attendance system project. It enables image processing, face detection, and facial recognition. I leveraged OpenCV to build an automated attendance system that detects faces and triggers SMS notifications.'
};

// Show skill description
function showSkillDescription(event, skillName) {
    event.stopPropagation();
    const modal = document.getElementById('skillModal');
    const titleElement = document.getElementById('skillTitle');
    const descriptionElement = document.getElementById('skillDescription');
    
    titleElement.textContent = skillName;
    descriptionElement.textContent = skillDescriptions[skillName] || 'No description available.';
    
    modal.style.display = 'block';
}

// Close skill modal
function closeSkillModal() {
    const modal = document.getElementById('skillModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('skillModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Download resume function
function downloadResume() {
    // Replace 'resume/Gayatri_Shirodkar_Resume.pdf' with your actual resume file path
    const resumeUrl = 'Gayatri_Shirodkar_Resume.pdf';
    
    const element = document.createElement('a');
    element.href = resumeUrl;
    element.download = 'Gayatri_Shirodkar_Resume.pdf';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// Smooth scroll behavior (already handled by CSS, but can add additional JS logic if needed)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.project-card, .cert-card, .skill-tag').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});