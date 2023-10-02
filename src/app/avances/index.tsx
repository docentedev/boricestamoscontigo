import Image, { StaticImageData } from 'next/image';
import styles from './index.module.css';
import copago0Image from './images/copago0.png';
import ley40HorasImage from './images/ley40Horas.png';
import aumentoSueldoMinimoImage from './images/aumentoSueldoMinimo.png';
import Link from 'next/link';

import { Open_Sans, Oswald } from 'next/font/google'

const oswald = Oswald({
    weight: '400',
    subsets: ['latin'],
})

const openSans = Open_Sans({
    weight: '400',
    subsets: ['latin'],
})

type Item = {
    title: string;
    link: string;
    image: StaticImageData;
    description: string;
}

const items: Item[] = [{
    title: 'Copago 0',
    link: 'https://www.gob.cl/copagocero/',
    image: copago0Image,
    description: 'Porque nuestro compromiso como Gobierno es fortalecer la Salud Pública y garantizar...',
}, {
    title: 'Ley 40 Horas',
    link: 'https://www.gob.cl/noticias/publicacion-diario-oficial-ley-40-horas-reduccion-jornada-laboral-comienza-vigencia/',
    image: ley40HorasImage,
    description: 'La nueva normativa ya se encuentra vigente y comenzará a regir de forma gradual.',
}, {
    title: 'Aumento sueldo mínimo',
    link: 'https://msgg.gob.cl/wp/2023/08/31/sueldo-minimo-llegara-a-los-460-mil-a-partir-del-1-de-septiembre/#:~:text=En%20efecto%2C%20el%20aumento%20del,mil%20en%20julio%20de%202024.',
    image: aumentoSueldoMinimoImage,
    description: 'Desde este viernes 1 de septiembre, [...] hasta llegar a los $500.000 en 2024...',
}]

const Avances = () => {
    return (
        <section className={styles.container}>
            <h2 className={`text-center ${oswald.className}`}>Avances</h2>
            <div className='mt-2'>
                {items.map((item, index: number) => (
                    <div key={index}>
                        <Link href={item.link} target="_blank">
                            <article>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                />
                                <div>
                                    <h3 className={`${oswald.className}`}>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <span>Saber más</span>
                                </div>
                            </article>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Avances;
