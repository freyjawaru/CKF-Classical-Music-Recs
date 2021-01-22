import { Link } from "react-router-dom";
function Nav(props) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/new">Do The Thing</Link>
    </nav>
  );
}
export default Nav;