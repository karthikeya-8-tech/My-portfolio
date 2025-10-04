/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;  
    --text-primary: #2d3748;
    --text-secondary: #718096;
    --text-white: #ffffff;
    --bg-primary: #f7fafc;
    --bg-secondary: #edf2f7;
    --card-bg: rgba(255, 255, 255, 0.25);
    --shadow-light: 0 4px 6px rgba(0, 0, 0, 0.05);
    --shadow-medium: 0 10px 25px rgba(0, 0, 0, 0.1);
    --shadow-heavy: 0 20px 40px rgba(0, 0, 0, 0.15);
    --border-radius: 12px;
    --border-radius-lg: 20px;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --gradient-primary: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    --gradient-accent: linear-gradient(135deg, var(--accent-color), var(--primary-color));
    --backdrop-blur: blur(20px);
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-weight: 400;
    line-height: 1.6;
    color: var(--text-primary);
    background: var(--bg-primary);
    overflow-x: hidden;
}

html {
    scroll-behavior: smooth;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}

/* Navigation Styles */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: var(--backdrop-blur);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    z-index: 1000;
    transition: var(--transition);
}

.navbar.scrolled {
    background: rgba(255, 255, 255, 0.98);
    box-shadow: var(--shadow-light);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
}

.nav-logo a {
    font-size: 24px;
    font-weight: 700;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-decoration: none;
    transition: var(--transition);
}

.nav-logo a:hover {
    transform: scale(1.05);
}

.nav-list {
    display: flex;
    list-style: none;
    gap: 32px;
}

.nav-link {
    text-decoration: none;
    color: var(--text-primary);
    font-weight: 500;
    position: relative;
    transition: var(--transition);
}

.nav-link:hover {
    color: var(--primary-color);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient-primary);
    transition: var(--transition);
}

.nav-link:hover::after {
    width: 100%;
}

.nav-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 4px;
}

.nav-toggle .bar {
    width: 25px;
    height: 3px;
    background: var(--primary-color);
    transition: var(--transition);
    border-radius: 2px;
}

.nav-toggle.active .bar:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.nav-toggle.active .bar:nth-child(2) {
    opacity: 0;
}

.nav-toggle.active .bar:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
}

/* Hero Section */
.hero {
    min-height: 100vh;
    background: var(--gradient-primary);
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><circle cx="200" cy="200" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="800" cy="300" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="300" cy="700" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="700" cy="800" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="500" cy="100" r="1.5" fill="rgba(255,255,255,0.1)"/></svg>');
    animation: float 20s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}

.hero-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    width: 100%;
}

.hero-content {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 64px;
    align-items: center;
    position: relative;
    z-index: 1;
}

.hero-image {
    display: flex;
    justify-content: center;
}

.profile-circle {
    width: 280px;
    height: 280px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: var(--backdrop-blur);
    padding: 8px;
    box-shadow: var(--shadow-heavy);
    animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.profile-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}

.hero-text {
    color: var(--text-white);
}

.hero-name {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 16px;
    opacity: 0;
    animation: fadeInUp 1s ease 0.5s forwards;
}

.hero-title {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 24px;
    opacity: 0.9;
    opacity: 0;
    animation: fadeInUp 1s ease 0.7s forwards;
}

.hero-description {
    font-size: 18px;
    margin-bottom: 32px;
    opacity: 0.8;
    line-height: 1.7;
    opacity: 0;
    animation: fadeInUp 1s ease 0.9s forwards;
}

.hero-buttons {
    display: flex;
    gap: 16px;
    opacity: 0;
    animation: fadeInUp 1s ease 1.1s forwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Button Styles */
.btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 28px;
    border-radius: var(--border-radius);
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    transition: var(--transition);
    cursor: pointer;
    border: 2px solid transparent;
}

.btn-primary {
    background: var(--text-white);
    color: var(--primary-color);
    box-shadow: var(--shadow-medium);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-heavy);
}

.btn-secondary {
    background: transparent;
    color: var(--text-white);
    border-color: var(--text-white);
}

.btn-secondary:hover {
    background: var(--text-white);
    color: var(--primary-color);
    transform: translateY(-2px);
}

/* Section Styles */
section {
    padding: 100px 0;
}

.section-header {
    text-align: center;
    margin-bottom: 64px;
}

.section-title {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 16px;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.section-subtitle {
    font-size: 18px;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
}

/* About Section */
.about {
    background: var(--bg-secondary);
}

.about-card {
    background: var(--card-bg);
    backdrop-filter: var(--backdrop-blur);
    border-radius: var(--border-radius-lg);
    padding: 48px;
    box-shadow: var(--shadow-medium);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: var(--transition);
}

.about-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-heavy);
}

