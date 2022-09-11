import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift, faGifts, faHeart } from '@fortawesome/free-solid-svg-icons'
import React, {useState} from 'react'

const Nabvar = ({logout}) => {
    const [details] = useState({password: ''})

    const logoutHandler = () => logout(details)

    return(
        <div className = 'containerNavbar'>
            <div className = 'wrapperNavbar'>
                <div className = 'logoNavbar'>
                    <FontAwesomeIcon icon = {faHeart} className= 'perLogoNavbar' />
                    <FontAwesomeIcon icon = {faGift} className= 'perLogoNavbar' />
                    <FontAwesomeIcon icon = {faGifts} className= 'perLogoNavbar' />
                    <FontAwesomeIcon icon = {faGift} className= 'perLogoNavbar' />
                    <FontAwesomeIcon icon = {faHeart} className= 'perLogoNavbar' />
                </div>
                <div className = 'logoutBtn'>
                    <button type = 'submit' onClick = {logoutHandler}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Nabvar