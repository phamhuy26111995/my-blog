import { createContext, useState } from "react"; 


const PostsContext = createContext({
    posts : [],
    setPosts : (value) => {} 
});


export const PostsContextProvider = (props) => {
    const [postList , setPostList] = useState([]);

    const setPostsValue = (value) => {
        setPostList(value);
    }

    const context = {
        posts : postList,
        setPosts : (val) => setPostsValue(val),
    }

    return (
        <PostsContext.Provider value={context} >
            {props.children}
        </PostsContext.Provider>
    )
}


export default PostsContext;