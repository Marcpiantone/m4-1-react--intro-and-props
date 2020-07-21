import React from "react";

import "./Header.css";

import Avatar from "./Avatar.js";

const Header = (props) => {
  console.log(props.participants);

  const filtered = props.participants.filter(
    (participantName) => participantName !== props.currentUser
  );

  let display = filtered.map((participant, index) => {
    return (
      <Avatar
        src={participant.avatar}
        alt={participant.username}
        key={index + "key"}
      />
    );
  });
  return <header>{display}</header>;
};

export default Header;
