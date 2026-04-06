import React from "react";
import profileImg from "../assets/images/profileIcon.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./About.module.css";
import { Link } from "react-router-dom";
import AboutProfile from "../components/AboutProfile/aboutprofile";
import AboutLinks from "../components/AboutLinks/aboutlinks";

const About = ()=>{
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>About</h1>
            </div>

            <section className={styles.profile}>
                <h2 className={styles.sectionTitle}>Profile</h2>
                <AboutProfile />
            </section>

            <section className={styles.links}>
                <h2 className={styles.sectionTitle}>Links</h2>
                <AboutLinks />
            </section>

            <section className={styles.contact}>
                <h2 className={styles.sectionTitle}>Contact</h2>
                <p>お問い合わせは各SNSのDM、もしくは下記のフォームからお願いします。</p>
                <Link to="/contact" className={styles.contactbtn}>お問い合わせはこちら</Link>
            </section>
        </div>
    )
}

export default About;