import axios from "axios";
import { useEffect, useState } from "react";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://example.com/api/posts").then((res) => setPosts(res.data));
  }, []);
  return (
    <ol>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ol>
  );
}

export default PostList;
