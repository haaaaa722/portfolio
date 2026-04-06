import React from "react";
import profileImg from "../../assets/images/profileIcon.webp";
import styles from "./aboutprofile.module.css";

type Props = {
    variant?: "about" | "home";
};

const AboutProfile = ({ variant = "about" }: Props)=>{
    const containerClass = `${styles.profileContent} ${variant === "home" ? styles.homeVariant: ""}`;
    
    return(
        <div className={containerClass}>
            <div className={styles.imgWrapper}>
                <img src={profileImg} alt="Profile" className={styles.profileImg} />
            </div>
            <div className={styles.profileTextWrapper}>
                <h3>はっ！</h3>
                <p>広島市立大学 情報科学部 情報工学科 4年</p>
            </div>
        </div>
    )
}

export default AboutProfile;