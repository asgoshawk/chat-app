import { SytledRoomList } from "./styles/RoomList.styled";

const rooms = [
  { roomName: "test1", roomId: "0" },
  { roomName: "test2", roomId: "1" },
];

const RoomList = () => {
  return (
    <SytledRoomList>
      <div className="groupName">Test Group</div>
      <ul>
        {rooms.map((room, index) => (
          <li key={index}>
            <p>{room.roomName}</p>
          </li>
        ))}
      </ul>
    </SytledRoomList>
  );
};

export default RoomList;
