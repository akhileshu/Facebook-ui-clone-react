import React from "react";

function Online({profilePicture,username}) {
  return (
    <li>
      <div className="onlineFriend">
        <div className="rightbarProfileImgContainer">
          <img src={profilePicture} alt="" />
          <span className="badge"></span>
        </div>

        <span className="onlineFriendName">{username}</span>
      </div>
    </li>
  );
}

export default Online;
