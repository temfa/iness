import React from "react";
import styles from "./styles.module.css";
import Layout from "@/layout";

export const Exclusive = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h2>EXCLUSIVE CONTENTS</h2>
        <div className={styles.wrapper}>
          <div className={styles.single}>
            <h3>Private Photos</h3>
            <p>
              Get access to never-before-seen photos from INE$$&apos;s personal archives, including behind-the-scenes moments, studio sessions, and intimate glimpses into their
              life.
            </p>
          </div>
          <div className={styles.single}>
            <h3>Behind-the-Scenes Videos</h3>
            <p>Watch exclusive videos showcasing INE$$&apos;s creative process, rehearsals, and performances.</p>
          </div>
          <div className={styles.single}>
            <h3>Personal Messages</h3>
            <p>Receive personalized messages from INE$$, sharing their thoughts, inspirations, and gratitude.</p>
          </div>
          <div className={styles.single}>
            <h3>Early Access</h3>
            <p>Get early access to new music, videos, and upcoming projects before they&apos;re released to the publi</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
