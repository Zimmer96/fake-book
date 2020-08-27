import React from 'react';
import fakePerson from '../../fakeData/fakePerson'
import { useState } from 'react';
import './Profile.css'
import Home from '../Home/Home';
import Cart from '../Cart/Cart';
const Profile = () => {
    const firstData = fakePerson.slice(0,18);
    const[profile,setProfile] = useState(firstData);
    const[cart,setCart] = useState([]);
    const handleAddProfile = (profile) =>{
        const newCart = [...cart,profile];
        setCart(newCart);
    }
    return (
        <div className="profile-container">
            <div className="home-container">
                <h1>
                    {
                      profile.map(profile =><Home handleAddProfile={handleAddProfile} profile={profile} id={profile.id}></Home>) 
                    }
                   
                </h1>
            </div>
            <div className="cart-container">
                {
                    cart.map(cart =><Cart cart={cart}></Cart>)
                }
            </div>
            
        </div>
    );
};

export default Profile;