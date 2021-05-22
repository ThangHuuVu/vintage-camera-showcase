import Layout from "@/components/layouts/Layout";
import Link from "next/link";
import React from "react";
import AboutPage from "./about";
import HomePage from "./camera";

export default function IndexPage(): JSX.Element {
  return (
    <Layout>
      <Link href="/about">
        <AboutPage />
      </Link>
      <Link href="/">
        <HomePage />
      </Link>
    </Layout>
  );
}
