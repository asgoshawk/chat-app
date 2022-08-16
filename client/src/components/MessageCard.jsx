import { StyledMessageCard } from "./styles/MessageCard.styled";

const MessageCard = ({ message, reverse }) => {
  return (
    <StyledMessageCard>
      <div className="avatar">
        {message.avatarImg ? (
          <span></span>
        ) : (
          <span>{message.author.charAt(0)}</span>
        )}
      </div>
      <div className="message">
        <div className="messageAuthor">{message.author}</div>
        <p className="messageContent">{message.content}</p>
      </div>
    </StyledMessageCard>
  );
};

export default MessageCard;
