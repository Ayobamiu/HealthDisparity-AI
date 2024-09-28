import React, { useEffect, useRef, useState } from "react";
import { ThreadEnum } from "../Data/types";
import {
  addMessage,
  checkOrCreateThread,
  createRun,
  getExistingMessages,
} from "../serverless/backend/apis";
import { Message } from "openai/resources/beta/threads/messages";
import { useAuth } from "../Context/AuthContext";
import { useThreadContext } from "../Context/ThreadContext";
import ReactMarkdown from "react-markdown";
import { sampleNewMessage } from "../Data/data";
import { Empty } from "antd";
import SignInForm from "./SignInForm";

const ChatComponent: React.FC<{ type: ThreadEnum }> = ({ type }) => {
  // Ref for the chat section
  const chatSectionRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();
  const { setThreadData, threadData } = useThreadContext();

  const [loading, setLoading] = React.useState<boolean>(false);
  const [threadRunning, setThreadRunning] = useState(false);
  const [searchquery, setSearchquery] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const assistantId = process.env.REACT_APP_HEALTH_DISPARITY_AI_ASSITANT_ID;

  function scrollToTheBottom() {
    if (chatSectionRef.current) {
      chatSectionRef.current.scrollTo({
        top: chatSectionRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  // Scroll to bottom when messages update
  useEffect(() => {
    scrollToTheBottom();
  }, [messages]); // This runs whenever `messages` changes

  useEffect(() => {
    (async () => {
      if (user?.email) {
        setLoading(true);

        // Check if thread exists and retrieve it
        const newThreadData = await checkOrCreateThread(type, user.email);

        if (newThreadData) {
          setThreadData(newThreadData);

          const keyThread = newThreadData?.threads[type];

          if (keyThread && assistantId) {
            // Instead of creating a run, check if a run already exists
            const existingMessages = await getExistingMessages(keyThread);
            if (existingMessages) {
              // If messages exist, set them without creating a new run
              setMessages(existingMessages);
            } else {
              // If no messages exist, create a run for the first time
              setThreadRunning(true);
              const m = await createRun(keyThread, assistantId);
              setThreadRunning(false);
              if (m) {
                setMessages(m.data);
              }
            }
          }
        }
        setLoading(false);
      }
    })();
  }, [user?.email, type]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a new user message immediately
    const newMessage = sampleNewMessage(searchquery);

    // Update the state with the new message and clear the input
    setMessages((prevMessages) =>
      prevMessages ? [...prevMessages, newMessage] : [newMessage]
    );
    setSearchquery(""); // Clear the input box

    // Scroll to the bottom after adding the message
    scrollToTheBottom();

    // Serverless Backend call
    const keyThread = threadData?.threads[type];
    if (keyThread) {
      await addMessage(keyThread, searchquery).then(async () => {
        if (keyThread && assistantId) {
          setThreadRunning(true);
          const m = await createRun(keyThread, assistantId);
          setThreadRunning(false);

          // If new messages from assistant are received, update the state
          if (m) {
            setMessages((prevMessages) => [...prevMessages, ...m.data]);
            scrollToTheBottom(); // Ensure the chat scrolls to the bottom
          }
        }
      });
    }
  };

  if (!user?.email)
    return (
      <div className="mt-40">
        <Empty description="Sign In to get started">
          <SignInForm />
        </Empty>
      </div>
    );

  return (
    <>
      <div className="bg-gray-100 h-full flex flex-col ">
        <div
          className="flex-1 overflow-y-auto p-4"
          id="chat-section"
          ref={chatSectionRef} //  Chat section Ref
        >
          <div className="flex flex-col space-y-2">
            {messages
              ?.sort((a, b) => a.created_at - b.created_at)
              .map((i, message_index) => {
                if (i.role === "assistant") {
                  return (
                    <div className="flex" key={message_index}>
                      {i.content.map((item, index) => {
                        if (item.type === "text")
                          return (
                            <div
                              key={message_index}
                              className="bg-gray-300 text-black p-2 rounded-lg max-w-xs"
                            >
                              <ReactMarkdown>{item.text.value}</ReactMarkdown>
                            </div>
                          );
                      })}
                    </div>
                  );
                }
                if (i.role === "user") {
                  return (
                    <div className="flex justify-end" key={i.id}>
                      {i.content.map((item, index) => {
                        if (item.type === "text")
                          return (
                            <div
                              key={message_index}
                              className="bg-blue-200 text-black p-2 rounded-lg max-w-xs"
                            >
                              <ReactMarkdown>{item.text.value}</ReactMarkdown>
                            </div>
                          );
                      })}
                    </div>
                  );
                }
              })}
          </div>
        </div>

        {(loading || threadRunning) && (
          <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
            loading...
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 flex items-center"
          id="search-form"
        >
          <input
            type="text"
            id="search-input"
            required
            placeholder="Type your message..."
            className="flex-1 border rounded-full px-4 py-2 focus:outline-none"
            onChange={(e) => {
              setSearchquery(e.target.value);
            }}
            value={searchquery}
          />
          <button
            type="submit"
            disabled={threadRunning}
            className="bg-blue-500 text-white rounded-full p-2 ml-2 hover:bg-blue-600 focus:outline-none disabled:cursor-wait"
          >
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatComponent;
