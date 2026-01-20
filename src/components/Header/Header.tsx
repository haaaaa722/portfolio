import React, { useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import { faAddressCard, faHouse, faUser, faLayerGroup, faImages, faMugHot } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ()=>{
    // スクロールしたかどうかの状態管理
    const [hideLogo, setHideLogo] = useState(false);

    // URL取得
    const location = useLocation();

    // ダークモードの状態管理
    const [isDarkMode, setIsDarkMode] = useState(false);

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

    // 初期読み込み(保存状態復元)
    useEffect(()=>{
        const saved = localStorage.getItem("theme");
        if(saved === "dark"){
            setIsDarkMode(true);
            document.documentElement.style.colorScheme = "dark";
        }else{
            document.documentElement.style.colorScheme = "light";
        }
    },[]);

    // モード切替&保存
    useEffect(()=>{
        document.documentElement.style.colorScheme = isDarkMode ? "dark" : "light";
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    },[isDarkMode]);

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
                <Link to="/works" className={`${styles.navItem} ${styles.toworks} ${location.pathname.startsWith("/works") ? styles.active : ""}`}>
                    <FontAwesomeIcon icon={faLayerGroup} />Works
                </Link>
                <Link to="/photos" className={`${styles.navItem} ${styles.tophotos} ${location.pathname.startsWith("/photos") ? styles.active : ""}`}>
                    <FontAwesomeIcon icon={faImages} />Photos
                </Link>
            </nav>

            <button className={styles.btn} onClick={()=>setIsDarkMode(prev => !prev)}>
                <FontAwesomeIcon icon={faMugHot}/>
            </button>
        </header>
    );
};

export default Header;