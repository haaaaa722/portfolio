import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { WorkItem } from "../../data/worksData";
import styles from "./WorksCard.module.css";

type Props = {
    work: WorkItem;
};

const WorksCard: React.FC<Props> = ({ work })=>{
    const navigate = useNavigate();

    // タグがクリックされたときの処理
    const handleTagClick = (e: React.MouseEvent, category: string)=>{
        e.preventDefault();
        e.stopPropagation();
        navigate(`/works/${category}`);
    };

    return(
        <Link to={`/works/${work.category}/${work.slug}`} className={styles.cardLink}>
            <article className={styles.card}>
                <div className={styles.imgWrapper}>
                    <img src={work.image} alt={work.title} className={styles.img} />
                </div>

                <div className={styles.content}>
                    <div className={styles.textGroup}>
                        <h2 className={styles.title}>{work.title}</h2>
                        <p className={styles.desc}>{work.description}</p>
                    </div>

                    <div className={styles.footer}>
                        <button className={styles.tag} onClick={(e)=>handleTagClick(e, work.category)}>
                            #{work.category}
                        </button>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default WorksCard;