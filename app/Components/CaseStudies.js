'use client';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import styles from '../styles/CaseStudies.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { statsData } from './Constants/enums';


// Carousel images


const CaseStudies = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
      mirror: false,
      offset: 0, // Adjust offset to prevent horizontal scrollbar
    });

    // Animate counters from 0 to target value
    statsData.forEach((item, index) => {
      const interval = setInterval(() => {
        setCounters(prev => {
          const newCounters = [...prev];
          if (newCounters[index] < item.value) {
            newCounters[index] += Math.ceil(item.value / 100);
          } else {
            clearInterval(interval);
            newCounters[index] = item.value;
          }
          return newCounters;
        });
      }, 200);
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.caseStudiesSection}>
      <Container>
        {/* Stats Section */}
        <Row className={styles.statsRow}>
          {statsData.map((stat, index) => (
            <Col xs={4} md={4} key={stat.id} className={styles.statsCol} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              <h3 className={styles.statValue}>{counters[index]}</h3>
              <p className={styles.statLabel}>{stat.label}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CaseStudies;
