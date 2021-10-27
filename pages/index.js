import { Fragment } from "react";
import Head from "next/head";
import FeaturedPosts from "../components/home_page/featured_posts";

import Hero from "../components/home_page/hero";
import { getFeaturedPosts } from "../lib/post_util";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Yukis Blog</title>
        <meta name="description" content="Blog about web developnent" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
