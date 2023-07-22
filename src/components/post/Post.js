import React, { useState } from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";

function Post({id,desc,photo,date,userId,like,comment}) {
  /*
  few desc are undefined
  console.log(id,desc,photo,date,userId,like,comment)
  */
 const [userLike,setUserLike]=useState(like)
 const [liked,setLiked]=useState(false)

 function handleLike(){
  if(! liked){
    setUserLike(userLike=>userLike+1)
    setLiked(true)
  }
  else{
    setUserLike(userLike=>userLike-1)
    setLiked(false)
  }
 }
 const user=Users.find((user)=>user.id===userId)
  return (
    <div className="posts">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTop-left">
            <img className="postTopImg" src={user.profilePicture} />
            <span className="postTopText">{user.username}</span>
            <span className="postTimeStamp">{date}</span>
          </div>
          <MoreVert className="postMore" />
        </div>
        <div className="postCenter">
          <div className="postText">{desc? desc : ''}</div>
          <img className="postImg" src={photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img onClick={handleLike} className="PostBottomIcon" src="assets/like.png" alt="" />

            <img onClick={handleLike} className="PostBottomIcon" src="assets/heart.png" alt="" />

            <span className="likeNumber">{userLike} people like it</span>
          </div>
          <div className="postBottomRight">{comment} comments</div>
        </div>
      </div>
    </div>
  );
}

export default Post;
