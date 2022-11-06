import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button } from "../components";

export default function Home({ categories }: any) {
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
      <h1>Home Page</h1>

      <main className={styles.main}>
        {categories.map((category: string) => (
          <Button key={category} label={category} />
        ))}
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/categories");
  const categories = await res.json();
  return {
    props: {
      categories,
    },
  };
};
