'use client';

import { Container, Navbar, Nav, Offcanvas, NavDropdown, Button } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt, FaClock, FaYoutube, FaEnvelope } from "react-icons/fa";
import { HiMenu } from 'react-icons/hi';
import { MdMenuOpen } from 'react-icons/md';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import Link from "next/link";
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { getProductsList } from "../api/comman";

export default function CustomNavbar2() {
  const [showLeftSidebar, setShowLeftSidebar] = useState(false);
  const [showRightSidebar, setShowRightSidebar] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const router = useRouter();
  const dropdownTimeoutRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(router.pathname);
    }
  }, [router.pathname]);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProductsList();
            setProducts(productsData.data.data);
           
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(router.pathname);
    }
  }, [router.pathname]);

  const handleProductsDropdownEnter = () => {
    setShowProductsDropdown(true);
    clearTimeout(dropdownTimeoutRef.current);
  };
  
  const handleProductsDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setShowProductsDropdown(false);
    }, 300); // Hide the dropdown after 300ms (0.3 seconds)
  };

  return (
    <header className="position-relative" style={{ zIndex: 1030 }}>
      <Navbar 
        bg="white" 
        className="border-bottom shadow-sm position-fixed w-100 top-0" 
        style={{ zIndex: 1030 }}
      >
        <Container className="d-flex justify-content-between align-items-center py-2">
          {/* Left Side - Sidebar Toggle */}
          <Button 
            variant="link" 
            onClick={() => setShowLeftSidebar(true)} 
            className="p-0 border-0 d-flex align-items-center"
            style={{ zIndex: 1031 }}
          >
            <MdMenuOpen color="var(--text-color)" size={25} />
          </Button>

          {/* Center - Logo */}
          <Navbar.Brand href="/" className="m-0 mx-auto">
            <Image 
              src="/logo.svg" 
              alt="Logo" 
              width={120} 
              height={60} 
              priority
              style={{ objectFit: 'contain' }}
            />
          </Navbar.Brand>

          {/* Right Side - Navigation Menu Icon */}
          <Button 
            variant="link" 
            onClick={() => setShowRightSidebar(true)} 
            className="p-0 border-0 d-flex align-items-center"
            style={{ zIndex: 1031 }}
          >
            <HiMenu color="var(--text-color)" size={25} />
          </Button>
        </Container>
      </Navbar>

      {/* Add spacing to prevent content from hiding under fixed navbar */}
      <div style={{ height: '76px' }}></div>

      {/* Left Sidebar - Contact Info */}
      <Offcanvas 
        show={showLeftSidebar} 
        onHide={() => setShowLeftSidebar(false)} 
        placement="start"
        style={{ zIndex: 1040 }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cuentista</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h4 className={styles.stitle}>Contact Info</h4>
          <div className={styles.infobox}>
            <div className={styles.left}>
              <FaEnvelope className={styles.sicon} />
            </div>
            <div className={styles.right}>
              <h2 className={styles.sstitle}>EMAIL</h2>
              <p className={styles.ssdes}>
                <a href="mailto:sales@cuentista.tech" style={{ color: 'inherit', textDecoration: 'none' }}>
                  sales@cuentista.tech
                </a>
              </p>
            </div>
          </div>

          <div className={styles.infobox}>
            <div className={styles.left}>
              <FaPhoneAlt className={styles.sicon} />
            </div>
            <div className={styles.right}>
              <h2 className={styles.sstitle}>PHONE</h2>
              <p className={styles.ssdes}>
                <a href="tel:+919713900913" style={{ color: 'inherit', textDecoration: 'none' }}>
                  +91 97139 00913
                </a>
              </p>
            </div>
          </div>

          <div className={styles.infobox}>
            <div className={styles.left}>
              <FaClock className={styles.sicon} />
            </div>
            <div className={styles.right}>
              <h2 className={styles.sstitle}>OFFICE HOURS</h2>
              <p className={styles.ssdes}>Mon - Fri : 10:00 - 7:00</p>
            </div>
          </div>

          <h4 className={styles.stitle} style={{ marginTop: '20px' }}>Connect With Us</h4>
          <div className="d-flex my-5">
            <Link href="#" passHref>
              <FaFacebook style={{ color: '#3b5998', marginRight: '25px', marginLeft: '20px', fontSize: '2rem' }} />
            </Link>
            <Link href="#" passHref>
              <FaTwitter style={{ color: '#1DA1F2', marginRight: '25px', fontSize: '2rem' }} />
            </Link>
            <Link href="#" passHref>
              <FaInstagram style={{ color: '#C13584', marginRight: '25px', fontSize: '2rem' }} />
            </Link>
            <Link href="#" passHref>
              <FaYoutube style={{ color: '#FF0000', marginRight: '10px', fontSize: '2rem' }} />
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Right Sidebar - Navigation Menu */}
      <Offcanvas 
        show={showRightSidebar} 
        onHide={() => setShowRightSidebar(false)} 
        placement="end"
        style={{ zIndex: 1040 }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className={`${styles.menu}`} style={{ flexDirection: 'column' }}>
          <Link href="/" passHref legacyBehavior>
            <Nav.Link 
            
              className={`${styles.menuLink} ${currentPath === '/' ? styles.active : ''}`}
            >
              Home
            </Nav.Link>
            </Link>

            <Link href="/about" passHref legacyBehavior>
            <Nav.Link 
          
              className={`${styles.menuLink} ${currentPath === '/about' ? styles.active : ''}`}
            >
              About
            </Nav.Link>
            </Link>

            <Link href="/services" passHref legacyBehavior>
            <Nav.Link 
              
              className={`${styles.menuLink} ${currentPath === '/services' ? styles.active : ''}`}
            >
              Services
            </Nav.Link>
            </Link>
            <Nav.Link
              href="#"
              className={`${styles.menuLink} ${styles.menuLink2}`}
              onMouseEnter={handleProductsDropdownEnter}
              onMouseLeave={handleProductsDropdownLeave}
            >
              Products
              {showProductsDropdown && (
                <div
                  className={`${styles.productsDropdown} dropdown-menu show`}
                  onMouseEnter={handleProductsDropdownEnter}
                  onMouseLeave={handleProductsDropdownLeave}
                >
                  {loading ? (
                    <div className="dropdown-item">Loading...</div>
                  ) : products.length > 0 ? (
                    products.map((product) => (
                      <div
                        key={product.id}
                        className="dropdown-item"
                        onClick={() => router.push(`/products/${product.productUrl}`)}
                      >
                        {product.product_name}
                      </div>
                    ))
                  ) : (
                    <div className="dropdown-item">No products available</div>
                  )}
                </div>
              )}
            </Nav.Link>


            <Link href="/contact" passHref legacyBehavior>
            <Nav.Link 
              
              className={`${styles.menuLink} ${currentPath === '/contact' ? styles.active : ''}`}
            >
              Contact
            </Nav.Link>
            </Link>
          </Nav>

        
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}