import { useState, useEffect, useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { StyledRoom } from "./styles/Room.styled";
import MessageCard from "./MessageCard";

const Room = ({ socket, room }) => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  useEffect(() => {
    if (room && room.id !== "") {
      socket.emit("join_room", room.id);
    }
  }, [room]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
      //   console.log(data);
    });
    // return () => {
    //   socket.off("receive_message");
    // };
  }, [socket]);

  const messageOnChange = (e) => setMessage(e.target.value);

  const sendMessage = async () => {
    if (message !== "") {
      const messageData = {
        room: room,
        author: socket.id,
        content: message,
        time: new Date(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setMessage("");
    }
  };

  return (
    <StyledRoom>
      {room && (
        <>
          <div className="roomHeader">{room.name}</div>
          <div className="roomMain">
            <div className="roomBody">
              {messageList.map((item, index) => (
                <MessageCard key={index} message={item} />
              ))}
            </div>
            <div className="roomFooter">
              <div>
                <input
                  autoComplete="off"
                  type="text"
                  name="message"
                  id="message"
                  placeholder={`Send message to ${room.name}`}
                  value={message}
                  onChange={messageOnChange}
                />
                <button onClick={sendMessage}>
                  <FaPaperPlane color="white" />
                </button>
              </div>
            </div>
          </div>
          <div className="roomMembers"></div>
        </>
      )}
    </StyledRoom>
  );
};

export default Room;
