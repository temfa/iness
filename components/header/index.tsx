import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Layout from "@/layout";
import Image from "next/image";

export const Header = () => {
  return (
    <header className={styles.container}>
      <Layout>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Image src="/images/logo.jpg" width={200} height={50} alt="Logo" />
          </div>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/music">Music</Link>
            <Link href="/webshop">Webshop</Link>
            <Link href="/vip">Vip</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </Layout>
    </header>
  );
};
