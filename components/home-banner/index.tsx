"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { setSong } from "@/redux/slice/song";

export const HomeBanner = () => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);
  const data = [
    {
      songTitle: "Same Mistake",
      text: "INE$$",
      src: "/images/same-mistake-banner.jpg",
      song: "/songs/same-mistake.mp3",
    },
    {
      songTitle: "I Adore you",
      text: "INE$$",
      src: "/images/adore-you.png",
      song: "/songs/adore-you.mp3",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter === data.length - 1) setCounter(0);
      else setCounter((prev) => prev + 1);
    }, 7000);

    return () => clearInterval(interval);
  }, [counter, data.length]);
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${data[counter].src})`,
      }}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p>LATEST RELEASE</p>
        <h2>{data[counter].songTitle}</h2>
        <h3 onClick={() => dispatch(setSong(data[counter].song))}>Play Now</h3>
      </div>
      <div className={styles.navigation}>
        {data?.map((item, index) => {
          return <div key={index} className={index === counter ? styles.active : ""} />;
        })}
      </div>
    </div>
  );
};
