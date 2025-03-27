"use client";
import React from "react";
import styles from "./styles.module.css";
import Masonry from "react-masonry-css";
import Image from "next/image";
import Layout from "@/layout";

export const ContentPage = () => {
  const breakpointColumnsObj = {
    default: 2, // Number of columns on large screens
    1100: 2, // Number of columns on medium screens
    700: 2, // Number of columns on small screens
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>INESS VIP SPACE</h2>
      </div>
      <Layout>
        <Masonry breakpointCols={breakpointColumnsObj} className={styles.masonryGrid} columnClassName={styles.masonryGridColumn}>
          <div className={styles.masonryItem}>
            <Image src="/images/one.png" width={300} height={400} alt={`2`} />
          </div>
          <div className={styles.masonryItem}>
            <Image src="/images/two.png" width={300} height={400} alt={`2`} />
          </div>
          <div className={styles.masonryItem}>
            <Image src="/images/three.png" width={300} height={400} alt={`2`} />
          </div>
          <div className={styles.masonryItem}>
            <Image src="/images/four.png" width={300} height={400} alt={`2`} />
          </div>
          <div className={styles.masonryItem}>
            <Image src="/images/five.png" width={300} height={400} alt={`2`} />
          </div>
        </Masonry>
      </Layout>
    </div>
  );
};
