import React, { FC } from "react";
import styles from "./styles.module.css";
import Layout from "@/layout";
import Link from "next/link";
import { Single } from "../single";

type Props = {
  title: string;
  type: "Single" | "Album";
  list: {
    songTitle: string;
    src: string;
    text: string;
  }[];
};

export const LatestSingle: FC<Props> = ({ title, type, list }) => {
  return (
    <Layout>
      <div className={styles.container}>
        <h2>{title}</h2>
        <div className={styles.body}>
          {list?.map((item, index) => {
            return <Single key={index} title={item.songTitle} text={item.text} type={type} src={item.src} />;
          })}
        </div>
        <Link href="/music">See More</Link>
      </div>
    </Layout>
  );
};
