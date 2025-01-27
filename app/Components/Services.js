// components/Service.js
'use client';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { MdPlayArrow, MdOutlineSecurity } from 'react-icons/md'; 
import { LuDatabaseBackup } from "react-icons/lu";
import { IoIosCloudUpload } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa6";
import styles from '../styles/Service.module.css';

const Service = () => {
  return (
    <section className={styles.serviceSection}>
      <Container>
        <Row className="align-items-center">
          {/* Left Side */}
          <Col md={6} className="text-md-start text-center">
            <h2 className={styles.heading1}> ──   Why Choose Us</h2>
            <h2 className={styles.heading2}>Custom IT Solutions for <br /> Your Business</h2>
            <p className={styles.description}>
              Carried nothing on am warrant towards. Polite in of in oh needed itself silent course. Assistance travelling so especially do prosperous appearance mr no celebrated. Wanted easily in my called formed suffer. Songs hoped sense as taken ye mirth at. Believe fat how six drawing pursuit minutes far. Same do seen head am part it dear open to whatever.
            </p>
            <Button className={styles.videoButton}>
              <MdPlayArrow className={styles.playIcon} /> Play Video
            </Button>
          </Col>

          {/* Right Side */}
          <Col md={6} className="mt-4 mt-md-0">
            <Row>
              <Col xs={12} md={6} className="mb-4">
                <div className={`${styles.card} ${styles.cardBlue}`}>
                  <div className={styles.iconContainer}>
                    <FaLaptopCode className={styles.icon} />
                  </div>
                  <h5 className={styles.cardTitle}>IT Consultancy</h5>
                  <p className={styles.cardDescription}>Expert advice tailored for your IT needs.</p>
                </div>
              </Col>
              <Col xs={12} md={6} className="mb-4">
                <div className={`${styles.card} ${styles.cardWhite}`}>
                  <div className={styles.iconContainer}>
                    <MdOutlineSecurity className={styles.icon} />
                  </div>
                  <h5 className={styles.cardTitle}>Cyber Security</h5>
                  <p className={styles.cardDescription}>Protect your business with our security solutions.</p>
                </div>
              </Col>
              <Col xs={12} md={6} className="mb-4">
                <div className={`${styles.card} ${styles.cardWhite}`}>
                  <div className={styles.iconContainer}>
                    <IoIosCloudUpload className={styles.icon} />
                  </div>
                  <h5 className={styles.cardTitle}>Cloud Computing</h5>
                  <p className={styles.cardDescription}>Flexible solutions to enhance your operations.</p>
                </div>
              </Col>
              <Col xs={12} md={6} className="mb-4">
                <div className={`${styles.card} ${styles.cardBlue}`}>
                  <div className={styles.iconContainer}>
                    <LuDatabaseBackup className={styles.icon} />
                  </div>
                  <h5 className={styles.cardTitle}>Backup & Recovery</h5>
                  <p className={styles.cardDescription}>Safeguard your data with our solutions.</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Service;
