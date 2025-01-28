"use client";
import {
  Container,
  Navbar,
  Nav,
  Offcanvas,
  NavDropdown,
  Button,
} from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaClock,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { HiMenu } from "react-icons/hi";
import { MdMenuOpen } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getProductsList } from "../api/comman";

export default function CustomNavbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const dropdownTimeoutRef = useRef(null);

  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(router.pathname);
    }
  }, [router.pathname]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProductsList();
        setProducts(productsData.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSidebarClose = () => setShowSidebar(false);
  const handleSidebarShow = () => setShowSidebar(true);
  const handleProductsDropdownEnter = () => {
    setShowProductsDropdown(true);
    clearTimeout(dropdownTimeoutRef.current);
  };

  const handleProductsDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setShowProductsDropdown(false);
    }, 300);
  };
  return (
    <header
      style={{
        zIndex: "999 !important",
        position: "fixed",
        width: "100%",
        top: "0",
      }}
    >
      <Navbar
        bg="white"
        expand="lg"
        className="border-bottom"
        style={{ zIndex: "999 !important" }}
      >
        <Container style={{ zIndex: "999 !important" }}>
          <Navbar.Brand href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={80}
              height={80}
              priority
              style={{ objectFit: "fill" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-0 p-0"
          >
            <HiMenu style={{ fontSize: "1.5rem", color: "#0d6efd" }} />
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`mx-auto ${styles.menu}`} id="menu">
              <Link href="/" passHref legacyBehavior>
                <Nav.Link
                  href="/"
                  className={`${styles.menuLink} ${
                    currentPath === "/" ? styles.active : ""
                  }`}
                >
                  Home
                </Nav.Link>
              </Link>
              <Link href="/about" passHref legacyBehavior>
                <Nav.Link
                  className={`${styles.menuLink} ${
                    currentPath === "/about" ? styles.active : ""
                  }`}
                >
                  About
                </Nav.Link>
              </Link>
              <Link href="/services" passHref legacyBehavior>
                <Nav.Link
                  className={`${styles.menuLink} ${
                    currentPath === "/services" ? styles.active : ""
                  }`}
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
                          onClick={() =>
                            router.push(`/products/${product.productUrl}`)
                          }
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
                  href="/contact"
                  className={`${styles.menuLink} ${
                    currentPath === "/contact" ? styles.active : ""
                  }`}
                >
                  Contact
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>

          <Button
            variant="outline"
            onClick={handleSidebarShow}
            className={styles.sidebarButton}
          >
            <MdMenuOpen color="var(--text-color)" size={25} />
          </Button>
        </Container>
      </Navbar>

      <Offcanvas show={showSidebar} onHide={handleSidebarClose} placement="end">
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
                <a
                  href="mailto:sales@cuentista.tech"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
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
                <a
                  href="tel: +9197139 00913"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
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

          <h4 className={styles.stitle} style={{ marginTop: "20px" }}>
            Additional Links
          </h4>
          <ul
            className={styles.menu2}
            style={{ padding: "0px", marginTop: "20px" }}
          >
            <li>
              <Link
                href="/about"
                className={styles.menuLink}
                style={{ marginLeft: "0px !important" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className={styles.menuLink}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.menuLink}>
                Contact
              </Link>
            </li>
          </ul>

          <h4 className={styles.stitle} style={{ marginTop: "20px" }}>
            Connect With Us
          </h4>
          <div className="d-flex my-5 ">
            <Link href="#" passHref>
              <FaFacebook
                style={{
                  color: "#3b5998",
                  marginRight: "25px",
                  marginLeft: "20px",
                  fontSize: "2rem",
                }}
              />
            </Link>
            <Link href="#" passHref>
              <FaTwitter
                style={{
                  color: "#1DA1F2",
                  marginRight: "25px",
                  fontSize: "2rem",
                }}
              />
            </Link>
            <Link href="#" passHref>
              <FaInstagram
                style={{
                  color: "#C13584",
                  marginRight: "25px",
                  fontSize: "2rem",
                }}
              />
            </Link>
            <Link href="#" passHref>
              <FaYoutube
                style={{
                  color: "#FF0000",
                  marginRight: "10px",
                  fontSize: "2rem",
                }}
              />
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}
