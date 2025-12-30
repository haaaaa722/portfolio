import React from "react";
import { Link } from "react-router-dom";
import topImg from "../assets/images/IMG_0907.webp"
import styles from "./Home.module.css";

const Home = ()=>{
    return(
        <div className={styles.container}>
            <section className={styles.top}>
                <img src={topImg} alt="トップ画像" className={styles.topImage} />
            </section>

            <section className={styles.about}>
                <div className={`${styles.aboutwrapper} ${styles.contentwrapper}`}>
                    <h2 className={styles.title}>About</h2>

                    <div className={styles.btncontainer}>
                        <Link to="/about" className={styles.viewmorebtn}>
                            View more...
                        </Link>
                    </div>
                </div>
            </section>

            <section className={styles.contact}>
                <div className={`${styles.contactwrapper} ${styles.contentwrapper}`}>
                    <h2 className={styles.title}>Contact</h2>

                    <div className={styles.btncontainer}>
                        <Link to="/about" className={styles.viewmorebtn}>
                            View more...
                        </Link>
                    </div>
                </div>
            </section>

            <section className={styles.works}>
                <div className={`${styles.workswrapper} ${styles.contentwrapper}`}>
                    <h2 className={styles.title}>Works</h2>

                    <div className={styles.btncontainer}>
                        <Link to="/works" className={styles.viewmorebtn}>
                            View more...
                        </Link>
                    </div>
                </div>
            </section>

            <section className={styles.photos}>
                <div className={`${styles.photoswrapper} ${styles.contentwrapper}`}>
                    <h2 className={styles.title}>Photos</h2>

                    <div className={styles.btncontainer}>
                        <Link to="/photos" className={styles.viewmorebtn}>
                            View more...
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;