import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChatContainer } from "../components/styles/Container.styled";
import { getGroup, reset } from "../features/chat/chatSlice";
import Room from "../components/Room";
import NavBar from "../components/NavBar";
import UserList from "../components/UserList";
import io from "socket.io-client";

const socket = io();

const Chat = () => {
  // const {groups}
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  //   const { groups, group } = useSelector((state) => state.chat);

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
