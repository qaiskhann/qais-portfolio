
import './App.css'
import { useState } from 'react'
import qaisPhoto from './assets/qais-professional.png'

const skills = [
  {
    title: 'Backend Development',
    items: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'REST APIs'],
  },
  {
    title: 'Security & Architecture',
    items: ['Spring Security', 'JWT', 'Microservices', 'API Gateway', 'OpenFeign'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'JDBC'],
  },
  {
    title: 'Testing & Tools',
    items: ['JUnit', 'Postman', 'Swagger/OpenAPI', 'Git', 'Docker', 'Maven', 'Gradle'],
  },
]

const experiences = [
  {
    company: 'Orange Antelopes',
    role: 'Java Backend Developer Intern',
    period: 'Aug 2026 — Present',
    description:
      'Working on an Employee Task Management System, including REST APIs, authentication, role-based access control, layered architecture and testing.',
  },
  {
    company: 'Afucent Technologies Pvt. Ltd.',
    role: 'Java Backend Developer Intern',
    period: 'Sep 2025 — Mar 2026',
    description:
      'Contributed to Java and Spring Boot microservices, API testing, database workflows, security, automated tests and API documentation.',
  },
]

const projects = [
  {
    number: '01',
    title: 'E-commerce Marketplace',
    type: 'MICROSERVICES EXPLORATION',
    description:
      'Hands-on exploration of an existing microservices application, running it locally and studying API routing, service discovery, messaging, JWT security and caching.',
    technologies: ['Spring Boot', 'Spring Cloud Gateway', 'Eureka', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    number: '02',
    title: 'Employee Task Management',
    type: 'BACKEND APPLICATION',
    description:
      'A task-management system involving task creation, assignment and status updates, with secure APIs and role-based access control.',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'JWT', 'Spring Security', 'JUnit'],
  },
]

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      
<header className="site-header">
          <nav className="nav container" aria-label="Main navigation">
            <a
              className="brand"
              href="#home"
              aria-label="Qais Khan home"
              onClick={() => setMenuOpen(false)}
            >
              QK<span>.</span>
            </a>

            <button
              className="menu-toggle"
              type="button"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="menu-icon" aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
            </button>

            <div
              className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}
              id="primary-navigation"
            >
              <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
              <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
              <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
              <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>
                Contact ↗
              </a>
            </div>
          </nav>
        </header>


      <main>
        <section className="hero container" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot" />
              JAVA BACKEND DEVELOPER · BHOPAL, INDIA
            </div>

            <h1>
              Building reliable
              <br />
              backend applications
              <br />
              <span>with Java &amp; Spring Boot.</span>
            </h1>

            <p className="hero-description">
              I develop REST APIs and backend services, with experience in
              authentication, relational databases, testing and microservices workflows.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore Projects <span>↗</span>
              </a>
              <a className="button button-secondary" href="/resume.pdf" download>
                Download Resume <span>↓</span>
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/qaiskhann" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href="https://linkedin.com/in/qais-khan-7a42a2361" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href="mailto:qaiskhan00005@gmail.com">Email ↗</a>
            </div>
          </div>

          <figure className="hero-portrait">
            <img
              src={qaisPhoto}
              alt="Qais Khan, Java Backend Developer"
              className="hero-portrait-image"
              fetchPriority="high"
            />
            <figcaption className="portrait-caption">
              <span className="portrait-caption-dot" aria-hidden="true" />
              <span>Java Backend Developer</span>
              <span className="portrait-caption-location">Bhopal, India</span>
            </figcaption>
          </figure>

          <div className="hero-bottom">
            <span>THOUGHTFUL ENGINEERING</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        <section className="section container" id="about">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Backend first. Built with purpose." />
          <div className="about-grid">
            <p className="about-lead">
              I’m Qais, a Java Backend Developer focused on building structured,
              secure and maintainable applications.
            </p>
            <div className="about-copy">
              <p>
                My experience includes developing REST APIs, working with Spring
                Security and JWT, using relational databases, and testing backend
                functionality.
              </p>
              <p>
                I’m also exploring microservices architecture and the way services
                communicate, route requests and manage data in distributed systems.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-tinted" id="skills">
          <div className="container">
            <SectionHeading
              eyebrow="TECHNICAL TOOLKIT"
              title="Skills I work with."
              description="A practical toolkit for backend development, organized by area."
            />
            <div className="skills-grid">
              {skills.map((group) => (
                <article className="skill-card" key={group.title}>
                  <span className="skill-marker">✳</span>
                  <h3>{group.title}</h3>
                  <div className="skill-tags">
                    {group.items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="experience">
          <SectionHeading
            eyebrow="PROFESSIONAL EXPERIENCE"
            title="Learning through real work."
            description="Internship experience across task management and banking-related software."
          />
          <div className="timeline">
            {experiences.map((experience) => (
              <article className="experience-card" key={experience.company}>
                <div className="timeline-marker" />
                <div className="experience-top">
                  <div>
                    <h3>{experience.company}</h3>
                    <p className="experience-role">{experience.role}</p>
                  </div>
                  <span className="date-label">{experience.period}</span>
                </div>
                <p className="experience-description">{experience.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-tinted" id="projects">
          <div className="container">
            <SectionHeading
              eyebrow="SELECTED WORK"
              title="Projects & practical exploration."
              description="Systems and backend concepts I have worked with and explored."
            />
            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-topline">
                    <span>{project.type}</span>
                    <span>{project.number}</span>
                  </div>
                  <div className="project-visual" aria-hidden="true">
                    <div className="visual-node node-one">CLIENT</div>
                    <div className="visual-line" />
                    <div className="visual-node node-two">API</div>
                    <div className="visual-line" />
                    <div className="visual-node node-three">DATA</div>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="education">
          <SectionHeading eyebrow="EDUCATION" title="Academic foundation." />
          <div className="education-grid">
            <article className="education-card">
              <span className="education-degree">POSTGRADUATE</span>
              <h3>Master of Computer Applications</h3>
              <p>Oriental Institute of Science &amp; Technology, Bhopal</p>
              <div className="education-meta"><span>2024 — 2026</span><strong>CGPA 7.4</strong></div>
            </article>
            <article className="education-card">
              <span className="education-degree">UNDERGRADUATE</span>
              <h3>Bachelor of Computer Applications</h3>
              <p>Makhanlal Chaturvedi University</p>
              <div className="education-meta"><span>2021 — 2024</span><strong>CGPA 8.3</strong></div>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <span className="eyebrow">LET’S CONNECT</span>
            <h2>Have a backend role<br />or project in mind?</h2>
            <p>I’m open to connecting about Java backend development opportunities.</p>
            <a className="button button-light" href="mailto:qaiskhan00005@gmail.com">
              Get in touch ↗
            </a>
            <div className="contact-links">
              <a href="https://github.com/qaiskhann" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://linkedin.com/in/qais-khan-7a42a2361" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="mailto:qaiskhan00005@gmail.com">Email ↗</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="brand" href="#home">QK<span>.</span></a>
          <p>Designed &amp; built with care by Qais Khan.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}

export default App
