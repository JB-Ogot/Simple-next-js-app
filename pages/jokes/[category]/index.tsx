import Head from "next/head";
import Link from "next/link";
import Error from "next/error";
import { Button } from "../../../components";
import styles from "../../../styles/Home.module.css";

export default function Category({ joke, statusCode }: any) {
  const categoryName = `${joke.categories[0]} Joke`;
  if (statusCode === 404) {
    return <Error statusCode={statusCode} />;
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Category Joke</title>
        <meta
          name="description"
          content="A next js application that generates chucknorris jokes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.h1}>{categoryName}</h1>
      <main className={styles.main}>
        <p className={styles.p}>{joke.value}</p>
        <Link href="/">
          <Button label="Back to Home Page" />
        </Link>
      </main>
    </div>
  );
}

export const getServerSideProps = async (context: any) => {
  const response = await fetch(
    `https://api.chucknorris.io/jokes/random?category=${context.params.category}`
  );
  const joke = await response.json();
  return {
    props: {
      joke,
      statusCode: response.status,
    },
  };
};
