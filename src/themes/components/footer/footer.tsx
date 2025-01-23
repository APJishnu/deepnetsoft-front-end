// Footer.tsx
import React from "react";
import styles from "./footer.module.scss";

const Footer: React.FC = () => {
  const findUsLocation = "First floor, Geo infopark, Infopark EXPY, Kakkanad";
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerLayout}>
          <div className={styles.iconFooterContainer}>
            <div className={styles.footerContainer}>
              <div className={styles.contactInfo}>
                <div className={styles.connectWithUs}>CONNECT WITH US</div>
                <a href="tel:+919567843340">
                  <img src="/footer/telephone.svg" alt="facebook"></img>
                  <span>+91 9567843340</span>
                </a>
                <a href="mailto:info@deepnetsoft.com">
                  <img src="/footer/email.svg" alt="facebook"></img>
                  <span>info@deepnetsoft.com</span>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.iconFooterContainer}>
            <div className={styles.footerContainer}>
              <div className={styles.logoIcon}>
                <span>
                  <img src="/navbar/Logo.svg" alt="Deep Net Soft" />
                </span>
              </div>
              <div className={styles.logoText}>
                <span className={styles.logoText1}>
                  DEEP <span className={styles.logoText2}>NET</span>{" "}
                  <span className={styles.logoText3}>SOFT</span>
                </span>
                <span className={styles.socialIcons}>
                  <img src="/footer/facebook.svg" alt="facebook"></img>
                  <img src="/footer/twitter.svg" alt="twitter"></img>
                  <img src="/footer/youtube.svg" alt="youtube"></img>
                  <img src="/footer/instagram.svg" alt="instagram"></img>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.iconFooterContainer}>
            <div className={styles.footerContainer}>
              <div className={styles.locationInfo}>
                <div className={styles.findUs}>CONNECT WITH US</div>
                <a href="mailto:info@deepnetsoft.com">
                  <img src="/footer/location.svg" alt="facebook"></img>
                  <span>
                    {findUsLocation.length > 50
                      ? `${findUsLocation.slice(0, 50)}...`
                      : findUsLocation}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.copyRightDiv}>
        <div className={styles.copyRightContent}>
        <a href="tel:+919567843340">
          <span>@ 2024 Deepnetsoft Solutions . All rights reserved. </span>
        </a>

        <div className={styles.termsAndPolicy}>
          <a href="tel:+919567843340">
            <span>Terms & Conditions </span>
          </a>
          <a href="tel:+919567843340">
            <span>Privacy Policy </span>
          </a>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
