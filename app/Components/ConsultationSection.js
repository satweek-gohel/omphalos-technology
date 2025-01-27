// components/ConsultationSection.js
"use client";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaThumbsUp, FaGlobeAmericas } from "react-icons/fa"; // Importing icons
import styles from "../styles/ConsultationSection.module.css"; // Import your CSS file
import Image from "next/image"; // Use Next.js Image component
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const ConsultationSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      offset: 0, // Adjust offset to prevent horizontal scrollbar
    });
  }, []);

  return (
    <section className={styles.consultationSection}>
      <Container className="mt-5">
        <Row className="align-items-center">
          {/* Left Side */}
          <Col md={6} className="text-md-start text-center" data-aos="fade-up">
            <h2 className={styles.heading1}>― Works About</h2>
            <h2 className={styles.heading2}>
              Solutions for better business<br></br>
              Happy Customers
            </h2>
            <p className={styles.description}>
              We use data, technology, and AI to shape the future Ready for
              meaningful change?
            </p>
            <div className={styles.pointContainer}>
              <div className={styles.point}>
                <FaThumbsUp className={styles.icon} />
                <span className={styles.pointText}>
                  100% Client Satisfaction
                </span>
              </div>
              <div className={styles.point}>
                <FaGlobeAmericas className={styles.icon} />
                <span className={styles.pointText}>World Class Workers</span>
              </div>
            </div>
            <Link href="/contact" passHref legacyBehavior>
            <Button className={styles.consultButton}>Get a Consultation</Button>
            </Link>
          </Col>

          {/* Right Side */}
          <Col
            md={6}
            className="text-center d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className={styles.imageContainer}>
              <Image
                src="/consultation.jpg" // Replace with your image path
                alt="Consultation Image"
                layout="responsive"
                width={300}
                height={200}
              />
              <div
                className={styles.projectCount}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <span style={{ fontSize: "3rem !important" }}>500+</span>{" "}
                <br></br>Projects Completed
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ConsultationSection;
