import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../../components";
import styles from "../../styles/Home.module.css";
import { isEmpty } from "lodash";

export default function Joke({ joke }: any) {
  const [newJoke, setNewJoke] = useState<any>(null);
  const generateNewJoke = async () => {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const joke = await res.json();
    setNewJoke(joke);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Random Joke</title>
        <meta
          name="description"
          content="A next js application that generates chucknorris jokes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Random Joke Page</h1>

      <main className={styles.main}>
        <div>
          {isEmpty(newJoke) ? (
            <p className={styles.p}>{joke.value}</p>
          ) : (
            <p className={styles.p}>{newJoke.value}</p>
          )}
          <Button label="Load New Joke" handleClick={() => generateNewJoke()} />
          <Link href="/">
            <Button label="Back to Home Page" />
          </Link>
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const joke = await res.json();
  return {
    props: {
      joke,
    },
  };
};
