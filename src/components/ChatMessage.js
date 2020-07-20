import React from "react";

import "./ChatMessage.css";

const ChatMessage = (props) => {
  return (
    <div className="chat-message">
      <img
        className="chat-messageAvatar"
        src={props.msg.user.avatar}
        alt={props.msg.user.username}
      />
      <div className="chat-messageText">
        <div className="chat-messageUsername">{props.msg.user.username}</div>
        <div className="chat-messageBody">{props.msg.body}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
