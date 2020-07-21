import React from "react";

import "./ReceivedMessage.css";

import Avatar from "./Avatar.js";

const ReceivedMessage = (props) => {
  return (
    <div className="chat-message">
      <Avatar
        src={props.message.user.avatar}
        alt={props.message.user.username}
      />
      <div className="chat-messageText">
        <div className="chat-messageUsername">
          {props.message.user.username}
        </div>
        <div className="chat-messageBody">{props.message.body}</div>
      </div>
    </div>
  );
};
export default ReceivedMessage;
