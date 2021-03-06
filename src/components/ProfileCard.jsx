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
                        <img src={Pattern} className="card-img-top" alt="Pattern as profile's banner" />
                        <img src={UserPhoto} className="position-absolute card-img-user img-thumbnail rounded-circle w-25" tabIndex="0" alt="User's profile photo" />
                        <div className="card-body border-bottom d-flex">
                            <h2 className="card-title display-5" tabIndex="0">Victor Crest <span className="card-age h2">26</span></h2>
                            <p className="card-location h4" tabIndex="0">London</p>
                        </div>
                        <div className="card-stats row">
                            <div className="col d-flex">
                                <p className="card-figure h3" tabIndex="0" aria-label="80.000">80k</p>
                                <small className="card-followers h5" tabIndex="0">Followers</small>
                            </div>
                            <div className="col d-flex">
                                <p className="card-figure h3" tabIndex="0" aria-label="803.000">803k</p>
                                <small className="card-likes h5" tabIndex="0">Likes</small>
                            </div>
                            <div className="col d-flex">
                                <p className="card-figure h3" tabIndex="0" aria-label="1.400">1.4k</p>
                                <small className="card-photos h5" tabIndex="0">Photos</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;