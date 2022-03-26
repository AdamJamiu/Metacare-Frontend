import React from 'react';
import '../assets/styles/navbar.css';
import searchIcon from '../assets/images/searchIcon.svg';
import notificationIcon from '../assets/images/notification.svg';
import error from '../assets/images/error.svg';
import circle from '../assets/images/circle.svg';
import arrowDown from '../assets/images/arrowDown.svg';

function TopNavbar() {
    return (
        <>
            <div className='navbar'>
                <div className='searchWrapper'>
                    <input className='navSearch' type="text" placeholder='Ask us any question' />
                    <img src={searchIcon} height="15px" className='searchIcon' alt="searchIcon" />
                </div>

                <div className='iconWrap'>
                    <div className='notificationSide'>
                        <img src={notificationIcon} height='15px' alt='notificationImage' />
                        <img src={error} alt='error' height='12px' />
                    </div>

                    <div className='avatarSide'>
                        <img src={circle} height="15px" className='circle' alt='notificationImage' />
                        <img src={arrowDown} height="4px" className='arrowDown' alt='arrowDown' />
                    </div>
                </div>
            </div>
        </>

    )
}

export default TopNavbar