import { Link } from "react-router-dom";
import {
  FaUser,
  FaSignInAlt,
  FaSignOutAlt,
  FaPlus,
  FaMeteor,
} from "react-icons/fa";
import { StyledNavbar } from "./styles/NavBar.styled";

const groups = [
  { groupName: "Test1", groupId: "01" },
  { groupName: "Test2", groupId: "02" },
];

const NavBar = () => {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <Link to="/">
            <div className="indicator"></div>
            <div className="groupCircle home">
              <FaMeteor />
            </div>
          </Link>
        </li>

        <div className="seperator-outter">
          <div className="seperator-inner"></div>
        </div>

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

        <li>
          <Link to="/">
            <div className="groupCircle plus">
              <FaPlus />
            </div>
          </Link>
        </li>
      </ul>
    </StyledNavbar>
  );
};

export default NavBar;
