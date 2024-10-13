import "@/styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";

import MainLayout from "@/components/layout/MainLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Blog Management System</title>
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
