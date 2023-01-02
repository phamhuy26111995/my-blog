import { Fragment , useContext , useEffect } from 'react';
import PostsContext from '../store/posts-context';
import Head from 'next/head';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../lib/posts-util';
import Hero from '../components/home-page/hero';

function HomePage(props) {


  return (
    <Fragment>
      <Head>
        <title>Phạm Huy Blog</title>
        <meta
          name='description'
          content='Một project nhỏ viết bằng nextjs'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.featuredPosts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props : {
      featuredPosts : featuredPosts
    }
  }
}

export default HomePage;