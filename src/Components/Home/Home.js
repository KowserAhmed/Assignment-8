import React, { useEffect, useState } from 'react';
import ClubList from '../Clublist/ClubList';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    const [clubList , setClubList]= useState([]);
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res=> res.json())
        .then(data=> setClubList(data.teams))
    },[])
    
    return (
        <div className='club-list-container'>
            <Header content={'Football Planet'}></Header>
            <div className='club-list'>
            {
                clubList.map(club=> <ClubList clubInfo={club} key={club.idTeam}></ClubList>)
            }
        </div>
        </div>
    );
};

export default Home;