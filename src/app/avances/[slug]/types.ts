export const initial: Avance = {
    id: 8,
    attributes: {
        titulo: '',
        descripcion: '',
        link: '',
        createdAt: '2023-10-03T23:54:09.843Z',
        updatedAt: '2023-10-03T23:54:15.453Z',
        publishedAt: '2023-10-03T23:54:15.450Z',
        contenido: '',
        slug: '',
        articulo: true,
        imagen: {
            data: {
                id: 0,
                attributes: {
                    name: '',
                    alternativeText: null,
                    caption: null,
                    width: 0,
                    height: 0,
                    formats: null,
                    hash: '',
                    ext: '',
                    mime: '',
                    size: 0,
                    url: '',
                    previewUrl: null,
                    provider: '',
                    provider_metadata: null,
                    createdAt: '',
                    updatedAt: ''
                }
            }
        }
    }
};

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

export type Avance = {
    id: number;
    attributes: {
        titulo: string;
        descripcion: string;
        link: string | null;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        contenido: string;
        slug: string;
        articulo: boolean;
        imagen: Imagen;
    };
};