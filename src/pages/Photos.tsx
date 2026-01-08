import React from "react";
import styles from "./Photos.module.css";

const Photos = ()=>{
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Photos</h1>
            </div>
        </div>
    )
}

export default Photos;