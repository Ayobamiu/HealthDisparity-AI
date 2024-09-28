import React, { createContext, useState, useContext, ReactNode } from "react";
import { ThreadData } from "../Data/types";

// Define the type for the ThreadContext's value
type ThreadContextType = {
  threadData: ThreadData | null;
  setThreadData: (data: ThreadData) => void;
};

// Create the ThreadContext with a default value of null
const ThreadContext = createContext<ThreadContextType | undefined>(undefined);
type ThreadProviderProps = {
  children: ReactNode;
};

export const ThreadProvider: React.FC<ThreadProviderProps> = ({ children }) => {
  const [threadData, setThreadData] = useState<ThreadData | null>(null);

  // Value that will be passed down through the context
  const value = {
    threadData,
    setThreadData,
  };

  return (
    <ThreadContext.Provider value={value}>{children}</ThreadContext.Provider>
  );
};
export const useThreadContext = () => {
  const context = useContext(ThreadContext);
  if (context === undefined) {
    throw new Error("useThreadContext must be used within a ThreadProvider");
  }
  return context;
};
