import Image from 'next/image'
import { Roboto, Oswald } from 'next/font/google'
import { TwitterTweetEmbed } from 'react-twitter-embed';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const oswald = Oswald({
  weight: '400',
  subsets: ['latin'],
})

import styles from './page.module.css'
import mainImage from './images/main.png'
import Card from './Card';

export default function Home() {
  return (
    <main className={`${styles.main} ${roboto.className} ${oswald.className}`}>
      <header>
        <div>
          <div>
            <h1>Boric estamos contigo</h1>
            <h2>Presidente 2022 - 2026</h2>
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
      <section>
        <article>
        </article>
      </section>
      <Card />
    </main>
  )

}
