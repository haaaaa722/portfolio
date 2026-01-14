import React from "react";
import Breadcrumbs from "../../components/Breadcrumb/breadcrumb";
import styles from "./Portfolio.module.css";

const Portfolio = ()=>{
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Portfolio</h1>

                <div className={styles.breadcrumbsWrapper}>
                    <Breadcrumbs />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;