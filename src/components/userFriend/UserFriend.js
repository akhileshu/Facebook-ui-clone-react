import React from "react";

function UserFriend({username,profilePicture}) {
  return (
    <li className="userFriend">
      <img className="userFriendImg" src={profilePicture} alt="" />
      <span>{username}</span>
    </li>
  );
}

export default UserFriend;
