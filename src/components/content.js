import './content.css'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import foto1 from './Assets/foto1.png'
import foto2 from './Assets/foto2.png'
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
                            Selamat ulang tahun sefvia ku sayanggggggg, semoga panjang umur, sehat selalu, bahagia selalu, kuliah dilancarkan selalu, ya pokoknya apa yang disemogakan semoga teresemogakan ya sefviaaaaaaaaa. Cie cie udah 19 tahun nih xixi, satu tahun lagi sefvia umurnya 20 tahun woy wkwkwkwk dah tua. Ya aku lebih tua si hehe, tapi gapapa. Dengan umur sefvia yang baru ini, semoga menjadi sefvia yang baru juga ya dimana sefvia akan terus berpikir positif sehingga sefvia akan merasa hidupnya berwarna dan juga bermakna. Maaf ya untuk saat ini aku ga bisa nih kasih kamu hadiah secara langsung dengan alasan blom dikirim duit dan ya aku covid si. Sedih, tapi ya untuk saat ini web ini lah yang bisa aku persembahkan ke kamu. Kalo kata yutuber fav aku "bacot itu dicodingan bro", jadi yaudah aku terpikirkan untuk memberi mu ucapan ulang tahun melalui codingan juga hehe. Maaf ya UI nya jelek WKWKW. Yaudah itu aja pesan aku, I love You Sefvia.
                        </p>
                        <span className = 'closeModal' onClick={modalHandler}>&times;</span>
                    </div>
                </div>
            )}
            <div className = 'containterContent'>
                <div className = 'wrapperContent'>
                    <div className = 'responsiveImgWrapper'>
                        <img src = {foto1} alt = 'foto kamu' height = {'300px'} width = {'250px'} className = 'foto1 animation'/>
                        <img src = {foto2} alt = 'foto kamu' height = {'300px'} width = {'250px'} className = 'fotoResponsive animation'/>
                    </div>
                    <div className = 'celebrateTxt'>
                        <h1 data-aos = "slide-down" data-aos-duration = "1100">Happy Birthday</h1>
                        <h2 data-aos = "slide-down" data-aos-duration = "1100">Sefviaaaaa!!!!!!</h2>
                    </div>
                    <img src = {foto2} alt = 'foto kamu' height = {'300px'} width = {'250px'} className = 'foto2 animation'/>
                </div>
                <div className = 'containerPesan' onClick = {modalHandler}>
                    <FontAwesomeIcon icon = {faEnvelope} className = 'iconPesan' />
                </div>
            </div>
        </>
    )
}

export default Content