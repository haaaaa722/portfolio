import React from "react";
import styles from "./Pagination.module.css";

type Props = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number)=>void;
};

const Pagination: React.FC<Props> = ({currentPage, totalPages, onPageChange})=>{
    // 1ページのみの場合何も表示しない
    if(totalPages <= 1) return null;

    const handlePrev = ()=>{
        if(currentPage > 1){
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = ()=>{
        if(currentPage < totalPages){
            onPageChange(currentPage + 1);
        }
    };

    return(
        <div className={styles.pagination}>
            <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={styles.button}
            >
                &lt;
            </button>

            <span className={styles.pageCount}>
                {currentPage} / {totalPages}
            </span>

            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={styles.button}
            >
                &gt;
            </button>
        </div>
    );
};

export default Pagination;