import Image from 'next/image';
import styles from './index.module.css';
import Link from 'next/link';

import { Oswald } from 'next/font/google'
import { HOST } from '../../utils';

const oswald = Oswald({
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
    slug: string;
    articulo: boolean | null;
};

type Elemento = {
    id: number;
    attributes: Atributos;
};

const Avances = ({ data: avances }: { data: Elemento[] }) => {
    return (
        <section className={styles.container}>
            <h2 className={`text-center ${oswald.className}`}>Avances</h2>
            <div className='mt-2'>
                {avances.map((item: Elemento, index: number) => {
                    const linkProps = item.attributes.articulo ? { href: '' } : { href: '', target: '_blank' }
                    linkProps.href = item.attributes.articulo ? `/avances/${item.attributes.slug}` : item.attributes.link
                    return (
                        <div key={index}>
                            <Link {...linkProps}>
                                <article>
                                    <Image
                                        src={HOST + item.attributes.imagen.data.attributes.url}
                                        alt={item.attributes.titulo}
                                        width={100}
                                        height={100}
                                    />
                                    <div>
                                        <h3 className={`${oswald.className}`}>{item.attributes.titulo}</h3>
                                        <p>{item.attributes.descripcion}</p>
                                        <span>Saber más</span>
                                    </div>
                                </article>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </section >
    )
}

export default Avances;
