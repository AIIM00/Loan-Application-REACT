import { useParams } from "react-router-dom";
import { useContext } from "react";
import { postsContext } from "./contexts/postsContext";

export default function PostDetails() {
  const posts = useContext(postsContext);
  const { postId } = useParams();
  const post = posts.find((p) => {
    return p.id == postId;
  });
  if (post) {
    return (
      <>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </>
    );
  } else {
    return <h1>The post with id:{postId} is not exist!</h1>;
  }
}
