import React from "react";
import styles from "./styles.module.css";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className={styles.container}>{children}</div>;
};

export default Layout;
