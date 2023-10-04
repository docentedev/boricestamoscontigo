export async function generateStaticParams({
    params: { slug },
}: {
    params: { slug: string }
}) {
    const products: never[] = [];

    return products;
}

export default function Page({
    params,
}: {
    params: { slug: string }
}) {
    return (
        <h1>Hola</h1>
    )
}