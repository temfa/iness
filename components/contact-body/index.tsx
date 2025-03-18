import React from "react";
import styles from "./styles.module.css";
import Layout from "@/layout";

export const ContactBody = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.overlay} />
        <h2>Contact Us</h2>
        <p>Fill out the contact below to share your thoughts, feedbact or to say hello!</p>
      </div>
      <Layout>
        <div className={styles.wrapper}>
          <form className={styles.form}>
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <textarea placeholder="Message" />
            </div>
            <button>Submit</button>
          </form>
        </div>
      </Layout>
    </div>
  );
};
