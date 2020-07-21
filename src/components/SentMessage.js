import React from "react";

import "./SentMessage.css";

const SentMessage = (props) => {
  return (
    <div id="sent" className="chat-message">
      <div className="chat-messageText">
        <div className="chat-messageBody">{props.message.body}</div>
      </div>
    </div>
  );
};

export default SentMessage;
