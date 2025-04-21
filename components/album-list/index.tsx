"use client";
import React from "react";
import styles from "./styles.module.css";
import { PlaySvg } from "@/svgs/play";
import { HeartSvg } from "@/svgs/heart";
import { ThreeDotsSvg } from "@/svgs/three-dots";
import { useDispatch } from "react-redux";
import { setSong } from "@/redux/slice/song";

export const AlbumList = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.play} onClick={() => dispatch(setSong("/songs/2.mp3"))}>
        <div className={styles.left}>
          <PlaySvg />
          <p>One</p>
        </div>
        <div className={styles.left}>
          {/* <p>5:12</p> */}
          <HeartSvg />
          <ThreeDotsSvg />
        </div>
      </div>
      <div className={styles.play} onClick={() => dispatch(setSong("/songs/3.mp3"))}>
        <div className={styles.left}>
          <PlaySvg />
          <p>Two</p>
        </div>
        <div className={styles.left}>
          {/* <p>5:12</p> */}
          <HeartSvg />
          <ThreeDotsSvg />
        </div>
      </div>
      <div className={styles.play} onClick={() => dispatch(setSong("/songs/4.mp3"))}>
        <div className={styles.left}>
          <PlaySvg />
          <p>Three</p>
        </div>
        <div className={styles.left}>
          {/* <p>5:12</p> */}
          <HeartSvg />
          <ThreeDotsSvg />
        </div>
      </div>
      <div className={styles.play} onClick={() => dispatch(setSong("/songs/5.mp3"))}>
        <div className={styles.left}>
          <PlaySvg />
          <p>Four</p>
        </div>
        <div className={styles.left}>
          {/* <p>5:12</p> */}
          <HeartSvg />
          <ThreeDotsSvg />
        </div>
      </div>
      <div className={styles.play} onClick={() => dispatch(setSong("/songs/6.mp3"))}>
        <div className={styles.left}>
          <PlaySvg />
          <p>Five</p>
        </div>
        <div className={styles.left}>
          {/* <p>5:12</p> */}
          <HeartSvg />
          <ThreeDotsSvg />
        </div>
      </div>
    </div>
  );
};
