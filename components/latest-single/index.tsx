import React, { FC } from "react";
import styles from "./styles.module.css";
import Layout from "@/layout";
import Link from "next/link";
import { Single } from "../single";

type Props = {
  title: string;
  type: "Single" | "Album";
};

export const LatestSingle: FC<Props> = ({ title, type }) => {
  return (
    <Layout>
      <div className={styles.container}>
        <h2>{title}</h2>
        <div className={styles.body}>
          <Single title="DON’T TURN YOUR BACK ON ME" text="Crotia Records" type={type} />
          <Single title="BLUE PARADISE" text="Downtown Artist Soho London" type={type} />
          <Single title="CITY LIGHTS" text="Downtown Artist Soho London" type={type} />
        </div>
        <Link href="/music">See More</Link>
      </div>
    </Layout>
  );
};
