import { StyledMessageCard } from "./styles/MessageCard.styled";

const MessageCard = ({ message, reverse }) => {
  return (
    <StyledMessageCard>
      <div className="avatar">
        {message.avatarImg ? "" : message.author.charAt(0)}
      </div>
      <div className="message">
        <div className="messageAuthor">{message.author}</div>
        <p className="messageContent">{message.content}</p>
      </div>
    </StyledMessageCard>
  );
};

export default MessageCard;
