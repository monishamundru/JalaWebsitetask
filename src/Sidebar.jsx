import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <h3>Menu</h3>

      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>

        <li>
          <Link to="/employee">Employee</Link>
        </li>

        <li>
          <Link to="/more">More</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;