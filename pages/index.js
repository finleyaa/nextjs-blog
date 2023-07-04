import Head from "next/head"
import Layout from "../components/layout"

export default function Posts({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Posts</title>
      </Head>
      <h1>Posts</h1>
    </Layout>
  );
}