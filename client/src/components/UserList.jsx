import { SytledUserList } from "./styles/UserList.styled";
import { FaWrench, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

const users = [
  { name: "test1", userId: "0" },
  { name: "test2", userId: "1" },
];

const UserList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  console.log(user);

  const onLogout = () => {
    navigate("/login");
    dispatch(logout());
    dispatch(reset);
  };
  return (
    <SytledUserList>
      <div className="groupName">Test Group</div>
      <ul>
        {users.map((member, index) => (
          <li key={index}>
            <p>{member.name}</p>
          </li>
        ))}
      </ul>
      <div className="userPanel">
        <div className="userProfile">
          <div className="userCircle">
            <p>T</p>
          </div>
          <p>{user.name}</p>
        </div>
        <div className="userControl">
          <button>
            <FaWrench />
          </button>
          <button onClick={onLogout}>
            <FaSignOutAlt />
          </button>
        </div>
      </div>
    </SytledUserList>
  );
};

export default UserList;
