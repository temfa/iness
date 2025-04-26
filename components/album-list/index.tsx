"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { PlaySvg } from "@/svgs/play";
import { HeartSvg } from "@/svgs/heart";
import { ThreeDotsSvg } from "@/svgs/three-dots";
import { useDispatch } from "react-redux";
import { setSong } from "@/redux/slice/song";

type Props = {
  name: string;
  src: string;
};

export const AlbumList = ({ slug }: { slug: string }) => {
  const [songs, setSongs] = useState<Props[]>([]);
  useEffect(() => {
    const data = [
      {
        slug: "physical",
        body: [
          { src: "/songs/2.mp3", name: "One" },
          { src: "/songs/3.mp3", name: "Two" },
          { src: "/songs/4.mp3", name: "Three" },
          { src: "/songs/5.mp3", name: "Four" },
          { src: "/songs/6.mp3", name: "Five" },
        ],
      },
      {
        slug: "debut",
        body: [
          { src: "/songs/blue.aac", name: "Blue Paradise" },
          { src: "/songs/city-lights.aac", name: "City Lights" },
          { src: "/songs/planets.aac", name: "Planet Song" },
          { src: "/songs/sing.aac", name: "Sing Sing" },
          { src: "/songs/waiting.aac", name: "Waiting For Someone" },
          { src: "/songs/your.aac", name: "Your Lovin'" },
          { src: "/songs/moja.aac", name: "Moja Ljubav" },
        ],
      },
    ];

    const find = data.find((item) => item.slug === slug);
    if (find) setSongs(find?.body);
  }, [slug]);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      {songs?.map((item, index) => {
        return (
          <div className={styles.play} onClick={() => dispatch(setSong(item.src))} key={index}>
            <div className={styles.left}>
              <PlaySvg />
              <p>{item.name}</p>
            </div>
            <div className={styles.left}>
              {/* <p>5:12</p> */}
              <HeartSvg />
              <ThreeDotsSvg />
            </div>
          </div>
        );
      })}
    </div>
  );
};
