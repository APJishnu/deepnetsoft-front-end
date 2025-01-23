import React from 'react';
import styles from './navbar.module.scss';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src="/navbar/Logo.svg" alt="Deep Net Soft Logo" className={styles.logo} />
        <div className={styles.logoText}>
        <span className={styles.logoText1}>
          DEEP <span>NET</span>
        </span>
        <span className={styles.logoText2}>SOFT</span>
        </div>
      </div>
      <ul className={styles.navLinks}>
        <li><a href="/">HOME</a></li>
        <li><a href="/menu">MENU</a></li>
        <li><a href="/reservation">MAKE A RESERVATION</a></li>
        <li><a href="/contact">CONTACT US</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
