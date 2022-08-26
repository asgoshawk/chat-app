import { useState } from "react";

import Room from "../components/Room";
import RoomList from "../components/RoomList";
import { ChatContainer } from "../components/styles/Container.styled";
import io from "socket.io-client";
import NavBar from "../components/NavBar";

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
        <RoomList />
        <Room socket={socket} room={room} />
      </ChatContainer>
    </>
  );
};

export default Chat;
