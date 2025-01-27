// components/OurServices.js
'use client';
import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLaptopCode, FaCloud, FaLock } from 'react-icons/fa'; 
import styles from '../styles/OurServices.module.css'; 

const OurServices = () => {
  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show on larger screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.ourServicesSection}>
      <Container>
        <Row className="text-center">
          <Col xs={12}>
            <h2 className={styles.heading1}>Services</h2>
            <h3 className={styles.heading2}>What we do</h3>
          </Col>
        </Row>
        <Slider {...settings} className="mt-4">
          <div className={styles.card}>
            <FaLaptopCode className={styles.icon} />
            <h4 className={styles.cardTitle}>IT Consultancy</h4>
            <p className={styles.cardDescription}>Expert advice for your IT infrastructure.</p>
          </div>
          <div className={styles.card}>
            <FaCloud className={styles.icon} />
            <h4 className={styles.cardTitle}>Cloud Services</h4>
            <p className={styles.cardDescription}>Flexible cloud solutions for your business.</p>
          </div>
          <div className={styles.card}>
            <FaLock className={styles.icon} />
            <h4 className={styles.cardTitle}>Cybersecurity</h4>
            <p className={styles.cardDescription}>Protecting your data with advanced security.</p>
          </div>
          <div className={styles.card}>
            <FaLaptopCode className={styles.icon} />
            <h4 className={styles.cardTitle}>IT Consultancy</h4>
            <p className={styles.cardDescription}>Expert advice for your IT infrastructure.</p>
          </div>
          <div className={styles.card}>
            <FaCloud className={styles.icon} />
            <h4 className={styles.cardTitle}>Cloud Services</h4>
            <p className={styles.cardDescription}>Flexible cloud solutions for your business.</p>
          </div>
        </Slider>
      </Container>
    </section>
  );
};

export default OurServices;
