import React from "react";
import './Topbar.css'
import { Notifications, Search, Person, Chat } from "@mui/icons-material";
import {Link } from "react-router-dom"


function Topbar() {
  return (
    <div className='topbar'>
      <div>mySocial</div>
      <div className="center">
        <Search className="searchIcon"/>
        <input className="searchInput" />
      </div>
      <div className="right">
        <ul className="topbarLinks">
          <li><Link className="custom-link" to="/">HomePage</Link></li>
          <li><Link className="custom-link" to="/login">Login</Link></li>
        </ul>
        <div className="topbarIconItem">
          <Notifications />
          <span className="topbarIconBadge">10</span>
        </div>
        <div className="topbarIconItem">
          <Person />
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
          <Chat />
          <span className="topbarIconBadge">1</span>
        </div>
      </div>
      <Link className="custom-link" to="/profile">
      <img className="topbarImg" src='/assets/person/akhilesh.jpeg'/>
      </Link>
    </div>
  );
}

export default Topbar;
