import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          welcome to phusitsom's portfolio
        </h1>

        <p>this website is in development, please stand by.</p>
      </main>

      <footer className={styles.footer}>
        <p>dunno what to add to this footer</p>
      </footer>
    </div>
  )
}
