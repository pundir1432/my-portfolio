import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Typography, Box } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={6}>
            <Typography variant="body1" className="mb-2">
              © 2024 Pankaj singh. All rights reserved.
            </Typography>
            <Typography variant="body2" className="text-muted">
              Built with React, Bootstrap & Material-UI
            </Typography>
          </Col>
          <Col md={6} className="text-md-end">
            <Box className="social-links">
              <a href="mailto:pankajpundir228@gmail.com" className="text-light me-3">
                <Email />
              </a>
              <a href="https://github.com/pundir1432" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                <GitHub />
              </a>
              <a href="https://linkedin.com/in/yourusername" className="text-light" target="_blank" rel="noopener noreferrer">
                <LinkedIn />
              </a>
            </Box>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;