import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import WorksCard from "../components/Works/WorksCard";
import { worksList, Category } from "../data/worksData";
import Pagination from "../components/Pagination/Pagination";
import styles from "./Works.module.css";

const ITEMS_PER_PAGE = 12;

const Works = ()=>{
    const {categorySlug} = useParams();
    const activeCategory = categorySlug || "All";
    const [currentPage, setCurrentPage] = useState(1);

    // カテゴリ変更で1ページ目に戻す
    useEffect(()=>{
        setCurrentPage(1);
    },[activeCategory]);

    // フィルタリング
    const filteredWorks = activeCategory === "All"
        ? worksList
        : worksList.filter(work => work.category === activeCategory);

    // ページ計算
    const totalPages = Math.ceil(filteredWorks.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const displayedWorks = filteredWorks.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // ページ変更時の処理
    const handlePageChange = (newPage: number) =>{
        setCurrentPage(newPage);
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    const categories: Category[] = ["All", "iOS", "Android", "Other"];

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Works</h1>
                <div className={styles.categoryMenu}>
                    <span className={styles.catLabel}>Category</span>
                    <div className={styles.catList}>
                        {categories.map((cat)=>(
                            <Link
                                key={cat}
                                to={cat === "All" ? "/works" : `/works/${cat}`}
                                className={`${styles.catBtn} ${activeCategory === cat ? styles.active : ""}`}
                            >
                                {cat}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.grid}>
                {displayedWorks.length > 0 ? (
                    displayedWorks.map((work)=>(
                        <WorksCard key={work.id} work={work} />
                    ))
                ) : (
                    <p className={styles.noData}>該当する作品はありません</p>
                )}
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default Works;