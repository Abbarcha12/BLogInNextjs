"use client";
import styles from "./page.module.css"
import Link from "next/link";
import React from "react";
import ToggleDarkMode from "../toggleDarkMode/toggleDarkMode";



const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {


  return (
    <div className={styles.container} >
      <Link href="/" className={styles.logo}>
        Hunza-0-kilometer
        </Link>
        <div className={styles.links}>
          <ToggleDarkMode/>
        {links.map((link) => (

          <Link key={link.id} href={link.url} >
            {link.title}
          </Link>
        ))}
        </div>
        <button className={styles.logout}>Logout</button>
        <div>
      </div>
    </div>
  );
};

export default Navbar;