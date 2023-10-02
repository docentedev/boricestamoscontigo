import React from 'react';
import { roboto } from './page';

function Card() {
    return (
        <div className="card card-video">
            <div className="card-img-top">
                <iframe
                    src="https://www.youtube.com/embed/6YZSk93MgOA?si=4-gl8_Sjyb8Ktw7k"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen />
            </div>

            <div className={`card-body ${roboto.className}`}>
                <h5 className="card-title">Discurso del Presidente Boric durante la histórica convocatoria ciudadana del 30/09</h5>
                <p className="card-text">Discurso del Presidente Boric durante la histórica convocatoria ciudadana del 30/09, en la Plaza de la Constitución. Agradecimientos a todos los que asistieron a los distintos puntos de encuentro a nivel nacional, vamos ganando experiencia, esto recién comienza #BoricEstamosContigo #Boricnoestasolo</p>
            </div>
        </div>
    );
}

export default Card;
