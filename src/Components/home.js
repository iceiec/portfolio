import React, { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import { Container, Button, Row, Col, Card, Nav, Navbar } from 'react-bootstrap';
import '../index.css';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
useEffect(() => {
  const sections = ['home', 'about', 'skills', 'projects', 'contact'];

  const handleScroll = () => {
    const scrollPos = window.scrollY + window.innerHeight / 2; // midpoint of viewport
    let current = 'home';

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          current = id;
        }
      }
    });

    setActiveSection(current);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  const handleClick = (id) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullMessage = `
Name: ${form.name}
Email: ${form.email}

Message:
${form.message}
    `;

    emailjs.send(
      'service_u4i7o4p',          
      'template_wop07lw',          
      { message: fullMessage },
      'sSHnf9DYRCvXvMlvM'
    ).then(
      (result) => {
        console.log('Email sent!', result.text);
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
      },
      (error) => {
        console.error('Error sending email:', error.text);
        alert('Oops! Something went wrong. Please try again.');
      }
    );
  };

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="navbar-blur shadow-sm">
        <Container>
          <Navbar.Brand href="#home" className="nav-animation gradient-text" style={{ animationDelay: '0ms' }}>
            IceDev
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {[
                ['Home', 'home'],
                ['About Me', 'about'],
                ['Skills', 'skills'],
                ['Projects', 'projects'],
                ['Contact', 'contact'],
              ].map(([label, id], i) => (
                <Nav.Link
                  key={id}
                  onClick={() => handleClick(id)}
                  className={`nav-animation hover-underline ${activeSection === id ? 'active' : ''}`}
                  style={{ animationDelay: `${i * 120}ms`, cursor: 'pointer' }}
                >
                  {label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ===== HERO / HOME SECTION ===== */}
      <main id="home" className="d-flex align-items-center parallax-bg" style={{ minHeight: '100vh' }}>
        <Card className="glass-card border-0 shadow-lg p-4 rounded hero-hover-card">
  <div className="mb-4 avatar-container">
    <img
      src="me.png"
      alt="Profile"
      className="rounded-circle profile-image glow-image"
      style={{ width: '300px', height: '300px', objectFit: 'cover' }}
    />
  </div>

  <h1 className="hero-title display-4 fw-bold mb-3 slide-up-fade">
    Hi, I'm <span className="name">Pierre Isaiah</span>
  </h1>

  <p className="lead text-typing" style={{ animationDelay: '400ms' }}>
    Web Developer | UI/UX Enthusiast
  </p>

  <p className="hero-paragraph mt-3">
    Passionate about crafting digital experiences that blend design and logic.  
    I love turning ideas into clean, interactive, and functional web solutions.
  </p>

  <div className="mt-4 button-container">
    <Button variant="dark" href="#projects" className="me-3 btn-hover-effect rounded-pill">
      View My Projects
    </Button>
    <Button variant="dark" href="#contact" className="btn-hover-effect rounded-pill">
      Get in Touch
    </Button>
  </div>
</Card>

      </main>

      {/* ===== ABOUT ME SECTION ===== */}
      <section id="about" className="about-section py-5">
        <Container>
          <h2 className="display-4 fw-bold mb-5 text-center slide-up-fade" style={{ animationDelay: '200ms' }}>
            About <span className="fw-semibold text-warning">Me</span>
          </h2>

          <Row className="align-items-center slide-up-grid">
            <Col md={5} className="text-center mb-4 mb-md-0">
              <Card className="border-0 shadow-lg p-4 rounded glass-card about-card">
                <div className="avatar-container slide-up-fade mb-4" style={{ animationDelay: '300ms' }}>
                  <img
                    src="me.png"
                    alt="Pierre Isaiah"
                    className="rounded-circle profile-image glow-image shadow"
                    style={{ width: '230px', height: '230px', objectFit: 'cover' }}
                  />
                </div>
                <h3 className="fw-bold mb-2 text-green-500" style={{ fontSize: '1.75rem', color: '#ffffffff'}} >Pierre Isaiah Aguinaldo</h3>
                <p className="fw-bold mb-3" style={{ fontSize: '1.15rem', color: '#ffffffff', lineHeight: '1.8' }}>Aspiring Web Developer</p>
                <p className="fw-light mb-4 text-white-200" style={{ color: '#ffffffff', lineHeight: '2.0' }}>
                  An Information Technology student driven by curiosity and creativity.  
                  I enjoy transforming ideas into reality through intuitive designs and
                  responsive web applications.
                </p>
              </Card>
            </Col>

            <Col md={7}>
              <div className="slide-up-fade story-content glow-card" style={{ animationDelay: '400ms' }}>
                <h4 className="fw-semibold mb-3 text-green-500">My <span className="text-warning">Story</span></h4>
                <p className="lead" style={{ fontSize: '1.15rem', lineHeight: '2.0', color: '#ffffffff' }}>
                  Coding quickly became more than just a subject for me — it became a passion.  
                  I’ve always enjoyed solving problems and finding creative ways to make things work,  
                  whether it’s frontend design or backend logic.
                </p>
                <p style={{ fontSize: '1.15rem', color: '#ffffffff', lineHeight: '2.0' }}>
                  Beyond coding, I value teamwork, adaptability, and continuous growth.  
                  I enjoy collaborating with others to bring meaningful digital experiences to life.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section id="skills" className="skills-section py-5 text-center">
        <Container>
          <h2 className="display-4 fw-bold mb-5 slide-up-fade" style={{ animationDelay: '200ms' }}>
            Technical <span className="fw-semibold text-warning">Skills</span>
          </h2>

          <Row className="justify-content-center slide-up-grid">
            {/* Programming Languages */}
            <Col md={4} className="mb-4">
              <Card className="border-0 shadow-sm p-4 rounded glass-card-one glow-card">
                <h4 className="fw-semibold text-light">Programming Languages</h4>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  {[
                    ['/php.png', 'PHP'],
                    ['/html5.png', 'HTML5'],
                    ['/css3.png', 'CSS3'],
                    ['/javascript.png', 'JavaScript (ES6+)'],
                    ['/dart.png', 'Dart'],
                    ['/csharp.png', 'C#'],
                    ['/java.png', 'Java'],
                  ].map(([src, alt], i) => (
                    <div key={alt} className="skill-item text-center">
                      <img
                        src={src}
                        alt={alt}
                        className="skill-logo float-animation"
                        style={{ animationDelay: `${500 + i * 100}ms` }}
                      />
                      <p className="mt-2 small fw-medium">{alt}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </Col>

            {/* Design & Media */}
            <Col md={4} className="mb-4">
              <Card className="border-0 shadow-sm p-4 rounded glass-card-one glow-card">
                <h4 className="fw-semibold mb-3 text-light">Design & Media</h4>
                <div className="d-flex flex-wrap justify-content-center gap-3 ">
                  {[
                    ['figma.png', 'Figma'],
                    ['canva.png', 'Canva'],
                    ['photoshop.png', 'Adobe Photoshop'],
                  ].map(([src, alt], i) => (
                    <div key={alt} className="skill-item text-center">
                      <img
                        src={src}
                        alt={alt}
                        className="skill-logo float-animation"
                        style={{ animationDelay: `${600 + i * 120}ms` }}
                      />
                      <p className="mt-2 small fw-medium">{alt}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </Col>

            {/* Databases */}
            <Col md={4} className="mb-4">
              <Card className="border-0 shadow-sm p-4 rounded glass-card-one glow-card">
                <h4 className="fw-semibold mb-3 text-light">Databases</h4>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  {[
                    ['mysql.png', 'MySQL'],
                    ['firebase.png', 'Firebase'],
                  ].map(([src, alt], i) => (
                    <div key={alt} className="skill-item text-center">
                      <img
                        src={src}
                        alt={alt}
                        className="skill-logo float-animation"
                        style={{ animationDelay: `${700 + i * 140}ms` }}
                      />
                      <p className="mt-2 small fw-medium">{alt}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section id="projects" className="projects-section py-5 text-center">
        <Container>
          <h2 className="display-4 fw-bold mb-5 slide-up-fade" style={{ animationDelay: '200ms' }}>
            My <span className = "text-warning">Projects</span>
          </h2>

          <Row className="justify-content-center">
            {/* Tomb App */}
            <Col md={6} lg={4} className="mb-4">
              <div className="project-card glass-card-one p-4 rounded-4 shadow-sm text-start slide-up-fade glow-card" style={{ animationDelay: '300ms' }}>
                {/*<img src="path/to/tomb-app.png" alt="Tomb App" className="img-fluid rounded-4 mb-3" /> */}
                <h4 className="fw-semibold text-green-500 mb-2 fs-3">Tomb Navigation & Contract Management for Baliwag Municipal Cemetery</h4>
                <p className="text-light mb-3 fs-5 "><strong>Platform:</strong> Flutter Mobile App</p>
                <p>
                  Mobile app for cemetery navigation and contract management using Flutter & Firebase.  
                  Integrated AI chatbot, PDF export, and 360° interactive maps.
                </p>
              </div>
            </Col>

            {/* Balai Alegria */}
            <Col md={6} lg={4} className="mb-4">
              <div className="project-card glass-card-one p-4 rounded-4 shadow-sm text-start slide-up-fade glow-card" style={{ animationDelay: '400ms' }}>
               {/* <img src="path/to/balai-alegria.png" alt="Balai Alegria" className="img-fluid rounded-4 mb-3" /> */}
                <h4 className="fw-semibold text-green-500 mb-2 fs3">Balai Alegria Resort E-Commerce</h4>
                <p className="text-light mb-3 fs-5"><strong>Platform:</strong> Web App</p>
                <p>
                  Responsive booking & payment system built with HTML, CSS, JS. Integrated PayMongo API for secure payments.
                </p>
              </div>
            </Col>

            {/* FD AutoHub */}
            <Col md={6} lg={4} className="mb-4">
              <div className="project-card glass-card-one p-4 rounded-4 shadow-sm text-start slide-up-fade glow-card" style={{ animationDelay: '500ms' }}>
                {/*<img src="path/to/fd-autohub.png" alt="FD AutoHub" className="img-fluid rounded-4 mb-3" />   /*/}
                <h4 className="fw-semibold text-green-500 mb-2 fs-3">FD AutoHub Ordering System</h4>
                <p className="text-light mb-3 fs-5"><strong>Platform:</strong> PHP Web App</p>
                <p>
                  Full-featured inventory & ordering system using PHP & SQL. Clean, intuitive interface to improve staff efficiency.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== CONTACT SECTION ===== */}
    <section id="contact" className="contact-section py-5" style={{background: 'linear-gradient(135deg, #633333, #b86e0d93'}}>
  <Container>
    <h2 className="display-4 fw-bold mb-5 text-center text-green-500">Contact <span className="text-warning">Me</span></h2>
    <p className="fw-semibold text-center text-gray-500 mb-5 fs-4">
      Feel free to reach out for collaborations or just a friendly hello 👋
    </p>

    <Row className="justify-content-center">
      {/* === Get in Touch Card (Now First) === */}
      <Col md={4} className="mb-4">
<Card className="glass-card-one p-4 shadow-lg border-0 text-center glow-card" style={{background: 'linear-gradient(to right, #0e0e0ee0, #0000005e)'}}>
  <h4 className="fw-semibold text-light mb-4">Get in Touch</h4>

  <div className="contact-item">
    <span className="label">Email</span>
    <a href="mailto:isaiah.aguinaldo2@gmail.com" className="value text-green-500">
      isaiah.aguinaldo2@gmail.com
    </a>
  </div>

  <div className="contact-item">
    <span className="label">Phone</span>
    <a href="tel:+639420808105" className="value text-green-500">
      +63 942 080 8105
    </a>
  </div>

  <div className="contact-item">
    <span className="label">Location</span>
    <span className="value text-green-500">Bulacan, Philippines</span>
  </div>

  <div className="contact-item">
    <span className="label">LinkedIn</span>
    <a
      href="https://www.linkedin.com/in/isaiahaguinaldo"
      target="_blank"
      rel="noreferrer"
      className="value text-green-500"
    >
      linkedin.com/in/isaiahaguinaldo
    </a>
  </div>
</Card>

      </Col>

      {/* === Contact Form (Now Second) === */}
      <Col md={6} className="mb-4">
        <Card className="glass-card-one p-4 shadow-lg" style={{background: 'linear-gradient(to right, #0e0e0ee0, #0000005e)'}}>
          {submitted && (
            <div className="alert alert-success text-center">
              Thank you! Your message has been sent.
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label text-light">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="form-control text-center"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label text-light">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="form-control text-center"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label text-light">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="form-control text-center"
                placeholder="Your Message"
                rows={5}
                required
              />
            </div>

            <Button type="submit" className="w-100 fw-bold btn-success">
              Send Message
            </Button>
          </form>
        </Card>
      </Col>
    </Row>
  </Container>
</section>

<footer className="text-center py-4 mt-5" style={{ backgroundColor: '#212529', color: '#ffffff' }}>
  <Container>
    <p className="mb-1 fs-5">You have reached the end of my page 👋</p>
    <p className="text-warning fw-semibold mb-0">
      © {new Date().getFullYear()} Pierre Isaiah Aguinaldo | All Rights Reserved
    </p>
  </Container>
</footer>

    </>
  );
}
