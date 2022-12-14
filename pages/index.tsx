import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Homepage" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          welcome to phusitsom&apos;s personal website
        </h1>

        <p>this website is in currently under development, please stand by.</p>
      </main>

      <footer className={styles.footer}>
        <p>help</p>
      </footer>
    </div>
  );
}
