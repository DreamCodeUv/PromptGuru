import React, { useState } from 'react'
import '../css/Nav.css'
import Log from '../assets/logo-bg/logo.png'

const Navigation = () => {
    const [ham , setHam] = useState(false);
    const showHide=()=>{
        if(!ham){
            setHam(true);
        }else{
            setHam(false);
        }
    }
  return (
    <>
    <header>
        <nav>
            <div className="nav-top">
                <div className="left">
                    <div className="logo-container">
                        <img src={Log} alt="Prompt Guru Logo" className="logo-im" />
                        <span className="web-name">Prompt Guru</span>
                    </div>
                </div>
                <div className="right">
                    <ul className="nav-ul">
                        <li className="nav-li">Contact</li>
                        <li className="nav-li">About</li>
                        <li className="nav-li">Policy</li>
                    </ul>
                </div>
                <div className="hamburger" onClick={showHide} >
                    <span className='ham' id={(ham)?'up-b':''}></span>
                    <span className='ham' id={(ham)?'hide':'show'}></span>
                    <span className='ham' id={(ham)?'bt-b':''}></span>
                </div>
            </div>
        </nav>
        <div className="bottom-nav" id={(ham)?'show':'hide'}>
            <ul className="nav-bot-ul">
                <li className="nav-bot-li">Contact</li>
                <li className="nav-bot-li">About</li>
                <li className="nav-bot-li">Policy</li>
            </ul>
        </div>
    </header>
    </>
  )
}

export default Navigation