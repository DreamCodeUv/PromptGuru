import React from 'react'
import { AiFillInstagram, AiFillYoutube, AiFillFacebook, AiFillLinkedin, AiFillGithub, } from "react-icons/ai"
import { FaBlogger } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer>
    <div className="foot">
      <div className="ft-left">
        <ul className="ft-ul">
         <a href="" className="soc-link"><li className="ft-li"><AiFillInstagram className='soc-icon'  size={30} /></li></a>
          <a href="" className="soc-link"> <li className="ft-li"><AiFillGithub className='soc-icon' size={30}  /></li></a>
          <a href="" className="soc-link"> <li className="ft-li"><AiFillLinkedin  className='soc-icon' size={30} /></li></a>
          <a href="" className="soc-link"> <li className="ft-li"><AiFillFacebook className='soc-icon'  size={30} /></li></a>
        </ul>
      </div>
      <div className="ft-mid">all rights Reserved</div>
      <div className="ft-ri">
      <ul className="ft-ul">
         <a href='https://www.youtube.com/@TechiTuts' className="soc-link"> <li className="ft-li"><AiFillYoutube className='soc-icon' size={30} /></li> </a>
         <a href="" className="soc-link"><li className="ft-li"><FaBlogger className='soc-icon'  size={30} /></li> </a>
        </ul>
      </div>
    </div>
    </footer>
    </>
  )
}

export default Footer