import { createContext, useState } from "react";
import { v1 as uuidv1 } from "uuid";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState("");
  // Initialize currThreadId with a UUID here
  const [currThreadId, setCurrThreadId] = useState(uuidv1());
  const [prevChats, setPrevChats] = useState([]);
  const [newChat, setNewChat] = useState(false);
  const [allThreads, setAllThreads] = useState([]);

  return (
    <MyContext.Provider
      value={{
        prompt,
        setPrompt,
        reply,
        setReply,
        currThreadId,
        setCurrThreadId,
        prevChats,
        setPrevChats,
        newChat,
        setNewChat,
        allThreads,
        setAllThreads,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
