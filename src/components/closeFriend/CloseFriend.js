import React from "react";

function CloseFriend({profilePicture,username}) {
  return (
    <li className="sidebarFriends">
      <img className="sidebarFriendImg" src={profilePicture} />
      <span className="sidebarFriendName">{username}</span>
    </li>
  );
}

export default CloseFriend;
