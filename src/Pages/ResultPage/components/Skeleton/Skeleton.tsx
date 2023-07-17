import React from "react";
import styles from "./Skeleton.module.css";

export const Skeleton = () => (
  <>
    <div className={styles.skeletonPanel}>
      <div className={styles.skeletonItem}></div>
      <div className={styles.skeletonItem}></div>
      <div className={styles.skeletonItem}></div>
    </div>
    <div className={styles.skeletonPanel}>
      <div className={styles.skeletonItem}></div>
      <div className={styles.skeletonItem}></div>
      <div className={styles.skeletonItem}></div>
    </div>
  </>
);
