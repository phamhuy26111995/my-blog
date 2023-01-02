import Head from 'next/head';
import { Fragment } from 'react';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';

const AllPostsPage = (props) => {

    return (
        <Fragment>
            <Head>
                <title>Tất cả các bài viết</title>
                <meta name="description" content="Tất cả các bài viết" />
            </Head>

            <AllPosts posts={props.posts} />
        </Fragment>
    );
}

export async function getStaticProps() {
    const allPosts = getAllPosts();
    
    return {
      props : {
        posts : allPosts
      }
    }
  }

export default AllPostsPage;