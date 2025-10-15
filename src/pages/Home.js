import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Typography, Box, Chip } from '@mui/material';
import { GitHub, LinkedIn, Email, Download, Visibility, RemoveRedEye } from '@mui/icons-material';
import ParticleBackground from '../components/ParticleBackground';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [nameText, setNameText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const titles = ['React Developer', 'Frontend Expert', 'UI/UX Enthusiast', 'Problem Solver'];
  const names = ['Pankaj Singh', 'React Developer', 'Frontend Expert'];
  const [nameIndex, setNameIndex] = useState(0);
  const [nameDeleting, setNameDeleting] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Name typing animation
    const currentName = names[nameIndex];
    const nameTimeout = setTimeout(() => {
      if (!nameDeleting) {
        setNameText(currentName.substring(0, nameText.length + 1));
        if (nameText === currentName) {
          setTimeout(() => setNameDeleting(true), 2000);
        }
      } else {
        setNameText(currentName.substring(0, nameText.length - 1));
        if (nameText === '') {
          setNameDeleting(false);
          setNameIndex((prev) => (prev + 1) % names.length);
        }
      }
    }, nameDeleting ? 50 : 100);

    return () => clearTimeout(nameTimeout);
  }, [nameText, nameDeleting, nameIndex, names]);

  useEffect(() => {
    // Title typing animation
    const currentTitle = titles[textIndex];
    const titleTimeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentTitle.substring(0, typedText.length + 1));
        if (typedText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypedText(currentTitle.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 120);

    return () => clearTimeout(titleTimeout);
  }, [typedText, isDeleting, textIndex, titles]);

  const skills = [
    { name: 'React', logo: '⚛️' },
    { name: 'JavaScript', logo: '🟨' },
    { name: 'Github', logo: '🟢' },
    { name: 'MongoDB', logo: '🍃' },
    { name: 'Terminal', logo: '🚀' },
    { name: 'HTML5', logo: '🧡' },
    { name: 'CSS3', logo: '🔵' },
    { name: 'Bootstrap', logo: '🅱️' },
    { name: 'Material-UI', logo: '🎨' },
    { name: 'Fetch API', logo: '🔷' },
    { name: 'Redux', logo: '🔄' },
    { name: 'Router', logo: '🔄' },
  ];

  const projects = [
    {
      title: 'BMG Buyer Platform',
      description: 'An e-commerce and auction platform where buyers can purchase and bid on products. Developed with a focus on smooth product browsing and secure checkout.',
      link: 'http://103.185.212.117:5005/bmg/home',
      tech: ['React', 'Node.js', 'MongoDB', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop'
    },
    {
      title: 'BMG Seller Platform',
      description: 'Platform for sellers to list, manage, and sell products in the BMG ecosystem. Includes order tracking, product analytics, and profile management.',
      link: 'http://103.185.212.117:5006/account/login',
      tech: ['React', 'Redux', 'Node.js', 'React-bootstrap'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop'
    },
    {
      title: 'Padel User Admin',
      description: 'Admin panel for managing users, bookings, and court availability for a Padel sports platform. Integrated with Stripe and Google Pay for payments.',
      link: 'http://103.185.212.117:5660/home',
      tech: ['React', 'Stripe', 'Firebase', 'Material UI', 'React-bootstrap'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop'
    },
    {
      title: 'Task Manager',
      description: 'A task management app where employers can assign, track, and update tasks for employees. Includes real-time updates and role-based access.',
      link: 'https://taskmanagerteam.rowthtech.com/dashboard/taskboard',
      tech: ['React', 'Node.js', 'MongoDB', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop'
    },
    {
      title: 'RCM Landing Page',
      description: 'A professional landing page built for RCM company showcasing services, about, and contact sections with a responsive design.',
      link: 'https://probillrcm.com/',
      tech: ['React', 'Bootstrap', 'HTML5', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=200&fit=crop'
    },
    {
      title: 'FootOnShoes',
      description: 'An online shoe store offering a wide collection of footwear. Integrated cart, wishlist, and responsive product pages.',
      link: 'https://foot-on-shoes.com/',
      tech: ['React', 'Node.js', 'MongoDB', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=200&fit=crop'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <ParticleBackground />
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6}>
              <Typography variant="h2" component="h1" className="hero-title mt-lg-0 mt-3">
                Hi, I'm <span className="text-white">{nameText}<span className="cursor">|</span></span>
              </Typography>
              <Typography variant="h4" className="hero-subtitle mb-4">
                <span className="typing-text">{typedText}</span>
                <span className="cursor">|</span>
              </Typography>
              <Typography variant="body1" className="text-white-50 mb-4">
                Since December 2023, I’ve been working as a React Developer, building fast, responsive, and user-focused web applications.
                I’m passionate about clean code, modern UI design, and solving real-world challenges through technology.
              </Typography>

              <Box className="hero-buttons">
                <Button variant="primary" size="lg" className="me-3 hover-lift">
                  <Visibility className="me-2" />
                  View Projects
                </Button>
                <Button 
                  variant="outline-primary" 
                  size="lg" 
                  className="hover-lift border border-white text-white"
                  href="/cv/react-pankaj.pdf"
                  download="Pankaj_Singh_CV.pdf"
                  as="a"
                >
                  <Download className="me-2" />
                  Download CV
                </Button>
              </Box>
            </Col>
            <Col lg={6} className="text-center d-flex align-items-center justify-content-center">
              <div className="hero-image">
                <div className={`profile-placeholder ${isVisible ? 'animate-in' : ''}`}>
                  <Typography variant="h1" className="profile-emoji">👨💻</Typography>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Skills Section */}
      <section className="bg-light py-5">
        <Container>
          <Row>
            <Col>
              <Typography variant="h4" className="text-center mb-5">
                Skills & Technologies
              </Typography>
              <Box className="skills-container text-center">
                {skills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={`${skill.logo} ${skill.name}`}
                    variant="outlined"
                    className="skill-chip m-2"
                    size="large"
                  />
                ))}
              </Box>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects Section */}
      <section className="bg-white py-5">
        <Container>
          <Row>
            <Col>
              <Typography variant="h4" className="text-center mb-5">
                Featured Projects
              </Typography>
            </Col>
          </Row>
          <Row>
            {projects.map((project, index) => (
              <Col md={4} key={index} className="mb-4">
                <div className="project-card h-100 p-4 bg-white rounded-3 shadow-sm border-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid rounded mb-3"
                    style={{ height: '180px', objectFit: 'cover', width: '100%' }}
                  />
                  <Typography variant="h5" className="mb-2">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" className="mb-3">
                    {project.description}
                  </Typography>
                  <Box className="mb-3">
                    {project.tech.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        className="me-1 mb-1"
                      />
                    ))}
                  </Box>
                  <div className="btn-group">
                    <Button
                      variant="outline-primary"
                      disabled
                      size="sm"
                    >
                      <GitHub className="me-1" />
                      View Code
                    </Button>
                    <Button
                      variant="outline-primary"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                    >
                      <RemoveRedEye className="me-1" />
                      View Project
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta py-5 text-white">
        <Container>
          <Row>
            <Col className="text-center">
              <Typography variant="h5" className="mb-4">
                Let's Work Together
              </Typography>
              <Typography variant="body1" className="mb-4">
                I'm always interested in new opportunities and exciting projects.
              </Typography>
              <Box className="contact-links">
                <Button variant="primary" className="me-3 hover-lift">
                  <Email className="me-2" />
                  Get In Touch
                </Button>
                <Button variant="outline-primary" className="me-3 text-white border-white hover-lift">
                  <LinkedIn className="me-2" />
                  LinkedIn
                </Button>
                <Button variant="outline-primary" className="hover-lift text-white border-white">
                  <GitHub className="me-2" />
                  GitHub
                </Button>
              </Box>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;