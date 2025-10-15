import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { Typography, Box, LinearProgress } from '@mui/material';
import { Code, School, Work, Star, TrendingUp } from '@mui/icons-material';
import useScrollReveal from '../components/ScrollReveal';

const About = () => {
  const [aboutRef, aboutVisible] = useScrollReveal();
  const [skillsRef, skillsVisible] = useScrollReveal();
  const [experienceRef, experienceVisible] = useScrollReveal();
  const [educationRef, educationVisible] = useScrollReveal();

  const skills = [
    { name: 'React', level: 95, color: '#61dafb' },
    { name: 'JavaScript', level: 70, color: '#f7df1e' },
    { name: 'Material UI', level: 85, color: '#339933' },
    { name: 'MongoDB', level: 70, color: '#47a248' },
    { name: 'CSS/SCSS', level: 90, color: '#1572b6' },
    { name: 'Bootstrap', level: 95, color: '#7952b3' },
    { name: 'Github', level: 80, color: '#12273aff' },
    { name: 'Terminal', level: 70, color: '#170335ff' },
    { name: 'Redux', level: 90, color: '#3c6b05ff' }



  ];

  const experience = [
    {
      title: 'React Developer',
      company: 'Rowth Tech',
      period: 'December 2023 - Present',
      description: 'Working as a React Developer building modern web applications with focus on user experience and performance optimization.',
      achievements: ['Built 6+ production applications', 'Implemented responsive designs', 'Worked with React ecosystem']
    },
    {
      title: 'React Developer Trainee',
      company: 'Rowth Tech',
      period: 'May 2023 - December 2023',
      description: 'Completed comprehensive training in React development, learning modern web technologies and best practices.',
      achievements: ['Mastered React fundamentals', 'Built multiple training projects', 'Learned industry best practices']
    }
  ];

  const achievements = [
    { icon: <Star />, title: '6+ Projects', description: 'Successfully completed projects' },
    { icon: <TrendingUp />, title: '1.8 Year', description: 'Professional experience' },
    { icon: <Code />, title: '10+ Technologies', description: 'Mastered technologies' }
  ];

  return (
    <div className="about-page pt-5">
      <Container>
        {/* About Section */}
        <section className="about-intro py-5" ref={aboutRef}>
          <Row className={`align-items-center ${aboutVisible ? 'slide-in-up' : ''}`}>
            <Col lg={6}>
              <Typography variant="h2" className="mb-4 gradient-text">
                About Me
              </Typography>
              <Typography variant="body1" className="mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                I'm a passionate React developer with 1.8+ year of professional experience in building
                modern, scalable web applications. My journey started in May 2023 with comprehensive
                training, and it has evolved into a deep love for creating amazing digital experiences.
              </Typography>
              <Typography variant="body1" className="mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                I specialize in React ecosystem, modern JavaScript, and creating responsive,
                user-friendly interfaces. Since joining Rowth Tech, I've been constantly learning
                new technologies and implementing best practices in real-world projects.
              </Typography>
              <Typography variant="body1" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open source projects, mentoring fellow developers,
                or sharing knowledge with the developer community.
              </Typography>
            </Col>
            <Col lg={6} className="text-center">
              <div className="about-image">
                <div className="profile-placeholder-large floating">
                  <Typography variant="h1">🚀</Typography>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        {/* Achievements Section */}
        <section className="achievements py-5">
          <Row>
            {achievements.map((achievement, index) => (
              <Col md={4} key={index} className="text-center mb-4">
                <div className={`achievement-card p-4 ${aboutVisible ? 'zoom-in' : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}>
                  <Box className="achievement-icon mb-3" style={{ color: 'var(--primary-color)', fontSize: '3rem' }}>
                    {achievement.icon}
                  </Box>
                  <Typography variant="h4" className="mb-2" style={{ fontWeight: '700' }}>
                    {achievement.title}
                  </Typography>
                  <Typography variant="body1" style={{ color: 'var(--text-light)' }}>
                    {achievement.description}
                  </Typography>
                </div>
              </Col>
            ))}
          </Row>
        </section>

        {/* Skills Section */}
        <section className="skills-detailed py-5" ref={skillsRef}>
          <Row>
            <Col>
              <Typography variant="h3" className="text-center mb-5">
                <Code className="me-2" style={{ color: 'var(--primary-color)' }} />
                Technical Expertise
              </Typography>
            </Col>
          </Row>
          <Row>
            {skills.map((skill, index) => (
              <Col md={6} key={index} className="mb-4">
                <Box className={`skill-item ${skillsVisible ? 'slide-in-left' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}>
                  <Box className="d-flex justify-content-between align-items-center mb-2">
                    <Typography variant="h6" style={{ fontWeight: '600' }}>
                      {skill.name}
                    </Typography>
                    <Typography variant="body2" style={{
                      color: skill.color,
                      fontWeight: '600',
                      fontSize: '1rem'
                    }}>
                      {skill.level}%
                    </Typography>
                  </Box>
                  <Box className="skill-progress-container" style={{ position: 'relative' }}>
                    <ProgressBar
                      now={skillsVisible ? skill.level : 0}
                      style={{
                        height: '8px',
                        backgroundColor: '#e9ecef',
                        borderRadius: '10px',
                        transition: 'all 1s ease-out',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    />
                    <Box
                      className="skill-progress-fill"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '8px',
                        width: skillsVisible ? `${skill.level}%` : '0%',
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                        borderRadius: '10px',
                        transition: 'width 1.5s ease-out',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    />
                  </Box>
                </Box>
              </Col>
            ))}
          </Row>
        </section>

        {/* Experience Section */}
        <section className="experience py-5" ref={experienceRef}>
          <Container>
            <Row>
              <Col>
                <Typography variant="h3" className="text-center mb-5">
                  <Work className="me-2" style={{ color: 'var(--primary-color)' }} />
                  Professional Journey
                </Typography>
              </Col>
            </Row>
            <Row>
              {experience.map((exp, index) => (
                <Col lg={4} md={6} key={index} className="mb-4">
                  <div className={`experience-card p-4 h-100 ${experienceVisible ? 'slide-in-up' : ''}`}
                    style={{ animationDelay: `${index * 0.2}s` }}>
                    <Typography variant="h5" className="mb-2" style={{ fontWeight: '600' }}>
                      {exp.title}
                    </Typography>
                    <Typography variant="h6" className="mb-2" style={{
                      color: 'var(--primary-color)',
                      fontWeight: '500'
                    }}>
                      {exp.company}
                    </Typography>
                    <Typography variant="body2" className="text-muted mb-3" style={{ fontWeight: '500' }}>
                      {exp.period}
                    </Typography>
                    <Typography variant="body2" className="mb-3" style={{ lineHeight: '1.6' }}>
                      {exp.description}
                    </Typography>
                    <Box className="achievements-list">
                      <Typography variant="body2" style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
                        Key Achievements:
                      </Typography>
                      {exp.achievements.map((achievement, achIndex) => (
                        <Typography key={achIndex} variant="body2" style={{
                          color: 'var(--text-light)',
                          marginBottom: '0.25rem',
                          paddingLeft: '1rem',
                          position: 'relative'
                        }}>
                          <span style={{
                            position: 'absolute',
                            left: '0',
                            color: 'var(--primary-color)',
                            fontWeight: 'bold'
                          }}>•</span>
                          {achievement}
                        </Typography>
                      ))}
                    </Box>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Education Section */}
        <section className="education py-5" ref={educationRef}>
          <Row>
            <Col>
              <Typography variant="h3" className="text-center mb-5">
                <School className="me-2" style={{ color: 'var(--primary-color)' }} />
                Education & Certifications
              </Typography>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={8}>
              <div className={`education-card p-4 ${educationVisible ? 'slide-in-right' : ''}`}>
                <Typography variant="h5" className="mb-2" style={{ fontWeight: '600' }}>
                  Bachelor's in Computer Science
                </Typography>
                <Typography variant="h6" className="mb-2" style={{
                  color: 'var(--primary-color)',
                  fontWeight: '500'
                }}>
                  University of Technology
                </Typography>
                <Typography variant="body2" className="text-muted mb-3" style={{ fontWeight: '500' }}>
                  2023 - 2026 | CGPA: 8.5/10
                </Typography>
                <Typography variant="body2" style={{ lineHeight: '1.6' }}>
                  Focused on web development, data structures, algorithms, and software engineering principles.
                  Completed major projects in React, Node.js, and database management systems.
                </Typography>

                <Box className="certifications mt-4">
                  <Typography variant="h6" className="mb-3" style={{ fontWeight: '600' }}>
                    Certifications:
                  </Typography>
                  <Box className="d-flex flex-wrap gap-2">
                    {['React Developer ', 'JavaScript', 'HTML', 'CSS'].map((cert, index) => (
                      <span key={index} className="badge" style={{
                        backgroundColor: 'var(--primary-color)',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: '500'
                      }}>
                        {cert}
                      </span>
                    ))}
                  </Box>
                </Box>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default About;