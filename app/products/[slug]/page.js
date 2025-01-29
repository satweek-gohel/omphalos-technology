'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import styles from '../../styles/products/product.module.css';
import { FaCheck } from 'react-icons/fa';
import { GoArrowUpRight } from "react-icons/go";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { product_get } from '@/app/api/Product';
import { BENIFITS, CONTACT_US, EXPERTISE, METHODOLOGY, OVERVIEW, SERVICES } from '@/app/Components/Constants/Common';
import ResponsiveSkeleton from '@/app/Components/Base/Skelaton';
import { getProductsList, getServiceList } from '@/app/api/comman';

function extractIdFromSlug(slug) {
  const match = slug.match(/-(\d+)$/);
  return match ? match[1] : slug;
}

export default function ProductPage({ params }) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const BASE_IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;
  const FALLBACK_IMAGE = '/placeholder.webp'; 

  const [services, setServices] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const servicesData = await getServiceList();
        setServices(servicesData.data.data);

        const productsData = await getProductsList();
        setProducts(productsData.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productId = extractIdFromSlug(params.slug);
        const result = await product_get(productId); 
        console.log(result.data);
        setData(result.data);
      } catch (error) {
        console.error('Error fetching product:', error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
    AOS.init({ duration: 400, easing: 'ease-in-out' });
  }, [params.slug]);

  // Custom Loader Component using Bootstrap
  const ProductLoader = () => (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <Spinner animation="border" role="status" className="mb-3" style={{width: '4rem', height: '4rem', color: 'var(--primary-color)'}}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <p className="text-center">Loading Product Details...</p>
    </div>
  );

  // If loading, show custom loader instead of footer
  if (loading) {
    return <ProductLoader />;
  }


  if (!data || !data.data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">Product not found</h1>
      </div>
    );
  }

  const product = data.data;

  return (
    <>
      <div className={styles.banner} data-aos="fade-up">
        <h1>{product.product_name}</h1>
      </div>

      <Container>
        <Row>
          <Col md={8}>
            <h2 className={styles.heading} data-aos="fade-right">{OVERVIEW}:</h2>
            <p className={styles.description} data-aos="fade-left">
              {product.description || "Description not available"}
            </p>

            <div data-aos='fade-up'>
              <div style={{ backgroundColor: '#f0f0f0', position: 'relative', width: '100%', height: '400px' }}>
                <Image
                  src={product.productImages?.[0]?.overview_image ? `${BASE_IMAGE_URL}${product.productImages[0].overview_image}` : FALLBACK_IMAGE}
                  alt={product.product_name}
                  fill
                  className={styles.image}
                  data-aos="fade-up"
                />
              </div>
            </div>

            <h2 className={styles.heading} data-aos="fade-right">{BENIFITS}:</h2>
            <ul className={styles.features}>
              {product.productBenefit && product.productBenefit.map((benefit, index) => (
                <li key={index} className={styles.featureItem} data-aos="fade-up">
                  <FaCheck className={styles.checkIcon} /> {benefit.product_benefit}
                </li>
              ))}
              {(!product.productBenefit || product.productBenefit.length === 0) && (
                <li className={styles.featureItem}>No benefits listed</li>
              )}
            </ul>

            <h2 className={styles.heading} data-aos="fade-right">{SERVICES}:</h2>
            {product.productService && product.productService.map((service, index) => (
              <div key={index} className={styles.featureItem} data-aos="fade-up">
                <h3 className={styles.type}>{index + 1}. {service.product_service_type}</h3>
                <ul className={styles.features} data-aos="fade-up">
                  {service.productServiceDetails && service.productServiceDetails.map((detail, detailIndex) => (
                    <li key={detailIndex}>
                      <FaCheck className={styles.checkIcon} />
                      {detail.product_service_detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {(!product.productService || product.productService.length === 0) && (
              <p className={styles.featureItem}>No services listed</p>
            )}

            <div data-aos='fade-up'>
              <div style={{ backgroundColor: '#f0f0f0', position: 'relative', width: '100%', height: '400px' }}>
                <Image
                  src={product.productImages?.[0]?.service_image ? `${BASE_IMAGE_URL}${product.productImages[0].service_image}` : FALLBACK_IMAGE}
                  alt={product.product_name}
                  fill
                 
                  className={styles.image}
                  data-aos="fade-up"
                />
              </div>
            </div>

            <h2 className={styles.heading} data-aos="fade-right">{EXPERTISE}:</h2>
            {product.productExpertise && product.productExpertise.map((exp, index) => (
              <div key={index} className={styles.featureItem} data-aos="fade-up">
                <h3 className={styles.type}>{index + 1}. {exp.expertise_area}:</h3>
                <p>{exp.expertise_description || 'No description available'}</p>
              </div>
            ))}
            {(!product.productExpertise || product.productExpertise.length === 0) && (
              <p className={styles.featureItem}>No expertise listed</p>
            )}

            <h2 className={styles.heading} data-aos="fade-right">{METHODOLOGY}:</h2>
            {product.productMethodology && product.productMethodology.length > 0 ? (
              <ol className={styles.featureItem}>
                {product.productMethodology.map((step, index) => (
                  <li key={index} data-aos="fade-up">
                    <FaCheck className={styles.checkIcon} />
                    {step.methodology_description}
                  </li>
                ))}
              </ol>
            ) : (
              <p className={styles.featureItem}>No methodology listed</p>
            )}

            <h2 className={styles.heading} data-aos="fade-up">{CONTACT_US}:</h2>
            <p data-aos="fade-up" className={styles.description}>
              {product.contact_us || "Contact information not available"}
            </p>
          </Col>

          <Col md={4}>

            <div className={styles.menu} data-aos="fade-up">
              <ul>
                {products.map((product, index) => (
                  <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} data-aos="fade-up">
                    <Link href={`/products/${product.productUrl}`}>
                      {product.product_name}
                    </Link>
                    <GoArrowUpRight className={styles.goicon} />
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.menu} data-aos="fade-up">
              <div style={{ backgroundColor: '#f0f0f0', position: 'relative', width: '100%', height: '300px' }}>
                <Image
                  src={product.productImages?.[0]?.right_sidebar_image_1 ? `${BASE_IMAGE_URL}${product.productImages[0].right_sidebar_image_1}` : FALLBACK_IMAGE}
                  alt={`${product.product_name} - Sidebar Image 1`}
                  fill
                 
                  className={styles.image}
                  data-aos="fade-down"
                />
              </div>
            </div>

            <div className={styles.menu} data-aos="fade-up">
              <div style={{ backgroundColor: '#f0f0f0', position: 'relative', width: '100%', height: '300px' }}>
                <Image
                  src={product.productImages?.[0]?.right_sidebar_image_2 ? `${BASE_IMAGE_URL}${product.productImages[0].right_sidebar_image_2}` : FALLBACK_IMAGE}
                  alt={`${product.product_name} - Sidebar Image 2`}
                  fill
                
                  className={styles.image}
                  data-aos="fade-down"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}