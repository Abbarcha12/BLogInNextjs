import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Hunza0Kilometer. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Hunza Facebook Account" />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="hunza" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Hunza" />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="hunza" />
      </div>
    </div>
  );
};

export default Footer;