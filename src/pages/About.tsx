import React from "react";
import profileImg from "../assets/images/profileIcon.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./About.module.css";

const About = ()=>{
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>About</h1>
            </div>

            <section className={styles.profile}>
                <h2 className={styles.sectionTitle}>Profile</h2>
                <div className={styles.profileContent}>
                    <div className={styles.imgWrapper}>
                        <img src={profileImg} alt="Profile" className={styles.profileImg} />
                    </div>
                    <div className={styles.profileTextWrapper}>
                        <h3>はっ！</h3>
                        <p>広島市立大学 情報科学部 情報工学科 3年</p>
                    </div>
                </div>
            </section>

            <section className={styles.links}>
                <h2 className={styles.sectionTitle}>Links</h2>
                <div className={styles.linkItemsWrapper}>
                    <div className={styles.linkItem}>
                        <a href="https://x.com/haaaaa722" target="_blank">
                            <FontAwesomeIcon icon={faXTwitter}/>
                        </a>
                    </div>
                    <div className={styles.linkItem}>
                        <a href="https://www.instagram.com/pics._.hyt?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                    </div>
                    <div className={styles.linkItem}>
                        <a href="https://github.com/haaaaa722" target="_blank">
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </div>
                </div>
            </section>

            <section className={styles.contact}>
                <h2 className={styles.sectionTitle}>Contact</h2>
                <p>お問い合わせは各SNSのDM、もしくは下記のフォームからお願いします。</p>
            </section>
        </div>
    )
}

export default About;