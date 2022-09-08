import React, {FC} from 'react';
import styles from './Header.module.scss';
import line from '../../assets/img/line.svg';
import headerPhoto from '../../assets/img/header.png';

interface HeaderProps {
}

const Header: FC<HeaderProps> = () => (
    <header className={styles.header}>
        <div className={styles.header__container}>
            <div className={styles.header__inner}>
                <nav className={styles.navigation}>
                    <div className={styles.navigation__logo}>
                        <h1>chat.io</h1>
                    </div>
                    <div className={styles.navigation__links}>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Demo</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Login</a></li>
                        </ul>
                        <img src={line} alt="line"/>
                        <button>Pricing & Free Trial</button>
                    </div>
                </nav>
                <div className={styles.header__content}>
                    <div className={styles.header__text}>
                        <h2>Have your <br/>
                            best chat
                        </h2>
                        <p>Fast, easy & unlimited team chat</p>
                        <div className={styles.header__btns}>
                            <button className={styles.header__btns__btn1}>Try it Free</button>
                            <button className={styles.header__btns__btn2}>Get a Demo</button>
                        </div>
                    </div>
                    <div>
                        <img src={headerPhoto} alt="header-photo"/>
                    </div>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
