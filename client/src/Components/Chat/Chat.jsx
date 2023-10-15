import React, { useEffect, useState } from "react";
import Send from "../../icons/send";

const Chat = () => {
  const [messages, setMessages] = useState();
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000");
    setMessages(ws);
    ws.addEventListener("message", handleMessage);
  }, []);

  const showOnline = () => {};
  const handleMessage = (e) => {
    const messagedata = JSON.parse(e.data);
    console.log(messagedata);
    if ("online" in messagedata) {
      showOnline(messagedata.online);
    }
  };
  return (
    <div className="flex h-screen ">
      <div className="bg-blue-100 w-1/3">contacts</div>
      <div className="flex flex-col bg-blue-300 w-2/3 p-2">
        <div className="flex-grow">messages with selected person</div>
        <div className="flex gap-2 mx-2">
          <input
            type="text"
            placeholder="type your messages"
            className="bg-white border p-2 flex-grow rounded-sm"
          />
          <button className="bg-blue-500 p-2 text-white">
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
