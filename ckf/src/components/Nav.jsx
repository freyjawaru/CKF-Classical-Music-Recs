import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/new">Fill in a new recording</Link>
      {/* <Route path="./components/Recording" component={Recording} />Third page</Link> */}
    </nav>
  );
}
export default Nav;