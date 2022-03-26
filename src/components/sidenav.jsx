import React from 'react';
import '../assets/styles/sidenav.css';

import admin from '../assets/images/admin.svg'
import knowledge from '../assets/images/knowledge.svg'
import agentInbox from '../assets/images/agentInbox.svg'
import helpCenter from '../assets/images/helpCenter.svg'
import analytics from '../assets/images/analytics.svg'
import rightArrow from '../assets/images/rightArrow.svg'

function Sidenav() {
  return (
    <div className='sidenavContainer'>
      <div className='sideNavWrapper'>
        <div className='accountWrapper'>
          <p className='adminName'>Metacare</p>
          <p className='adminMail'>adeyinka@metacare.com</p>
        </div>

        <div className='sideNavLinksWrapper'>
          <div className='sideNavLink'>
            <img src={admin} height='10px' alt='adminIcon' className='sideNavIcon' />
            <p className='sideNavText'>Admin</p>
            <img src={rightArrow} height='10px' alt='adminIcon' className='rightArrow' />
          </div>

          <div className='sideNavLink'>
            <img src={knowledge} height='10px' alt='adminIcon' className='sideNavIcon' />
            <p className='sideNavText'>Knowledge Base</p>
            <img src={rightArrow} height='10px' alt='adminIcon' className='rightArrow' />
          </div>

          <div className='sideNavLink'>
            <img src={knowledge} height='10px' alt='adminIcon' className='sideNavIcon' />
            <p className='sideNavText'>Train SAM</p>
            <img src={rightArrow} height='10px' alt='adminIcon' className='rightArrow' />
          </div>

          <div className='sideNavLink'>
            <img src={agentInbox} height='10px' alt='adminIcon' className='sideNavIcon' />
            <p className='sideNavText'>Agent Inbox</p>
            <img src={rightArrow} height='10px' alt='adminIcon' className='rightArrow' />
          </div>

          <div className='sideNavLink'>
            <img src={helpCenter} height='10px' alt='adminIcon' className='sideNavIcon' />
            <p className='sideNavText'>Help Center</p>
            <img src={rightArrow} height='10px' alt='adminIcon' className='rightArrow' />
          </div>

          <div className='sideNavLink'>
            <img src={analytics} height='10px' alt='adminIcon' className='sideNavIcon' />
            <p className='sideNavText'>Analytics</p>
            <img src={rightArrow} height='10px' alt='adminIcon' className='rightArrow' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidenav;