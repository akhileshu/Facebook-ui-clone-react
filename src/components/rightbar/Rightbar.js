import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="giftIcon" src="assets/gift.png" alt="" />
          <span>
            <b>Pola Foster </b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className="adImg" src="assets/ad.png" alt="" />
        <div className="onlineFriendsContainer">
          <p>Online Friends</p>
          <ul>
            {Users.map((user)=><Online key={user.id} {...user}/>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
