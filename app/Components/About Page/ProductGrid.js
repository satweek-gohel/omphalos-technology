'use client'

import React from 'react';
import { Carousel, Col, Row, Card, Container } from 'react-bootstrap';
import styles from '../..//styles/AboutContent.module.css'

const products = [
  { name: 'NLU & NLP' },
  { name: 'IT Consulting' },
  { name: 'Computer Vision' },
  { name: 'Image Processing' },
  { name: 'Digital Marketing' },
  { name: 'Sentiment Analysis' },
  { name: 'Facial Recognition' },
  { name: 'Microsoft Dynamics 365' },
  { name: 'Productivity Solutions' },
  { name: 'Digital Transformation' },
  { name: 'ECommerce Applications' },
  { name: 'Microsoft Power Platform' },
  { name: 'Microsoft Business Central' },
  { name: 'Custom Software Development' },
  { name: 'Web & Mobile Applications' },
  { name: 'Microsoft Sustainability Manager' },
  { name: 'Legacy Application Modernisation' },
  { name: 'Artificial Intelligence & Business ChatBots' },
];

export default function Page() {
  return (
    <Container className={`mt-5 ${styles.productGrid}`}>
      <div className={styles.content}>
      <h4 className="text-center mb-1" style={{ maxWidth: '75%', marginLeft: 'auto', marginRight: 'auto', lineHeight: '30px' }}>
       Our services include
      </h4>
      <br />

      <Carousel interval={2000} indicators={false} controls={false}>
        <Carousel.Item>
          <Row className="text-center">
            {products.slice(0, 3).map((product, index) => (
              <Col sm={4} md={4} lg={4} key={index} className="mb-4">
                <Card className="text-center" style={{ height: '120px' }}>
                  <Card.Body className="d-flex justify-content-center align-items-center">
                    <Card.Title>{product.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row className="text-center">
            {products.slice(3, 6).map((product, index) => (
              <Col sm={4} md={4} lg={4} key={index} className="mb-4">
                <Card className="text-center" style={{ height: '120px' }}>
                  <Card.Body className="d-flex justify-content-center align-items-center">
                    <Card.Title>{product.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row className="text-center">
            {products.slice(6, 9).map((product, index) => (
              <Col sm={4} md={4} lg={4} key={index} className="mb-4">
                <Card className="text-center" style={{ height: '120px' }}>
                  <Card.Body className="d-flex justify-content-center align-items-center">
                    <Card.Title>{product.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row className="text-center">
            {products.slice(9, 12).map((product, index) => (
              <Col sm={4} md={4} lg={4} key={index} className="mb-4">
                <Card className="text-center" style={{ height: '120px' }}>
                  <Card.Body className="d-flex justify-content-center align-items-center">
                    <Card.Title>{product.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row className="text-center">
            {products.slice(12, 15).map((product, index) => (
              <Col sm={4} md={4} lg={4} key={index} className="mb-4">
                <Card className="text-center" style={{ height: '120px' }}>
                  <Card.Body className="d-flex justify-content-center align-items-center">
                    <Card.Title>{product.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row className="text-center">
            {products.slice(15, 18).map((product, index) => (
              <Col sm={4} md={4} lg={4} key={index} className="mb-4">
                <Card className="text-center" style={{ height: '120px' }}>
                  <Card.Body className="d-flex justify-content-center align-items-center">
                    <Card.Title>{product.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>
      </div>
    </Container>
  );
}
