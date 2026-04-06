import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faLayerGroup, faImages } from "@fortawesome/free-solid-svg-icons";
import styles from "./MobileMenu.module.css";

const MobileMenu = ()=>{
    // メニューの開閉状態管理
    const [isOpen, setIsOpen] = useState(false);

    // 移動でメニューを閉じる的な
    const closeMenu = ()=> setIsOpen(false);

    return(
        <div className={styles.mobilemenu}>
            <button className={`${styles.menubtn} ${isOpen ? styles.active : ""}`} onClick={()=>setIsOpen(!isOpen)}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>

            <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
                <ul className={styles.navlist}>
                    <li>
                        <Link to="/" onClick={closeMenu}>
                            <FontAwesomeIcon icon={faHouse} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={closeMenu}>
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/works" onClick={closeMenu}>
                            <FontAwesomeIcon icon={faLayerGroup} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/photos" onClick={closeMenu}>
                            <FontAwesomeIcon icon={faImages} />
                        </Link>
                    </li>
                    <li className={styles.dummySlot}></li>
                </ul>
            </nav>
        </div>
    );
};

export default MobileMenu;