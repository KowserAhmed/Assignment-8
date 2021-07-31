import React from 'react';
import { Link } from 'react-router-dom';
import './ClubList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

const ClubList = (props) => {
    // data receive from home component
    const {strTeam , strTeamBadge, idTeam}=props.clubInfo
    return (
        <div className='club'>  
            <img src={strTeamBadge} alt={`${strTeam} logo`} />
            <h3>{strTeam}</h3>
            <h5>Sports Type: Football</h5>
            <Link to={`/clubDetails/${idTeam}`}>
            <button> Explore <FontAwesomeIcon icon={faArrowRight} /></button>
            </Link>
        </div>
    );
};

export default ClubList;