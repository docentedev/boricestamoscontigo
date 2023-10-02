import Image, { StaticImageData } from 'next/image'
import { Open_Sans, Oswald } from 'next/font/google'
import Link from 'next/link';
import Script from 'next/script';

import styles from './page.module.css'
import mainImage from './images/main.png'
import Card from './Card';

import tiktok_AtJusticieroAnonimo from './users/tiktok_@justiciero.anonimo.jpeg';
import tiktok_AtClaudiodeviaje from './users/tiktok_@claudiodeviaje.jpeg';
import tiktok_AtLoretoAPC from './users/tiktok_@loreto.a.p.c.jpeg';
import tiktok_AtMarianiits_ from './users/tiktok_@marianiits_.jpeg';
import tiktok_AtZurda38porciento from './users/tiktok_@zurda38porciento.jpeg';
import tiktok_AtManque1978 from './users/tiktok_@manque1978.jpeg';

import Footer from './Footer';

const openSans = Open_Sans({
  weight: '400',
  subsets: ['latin'],
})

const oswald = Oswald({
  weight: '400',
  subsets: ['latin'],
})

type SupportingUser = {
  username: string,
  image: StaticImageData,
  link: string,
}

const usersWhoSupport: SupportingUser[] = [{
  username: '@justiciero.anonimo',
  image: tiktok_AtJusticieroAnonimo,
  link: 'https://www.tiktok.com/@justiciero.anonimo/video/7284627625425849606',
}, {
  username: '@claudiodeviaje',
  image: tiktok_AtClaudiodeviaje,
  link: 'https://www.tiktok.com/@claudiodeviaje/video/7284630001217998086',
}, {
  username: '@loreto.a.p.c',
  image: tiktok_AtLoretoAPC,
  link: 'https://www.tiktok.com/@loreto.a.p.c/video/7285087429239786758?lang=es',
}, {
  username: '@marianiits_',
  image: tiktok_AtMarianiits_,
  link: 'https://www.tiktok.com/@marianiits_/video/7284669192681311494?lang=es',
}, {
  username: '@zurda38porciento',
  image: tiktok_AtZurda38porciento,
  link: 'https://www.tiktok.com/@zurda38porciento/video/7283913328940862725?lang=es',
}, {
  username: '@manque1978',
  image: tiktok_AtManque1978,
  link: 'https://www.tiktok.com/@manque1978/video/7283198729128054021?lang=es',
}];

export default function Home() {
  return (
    <main className={`${styles.main}`}>
      <header>
        <div>
          <div>
            <h1 className={`${oswald.className}`}>Boric estamos contigo</h1>
            <h2 className={`${oswald.className}`}>Presidente 2022 - 2026</h2>
          </div>
          <div>
            <Image
              src={mainImage}
              alt="Fotografia oficial presidente Boric"
              sizes="500"
              fill
              style={{
                objectFit: 'cover',
              }} />
          </div>
        </div>
      </header>
      <section className={`${openSans.className}`}>
        <Card />
      </section>
      <section>
        <h2 className={`text-center ${oswald.className} mt-4`}>Nosotros apoyamos al presidente</h2>
        <div className={`row ${openSans.className}`}>
          <div className="col">
            <div className={styles.supportingUserContainer}>
              {usersWhoSupport.map((e: SupportingUser, i: number) => (
                <Link href={e.link} target='_blank' key={i}>
                  <article className={styles.supportingUser}>
                    <Image src={e.image} width={80} height={80} alt={e.username} />
                    <h3>{e.username}</h3>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className={`row ${openSans.className}`}>
        <Footer />
      </div>
      {'<!-- Google tag (gtag.js) -->'}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-5LQPVHP6RD" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'G-5LQPVHP6RD');
        `}
      </Script>
    </main>
  )

}
