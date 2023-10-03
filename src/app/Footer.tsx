import Link from 'next/link';
import styles from './Footer.module.css';
import { Open_Sans, Oswald } from 'next/font/google'

const oswald = Oswald({
    weight: '400',
    subsets: ['latin'],
})

const openSans = Open_Sans({
    weight: '400',
    subsets: ['latin'],
  })

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={openSans.className}>
                <div className="row">
                    <div className="col-md-4 d-flex align-items-center">
                        <h4 className="mb-3 mb-md-0Z">Boric estamos contigo (CC) {new Date().getFullYear()}</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-8 mb-2">
                        No tenemos ninguna relación con el gobierno, todo el dinero para lograr esto, sale de nuestros bolsillos y no aceptamos aportes monetarios. Si nos quieres ayudar que sea con tu trabajo, con tu mente, con tu pasión, con tus palabras.
                    </div>
                    <div className="col-12 col-md-4 text-end">
                        <Link className={oswald.className} target="_blank" href="https://forms.gle/MfeksEtsTVciK4ak6">
                            Participa aquí
                        </Link>
                    </div>
                </div>
                {/*<ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
                    <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
                    <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
    </ul>*/}
            </div>
        </footer>
    );
}

export default Footer;
