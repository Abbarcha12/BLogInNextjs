import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";
const Button = ({ url, Text }) => {
  return (
    <Link href={url}>
   <button className={styles.container}>{Text}</button>
    </Link>
  );
};

export default Button;
