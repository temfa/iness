"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Layout from "@/layout";
import Image from "next/image";
import Bars from "@/svgs/bars";
import Close from "@/svgs/close";

export const Header = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <header className={styles.container}>
      <Layout>
        <div className={mobile ? `${styles.wrapper} ${styles.mobile}` : styles.wrapper}>
          <div className={styles.logo}>
            <Image src="/images/logo.jpg" width={200} height={50} alt="Logo" />
            {mobile ? <Close action={() => setMobile(false)} /> : <Bars action={() => setMobile(true)} />}
          </div>
          <nav>
            <Link onClick={() => setMobile(false)} href="/">
              Home
            </Link>
            <Link onClick={() => setMobile(false)} href="/music">
              Music
            </Link>
            <Link onClick={() => setMobile(false)} href="/webshop">
              Webshop
            </Link>
            <Link onClick={() => setMobile(false)} href="/vip">
              Vip
            </Link>
            <Link onClick={() => setMobile(false)} href="/about">
              About
            </Link>
            <Link onClick={() => setMobile(false)} href="/contact">
              Contact
            </Link>
          </nav>
        </div>
      </Layout>
    </header>
  );
};
