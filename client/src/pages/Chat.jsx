import { useState } from "react";
import { useSelector } from "react-redux";
import { ChatContainer } from "../components/styles/Container.styled";
import Room from "../components/Room";
import NavBar from "../components/NavBar";
import UserList from "../components/UserList";
import io from "socket.io-client";

const socket = io();

const Chat = () => {
  // const {groups}
  const { user } = useSelector((state) => state.auth);

  const [room, setRoom] = useState({
    id: "0",
    name: "Test",
  });

  return (
    <>
      <NavBar />
      <ChatContainer>
        <UserList />
        <Room socket={socket} room={room} />
      </ChatContainer>
    </>
  );
};

export default Chat;
