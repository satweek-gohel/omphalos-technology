import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
import { getProductsList, getServiceList } from "../api/comman";

const Footer = () => {
  const [services, setServices] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const servicesData = await getServiceList();
        setServices(servicesData.data.data?.slice(0,6));

        const productsData = await getProductsList();
        setProducts(productsData.data.data?.slice(0,6));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.overlay}>
        <Container>
          <Row className="py-1 gy-4">
            {/* Column 1: Company */}
            <Col md={6} lg={3} className="text-white text-left">
              <h5 className={styles.head}>Company</h5>
              <ul className="list-unstyled">
                <li className="my-3">
                  <Link href="/services" className={`${styles.link} my-2`}>
                    Services
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="/about" className={`${styles.link} my-2`}>
                    About Us
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="/contact" className={`${styles.link} my-2`}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </Col>

            {/* Column 2: Dynamic Products */}
            <Col md={6} lg={3} className="text-white text-left">
              <h5 className={styles.head}>Products</h5>
              <ul className="list-unstyled">
                {products.map((product) => (
                  <li key={product.id} className="my-3">
                    <Link
                      href={`/products/${product.productUrl}`}
                      className={`${styles.link} my-2`}
                    >
                      {product.product_name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>

            {/* Column 3: Dynamic Services */}
            <Col md={6} lg={3} className="text-white text-left">
              <h5 className={styles.head}>Services</h5>
              <ul className="list-unstyled">
                {services.map((service) => (
                  <li key={service.id} className="my-3">
                    <Link
                      href={`/service-details/${service.serviceUrl}`}
                      className={styles.link}
                    >
                      {service.service_name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>

            {/* Column 4: Contact Info */}
            <Col
              md={6}
              lg={3}
              className="text-white d-flex flex-column align-items-start"
            >
              <h5 className={styles.head}>Contact Info</h5>
              <span
                style={{ fontWeight: 500, color: "white", fontSize: "1rem" }}
              >
                Locations:
              </span>
              <p className={styles.subhead}>Australia | Indonesia | Mumbai |</p>
              <p className={styles.subhead}>Gujarat | Madhya Pradesh</p>
              <span
                style={{ fontWeight: 500, color: "white", fontSize: "1rem" }}
              >
                Email:{" "}
              </span>
              <p className={styles.subhead}>
                <a
                  href="mailto:sales@cuentista.tech"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    fontWeight: "inherit",
                  }}
                >
                  sales@cuentista.tech
                </a>
              </p>
              <span
                style={{ fontWeight: 500, color: "white", fontSize: "1rem" }}
              >
                Phone:{" "}
              </span>
              <p className={styles.subhead}>
                <a
                  href="tel:9713900913"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    fontWeight: "inherit",
                  }}
                >
                  +91 97139 00913
                </a>
              </p>
            </Col>
          </Row>

          <hr />

          <div className="copyright d-flex justify-content-center">
            <p className={styles.foot}>
              Copyright © 2024. Developed By @Shivinfotech
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
