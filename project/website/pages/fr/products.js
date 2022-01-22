import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar'
import styles from '../../styles/Products.module.css'
export async function getStaticProps() {
    return {
        props: {
            products: [
                {
                    id: "1",
                    type: "Miels naturels",
                    image: "https://media.istockphoto.com/photos/chestnut-honey-picture-id496518370?k=20&m=496518370&s=612x612&w=0&h=fW_6Icu5JuNp-GDLOcoOTZ1pLoTU57PoYDlNax7rSu8=",
                    description: "Le miel de châtaignier est un produit qui porte le nom de son arbre d'origine. Les Castanea sativa Mill, de la famille des fagacées, comme le chêne et le hêtre, sont de grands producteurs de pollen. Ces arbres sont surtout connus pour secréter du miellat et non du nectar.",
                    name: "Miel chataigne"
                },
                {
                    id: "2",
                    type: "Miels naturels",
                    image: "/mieljujubier.png",
                    description: "Le Miel de Jujubier est doux avec une saveur incomparable. Il est très efficace contre les pathologies hépatiques. Connu pour guérir les affections cutanées et le diabète, il aurait également des propriétés aphrodisiaques.",
                    name: "Miel jujubier"
                },
                {
                    id: "3",
                    type: "Miels naturels",
                    image: "https://media.istockphoto.com/photos/honey-jar-on-vintage-wooden-table-top-side-view-with-copy-space-picture-id1218258340?k=20&m=1218258340&s=612x612&w=0&h=FqPNfcLhL15BF2_lpmltSrs1i8BN8FNbgqn8-Ads478=",
                    description: "Un miel de fleurs très parfumé qui dégage un arôme discret. Ce miel traduit la richesse de son environnement, la montagne de basse altitude. Les abeilles ont butiné des fleurs de montagne comme le framboisier, la ronce, le trèfle blanc et les fleurs de prairies.",
                    name: "Miel montagne"
                },
                {
                    id: "4",
                    type: "Miels naturels",
                    image: "/mielblanc.jpg",
                    description: "Sa rareté, sa couleur blanche sa douceur en bouche est comme un sucre naturel au parfum délicat fleuri, à la texture délicate et un goût en bouche très fin. C'est l'une des plus rares variété de miel de notre planète. Goût : Très sucré et doux.",
                    name: "Miel blanc kirzighstan"
                },
                {
                    id: "5",
                    type: "Miels naturels",
                    image: "https://media.istockphoto.com/photos/honeycomb-cut-with-a-knife-thick-honey-dripping-down-honeycomb-picture-id1316096186?k=20&m=1316096186&s=612x612&w=0&h=tIc8_zpIVuMWqDQKZauhnmFEjoRRiw7imy2if3x4M2g=",
                    description: "Le miel de Manuka est un type de miel qui provient de l’arbre Manuka qui se développe dans les régions d’Australie et de Nouvelle-Zélande. Une substance est extraite de l'arbre, puis est transformée en miel.",
                    name: "Miel manuka"
                },
                {
                    id: "6",
                    type: "Miels naturels",
                    image: "/mieloranger.jpg",
                    description: "Le miel d’oranger est ce que l’on appelle un miel monofloral car il provient d’une récolte issue presque exclusivement des fleurs et donc du nectar des orangers. Comme les autres produits de la ruche (gelée royale, pollen), il contient beaucoup de minéraux et vitamines nécessaires au bon fonctionnement de l’organisme et de l’immunité. Il est, en effet, naturellement riche en zinc, manganèse, magnésium, calcium, potassium et sodium.",
                    name: "Miel oranger"
                },
                {
                    id: "7",
                    type: "Miels naturels",
                    image: "https://media.istockphoto.com/photos/honey-in-a-wooden-spoon-and-jar-picture-id498169255?k=20&m=498169255&s=612x612&w=0&h=OkJQ0wCfPEskMeWMAZhcKiOaPyw7TNklPeqZ1Lpn9RY=",
                    description: "Les bienfaits du miel de thym sont nombreux. C'est tout d'abord un antiseptique puissant, reconnu pour la prévention des maladies infectieuses, respiratoires et digestives. Il est aussi tonifiant et facilite la récupération physique. Ces deux propriétés en font un excellent remède complémentaires en cas de grippe.",
                    name: "Miel thym"
                },
                {
                    id: "8",
                    type: "Miels naturels",
                    image: "https://media.istockphoto.com/photos/honey-in-jar-and-bunch-of-dry-lavender-picture-id598241944?k=20&m=598241944&s=612x612&w=0&h=lkN1XONO9ItsxJceKmW9z9SEUbGK1pnvMNZqwJ9QXcw=",
                    description: "Le miel de lavande est très apprécié, notamment pour ses multiples bienfaits sur la santé humaine. C'est un produit naturel antirhumatismal, antispasmodique, antiseptique et anti-inflammatoire. Il calme la toux et aide à soigner les brûlures, la bronchite, l'angine, la grippe, les plaies infectées, l'hypertension, etc.",
                    name: "Miel lavande"
                },
                {
                    id: "9",
                    type: "Huiles",
                    image: "https://media.istockphoto.com/photos/glass-bottle-of-coconut-oil-with-fresh-coconut-fruit-on-rustic-picture-id1191964587?k=20&m=1191964587&s=612x612&w=0&h=yYda6Id7yzOaBIAjMNkPh9qJao5ll2dh78FuSj1yx3Q=",
                    description: "Hydratante, apaisante, antioxydante… l'huile de coco regorge de bienfaits. Elle s'utilise sans modération sur la peau, sur les cheveux, et peut se substituer à de nombreux produits de beauté. Elle remplace en effet parfaitement le démaquillant, le dentifrice, le déodorant, les masques capillaires et la crème de jour.",
                    name: "Huile de coco"
                },
                {
                    id: "10",
                    type: "Huiles",
                    image: "https://media.istockphoto.com/photos/castor-beans-and-oil-picture-id519829708?k=20&m=519829708&s=612x612&w=0&h=mT4-JpScN8DsdNSFmieS6bmdOBv4D6ZLDXjm1i0Cz_U=",
                    description: "L'huile de ricin réduit l'acné, hydrate en profondeur, atténue les rides et ridules, calme les démangeaisons, réduit les tâches brunes présentes sur le visage et les mains, efface les vergetures et désinfecte les petites plaies. Le top pour les petits casse-cou de la maison. Adieu crevasses, sécheresses et gerçures !",
                    name: "Huile de ricin"
                },
                {
                    id: "11",
                    type: "Huiles",
                    image: "https://media.istockphoto.com/photos/fenugreek-seeds-with-oil-in-bottle-picture-id1153997837?k=20&m=1153997837&s=612x612&w=0&h=iN1BAe2F-AwHE1N-HVADbnfaO1KabQvx1ljbARqBul0=",
                    description: "L'huile de fenugrec peut être appliquée en bain d'huile capillaire, en sérum pour le cuir chevelu ou dans des shampoings et après-shampoings. Riche en antioxydant, elle aide la peau à lutter contre les dommages liés aux radicaux libres et à prévenir les signes de l'âge.",
                    name: "Huile de fenugrec"
                },
                {
                    id: "12",
                    type: "Huiles",
                    image: "https://media.istockphoto.com/photos/bottle-of-almond-oil-and-almonds-in-wooden-bowl-picture-id1301372626?k=20&m=1301372626&s=612x612&w=0&h=crg_NEXipK86AzMAvccEtmoVwmIjrZCeGhvmrDdisXc=",
                    description: "Pénétrant facilement les couches supérieures de l'épiderme et nourrissant tous les types de peaux, l'huile d'amande douce est particulièrement recommandée pour les peaux sèches et irritées. Les oméga-9 qu'elle renferme jouent un rôle dans le maintien de sa souplesse.",
                    name: "Huile d’amande douce"
                },
                {
                    id: "13",
                    type: "Huiles",
                    image: "https://media.istockphoto.com/photos/oil-of-mustard-in-a-small-jar-picture-id500479042?k=20&m=500479042&s=612x612&w=0&h=p6mbCyl2n3jQF8BnKYv-qYdW1wUrg608kjwYAZPofco=",
                    description: "L'huile de Moutarde est reconnue pour son action tonifiante, raffermissante et stimulante de la circulation sanguine. Elle est utilisée en soin diluée dans une autre huile végétale pour raffermir le buste et également en soins minceurs.",
                    name: "Huile de moutarde"
                },
                {
                    id: "14",
                    type: "Huiles",
                    image: "https://media.istockphoto.com/photos/rose-essential-oil-picture-id1198752730?k=20&m=1198752730&s=612x612&w=0&h=i0RAA9dR59zGBwIsU0miHTqxhn_Xxcx1m8pTcx2qAOk=",
                    description: "Ses vertus astringentes, revitalisantes et cicatrisantes en font une huile très précieuse pour améliorer l'acné, les brûlures légères, la couperose, les dermatoses, les peaux fatiguées et les rides, ainsi que pour revitaliser la peau.",
                    name: "Huile de rose"
                },
                {
                    id: "15",
                    type: "Huiles",
                    image: "https://media.istockphoto.com/photos/garlic-with-olive-oil-and-herbs-picture-id842832876?k=20&m=842832876&s=612x612&w=0&h=NcS7UXPOFeUhq29n2iONYfdYS_6IbFW85L0QIrzVTvg=",
                    description: "Les effets bénéfiques de l'huile essentielle d'ail sur le cholestérol sanguin et la coagulation couplé à son statut d'antioxydant la rendent intéressante pour prévenir et traiter les troubles du rythme cardiaque ainsi que l'hypertension.",
                    name: "Huile d’ail"
                },
                {
                    id: "16",
                    type: "Huiles",
                    image: "https://media.istockphoto.com/photos/healthy-sesame-oil-in-glass-bottle-and-sesame-seeds-on-wooden-copy-picture-id1202975994?k=20&m=1202975994&s=612x612&w=0&h=Rl-Mf1vNHvmDiL_iQsKpYWdj6pdIIQFkWgIAtpRZWTY=",
                    description: "L'huile de sésame pénètre rapidement sous la peau et la nourrit en profondeur. Elle fait donc une excellente huile de massage qui permet de maintenir la peau souple et élastique, de la protéger des microbes et d'accélérer la cicatrisation.",
                    name: "Huile de sésame"
                },
                {
                    id: "17",
                    type: "Produits de la ruche",
                    image: "/geleeroyale.jpg",
                    description: "En complément alimentaire, la gelée royale est utilisée pour réduire les symptômes de la ménopause, la fatigue physique et intellectuelle, le stress, mais aussi pour renforcer l'immunité.",
                    name: "Gelée royale"

                },
                {
                    id: "18",
                    type: "Produits de la ruche",
                    image: "https://media.istockphoto.com/photos/propolis-granules-poured-out-of-the-jar-picture-id627668616?k=20&m=627668616&s=612x612&w=0&h=Cdg1EzV7yoVbUP8s4M71ZSR7AZDKWPvEkXlCfGZU9Z4=",
                    description: "La Propolis est une substance résineuse récoltée par les abeilles, située à l'extérieur des plantes sur les bourgeons et les écorces auxquelles elles ajoutent leur salive et de la cire. Elle leur permet notamment de calfeutrer la ruche et de protéger les cellules du couvain des agressions extérieures.",
                    name: "Propolis"
                },
                {
                    id: "19",
                    type: "Produits de la ruche",
                    image: "/pollen.jpg",
                    description: "Le Pollen frais est riche en fibres, en protéines, en Sélénium – qui contribue au fonctionnement normal du système immunitaire, et en Thiamine et Riboflavine – qui contribuent à un métabolisme énergétique normal et au fonctionnement normal du système nerveux.",
                    name: "Pollen"
                }

            ]
        }
    }
}
export default function Products({ products }) {
    const [type1, settype1] = useState(true);
    const [type2, settype2] = useState(true);
    const [type3, settype3] = useState(true);
    const router = useRouter()
    useEffect(function () {
        if (!router.isReady) return;
        console.log(router)
        if (router.query.type) {
            settype1(false)
            settype2(false)
            settype3(false)
            if (router.query.type == '1') {
                settype1(true)
            }
            else if (router.query.type == '2') {
                settype2(true)
            }
            else if (router.query.type == '3') {
                settype3(true)
            }
        }
        if (router.query.id) {
            setselectedproduct(router.query.id)
        }
    }, [router.isReady])

    const [selectedproduct, setselectedproduct] = useState("");
    const [search, setsearch] = useState("");
    return (
        <div className={styles.container}>
            <Head>
                <title>Products</title>

                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Navbar lang='fr' />
                <div className={styles.maincontainer}>
                    <div className={styles.filter}>
                        <h2>Filtres</h2>
                        <input type="search" className={styles.input} value={search} placeholder='Search' onChange={(e) => setsearch(e.target.value)}></input>
                        <br></br>
                        <br></br>
                        <input type="checkbox" id="type1" checked={type1} onChange={(e) => settype1(e.target.checked)}></input>
                        <label htmlFor='type1'>Miels naturels</label><br></br>
                        <input type="checkbox" id="type2" checked={type2} onChange={(e) => settype2(e.target.checked)}></input>
                        <label htmlFor='type2'>Produits de la ruche</label><br></br>
                        <input type="checkbox" id="type3" checked={type3} onChange={(e) => settype3(e.target.checked)}></input>
                        <label htmlFor='type3'>Huiles</label>
                    </div>
                    <div className={styles.products}>
                        {
                            products.map(product => (
                                (function () {
                                    if ([type1 ? "Miels naturels" : null,
                                    type2 ? "Produits de la ruche" : null,
                                    type3 ? "Huiles" : null].includes(product.type) && product.name.toLowerCase().includes(search.toLowerCase())) {
                                        return <div key={product.id} className={styles.product} onClick={() => setselectedproduct(product.id)}>
                                            <img src={product.image} alt={product.name} className={styles.img}></img>
                                            <div className={styles.texts}>
                                                <h3>{product.name}</h3>
                                            </div>
                                        </div>
                                    }
                                }).call(this)
                            ))
                        }
                    </div>
                </div>
            </main >
            {
                selectedproduct == "" ? (
                    <></>
                ) : (
                    <div className={styles.popup}>
                        <div className={styles.popupmenu}>
                            {(function () {
                                var productdata = products.find(p => p.id == selectedproduct)
                                return <>
                                    <img src={productdata.image} alt={productdata.name} className={styles.img}></img>
                                    <div className={styles.texts}>
                                        <h2>{productdata.name}</h2>
                                        <p>{productdata.description}</p>
                                    </div>
                                    <button className={styles.closebtn} onClick={() => setselectedproduct("")}>&times;</button>
                                </>
                            }).call(this)}
                        </div>
                    </div>
                )
            }
        </div>
    )
}
