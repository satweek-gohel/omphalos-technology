'use client'
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import styles from '../../styles/Services/ServiceCard.module.css';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { getServiceList } from '@/app/api/comman';

const ServiceCard = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Truncate description to 230 characters
  const truncateDescription = (description, maxLength = 230) => {
    if (!description) return 'Description not available';
    return description.length > maxLength 
      ? description.slice(0, maxLength).trim() + '...'
      : description;
  };

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Fetch services data
    const fetchServices = async () => {
      try {
        setIsLoading(true);
        const servicesData = await getServiceList();
        setServices(servicesData.data.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
        <Spinner animation="border" role="status" style={{ color: 'var(--primary-color)' }}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <section className={styles.serviceSection}>
      <Container>
        <Row>
          {services.map((service, index) => (
            <Col md={4} sm={12} key={service.id} className="mb-4" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              <Card className={styles.card}>
                <Card.Body className={styles.cardBody + " text-center"}>
                  <Card.Title className={styles.cardTitle}>{service.service_name}</Card.Title>
                  <div className={styles.numberLabel}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <Card.Text className={styles.cardDescription}>
                    {truncateDescription(service.service_description)}
                  </Card.Text>
                  <Link href={`/service-details/${service.serviceUrl}`} passHref>
                    <Button className={styles.readMore}>Read More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceCard;