import { Link } from "react-router-dom";
import { FaUser, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { StyledNavbar } from "./styles/NavBar.styled";

const groups = [
  { groupName: "Test1", groupId: "01" },
  { groupName: "Test2", groupId: "02" },
];

const NavBar = () => {
  return (
    <StyledNavbar>
      <ul>
        {groups.map((item, index) => (
          <li key={index}>
            <Link to="/">
              <div className="indicator"></div>
              <div className="groupCircle">
                <p>T</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </StyledNavbar>
  );
};

export default NavBar;
