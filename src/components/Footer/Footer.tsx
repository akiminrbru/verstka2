import React, {FC} from 'react';
import styles from './Footer.module.scss';

interface FooterProps {
}

const Footer: FC<FooterProps> = () => (
    <footer className={styles.footer}>
        <div className={styles.footer__container}>
            <div className={styles.footer__inner}>
                <div className={styles.footer__content}>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Feedback</a></li>
                        <li><a href="#">Community</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Trust, Safety & Security</a></li>
                        <li><a href="#">Help & Support</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                        <li><a href="#">Desktop App</a></li>
                        <li><a href="#">Mobile App</a></li>
                    </ul>
                </div>
                <div>
                    <p>© 2020-2022 chat.io® Global Inc.</p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
