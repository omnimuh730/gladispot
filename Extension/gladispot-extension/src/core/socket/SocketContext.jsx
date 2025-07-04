import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
  const socketRef = useRef(null);
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    socketRef.current = io("http://localhost:4000"); // your backend URL

    const handleConnect = () => setIsOnline(true);
    const handleDisconnect = () => setIsOnline(false);

    socketRef.current.on("connect", handleConnect);
    socketRef.current.on("disconnect", handleDisconnect);

    // Clean up on unmount
    return () => {
      socketRef.current.off("connect", handleConnect);
      socketRef.current.off("disconnect", handleDisconnect);
      socketRef.current.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket: socketRef.current, isOnline }}>
      {children}
    </SocketContext.Provider>
  );
};
