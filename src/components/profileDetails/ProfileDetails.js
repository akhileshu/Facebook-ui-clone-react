import React from "react";
import "./profileDetails.css";
import { Users } from "../../dummyData";
import UserFriend from "../userFriend/UserFriend";

function ProfileDetails() {
  return (
    <div className="ProfileDetails">
      <div className="ProfileDetailsWrapper">
        <div className="userInfo">
          <p className="heading">User Information</p>
          <p class="preserve-space">
            city&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : hyderabad
          </p>
          <p class="preserve-space">country : india</p>
          <p class="preserve-space">passion : web dev</p>
        </div>
        <div>
          <p className="heading">User Friends</p>
          <ul className="userFriends">
            {Users.map((user) => (
              <UserFriend key={user.id} {...user} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
