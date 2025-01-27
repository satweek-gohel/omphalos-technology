'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../styles/PageBanner.module.css'; // CSS for the component

const PageBanner = ({ title, backgroundImage }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${backgroundImage})` }} // Dynamic background image
    >
      <div className={styles.overlay} data-aos="fade-in">
        <div className={styles.content} data-aos="fade-up">
          <h1 className={styles.title}>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
