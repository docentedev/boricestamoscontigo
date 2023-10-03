import Image, { StaticImageData } from 'next/image'
import { Open_Sans, Oswald } from 'next/font/google'
import Script from 'next/script';

import styles from './page.module.css'
import mainImage from './images/main.png'
import Card from './Card';

import Footer from './Footer';
import Avances from './avances';
import Apoyos from './apoyos';

const openSans = Open_Sans({
  weight: '400',
  subsets: ['latin'],
})

const oswald = Oswald({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={`${styles.main} ${openSans.className}`}>
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
      <div className={openSans.className}>
        <Avances />
        <Apoyos />
        <Footer />
      </div>
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
