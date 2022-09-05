import { Link } from "react-router-dom";
import {
  FaUser,
  FaSignInAlt,
  FaSignOutAlt,
  FaPlus,
  FaMeteor,
} from "react-icons/fa";
import { StyledNavbar } from "./styles/NavBar.styled";
import { useDispatch, useSelector } from "react-redux";
import { getGroups } from "../features/chat/chatSlice";
import { useEffect } from "react";

const NavBar = () => {
  const dispatch = useDispatch();
  const { groups } = useSelector((state) => state.chat);

  useEffect(() => {
    dispatch(getGroups());
  }, []);
  console.log(groups);
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

        {groups &&
          groups.map((item, index) => (
            <li key={index}>
              <Link to={`/group/${item._id}`}>
                <div className="indicator"></div>
                <div className="groupCircle">
                  <p>{item.name[0]}</p>
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
