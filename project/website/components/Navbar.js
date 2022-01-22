import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar({ lang }) {
    if (lang == "fr") {
        return (
            <div className={styles.navbar}>
                <Link href="/fr/">
                    <a className={styles.link}>Accueil</a>
                </Link>
                <Link href="/fr/products">
                    <a className={styles.link}>Produits</a>
                </Link>
                <Link href="/fr/aboutus">
                    <a className={styles.link}>Nos marques</a>
                </Link>
                <Link href="/fr/contact">
                    <a className={styles.link}>Contact</a>
                </Link>
                <div className={styles.langs}>
                    <Link href="../fr/">
                        <a className={styles.link}>FR</a>
                    </Link >
                    /
                    <Link href="../">
                        <a className={styles.link}>EN</a>
                    </Link >
                    /
                    <Link href="../nl/">
                        <a className={styles.link}>NL</a>
                    </Link>
                </div>
            </div>
        )
    } else if (lang == "nl") {
        return (
            <div className={styles.navbar}>
                <Link href="/nl/">
                    <a className={styles.link}>Home</a>
                </Link>
                <Link href="/nl/products">
                    <a className={styles.link}>Producten</a>
                </Link>
                <Link href="/nl/aboutus">
                    <a className={styles.link}>Onze merken</a>
                </Link>
                <Link href="/nl/contact">
                    <a className={styles.link}>Contact</a>
                </Link>
                <div className={styles.langs}>
                    <Link href="../fr/">
                        <a className={styles.link}>FR</a>
                    </Link >
                    /
                    <Link href="../">
                        <a className={styles.link}>EN</a>
                    </Link >
                    /
                    <Link href="../nl/">
                        <a className={styles.link}>NL</a>
                    </Link>
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.navbar}>
                <Link href="/">
                    <a className={styles.link}>Home</a>
                </Link>
                <Link href="/products">
                    <a className={styles.link}>Products</a>
                </Link>
                <Link href="/aboutus">
                    <a className={styles.link}>Our brands</a>
                </Link>
                <Link href="/contact">
                    <a className={styles.link}>Contact</a>
                </Link>
                <div className={styles.langs}>
                    <Link href="../fr/">
                        <a className={styles.link}>FR</a>
                    </Link >
                    /
                    <Link href="../">
                        <a className={styles.link}>EN</a>
                    </Link >
                    /
                    <Link href="../nl/">
                        <a className={styles.link}>NL</a>
                    </Link>
                </div>
            </div>
        )
    }
}