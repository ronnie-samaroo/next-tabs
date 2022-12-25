import Head from "next/head";
import styles from "./index.module.sass";
import getAllData from "../utils/fetchAllData";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import { TabDashboard, TabWelcome } from "../components/tabs";

export default function App(props) {
  const { theme } = useTheme();
  const [userId, setUserId] = useState(null);
  return (
    <>
      <Head>
        <title>Tabs</title>
        <meta
          name="theme-color"
          content={theme === "dark" ? "#111119" : "#fff"}
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="This is tabs built with Next.js" />
        <meta
          name="keyword"
          content="Tabs, Next.js, React.js, CSS, HTML"
        ></meta>
        <meta property="og:title" content="Tabs | Jose Cipriano Neto" />
        <meta
          property="og:description"
          content="This is tabs built with Next.js"
        />
        <meta property="og:image" content="/me.png" />
        <meta property="og:url" content="https://tabs.vercel.app" />
        <meta property="og:type" content="website" />
      </Head>

      <main id="app-main" className={styles.container}>
        <div className="row">
          <div className={`${styles.tab} mt-5`}>
            <TabDashboard data={props.tabs} setUserId={setUserId} />
            <TabWelcome data={props.users} userId={userId} />
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const data = getAllData();
  return {
    props: data,
  };
}
