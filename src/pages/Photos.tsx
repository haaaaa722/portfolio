import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { photoCategories, photos, PhotoItem } from "../data/photosData";
import Pagination from "../components/Pagination/Pagination";
import styles from "./Photos.module.css";

const Photos = ()=>{
    const {categorySlug, subSlug} = useParams();

    const [isPanelOpen, setIsPanelOpen] = useState(false); // mobileカテゴリ開閉
    const [openCategory, setOpenCategory] = useState<string | null>(null); // "+"で展開中のカテゴリ
    const [modalItem, setModalItem] = useState<PhotoItem | null>(null); // モーダル表示
    const [currentPage, setCurrentPage] = useState(1);

    const getItemsPerPage = ()=>{
        const w = window.innerWidth;
        if(w >= 1024) return 28;
        if(w >= 768) return 24;
        return 21;
    };

    const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

    const active = useMemo(()=>{
        // /photos -> all
        if(!categorySlug) return {type: "all" as const};

        // /photos/:category
        if(categorySlug && !subSlug) return {type:"category" as const, categorySlug};

        // /photos/:category/:sub
        return {type: "subcategory" as const, categorySlug, subSlug};
    }, [categorySlug, subSlug]);

    const sortByIdDesc = (items: PhotoItem[])=>{
        return [...items].sort(
            (a, b)=>Number(b.id) - Number(a.id)
        );
    };

    const filteredPhotos = useMemo(()=>{
        let result: PhotoItem[];

        if(active.type === "all"){
            result = photos;
        }else if(active.type === "category"){
            result = photos.filter(p => p.categorySlug === active.categorySlug);
        }else{
            result = photos.filter(
                p => p.categorySlug === active.categorySlug && p.subSlug === active.subSlug
            );
        }

        return sortByIdDesc(result);
    }, [active]);

    const isActiveAll = active.type === "all";
    const isActiveCategory = (catSlug: string)=>{
        return(
            (active.type === "category" && active.categorySlug === catSlug) ||
            (active.type === "subcategory" && active.categorySlug === catSlug)
        );
    };
    const isActiveSub = (catSlug: string, sSlug: string)=>{
        return active.type === "subcategory" && active.categorySlug === catSlug && active.subSlug === sSlug;
    };

    const toggleOpenCategory = (catSlug: string)=>{
        setOpenCategory(prev => (prev === catSlug ? null : catSlug));
    };

    const totalPages = useMemo(()=>{
        return Math.max(1, Math.ceil(filteredPhotos.length / itemsPerPage));
    }, [filteredPhotos.length, itemsPerPage]);

    const handlePageChange = (page: number)=>{
        setCurrentPage(page);
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    useEffect(()=>{
        setCurrentPage(1);
    }, [categorySlug, subSlug]);

    useEffect(()=>{
        const onResize = ()=>{
            setItemsPerPage(getItemsPerPage());
        };
        window.addEventListener("resize", onResize);
        return ()=> window.removeEventListener("resize", onResize);
    }, []);

    const pagedPhotos = useMemo(()=>{
        const start = (currentPage -1) * itemsPerPage;
        return filteredPhotos.slice(start, start + itemsPerPage);
    }, [filteredPhotos, currentPage, itemsPerPage]);

    useEffect(()=>{
        setCurrentPage(1);
    }, [itemsPerPage]);

    const sortedCategories = useMemo(()=>{
        return [...photoCategories].sort((a,b)=>
            a.name.localeCompare(b.name)
        );
    },[]);

    const activeCategory = useMemo(()=>{
        return openCategory
            ? sortedCategories.find((c)=> c.slug === openCategory) ?? null
            : null;
    }, [openCategory, sortedCategories]);

    const sortedSubcategories = useMemo(()=>{
        if(!activeCategory) return [];
        return [...activeCategory.subcategories].sort((a, b)=>
            a.name.localeCompare(b.name)
        );
    },[activeCategory]);

    useEffect(()=>{
        if(!isPanelOpen){
            setOpenCategory(null);
        }
    }, [isPanelOpen]);

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Photos</h1>

                {/* tablet/pc */}
                <div className={styles.categoryArea}>
                    {!activeCategory ? (
                        <>
                            <Link to="/photos" className={styles.leftLabel}>
                                Category
                            </Link>

                            <ul className={styles.rightList}>
                                {sortedCategories.map((cat)=>(
                                    <li key={cat.slug} className={styles.categoryItem}>
                                        <Link
                                            to={`/photos/${cat.slug}`}
                                            className={`${styles.linkBtn} ${isActiveCategory(cat.slug) ? styles.isActive : ""}`}
                                            onClick={()=>setOpenCategory(null)}
                                        >
                                            {cat.name}
                                        </Link>

                                        <button
                                            type="button"
                                            className={styles.expandBtn}
                                            onClick={(e)=>{
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setOpenCategory(cat.slug);
                                            }}
                                            aria-label={`${cat.name} subcategories`}
                                        >
                                            <span className={styles.catOpenBtn}/>
                                            <span className={styles.catOpenBtn}/>
                                            <span className={styles.catOpenBtn}/>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <>
                            <div className={styles.leftActiveCat}>
                                <Link
                                    to={`/photos/${activeCategory.slug}`}
                                    className={styles.leftActiveCatLink}
                                >
                                    {activeCategory.name}
                                </Link>

                                <button
                                    type="button"
                                    className={styles.expandBtn}
                                    onClick={()=>setOpenCategory(null)}
                                    aria-label="close category"
                                >
                                    <span className={styles.catCloseBtn}/>
                                    <span className={styles.catCloseBtn}/>
                                    <span className={styles.catCloseBtn}/>
                                </button>
                            </div>

                            <ul className={styles.rightList}>
                                {sortedSubcategories.map((sub)=>(
                                    <li key={sub.slug}>
                                        <Link
                                            to={`/photos/${activeCategory.slug}/${sub.slug}`}
                                            className={`${styles.linkBtn} ${isActiveSub(activeCategory.slug, sub.slug) ? styles.isActive : ""}`}
                                        >
                                            {sub.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>

                {/* mobile:category */}
                {!isPanelOpen && (
                    <button
                        type="button"
                        className={styles.mobileCategoryTrigger}
                        onClick={()=>setIsPanelOpen(true)}
                        aria-expanded={isPanelOpen}
                    >
                        Category <span className={styles.chev}>▼</span>
                    </button>
                )}
            </div>

            {/* mobile:panel */}
            <div
                className={`${styles.mobilePanel} ${isPanelOpen ? styles.mobilePanelOpen : ""}`}
                aria-hidden={!isPanelOpen}
            >
                <div className={styles.mobilePanelTop}>
                    <button
                        type="button"
                        className={styles.mobileClose}
                        onClick={()=>{
                            setIsPanelOpen(false)
                            setOpenCategory(null);
                        }}
                    >
                        Close <span>▲</span>
                    </button>
                </div>

                <div className={styles.mobileCatList}>
                    {!openCategory ? (
                        <>
                            <Link
                                to="/photos"
                                className={`${styles.linkBtnMobile} ${isActiveAll ? styles.isActive : ""}`}
                                onClick={()=>{
                                    setOpenCategory(null);
                                    setIsPanelOpen(false);
                                }}
                            >
                                Category
                            </Link>

                            {sortedCategories.map((cat)=>(
                                <div key={cat.slug} className={styles.mobileCatRow}>
                                    <Link
                                        to={`/photos/${cat.slug}`}
                                        className={`${styles.linkBtnMobile} ${isActiveCategory(cat.slug) ? styles.isActive : ""}`}
                                        onClick={()=>setIsPanelOpen(false)}
                                    >
                                        {cat.name}
                                    </Link>

                                    <button
                                        type="button"
                                        className={styles.expandBtnMobile}
                                        onClick={()=>setOpenCategory(cat.slug)}
                                        aria-label={`${cat.name} subcategories`}
                                    >
                                        <span className={styles.catOpenBtn}/>
                                        <span className={styles.catOpenBtn}/>
                                        <span className={styles.catOpenBtn}/>
                                    </button>
                                </div>
                            ))}
                        </>
                    ) : (
                        (()=>{
                            const cat = photoCategories.find((c)=>c.slug === openCategory);
                            if(!cat) return null;

                            return(
                                <div className={styles.mobileSubLayout}>
                                    <div className={styles.mobileOpenCat}>
                                        <Link to={`/photos/${cat.slug}`}
                                            className={styles.mobileOpenCatLink}
                                            onClick={()=>setIsPanelOpen(false)}
                                        >
                                            {cat.name}
                                        </Link>

                                        <button
                                            type="button"
                                            className={styles.expandBtnMobile}
                                            onClick={()=>setOpenCategory(null)}
                                            aria-label="close category"
                                        >
                                            <span className={styles.catCloseBtn}/>
                                            <span className={styles.catCloseBtn}/>
                                            <span className={styles.catCloseBtn}/>
                                        </button>
                                    </div>

                                    <ul className={styles.mobileSubList}>
                                        {cat.subcategories.map((sub)=>(
                                            <li key={sub.slug}>
                                                <Link
                                                    to={`/photos/${cat.slug}/${sub.slug}`}
                                                    className={`${styles.linkBtnMobile} ${isActiveSub(cat.slug, sub.slug) ? styles.isActive : ""}`}
                                                    onClick={()=>setIsPanelOpen(false)}
                                                >
                                                    {sub.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        })()
                    )}
                </div>
            </div>

            {/* grid */}
            <div className={styles.grid}>
                {filteredPhotos.length === 0 ? (
                    <div className={styles.noData}>該当する作品はありません</div>
                ) : (
                    pagedPhotos.map((p)=>(
                        <button
                            key={p.id}
                            type="button"
                            className={styles.card}
                            onClick={()=>setModalItem(p)}
                        >
                            <img className={styles.thumb} src={p.thumbSrc} alt="" />
                        </button>
                    ))
                )}
            </div>

            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}

            {/* modal */}
            {modalItem && (
                <div
                    className={styles.modalOverlay}
                    onClick={()=>setModalItem(null)}
                    role="dialog"
                    aria-modal="true"
                >
                    <div
                        className={styles.modal}
                        onClick={(e)=>e.stopPropagation()}
                    >
                        <img className={styles.modalImg} src={modalItem.fullSrc} alt="" />
                        <div className={styles.modalMeta}>
                            <p className={styles.modalText}>
                                Date: {modalItem.date}<br/>
                                Camera: {modalItem.camera}<br/>
                                Lens: {modalItem.lens}
                            </p>
                            <p className={styles.modalCategory}>
                                {`#${modalItem.categorySlug} #${modalItem.subSlug}`}
                            </p>
                            <button
                                type="button"
                                className={styles.modalClose}
                                onClick={()=>setModalItem(null)}
                            >
                                <span className={styles.closeBtn}/>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Photos;