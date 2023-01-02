import classes from './featured-posts.module.css';
import PostsGrid from '../posts/posts-grid';
import { useContext } from 'react';
import PostsContext from '../../store/posts-context';

const FeaturedPosts = (props) => {
    const { posts } = props;

    return (
        <section className={classes.latest}>
            <h2>Bài biết nổi bật</h2>
            <PostsGrid posts={posts} />
        </section>
    );
}

export default FeaturedPosts;