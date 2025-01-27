'use client'
import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/PopularNews.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { newsData } from './Constants/enums';




const PopularNews = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      offset: 0, // Adjust offset to prevent horizontal scrollbar
    });
  }, []);

  return (
    <>
      <Head>
        <title>Popular News | Latest from Our Blog</title>
        <meta name="description" content="Check out the latest news and blog posts about our services and technology." />
        <meta name="keywords" content="news, blog, tech updates, services" />
      </Head>

      <section className={styles.newsSection}>
        <Container>
          {/* Subtitle and Title */}
          <div className="text-center mb-5 d-flex flex-column align-items-center" data-aos="fade-up">
            <h5 className={styles.subtitle}>Popular News</h5>
            <h2 className={styles.title}>Latest from Our Blog</h2>
            <div className={styles.line}></div>
          </div>

          {/* News Cards */}
          <Row>
            {newsData.map((newsItem, index) => (
              <Col md={4} key={index} className="mb-4" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                <Card className={styles.newsCard}>
                  {/* Optimized Next.js Image */}
                  <div className={styles.imageWrapper}>
                    <Image
                      src={newsItem.urlToImage}
                      alt={newsItem.title}
                      width={600}
                      height={400}
                      className={styles.cardImage}
                      layout="responsive"
                      objectFit="cover"
                    />
                  </div>

                  {/* Card Body */}
                  <Card.Body>
                    <small className="text-muted date">
                      {new Date(newsItem.publishedAt).toLocaleDateString()} / {newsItem.author || 'Unknown'}
                    </small>
                    <Card.Title className={styles.cardTitle}>{newsItem.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PopularNews;
