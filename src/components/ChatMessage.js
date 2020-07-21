import React from "react";

import "./ChatMessage.css";

import ReceivedMessage from "./ReceivedMessage";
import SentMessage from "./SentMessage";

const ChatMessage = (props) => {
  if (props.messageType === "sent") {
    return <SentMessage message={props.msg} />;
  } else {
    return <ReceivedMessage message={props.msg} />;
  }
};

export default ChatMessage;
