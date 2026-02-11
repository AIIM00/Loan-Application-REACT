import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <>
      <h1>404</h1>
      <h3>Oops, This Page is Not Found!</h3>
      <h4>The link might be corrupted</h4>
      <p>or the page may have been removed</p>
      <Link to="/">
        <button>GO BACK HOME</button>
      </Link>
    </>
  );
}
