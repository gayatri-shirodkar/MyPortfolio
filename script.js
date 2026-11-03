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
    'Java': 'Java is the core of my backend development work. I use it to build reliable, object-oriented applications with strong knowledge of core concepts like OOP, collections, exception handling, and multithreading.',
    'JavaScript': 'JavaScript helps me add interactivity and dynamic behavior to web applications. I use it for frontend logic, DOM manipulation, and making user interfaces more responsive and engaging.',
    'SQL': 'SQL is essential for database management and querying. I have practical knowledge of writing efficient queries, joins, filtering, and working with relational data models.',
    'HTML5 CSS3': 'HTML5 and CSS3 are the foundation of my web development work. I use them to build responsive layouts, modern interfaces, and clean, structured user experiences.',
    'JSP Servlets': 'JSP and Servlets are key Java web technologies I use for server-side processing and dynamic page rendering. They help build database-driven web applications with clear request-handling logic.',
    'JDBC': 'JDBC allows Java applications to connect to relational databases and execute SQL commands. It is a core skill for creating data-driven applications and handling database operations efficiently.',
    'Hibernate': 'Hibernate is an ORM framework that simplifies database access by mapping Java objects to database tables. It helps reduce repetitive code and makes persistence easier in Java projects.',
    'Spring Core': 'Spring Core gives me a strong understanding of dependency injection and inversion of control. It is the foundation for building modular and maintainable Java applications.',
    'Spring MVC': 'Spring MVC is a framework I use for structuring web applications in a layered and organized way. It supports clean controller-service-DAO architecture and efficient web request handling.',
    'MySQL': 'MySQL is a relational database system I use for storing and managing application data. I have hands-on practice in database design, table relationships, and query optimization.',
    'PostgreSQL': 'PostgreSQL is a robust open-source database system that I am learning for data-intensive applications. It strengthens my knowledge of relational databases and advanced SQL handling.',
    'React.js': 'React.js is a frontend library I am learning to build reusable, component-based interfaces. It helps create interactive, modern web applications with cleaner UI architecture.',
    'Git GitHub': 'Git and GitHub are important tools for version control and team collaboration. I use them to manage code, track changes, and maintain organized project workflows.',
    'Python': 'Python is a versatile language I use for automation, data processing, and practical project work. I have used it in computer vision and file-processing based applications as well.'
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
    const resumeUrl = 'resume_gayu (15).pdf';
    
    const element = document.createElement('a');
    element.href = resumeUrl;
    element.download = 'resume_gayu(15).pdf';
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
