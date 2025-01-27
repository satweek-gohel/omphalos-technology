"use client"; // Ensures this is a Client Component

// components/About.js
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import styles from "../styles/About.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      offset: 0, // Adjust offset to prevent horizontal scrollbar
    });
  }, []);

  return (
    <section className={styles.aboutSection}>
      <Container>
        <Row className="align-items-start mb-5">
          {/* Left Side */}
          <Col md={6} className="position-relative" data-aos="fade-up">
            <Image
              src="/about1.jpg"
              alt="About Left Image"
              layout="responsive"
              width={600}
              height={400}
              className={styles.leftImage}
            />
            {/* Overlay Card */}
            <Card
              className={`${styles.overlayCard} position-absolute`}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Card.Body>
                <Card.Title>20 years of experience</Card.Title>
              </Card.Body>
            </Card>
            {/* Hidden Image for mobile and tablet */}
            <Image
              src="/about2.jpg"
              alt="About Hidden Image"
              layout="responsive"
              width={600}
              height={400}
              className={styles.hiddenImage}
              data-aos="fade-up"
              data-aos-delay="400"
            />
          </Col>

          {/* Right Side */}
          <Col md={6} className="text-md-start text-center " data-aos="fade-up">
            <h2 className={styles.heading2}>
              We Help IT Companies Scale Engineering Capacity
            </h2>
            <p className={styles.description2} style={{ textAlign: "justify" }}>
              We have seen many businesses in the past pay a lot for subpar
              services from companies that do not care about their clients.
              Currently when almost, anything is possible in the technology
              world. We decided we need to help clients optimize their business
              practices and tasks using the latest technology at affordable
              pricing.
            </p>
            <p className={styles.description2} style={{ textAlign: "justify" }}>
              We can suggest multiple solutions for your project or
              problem and help you decide what technology is the best to fit
              your needs. Our team is fully capable of getting your next
              project, solution, or company to where it needs to be. Our goal is
              to be able to grow with your business and its needs for an IT
              solution while providing it at an affordable rate.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
