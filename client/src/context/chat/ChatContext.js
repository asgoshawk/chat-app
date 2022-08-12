import { createContext, useReducer } from "react";
import chatReducer from "./ChatReducer";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const initialState = {
    user: {},
    group: {},
    room: {},
  };

  const [state, dispatch] = useReducer(chatReducer, initialState);

  return (
    <ChatContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContext;
