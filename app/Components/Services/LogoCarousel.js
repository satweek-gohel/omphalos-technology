'use client';

import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../../styles/Services/LogoCarousel.module.css'; // Custom CSS

const LogoCarousel = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const logos = [
    '/logo1.png',
    '/logo2.png',
    '/logo3.png',
    '/logo4.png',
    '/logo5.png',
    '/logo6.png'
  ];

  // Responsive settings for the carousel
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 5, // 5 logos visible on large screens
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 4, // 4 logos visible on desktop
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 3, // 3 logos visible on tablet
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 3, // 1 or 2 logos visible on small devices
      partialVisibilityGutter: 30, // To partially show the next logo
    },
  };

  return (
    <Container className="text-center py-5" data-aos="fade-up">
      <Carousel
        responsive={responsive}
        infinite={true} // Infinite looping
        draggable={true} // Enable dragging on desktop and mobile
        swipeable={true} // Swipe support on touch screens
        autoPlay={true} // Manual sliding
        keyBoardControl={true} // Enable keyboard controls
        partialVisible={true} // Show part of the next logo for small devices
        containerClass={styles.carouselContainer}
        itemClass={styles.carouselItem}
        showDots={false} // No dots for a cleaner look
        arrows={false}
      >
        {logos.map((logo, index) => (
          <div className={styles.logoContainer} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <img src={logo} alt={`logo-${index}`} className={styles.logoImage} />
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default LogoCarousel;
