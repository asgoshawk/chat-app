import { useState } from "react";

import Room from "../components/Room";
import { ChatContainer } from "../components/styles/Container.styled";
import io from "socket.io-client";
import NavBar from "../components/NavBar";
import UserList from "../components/UserList";

const socket = io();

const Chat = () => {
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
