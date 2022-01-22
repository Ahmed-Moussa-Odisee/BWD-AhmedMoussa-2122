import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import styles from '../../styles/Contact.module.css'

export default function Contact() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Contactez nous</title>

                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Navbar lang='nl' />
                <div className={styles.middlecontainer}>
                    <iframe width="280" height="280" id="gmap_canvas" src="https://maps.google.com/maps?q=Av.%20du%20Duc%20Jean,%201083%20Ganshoren&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    <div className={styles.texts}>
                        <h2>Contactez nous</h2>
                        <span className={styles.field}>
                            <strong>Email</strong>{' '}
                            <Link href="mailto: contact@acinter.group">
                                contact@acinter.group
                            </Link>
                        </span>
                        <span className={styles.field}>
                            <strong>Numéro de téléphone</strong>{' '}
                            <Link href="tel:0032485447402">
                                +32485447402
                            </Link>
                        </span>
                        <span className={styles.field}>
                            <strong>Whatsapp</strong>{' '}
                            <Link href="https://wa.me/32485447402">
                                +32485447402
                            </Link>
                        </span>
                        <span className={styles.field}>
                            <strong>Instagram</strong>{' '}
                            <Link href="https://instagram.com">
                                @ACInterGroup
                            </Link>
                        </span>
                    </div>
                </div>
            </main>

            <footer className="footer">
                <div className="footer__contacts">
                    <div className="footer__title">
                        Contacts
                    </div>
                    <ul className="footer-contacts">
                        <li>
                            <a>Avenue Du Duc Jean 55</a>
                        </li>
                        <li>
                            <a>1083 ganshoren</a>
                        </li>
                        <li>
                            <a href="tel:0032485447402">+32485447402</a>
                        </li>
                        <li>
                            <a href="mailto: contact@acinter.group">sales@shop.com</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__socials">
                    <div className="footer__title">Social Networks</div>
                    <div className="social-icons">
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" title="instagram" className="instagram"></a>
                        <a href="https://wa.me/32485447402" target="_blank" rel="noreferrer" title="whatsapp" className="whatsapp"></a>
                        <a href="mailto: contact@acinter.group" target="_blank" rel="noreferrer" title="email" className="email"></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
