import React from "react";
import Send from "../../icons/send";

const Chat = () => {
  return (
    <div className="flex h-screen ">
      <div className="bg-blue-100 w-1/3">left</div>
      <div className="bg-blue-300 w-2/3">
        <div>messages with selected person</div>
        <div>
          <input
            type="text"
            placeholder="type your messages"
            className="bg-white border p-2"
          />
          <button className="">
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
