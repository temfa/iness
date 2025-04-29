import React from "react";
import styles from "../../page.module.css";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <Image src="/images/1.jpg" fill alt="Imess" />
        </div>
        <div className={styles.right}>
          <div className={styles.header}>
            <h2>Sign Up</h2>
            <p>Kindly enter your details to create an account</p>
          </div>
          <div className={styles.form}>
            <div className={styles.group}>
              <label htmlFor="">Full Name</label>
              <input type="text" placeholder="Enter your Full Name" />
            </div>
            <div className={styles.group}>
              <label htmlFor="">Email</label>
              <input type="email" placeholder="Enter your Email" />
            </div>
            <div className={styles.group}>
              <label htmlFor="">Password</label>
              <input type="password" placeholder="Enter your Password" />
            </div>
            <Link href="/content">
              <button>Sign Up</button>
            </Link>
            <p>
              Already have an account?{" "}
              <span>
                <Link href="/login">Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
