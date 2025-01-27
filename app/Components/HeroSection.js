'use client'
// components/HeroSection.js
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../styles/HeroSection.module.css'; // Create a CSS file for styles
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  return (
    <section className={styles.heroSection} style={{zIndex:1}}>
      <Container>
        <Row className="align-items-center" style={{zIndex:1}}>
          <Col md={6}  className="text-md-start text-center" data-aos="fade-right" style={{zIndex:1}}>
            {/* <h1 className={styles.title}>Optimize IT Systems</h1> */}
            <h2 className={styles.heading}>Flexible Solution For</h2>
            <h2 className={styles.heading2}>Your Bussiness Needs</h2>
            <p className={styles.description}>
            Cuentista Tech provides a total end-to-end solution.

            </p>
            <Link href="/contact" passHref legacyBehavior>
            <Button style={{ background: 'var(--primary-color)', padding: '10px 20px',borderRadius:'10px', fontWeight:'400',border:'1px solid var(--primary-color)' }}>
              Contact Us 
            </Button>
            </Link>
          </Col>
          <Col md={6} className="text-center" data-aos="fade-left" style={{zIndex:1}}>
            <Image
              src="/hero-banner.jpg" 
              alt="Hero Image"
              width={500}
              height={500}
              className={styles.heroImage}
              priority={true} 
              style={{ zIndex: 1 }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
