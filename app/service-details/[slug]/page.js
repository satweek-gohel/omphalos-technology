'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import styles from '../../styles/products/product.module.css';
import { FaCheck } from 'react-icons/fa';
import { GoArrowUpRight } from 'react-icons/go';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { service_get } from '@/app/api/Services';
import Skeleton from 'react-loading-skeleton';
import { getServiceList } from '@/app/api/comman';

function extractIdFromSlug(slug) {
  const match = slug.match(/-(\d+)$/);
  return match ? match[1] : slug;
}

export default function ServicePage({ params }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const BASE_IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;
  const FALLBACK_IMAGE = '/placeholder.webp';

  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const servicesData = await getServiceList();
        setServices(servicesData.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const serviceId = extractIdFromSlug(params.slug);
        const result = await service_get(serviceId);
        
        const transformedData = {
          title: result.data.data.service_name,
          description: result.data.data.service_description,
          images: result.data.data.serviceImages ? [
            result.data.data.serviceImages[0]?.overview_image ? `${BASE_IMAGE_URL}${result.data.data.serviceImages[0].overview_image}` : null,
            result.data.data.serviceImages[0]?.overview_image ? `${BASE_IMAGE_URL}${result.data.data.serviceImages[0].overview_image}` : null,
            result.data.data.serviceImages[0]?.right_sidebar_image_1 ? `${BASE_IMAGE_URL}${result.data.data.serviceImages[0].right_sidebar_image_1}` : null,
            result.data.data.serviceImages[0]?.right_sidebar_image_2 ? `${BASE_IMAGE_URL}${result.data.data.serviceImages[0].right_sidebar_image_2}` : null
          ] : [null, null, null, null],
          services: result.data.data.subService ? result.data.data.subService.map(sub => ({
            title: sub.sub_service_title,
            description: sub.sub_service_description
          })) : [],
          approach: {
            title: 'Our Approach',
            points: result.data.data.Approach?.map(a => a.services_details_point) || []
          },
          consulting_expertise: {
            title: 'Consulting Services',
            description: result.data.data.Consulting?.map(c => c.services_details_point) || [],
            points: result.data.data.Consulting?.map(c => c.services_details_description) || []
          },
          values: {
            title: 'Advanced Technology Capabilities',
            points: result.data.data.ATC?.map(a => a.services_details_point) || []
          },
          benefits: {
            title: 'Benefits',
            points: result.data.data.Benefit?.map(b => b.services_details_point) || []
          }
        };
        
        setData(transformedData);
      } catch (error) {
        console.error('Error fetching service:', error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
    AOS.init({ duration: 400, easing: 'ease-in-out' });
  }, [params.slug]);

  const ServiceLoader = () => (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <Spinner animation="border" role="status" className="mb-3" style={{width: '4rem', height: '4rem', color: '#FF6F61'}}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <p className="text-center">Loading Service Details...</p>
    </div>
  );

  // If loading, show custom loader instead of skeleton
  if (loading) {
    return <ServiceLoader />;
  }
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">Service not found</h1>
      </div>
    );
  }

  return (
    <>
      <div className={styles.banner} data-aos="fade-up">
        <h1>{data.title}</h1>
      </div>

      <Container>
        <Row>
          <Col md={8}>
            <div data-aos="fade-up">
              <div style={{ backgroundColor: '#f0f0f0', position: 'relative', width: '100%', height: '400px' }}>
                <Image
                  src={data.images[0] || FALLBACK_IMAGE}
                  alt={data.title}
                  fill
                
                  className={styles.image}
                />
              </div>
            </div>

            {data.description && (
              <>
                <h2 className={styles.heading} data-aos="fade-right">Overview:</h2>
                <p className={styles.description} data-aos="fade-left">
                  {data.description}
                </p>
              </>
            )}

            {data.services && data.services.some(service => service.title.trim() || service.description.trim()) && (
              <>
                <h2 className={styles.heading} data-aos="fade-right">Services:</h2>
                {data.services.map((service, index) => (
                  (service.title.trim() || service.description.trim()) && (
                    <div key={index} className={styles.featureItem} data-aos="fade-up">
                      <h3 className={styles.type}>{index + 1}. {service.title}:</h3>
                      <p>{service.description}</p>
                    </div>
                  )
                ))}
              </>
            )}


            {data.approach.points.length > 0 && (
              <>
                <h2 className={styles.heading} data-aos="fade-right">{data.approach.title}</h2>
                <ul className={styles.features}>
                  {data.approach.points.map((point, index) => (
                    point.trim() && (
                      <li key={index} className={styles.featureItem} data-aos="fade-up">
                        <FaCheck className={styles.checkIcon} /> {point}
                      </li>
                    )
                  ))}
                </ul>
              </>
            )}

            <div data-aos="fade-up">
              <div style={{ backgroundColor: '#f0f0f0', position: 'relative', width: '100%', height: '400px' }}>
                <Image
                  src={data.images[1] || FALLBACK_IMAGE}
                  alt={data.title}
                  fill
                 
                  className={styles.image}
                />
              </div>
            </div>


        {data.consulting_expertise.points.length > 0 && (
        <>
          <h2 className={styles.heading} data-aos="fade-right">{data.consulting_expertise.title}</h2>
          {data.consulting_expertise.points.map((point, index) => (
            point.trim() && (
              <div key={index} className={styles.featureItem} data-aos="fade-up">
                <p className={styles.type}>
                  <span className={styles.number}>{index + 1}.</span> {data.consulting_expertise.description[index]}
                </p>
                <p className={styles.featureItem}>  {point}</p>
              </div>
            )
          ))}
        </>
      )}



            {data.values.points.length > 0 && (
              <>
                <h2 className={styles.heading} data-aos="fade-right">{data.values.title}</h2>
                <ul className={styles.features}>
                  {data.values.points.map((point, index) => (
                    point.trim() && (
                      <li key={index} className={styles.featureItem} data-aos="fade-up">
                        <FaCheck className={styles.checkIcon} /> {point}
                      </li>
                    )
                  ))}
                </ul>
              </>
            )}

            {data.benefits.points.length > 0 && (
              <>
                <h2 className={styles.heading} data-aos="fade-right">{data.benefits.title}</h2>
                <ul className={styles.features}>
                  {data.benefits.points.map((point, index) => (
                    point.trim() && (
                      <li key={index} className={styles.featureItem} data-aos="fade-up">
                        <FaCheck className={styles.checkIcon} /> {point}
                      </li>
                    )
                  ))}
                </ul>
              </>
            )}
          </Col>

          <Col md={4}>
            <div className={styles.menu} data-aos="fade-up">
              <ul>
                {services.map((product, index) => (
                  <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} data-aos="fade-up">
                    <Link href={`/service-details/${product.serviceUrl}`}>
                      {product.service_name}
                    </Link>
                    <GoArrowUpRight className={styles.goicon} />
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.menu} data-aos="fade-up">
              <div style={{ backgroundColor: '#f0f0f0', position: 'relative', width: '100%', height: '300px' }}>
                <Image
                  src={data.images[2] || FALLBACK_IMAGE}
                  alt={data.title}
                  fill
                 
                  className={styles.image}
                />
              </div>
            </div>

            <div className={styles.menu} data-aos="fade-up">
              <div style={{ backgroundColor: '#f0f0f0', position: 'relative', width: '100%', height: '300px' }}>
                <Image
                  src={data.images[3] || FALLBACK_IMAGE}
                  alt={data.title}
                  fill
                  
                  className={styles.image}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
} 
