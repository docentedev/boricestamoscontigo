'use client'

import React from 'react';
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"
import styles from './Card.module.css';

function Card() {
    return (
        <div className="card card-video">
            <div className="card-img-top">
                <LiteYouTubeEmbed
                    aspectHeight={9}
                    aspectWidth={16}
                    id="6YZSk93MgOA"
                    title="YouTube video player"
                />
            </div>

            <div className={`card-body`}>
                <h3 className={`card-title ${styles.title}`}>Discurso del Presidente Boric durante la histórica convocatoria ciudadana del 30/09</h3>
                <p className={`card-title ${styles.text}`}>Discurso del Presidente Boric durante la histórica convocatoria ciudadana del 30/09, en la Plaza de la Constitución. Agradecimientos a todos los que asistieron a los distintos puntos de encuentro a nivel nacional, vamos ganando experiencia, esto recién comienza #BoricEstamosContigo #Boricnoestasolo</p>
            </div>
        </div>
    );
}

export default Card;
