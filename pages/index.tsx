import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Homepage" />
      </Head>
      <div className={styles.centercontainer}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            welcome to phusitsom&apos;s personal website
          </h1>

          <p>this website is currently under development, please stand by.</p>
        </main>
      </div>
    </>
  );
}
