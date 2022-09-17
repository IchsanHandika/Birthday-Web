import './content.css'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import uknown from './Assets/uknown.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Content = () => {
    const [modal, setModal] = useState(false)

    const modalHandler = () => {
        setModal(!modal)
    }

    AOS.init();

    return(
        <>
            {modal && (
                <div className = 'modal'>
                    <div className = 'modalContent'>
                        <h2>Kartu Ucapan Aku Untuk Kamu</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam dui nec tellus laoreet, ut varius sem varius. In hac habitasse platea dictumst. Sed porttitor sollicitudin malesuada. Donec vulputate imperdiet felis, et aliquam felis. In sit amet dolor erat. Suspendisse ut velit sollicitudin ante consectetur suscipit quis ut enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer pulvinar orci in odio dignissim, ut pulvinar eros mattis. In et ornare sem.
                        </p>
                        <span className = 'closeModal' onClick={modalHandler}>&times;</span>
                    </div>
                </div>
            )}
            <div className = 'containterContent'>
                <div className = 'wrapperContent'>
                    <div className = 'responsiveImgWrapper'>
                        <img src = {uknown} alt = 'foto kamu' height = {'300px'} width = {'250px'} className = 'foto1 animation'/>
                        <img src = {uknown} alt = 'foto kamu' height = {'300px'} width = {'250px'} className = 'fotoResponsive animation'/>
                    </div>
                    <div className = 'celebrateTxt'>
                        <h1 data-aos = "slide-down" data-aos-duration = "1100">Happy Birthday</h1>
                        <h2 data-aos = "slide-down" data-aos-duration = "1100">Namanya Siapa?????</h2>
                    </div>
                    <img src = {uknown} alt = 'foto kamu' height = {'300px'} width = {'250px'} className = 'foto2 animation'/>
                </div>
                <div className = 'containerPesan' onClick = {modalHandler}>
                    <FontAwesomeIcon icon = {faEnvelope} className = 'iconPesan' />
                </div>
            </div>
        </>
    )
}

export default Content