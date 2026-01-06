import React from "react";
import styles from "./Officers.module.css";

export default function Officers() {
  return (
    <section id="officers" className={styles.page}>
      <h2 className={styles.pageTitle}>Diocesan Officers & Administration</h2>

      {/* ================= BISHOP ================= */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>South Kerala Diocese</h3>

        <div className={styles.cardCenter}>
          <img
            src="/diocese-head.JPG"
            alt="Rt. Rev. Dr. Timothy Ravinder"
            className={styles.photoLarge}
          />
          <h4 className={styles.name}>Rt. Rev. Dr. Timothy Ravinder</h4>
          <p className={styles.role}>Bishop, CSI South Kerala Diocese</p>
        </div>
      </div>

      {/* ================= OFFICERS ================= */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Diocesan Officers</h3>

        <div className={styles.grid}>
          <div className={styles.card}>
            <img src="/officer-1.jpg" alt="" className={styles.photoLarge} />
            <h4 className={styles.name}>Rev. Dr. Prinstone Benn</h4>
            <p className={styles.role}>Vice Chairman</p>
          </div>

          <div className={styles.card}>
            <img src="/officer-2.jpg" alt="" className={styles.photoLarge} />
            <h4 className={styles.name}>Dr. T. T. Praveen</h4>
            <p className={styles.role}>Secretary</p>
          </div>

          <div className={styles.card}>
            <img src="/officer-3.jpg" alt="" className={styles.photoLarge} />
            <h4 className={styles.name}>Rev. Dr. A. P. Christal Jayaraj</h4>
            <p className={styles.role}>Treasurer</p>
          </div>
        </div>
      </div>

      {/* ================= DIRECTOR ================= */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Director</h3>

        <div className={styles.cardCenter}>
          <img
            src="/officer-4.jpg"
            alt="Rev. Dr. Adv. Stephens Justin Raj"
            className={styles.photoLarge}
          />
          <h4 className={styles.name}>Rev. Dr. Adv. Stephens Justin Raj</h4>
          <p className={styles.role}>
            Director, Centre for Rehabilitation of the Disabled
          </p>
        </div>
      </div>
    </section>
  );
}
