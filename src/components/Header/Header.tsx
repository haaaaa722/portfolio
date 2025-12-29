import React, { useState, useEffect, use } from "react";
import { Link, useLocation } from "react-router-dom";
import { faAddressCard, faHouse, faUser, faLayerGroup, faImages, faMugHot } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ()=>{
    // スクロールしたかどうかの状態管理
    const [hideLogo, setHideLogo] = useState(false);

    // URL取得
    const location = useLocation();

    // スクロールイベントの監視
    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 50){
                setHideLogo(true);
            }else{
                setHideLogo(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return ()=> window.removeEventListener("scroll", handleScroll);
    },[])

    return(
        <header className={styles.header}>
            <Link to="/" className={`${styles.logo} ${hideLogo ? styles.hidden: ""}`}>
                <FontAwesomeIcon icon={faAddressCard} />
            </Link>

            <nav className={styles.nav}>
                <Link to="/" className={`${styles.navItem} ${styles.tohome} ${location.pathname === "/" ? styles.active : ""}`}>
                    <FontAwesomeIcon icon={faHouse} />Home
                </Link>
                <Link to="/about" className={`${styles.navItem} ${styles.toabout} ${location.pathname === "/about" ? styles.active : ""}`}>
                    <FontAwesomeIcon icon={faUser} />About
                </Link>
                <Link to="/works" className={`${styles.navItem} ${styles.toworks} ${location.pathname === "/works" ? styles.active : ""}`}>
                    <FontAwesomeIcon icon={faLayerGroup} />Works
                </Link>
                <Link to="/photos" className={`${styles.navItem} ${styles.tophotos} ${location.pathname === "/photos" ? styles.active : ""}`}>
                    <FontAwesomeIcon icon={faImages} />Photos
                </Link>
            </nav>

            <button className={styles.btn}>
                <FontAwesomeIcon icon={faMugHot} />
            </button>
        </header>
    );
};

export default Header;