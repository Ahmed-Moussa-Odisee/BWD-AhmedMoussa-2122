import Head from 'next/head'
import { useRef } from 'react'
import Navbar from '../../components/Navbar'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  const imagecontainerref = useRef()
  const scroll = (direction) => {
    let far = imagecontainerref.current.clientWidth / 2 * direction;
    let pos = imagecontainerref.current.scrollLeft + far;
    imagecontainerref.current.scrollTo({
      left: pos,
      behavior: "smooth"
    });
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>AC Inter group</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar lang='fr' />
        <div className={styles.maincontainer}>
          <div className={styles.texts}>
            <h2>AC INTER GROUP</h2>
            <h4>Import de produits naturels</h4>
          </div>
          <img src='/back.jpeg' className={styles.backimg} alt='Background'></img>
        </div>
        <h2 className={styles.title}>Our Products</h2>
        <div className={styles.types}>
          <a className={styles.prev} onClick={(e) => scroll(-2)}>&#10094;</a>
          <div className={styles.imagecontainer} ref={imagecontainerref}>
            <Link href="/products?type=1">
              <div className={styles.image} data-name="Miels naturels">
                <img className={styles.img} src='/mielnaturel.jpg' alt="Miels naturel"></img>
              </div>
            </Link>
            <Link href="/products?type=2">
              <div className={styles.image} data-name="Produits de la ruche">
                <img className={styles.img} src='https://cdn.webshopapp.com/shops/264770/files/385468092/745x745x1/produits-de-la-ruche.jpg' alt="Produits de la ruche"></img>
              </div>
            </Link>
            <Link href="/products?type=3">
              <div className={styles.image} data-name="Huiles">
                <img className={styles.img} src='/huile.jpg' alt="Huiles"></img>
              </div>
            </Link>
          </div>
          <a className={styles.next} onClick={(e) => scroll(2)}>&#10095;</a>
        </div>
        <h2 className={styles.title}>Our Products of the moment</h2>
        <Link href="/products?id=2">
          <div className={styles.product}>
            <img className={styles.img} src="/mieljujubier.png" alt="Miel jujubier"></img>
            <div className={styles.texts}>
              <h2>Miel de jujubier</h2>
              <p>Le Miel de Jujubier est doux avec une saveur incomparable. Il est très efficace contre les pathologies hépatiques. Connu pour guérir les affections cutanées et le diabète, il aurait également des propriétés aphrodisiaques.</p>
            </div>
          </div>
        </Link>
        <Link href="/products?id=2">
          <div className={styles.product}>
            <div className={styles.texts}>
              <h2>Miel de manuka</h2>
              <p>Le miel de Manuka est un type de miel qui provient de l&apos;arbre Manuka qui se développe dans les régions d&apos;Australie et de Nouvelle-Zélande. Une substance est extraite de l&apos;arbre, puis est transformée en miel.</p>
            </div>
            <img className={styles.img} src="/mielmanuka.jpg" alt="Miel manuka"></img>
          </div>
        </Link>
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
              <a href="mailto: contact@acinter.group">contact@acinter.group</a>
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
