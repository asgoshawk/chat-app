import { SytledUserList } from "./styles/UserList.styled";

const users = [
  { name: "test1", userId: "0" },
  { name: "test2", userId: "1" },
];

const UserList = () => {
  return (
    <SytledUserList>
      <div className="groupName">Test Group</div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <p>{user.name}</p>
          </li>
        ))}
      </ul>
    </SytledUserList>
  );
};

export default UserList;
