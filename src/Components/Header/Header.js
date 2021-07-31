import React from 'react';
import Background from '../../Images/background.jpg'
import './Header.css'

const Header = (props) => {
    return (
        <div className='backGround'>
            <img className='backGroundImg' src={Background} alt="" />
            <h1>{props.content}</h1>
            <img  className='teamLogo' src={props.teamLogo} alt="" />
        </div>
    );
};

export default Header;