import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Aboutus.module.css'

export default function Aboutus() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About us</title>

                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Navbar />
                <div className={styles.product}>
                    <img className={styles.img} src="/logo.jpeg" alt="Miel omg"></img>
                    <div className={styles.texts}>
                        <h2>AC Bien-être</h2>
                        <p className='aboutustext'>Découvrez AC Bien-être, une marque belge née d’une passion pour les produits naturels. Spécialiste dans la recherche et le développement des produits de la ruche et autres miracles de la nature, venez visiter notre site et parcourez nos valeurs et engagements. La garantie de la qualité est au cœur de nos préoccupations et notre développement est une garantie pour vous.</p>
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
