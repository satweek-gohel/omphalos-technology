'use client';

import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import CustomNavbar from './Components/Navbar';

import 'typeface-poppins';
import Footer from './Components/Footer';
import CustomNavbar2 from './Components/Navbar_Mobile';

// Separate metadata into its own file since we're making RootLayout a client component

// Create a client-side wrapper component for handling responsive behavior
const ResponsiveNavbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check window width and set state
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 992); // 992px is Bootstrap's lg breakpoint
    };

    // Check initial screen size
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isMobile ? <CustomNavbar2 /> : <CustomNavbar />;
};

// Create a server component wrapper for metadata
const RootLayoutServer = ({ children }) => (
  <html lang="en">
    <body>
      <div style={{ zIndex: 999, position: 'relative' }}>
        <ResponsiveNavbar />
      </div>
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayoutServer;