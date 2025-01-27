// components/Process.js
'use client';
import { Container, Card } from 'react-bootstrap';
import Slider from 'react-slick';
import styles from '../styles/Process.module.css';
import { MdOutlineSecurity } from 'react-icons/md';
import { LuDatabaseBackup } from "react-icons/lu";
import { IoIosCloudUpload } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa6";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { services } from './Constants/enums';

const Process = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      offset: 200,
    });
  }, []);

  
 

  // Slick settings for carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet or small desktops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={`${styles.processSection} bg-light`}>
      <Container>
        {/* Heading and Subheading */}
        <div className={styles.headingContainer} data-aos="fade-up">
          <h2 className={styles.heading}>FEATURED SERVICES</h2>
          <p className={styles.subHeading}>Service We Provide</p>
          <div className={styles.line}></div>
        </div>

        {/* Carousel with Slick Slider */}
        <Slider {...settings} className={styles.slickSlider}>
          {services.map((service) => (
            <div key={service.id} className="px-2" data-aos="fade-up" data-aos-delay="100">
              <Card className={`${styles.processCard} ${styles.magicBorder}`}>
                <Card.Body className="text-center">
                  {service.icon}
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Process;
