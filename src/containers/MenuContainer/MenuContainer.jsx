import React from 'react';
import {FaWhatsapp} from 'react-icons/fa'
import {FaPhone} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import './MenuContainer.css'

function Menu() {
    return(
        <div className='info-block'>
            <h1>Info-Block</h1>
          <ul className="info-item"><FaPhone/> <b>Contacts:</b>
              <li className="info-list">0706033066</li>
          </ul>
          <ul className="info-item"><FaGithub/> <b>GitHub:</b>
               <li className="info-list">timajs</li>
          </ul>
          <ul className="info-item"><FaWhatsapp/> <b>WhatsUp:</b>
             <li className="info-list">+706033066</li>
          </ul>
        </div>
    )
}

export default Menu 