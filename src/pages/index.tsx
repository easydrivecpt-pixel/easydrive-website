import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>EASY DRIVE - E-Hailing Driver Platform</title>
        <meta name="description" content="EASY DRIVE - E-Hailing Driver Platform for Western Cape" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Welcome to EASY DRIVE</h1>
          <p>E-Hailing Driver Platform for Western Cape</p>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h2>For Drivers</h2>
              <p>Join our platform and start earning today</p>
            </div>
            <div className={styles.card}>
              <h2>How It Works</h2>
              <p>Simple, transparent, and rewarding</p>
            </div>
            <div className={styles.card}>
              <h2>Safety First</h2>
              <p>Your safety is our priority</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
