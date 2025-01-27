'use client'; 

import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../styles/AboutContent.module.css'; 
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
      mirror: false,
      offset: 0,
    });
  }, []);

  return (
    
    <section className={styles.aboutSection}>

      <Container>
        
        <Row className="align-items-center mb-0">
          <Col md={12} className="d-flex flex-column align-items-center justify-content-start " data-aos="fade-up">
            <h2 className={styles.heading2}>
              <q>The best way to make your vision a reality is by working with people you trust. </q>
            </h2>
            <p className={styles.description2} >
              With a broad portfolio of services, deep industry expertise, and unmatched capabilities, you can trust us to help you meet tomorrow’s challenges with today’s solutions. Because if you want to change the world for the better, the time to start is now.
            </p>
            <p className={styles.description2} >
              Cuentista Tech has its HQ in Bhopal, Madhya Pradesh. Being a Tech for Social Impact ICT advisory and consultancy, Cuentista delivers tailored business solutions supported by Microsoft technology to enhance business processes, productivity, and the bottom line.
            </p>
            <p className={styles.description2} >
              Technology is at the heart of every business, in every industry, and Cuentista not only develops tailored solutions to fit your business and your industry, but we guide you through the project stages. As a Microsoft Partner, we use the latest technologies to deliver holistic project management.
            </p>
            <p className={styles.description2} >
            We have established a strong track record of service delivery across a range of industries, including non-profit organizations, mining, manufacturing, finance and investment, and government agencies. 
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutContent;
