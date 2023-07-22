import React from 'react'
import './home.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'
import Profile from '../profile/Profile'
import Login from '../login/Login'
import Register from '../register/Register'

function Home() {
  return (
    <>
    <Topbar/>
    <div className='main'>
<Sidebar/>
<Feed/>
<Rightbar/>
    </div>
    </>
  )
}

export default Home