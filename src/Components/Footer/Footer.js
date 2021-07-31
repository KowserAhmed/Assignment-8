import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter ,faFacebookF, faYoutube} from '@fortawesome/free-brands-svg-icons'

const Footer = (props) => {
    const {strTwitter,strFacebook,strYoutube}=props.socialLink
    return (
        <div>
            <ul  className="footer">
                < li  id='twitter' onClick={() => window.open(`https://www.${strTwitter}`)}><FontAwesomeIcon icon={faTwitter} /></li>
                <li  id='facebook' onClick={() => window.open(`https://${strFacebook}`)}> <FontAwesomeIcon icon={faFacebookF}/></li> 
                <li id='youtube'onClick={() => window.open(`https://${strYoutube}`)}>  <FontAwesomeIcon icon={faYoutube} /></li>
            </ul>
        </div>
    );
};

export default Footer;