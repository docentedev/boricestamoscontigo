'use client'

import Image from 'next/image'
import { Open_Sans, Oswald } from 'next/font/google'
import Link from 'next/link';
import styles from './index.module.css'
import { useEffect, useState } from 'react';
import { HOST, TOKEN } from '@/utils';

const openSans = Open_Sans({
    weight: '400',
    subsets: ['latin'],
})

const oswald = Oswald({
    weight: '400',
    subsets: ['latin'],
})

export type Apoyo = {
    id: number;
    attributes: {
        nombreDeUsuario: string;
        link: string;
        imagen: {
            data: {
                attributes: {
                    url: string;
                };
            };
        };
    };
};

const Apoyos = () => {
    const [apoyos, setApoyos] = useState([]);

    useEffect(() => {
        const cargarDatosDeLaAPI = async () => {
            const apiUrl = HOST + '/api/apoyos?populate=*';
            const options = {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${TOKEN}`,
                },
            };

            try {
                const response = await fetch(apiUrl, options);
                const data = await response.json();
                setApoyos(data.data);
            } catch (error) {
                console.error(error);
            }
        };

        cargarDatosDeLaAPI();
    }, []);

    return (
        <section className="container">
            <h2 className={`text-center ${oswald.className} mt-4`}>Nosotros apoyamos al presidente</h2>
            <h3 className={styles.followLink}>
                Si tú también apoyas al presidente,{' '}
                <Link target="_blank" href="https://www.tiktok.com/@claudiodeviaje">
                    contáctame aquí
                </Link>{' '}
                y sé parte de un grupo de ciudadanos que queremos hacer grande a Chile 🇨🇱
            </h3>
            <div className={`row ${openSans.className}`}>
                <div className="col">
                    <div className={styles.supportingUserContainer}>
                        {apoyos.map((e: Apoyo) => (
                            <a href={e.attributes.link} target="_blank" key={e.id} rel="noopener noreferrer">
                                <article className={styles.supportingUser}>
                                    <Image src={HOST + e.attributes.imagen.data.attributes.url} width={100} height={100} alt={e.attributes.nombreDeUsuario} />
                                    <h3>{e.attributes.nombreDeUsuario}</h3>
                                </article>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Apoyos;
