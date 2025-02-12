import React, { useContext } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { FaTachometerAlt } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa';
import { MdOutlineTrendingUp } from 'react-icons/md';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { AuthContext } from '../../../context/AuthContext';

function Sidebar() {
  const {logout}=useContext(AuthContext)
  const navigate=useNavigate();
  const handleLogout=()=>{
    console.log("loging out...")
    logout();
    navigate('/');
  }
  const liStyle="flex gap-4 p-2 cursor-pointer items-center hover:bg-gray-200 rounded-md transition-colors duration-300 ease-in-out"
  return (
    <>
    <div className={`flex flex-col justify-between h-[90vh] bg-gray-100`}>
    <div>
      <ul className={`m-3`}>
        <Link to={'/user/dashboard'}><li className={liStyle}><span><FaTachometerAlt size={20} /></span>Dashbard</li></Link>
        <Link to={'/user/profile'}><li className={liStyle}><span><FaUserCircle size={20} /></span>Profile</li></Link>
        <Link to={'/user/enrolledcourses'}><li className={liStyle}><span><FaBookOpen size={20} /></span>Enrolled Courses</li></Link>
        <Link to={'/user/applyjobs'}><li className={liStyle}><span><FaBookOpen size={20} /></span>Apply Jobs</li></Link>
        <Link to={'/user/progress'}><li className={liStyle}><span><MdOutlineTrendingUp size={20} /></span>Progress</li></Link>
        <Link to={'/user/certification'}><li className={liStyle}><span><AiFillSafetyCertificate size={20} /></span>Certification</li></Link>
        <Link to={'/user/becomeseller'}><li className={liStyle}><span><AiFillSafetyCertificate size={20} /></span>Become Seller</li></Link>
      </ul>
    </div>
    <div>
      <ul className={`m-3`}>
        <li onClick={handleLogout} className={liStyle}>
        <span><FiLogOut size={30} /></span>Logout
        </li>
      </ul>
    </div>
    </div>
    </>
  )
}

export default Sidebar