.about-card h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
    color: var(--primary-color);
}

.about-card p {
    margin-bottom: 32px;
    line-height: 1.7;
    color: var(--text-secondary);
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 16px;
    margin-bottom: 32px;
}

.skill-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: var(--border-radius);
    transition: var(--transition);
}

.skill-item:hover {
    background: var(--text-white);
    transform: translateY(-2px);
    box-shadow: var(--shadow-light);
}

.skill-item i {
    font-size: 20px;
    color: var(--primary-color);
}

.skill-item span {
    font-weight: 500;
}

/* Projects Section */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 32px;
}

.project-card {
    background: var(--card-bg);
    backdrop-filter: var(--backdrop-blur);
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-medium);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: var(--transition);
}

.project-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-heavy);
}

.project-image {
    height: 200px;
    overflow: hidden;
    position: relative;
}

.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.project-card:hover .project-image img {
    transform: scale(1.05);
}

.project-content {
    padding: 32px;
}

.project-content h3 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 12px;
    color: var(--primary-color);
}

.project-content p {
    color: var(--text-secondary);
    margin-bottom: 20px;
    line-height: 1.6;
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
}

.tech-tag {
    background: var(--gradient-accent);
    color: var(--text-white);
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
}

.project-links {
    display: flex;
    gap: 16px;
}

.project-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition);
}

.project-link:hover {
    color: var(--secondary-color);
    transform: translateX(4px);
}

/* Contact Section */
.contact {
    background: var(--bg-secondary);
}

.contact-card {
    background: var(--card-bg);
    backdrop-filter: var(--backdrop-blur);
    border-radius: var(--border-radius-lg);
    padding: 48px;
    box-shadow: var(--shadow-medium);
    border: 1px solid rgba(255, 255, 255, 0.2);
    max-width: 800px;
    margin: 0 auto;
}

.contact-info p {
    font-size: 18px;
    color: var(--text-secondary);
    margin-bottom: 40px;
    line-height: 1.7;
    text-align: center;
}

.contact-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
}

.contact-link {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 24px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: var(--border-radius);
    text-decoration: none;
    transition: var(--transition);
}

.contact-link:hover {
    background: var(--text-white);
    transform: translateY(-4px);
    box-shadow: var(--shadow-medium);
}

.contact-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--gradient-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-white);
    font-size: 20px;
}

.contact-details h4 {
    font-size: 18px;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 4px;
}

.contact-details p {
    color: var(--text-secondary);
    font-size: 14px;
}

/* Footer */
.footer {
    background: var(--primary-color);
    color: var(--text-white);
    padding: 40px 0;
    text-align: center;
}

.footer-content p {
    margin-bottom: 8px;
    opacity: 0.9;
}

.footer-content p:last-child {
    opacity: 0.7;
    font-size: 14px;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .hero-content {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
    }
    
    .hero-name {
        font-size: 40px;
    }
    
    .profile-circle {
        width: 240px;
        height: 240px;
    }
}

@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: var(--backdrop-blur);
        width: 100%;
        text-align: center;
        transition: var(--transition);
        box-shadow: var(--shadow-medium);
    }

    .nav-menu.active {
        left: 0;
    }

    .nav-list {
        flex-direction: column;
        padding: 40px 0;
    }

    .nav-toggle {
        display: flex;
    }
    
    .hero-name {
        font-size: 36px;
    }
    
    .hero-title {
        font-size: 18px;
    }
    
    .section-title {
        font-size: 32px;
    }
    
    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .btn {
        width: 100%;
        max-width: 200px;
        justify-content: center;
    }
    
    section {
        padding: 80px 0;
    }
    
    .about-card,
    .contact-card {
        padding: 32px 24px;
    }
    
    .skills-grid {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }
    
    .projects-grid {
        grid-template-columns: 1fr;
    }
    
    .contact-links {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 16px;
    }
    
    .nav-container {
        padding: 0 16px;
    }
    
    .hero-name {
        font-size: 28px;
    }
    
    .hero-title {
        font-size: 16px;
    }
    
    .profile-circle {
        width: 200px;
        height: 200px;
    }
    
    .section-title {
        font-size: 28px;
    }
    
    .about-card,
    .contact-card {
        padding: 24px 16px;
    }
    
    .project-content {
        padding: 24px;
    }
    .resume-btn .btn {
  display: inline-block;
  padding: 12px 24px;
  background-color: #0077b5; /* LinkedIn blue */
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s;
}

.resume-btn .btn:hover {
  background-color: #005582;
}

}
