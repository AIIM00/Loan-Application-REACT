import { postsData } from "./PostsData";

export default function Post() {
  let postsList = postsData.map((post) => {
    return (
      <div key={post.id}>
        <h1>{post.title}</h1>
      </div>
    );
  });
  return <>{postsList}</>;
}
