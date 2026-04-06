import React from "react";
import styles from "./aboutlinks.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

const AboutLinks = ()=>{
    return(
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
    )
}

export default AboutLinks;