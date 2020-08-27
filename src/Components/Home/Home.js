import React from 'react';
import './Home.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button} from '../../../node_modules/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
const Home = (props) => {
    const {name,img,username,email,website,phone} = props.profile;
    
    return (
        <div>
            <div className="home">
            <div>
                <img className="image" src={img} alt=""/>
            </div>

            <div>
                <div>
                <h4 className="name">{name}</h4>
                </div>
                <div>
                <div className="description">
                <div className="name-des">
                
                <p className="email">{email}</p>
               <p className="phone">{phone}</p>
                </div>
                <div className="user-name">
                   <p className="username">{username}</p>
                   <p className="website">{website}</p>
                   
                   <Button onClick={()=>props.handleAddProfile(props.profile)} variant="info"><FontAwesomeIcon icon={faPlusCircle} /> Send Request</Button>
                </div>
            </div>
                </div>
            
            </div>
        </div>
            </div>
            
    );
};

export default Home;