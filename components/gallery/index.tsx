"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Masonry from "react-masonry-css";
import Image from "next/image";
import Lightbox from "react-image-lightbox";

export const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const breakpointColumnsObj = {
    default: 3, // Number of columns on large screens
    1100: 3, // Number of columns on medium screens
    700: 2, // Number of columns on small screens
  };
  const galleryData = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg", "/images/5.jpg", "/images/6.jpg", "/images/7.jpg", "/images/8.jpg", "/images/9.jpg"];
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };
  return (
    <div className={styles.container}>
      {/* <LightGallery mode="lg-fade" plugins={[lgThumbnail, lgZoom]} speed={500} elementClassNames={styles.container}> */}
      <Masonry breakpointCols={breakpointColumnsObj} className={styles.masonryGrid} columnClassName={styles.masonryGridColumn}>
        {galleryData?.map((item, index) => {
          return (
            <div className={styles.masonryItem} key={index} data-src={item}>
              <Image src={item} width={300} height={400} alt={``} onClick={() => openLightbox(index)} />
            </div>
          );
        })}
      </Masonry>
      {/* </LightGallery> */}
      {isOpen && (
        <Lightbox
          mainSrc={galleryData[currentImageIndex]}
          nextSrc={galleryData[(currentImageIndex + 1) % galleryData.length]}
          prevSrc={galleryData[(currentImageIndex + galleryData.length - 1) % galleryData.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setCurrentImageIndex((currentImageIndex + galleryData.length - 1) % galleryData.length)}
          onMoveNextRequest={() => setCurrentImageIndex((currentImageIndex + 1) % galleryData.length)}
        />
      )}
    </div>
  );
};
