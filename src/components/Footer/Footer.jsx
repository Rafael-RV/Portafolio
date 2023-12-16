import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-section section-padding'>
                <div className='footer-links'>
                    <h4>Inicio</h4>
                </div>

                <div className='footer-links'>
                    <h4>Proyectos</h4>
                </div>
                <div className='footer-links'>
                    <h4>Contacto</h4>
                
                    <a href="/linkedin">
                        <p><span> <ion-icon name="logo-linkedin"> </ion-icon> </span> LinkedIn</p>
                    </a>
                    <a href="/https://github.com/Rafael-RV">
                        <p> <span><ion-icon name="logo-github"></ion-icon></span> GitHub </p>
                   
                    </a>
                </div>

                <hr></hr>

                <div className='footer-below'>
                    <div className='footer-copyright'>
                        <p>
                            @{new Date().getFullYear()} RAFAEL RINCON
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;
