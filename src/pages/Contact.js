import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { Typography, Box, Snackbar } from '@mui/material';
import { Email, Phone, LocationOn, Send, GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import useScrollReveal from '../components/ScrollReveal';

const Contact = () => {
  const [contactRef, contactVisible] = useScrollReveal();
  const [formRef, formVisible] = useScrollReveal();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setShowAlert(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setShowAlert(false), 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'pankajpundir228@gmail.com',
      link: 'mailto:pankajpundir228@gmail.com'
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+91 7668038069',
      link: 'tel:+917668038069'
    },
    {
      icon: <LocationOn />,
      title: 'Location',
      value: 'Chandigarh, India',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <LinkedIn />,
      url: 'https://linkedin.com/in/pankajsingh',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      icon: <GitHub />,
      url: 'https://github.com/pankajsingh',
      color: '#333'
    },
    {
      name: 'Twitter',
      icon: <Twitter />,
      url: 'https://twitter.com/pankajsingh',
      color: '#1da1f2'
    }
  ];

  return (
    <div className="contact-page pt-5">
      <Container>
        <section className="contact-header py-5" ref={contactRef}>
          <Row>
            <Col className="text-center">
              <Typography variant="h2" className={`mb-4 gradient-text ${contactVisible ? 'slide-in-down' : ''}`}>
                Let's Connect
              </Typography>
              <Typography variant="h5" className={`mb-5 ${contactVisible ? 'slide-in-up' : ''}`} 
                         style={{ color: 'var(--text-light)', fontWeight: '400' }}>
                I'd love to hear from you! Whether you have a project in mind or just want to chat about technology.
              </Typography>
            </Col>
          </Row>
        </section>

        <Row className="mb-5">
          {/* Contact Info */}
          <Col lg={4} className="mb-5">
            <Card className={`h-100 hover-lift ${contactVisible ? 'slide-in-left' : ''}`} 
                  style={{ border: 'none', borderRadius: '20px' }}>
              <Card.Body className="p-4">
                <Typography variant="h4" className="mb-4" style={{ fontWeight: '600' }}>
                  Get In Touch
                </Typography>
                
                {contactInfo.map((info, index) => (
                  <Box key={index} className="contact-item mb-4 hover-lift" 
                       style={{ animationDelay: `${index * 0.1}s` }}>
                    <Box className="d-flex align-items-center mb-2">
                      <Box className="contact-icon me-3" style={{ 
                        color: 'var(--primary-color)',
                        fontSize: '1.5rem',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        {info.icon}
                      </Box>
                      <Typography variant="h6" style={{ fontWeight: '600' }}>
                        {info.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1" className="ms-5" style={{ color: 'var(--text-light)' }}>
                      <a href={info.link} style={{ 
                        textDecoration: 'none', 
                        color: 'inherit',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--text-light)'}>
                        {info.value}
                      </a>
                    </Typography>
                  </Box>
                ))}

                <Box className="social-links mt-5">
                  <Typography variant="h6" className="mb-3" style={{ fontWeight: '600' }}>
                    Follow Me
                  </Typography>
                  <Box className="d-flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link hover-lift"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '50px',
                          height: '50px',
                          borderRadius: '50%',
                          backgroundColor: social.color,
                          color: 'white',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          fontSize: '1.2rem'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'translateY(-3px) scale(1.1)';
                          e.target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'translateY(0) scale(1)';
                          e.target.style.boxShadow = 'none';
                        }}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </Box>
                </Box>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Form */}
          <Col lg={8}>
            <Card className={`hover-lift ${formVisible ? 'slide-in-right' : ''}`} 
                  style={{ border: 'none', borderRadius: '20px' }} ref={formRef}>
              <Card.Body className="p-4">
                <Typography variant="h4" className="mb-4" style={{ fontWeight: '600' }}>
                  Send Message
                </Typography>

                {showAlert && (
                  <Alert variant="success" className="mb-4" style={{ borderRadius: '10px' }}>
                    <strong>Thank you!</strong> Your message has been sent successfully. I'll get back to you soon!
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label style={{ fontWeight: '600', color: 'var(--text-color)' }}>
                          Name *
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your Name"
                          style={{
                            borderRadius: '10px',
                            border: '2px solid #e2e8f0',
                            padding: '12px 16px',
                            transition: 'all 0.3s ease'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = 'var(--primary-color)';
                            e.target.style.boxShadow = '0 0 0 0.2rem rgba(99, 102, 241, 0.25)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = '#e2e8f0';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label style={{ fontWeight: '600', color: 'var(--text-color)' }}>
                          Email *
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                          style={{
                            borderRadius: '10px',
                            border: '2px solid #e2e8f0',
                            padding: '12px 16px',
                            transition: 'all 0.3s ease'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = 'var(--primary-color)';
                            e.target.style.boxShadow = '0 0 0 0.2rem rgba(99, 102, 241, 0.25)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = '#e2e8f0';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label style={{ fontWeight: '600', color: 'var(--text-color)' }}>
                      Subject *
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Subject of your message"
                      style={{
                        borderRadius: '10px',
                        border: '2px solid #e2e8f0',
                        padding: '12px 16px',
                        transition: 'all 0.3s ease'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'var(--primary-color)';
                        e.target.style.boxShadow = '0 0 0 0.2rem rgba(99, 102, 241, 0.25)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e2e8f0';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label style={{ fontWeight: '600', color: 'var(--text-color)' }}>
                      Message *
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message here..."
                      style={{
                        borderRadius: '10px',
                        border: '2px solid #e2e8f0',
                        padding: '12px 16px',
                        transition: 'all 0.3s ease',
                        resize: 'vertical'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'var(--primary-color)';
                        e.target.style.boxShadow = '0 0 0 0.2rem rgba(99, 102, 241, 0.25)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e2e8f0';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </Form.Group>

                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="hover-lift"
                    style={{
                      borderRadius: '50px',
                      padding: '12px 30px',
                      fontWeight: '600',
                      background: 'var(--gradient-primary)',
                      border: 'none',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="loading-dots">Sending</span>
                      </>
                    ) : (
                      <>
                        <Send className="me-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Map Section */}
        <section className="map-section py-5">
          <Row>
            <Col>
              <Card className="hover-lift" style={{ 
                border: 'none', 
                borderRadius: '20px',
                background: 'var(--gradient-accent)',
                color: 'white'
              }}>
                <Card.Body className="text-center p-5">
                  <Typography variant="h4" className="mb-3" style={{ fontWeight: '600' }}>
                    📍 Let's Meet
                  </Typography>
                  <Typography variant="h6" style={{ fontWeight: '400', opacity: '0.9' }}>
                    Based in Chandigarh, India
                  </Typography>
                  <Typography variant="body1" style={{ opacity: '0.8', marginTop: '1rem' }}>
                    Available for remote work worldwide & local meetings in Chandigarh
                  </Typography>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Contact;