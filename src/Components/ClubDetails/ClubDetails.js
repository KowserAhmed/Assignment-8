import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Male from '../../Images/male.png'
import Female from '../../Images/female.png'
import Header from '../Header/Header';
import './ClubDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFutbol, faMars} from '@fortawesome/free-solid-svg-icons'
import Footer from '../Footer/Footer';
import found from '../../Images/found 1.png'

const ClubDetails = () => {
    const { id } = useParams()
    // show club details by id
    const [clubDetails, setClubDetails] = useState({})
    const {strTeamBadge, strAlternate, strCountry, strGender, strDescriptionEN,strTwitter, strFacebook,strYoutube,intFormedYear } = clubDetails
    
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setClubDetails(data.teams[0]))
    }, [id])

// change gender and image 
 let teamImage= strGender==='Male' ? Male : Female;

    return (
        
        <div className='club-details'>
            <Header teamLogo={strTeamBadge}></Header>
            <div className='club-details-container'>
                <div className='club-details-cart'>
                <div className='club-details-text'>
                    {/* team basic information */}
                <h3>{strAlternate}</h3>
                <div className='founded'>
                    <img src={found} alt="" />
                <h5>   Founded: {intFormedYear}</h5>
                </div>
               
                <h5><FontAwesomeIcon icon={faFlag} />  Country: {strCountry}</h5>
                <h5><FontAwesomeIcon icon={faFutbol} />  Sports Type: Football</h5>
                <h5><FontAwesomeIcon icon={faMars} />  Gender:{strGender}</h5>
                </div>
                {/* team photo */}
                <div className='team-photo'>
                 <img src={teamImage} alt="" />
                 </div>
                 </div>
            
            <p>{strDescriptionEN}</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat nostrum vitae praesentium temporibus omnis ut tenetur laborum in atque, delectus commodi, recusandae alias deleniti fugit! Repellendus, reprehenderit. In aliquid reiciendis iusto tempora exercitationem porro odit, architecto dolor dignissimos. Inventore maxime numquam nam. Consequatur omnis mollitia sunt autem perspiciatis. Atque doloribus provident iure laboriosam voluptas, vero accusamus numquam veritatis recusandae necessitatibus reiciendis id blanditiis, ratione quisquam repellat fugiat officia non, similique perspiciatis illum dolore. A, vero itaque culpa fuga praesentium porro, at accusantium, ducimus ipsam rem corrupti error eveniet. Sint praesentium eaque quaerat eligendi deleniti saepe soluta harum commodi earum, debitis incidunt, voluptates provident? Animi, nobis aliquam cupiditate impedit, accusantium sint cumque cum ea iste placeat nemo veniam est reiciendis! Vel!</p>
        </div>
       {
           <Footer socialLink={{strTwitter,strFacebook,strYoutube}}></Footer>
          
       }
        </div>
       
    );
};

export default ClubDetails;