import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chuck Norris Jokes App</title>
        <meta
          name="description"
          content="A next js application that generates chucknorris jokes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>INitial Commit</h1>
      </main>
    </div>
  );
}
