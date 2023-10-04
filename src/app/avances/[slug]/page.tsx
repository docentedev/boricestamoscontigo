import Image from 'next/image'
import { HOST, TOKEN } from '@/utils';
import { remark } from 'remark';
import html from 'remark-html';

import Footer from '@/components/footer/Footer';
import { Avance, initial } from './types';
import Menu from '@/components/menu/Menu';

import styles from './page.module.css';

const avanceApi = async (slug: string) => {
    const apiUrl = `${HOST}/api/avances?populate=*&filters[slug][$eq]=${slug}`;
    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${TOKEN}`,
        },
    };

    try {
        const response = await fetch(apiUrl, options);
        const data: { data: Avance[] } = await response.json();
        if (data.data.length === 1) return data.data[0];
        return initial;
    } catch (error) {
        return initial;
    }
};

export default async function Page({ params: { slug } }: { params: { slug: string } }) {
    const avance: Avance = await avanceApi(slug);

    const processedContent = await remark()
        .use(html)
        .process(avance.attributes.contenido);
    const contentHtml = processedContent.toString();

    return (
        <>
            <Menu />
            <section className={`container ${styles.container}`}>
                <div className="row">
                    <div className="col-12 col-md-8 offset-md-2">
                        <header>
                            <Image
                                src={HOST + avance.attributes.imagen.data.attributes.url}
                                alt={avance.attributes.titulo}
                                width={100}
                                height={100}
                            />
                            <h1>{avance.attributes.titulo}</h1>
                        </header>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-8 offset-md-2">
                        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
