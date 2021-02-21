/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './styles/ProfileCard.scss';

import Pattern from '../assets/images/bg-pattern-card.svg';
import UserPhoto from '../assets/images/image-victor.jpg';

const ProfileCard = () => {
    return (
        <div className="profilecard container container-xxl">
            <div className="row">
                <div className="column">
                    <div className="card position-relative">
                        <img src={Pattern} className="card-img-top" alt="Pattern as the profile's banner" />
                        <img src={UserPhoto} className="position-absolute card-img-user img-thumbnail rounded-circle w-25" alt="User's profile photo" />
                        <div className="card-body border-bottom d-flex">
                            <h2 className="card-title fw-bold">Victor Crest <span className="card-age fs-3">26</span></h2>
                            <p className="card-location">London</p>
                        </div>
                        <div className="card-stats">
                            <p className="card-followers">Follower</p>
                            <p className="card-likes">Likes</p>
                            <p className="card-photos">Photos</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;