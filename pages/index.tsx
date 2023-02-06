import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const Editor = dynamic(() => import("../components/Editor"), { ssr: false });

export default function Home() {
  return (
      <main className={styles.main}>
        <Editor />
      </main>
  );
}
