import Link from "next/link";
import styles from './Menu.module.css';

var Menu = () => {
    return (
        <div className={styles.menu}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-lg navbar-light text-light">
                            <Link className='navbar-brand' href="/">
                                B
                            </Link>
                            <div>
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <Link className='nav-link' href="/">
                                            Inicio
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;