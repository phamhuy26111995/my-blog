import '../styles/globals.css';
import { PostsContextProvider } from '../store/posts-context';
import Layout from '../components/layout/layout';

export default function App({ Component, pageProps }) {
  return (
    <PostsContextProvider>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </PostsContextProvider>
  )
}
