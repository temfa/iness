"use client";
import React from "react";
import styles from "./styles.module.css";
import Masonry from "react-masonry-css";
import Image from "next/image";
import Layout from "@/layout";

export const ContentPage = () => {
  const data = [
    {
      src: "/images/10.jpg",
      type: "image",
    },
    {
      src: "/images/video1.mp4",
      type: "video",
    },
    {
      src: "/images/video2.mp4",
      type: "video",
    },
    {
      src: "/images/11.jpg",
      type: "image",
    },
    {
      src: "/images/video3.mp4",
      type: "video",
    },
    {
      src: "/images/video4.mp4",
      type: "video",
    },
    {
      src: "/images/12.jpg",
      type: "image",
    },
  ];
  const breakpointColumnsObj = {
    default: 4, // Number of columns on large screens
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
          {data?.map((item, index) => {
            return (
              <div key={index} className={styles.masonryItem}>
                {item.type === "image" ? (
                  <Image src={item.src} width={300} height={400} alt={`2`} />
                ) : (
                  <div style={{ height: "500px" }}>
                    <video key={index} controls className={styles.video} style={{ height: "100%", width: "100%" }}>
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>
            );
          })}
        </Masonry>
      </Layout>
    </div>
  );
};
