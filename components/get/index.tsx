import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

export const Get = () => {
  return (
    <div className={styles.container}>
      <h2>GET EXCLUSIVE ACCESS</h2>
      <p>Become a part of INE$$ inner circle and enjoy exclusive benefits and VIP contents including:</p>
      <div className={styles.body}>
        <div className={styles.single}>
          <div></div>
          <p>Private photos and behind-the-scenes videos</p>
        </div>
        <div className={styles.single}>
          <div></div>
          <p>Personal messages and interactive chats</p>
        </div>
        <div className={styles.single}>
          <div></div>
          <p>Early updates and personalized experiences</p>
        </div>
      </div>
      <Link href="/vip">Join Now</Link>
    </div>
  );
};
