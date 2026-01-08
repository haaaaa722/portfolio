import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import WorksCard from "../components/Works/WorksCard";
import { worksList, Category } from "../data/worksData";
import Pagination from "../components/Pagination/Pagination";
import styles from "./Works.module.css";

const ITEMS_PER_PAGE = 12;

const Works = ()=>{
    const {categorySlug} = useParams();
    const activeCategory = (categorySlug as Category) || "All";
    const [currentPage, setCurrentPage] = useState(1);
    const [highlightStyle, setHighlightStyle] = useState({
        left: 0,
        top: 0,
        width: 0,
        height: 0,
    });
    const tabsRef = useRef<(HTMLAnchorElement | null)[]>([]);

    const categories: Category[] = ["All", "iOS", "Android", "Other"];

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

    // カテゴリの背景の処理
    useEffect(() => {
        const activeIndex = categories.findIndex(cat => cat === activeCategory);
        const currentTab = tabsRef.current[activeIndex];

        if (currentTab) {
            setHighlightStyle({
                left: currentTab.offsetLeft,
                top: currentTab.offsetTop,
                width: currentTab.offsetWidth,
                height: currentTab.offsetHeight,
            });
        }
    }, [activeCategory]);

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Works</h1>
                <div className={styles.categoryMenu}>
                    <span className={styles.catLabel}>Category</span>
                    <div className={styles.catList}>
                        <div className={styles.highlighter}
                            style={{
                                left: `${highlightStyle.left}px`,
                                top: `${highlightStyle.top}px`,
                                width: `${highlightStyle.width}px`,
                                height: `${highlightStyle.height}px`,
                            }}
                        />

                        {categories.map((cat, index)=>(
                            <Link
                                key={cat}
                                ref={(el)=>{tabsRef.current[index] = el;}}
                                to={cat === "All" ? "/works" : `/works/${cat}`}
                                className={`${styles.catBtn}`}
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