import React from "react";
import Head from "next/head";

// Components
import Nav from "../components/Nav/Nav"
import View from "../components/View/View";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Y42 - Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head> 
      <Nav/>
      <View>
        <h1>Blog</h1>
      </View>
    </>
  );
};

export default Blog;
