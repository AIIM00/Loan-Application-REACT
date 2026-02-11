import { Link } from "react-router-dom";
import { postsContext } from "./contexts/postsContext";
import { useContext } from "react";

export default function Post() {
  let posts = useContext(postsContext);
  let postsList = posts.map((post) => {
    const postLink = `/postDetails/${post.id}`;
    return (
      <Link key={post.id} to={postLink}>
        <div
          style={{ background: "orange", padding: "20px", marginTop: "1rem" }}
        >
          <h1>{post.title}</h1>
        </div>
      </Link>
    );
  });
  return <>{postsList}</>;
}
