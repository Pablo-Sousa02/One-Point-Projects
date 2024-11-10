import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook size={30} color="#3b5998" />
                </li>
                <li>
                    <FaInstagram size={30} color="#E4405F" />
                </li>
                <li>
                    <FaLinkedin size={30} color="#0077b5" />
                </li>
            </ul>
            <p className={styles.copy_right}>
                <a href="/"> <span>One Point Projects </span></a> &copy; 2024
            </p>
        </footer>
    ); 
}

export default Footer;
