'use client'

import Image from 'next/image';
import styles from './index.module.css';
import Link from 'next/link';

import { Open_Sans, Oswald } from 'next/font/google'
import { useEffect, useState } from 'react';
import { HOST } from '../../utils';

const oswald = Oswald({
    weight: '400',
    subsets: ['latin'],
})

const openSans = Open_Sans({
    weight: '400',
    subsets: ['latin'],
})

type Imagen = {
    data: {
        id: number;
        attributes: {
            name: string;
            alternativeText: null | string;
            caption: null | string;
            width: number;
            height: number;
            formats: null | {
                large: {
                    ext: string;
                    url: string;
                    hash: string;
                    mime: string;
                    name: string;
                    path: null | string;
                    size: number;
                    width: number;
                    height: number;
                };
                small: {
                    ext: string;
                    url: string;
                    hash: string;
                    mime: string;
                    name: string;
                    path: null | string;
                    size: number;
                    width: number;
                    height: number;
                };
                medium: {
                    ext: string;
                    url: string;
                    hash: string;
                    mime: string;
                    name: string;
                    path: null | string;
                    size: number;
                    width: number;
                    height: number;
                };
                thumbnail: {
                    ext: string;
                    url: string;
                    hash: string;
                    mime: string;
                    name: string;
                    path: null | string;
                    size: number;
                    width: number;
                    height: number;
                };
            } | null;
            hash: string;
            ext: string;
            mime: string;
            size: number;
            url: string;
            previewUrl: null | string;
            provider: string;
            provider_metadata: null | string;
            createdAt: string;
            updatedAt: string;
        };
    };
};

type Atributos = {
    titulo: string;
    descripcion: string;
    link: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    imagen: Imagen;
};

type Elemento = {
    id: number;
    attributes: Atributos;
};

type ApiResponse = {
    data: Elemento[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
};


const Avances = () => {

    const [apoyos, setApoyos] = useState<Elemento[]>([]);

    useEffect(() => {
        const cargarDatosDeLaAPI = async () => {
            const apiUrl = HOST + '/api/avances?populate=*';
            const token = '47a9933aab61f0b7aad3f78f340ce7c5ecf4bc2f19cecef926ac71504a0f9559fff2902811d3f70a4fac3e4494d2164bc5267391a6f5a3d1af6c4a49333f123e44f98dfb6fc7258ceb00d2d952bafc366301ea95b63bf0810717394523c015a72a57b5a7a6d75983600d80c95bda7b491aea0c41a2ec5bb74d9099c640deee44';

            const options = {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            try {
                const response = await fetch(apiUrl, options);
                const data: ApiResponse = await response.json();
                setApoyos(data.data);
            } catch (error) {
                console.error(error);
            }
        };

        cargarDatosDeLaAPI();
    }, []);

    return (
        <section className={styles.container}>
            <h2 className={`text-center ${oswald.className}`}>Avances</h2>
            <div className='mt-2'>
                {apoyos.map((item: Elemento, index: number) => (
                    <div key={index}>
                        {item.attributes.link && (<Link href={item.attributes.link} target="_blank">
                            <article>
                                <Image
                                    src={HOST + item.attributes.imagen.data.attributes.url}
                                    alt={item.attributes.titulo}
                                    width={200} height={160}
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                />
                                <div>
                                    <h3 className={`${oswald.className}`}>{item.attributes.titulo}</h3>
                                    <p>{item.attributes.descripcion}</p>
                                    <span>Saber más</span>
                                </div>
                            </article>
                        </Link>)}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Avances;
