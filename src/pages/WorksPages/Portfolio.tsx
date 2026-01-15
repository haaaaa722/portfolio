import React from "react";
import Breadcrumbs from "../../components/Breadcrumb/breadcrumb";
import styles from "./Portfolio.module.css";
import { Link } from 'react-router-dom';

const Portfolio = ()=>{
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Portfolio</h1>

                <div className={styles.breadcrumbsWrapper}>
                    <Breadcrumbs />
                </div>
            </div>

            <section className={styles.section}>
                <h2 className={styles.sectitle}>
                    Overview <span className={styles.secsubtitle}>概要</span>
                </h2>

                <p>制作物や写真をわかりやすく整理し、直感的に閲覧できる個人ポートフォリオサイトです。</p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectitle}>
                    Period <span className={styles.secsubtitle}>製作期間</span>
                </h2>

                <p>2025/12~</p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectitle}>
                    Technologies <span className={styles.secsubtitle}>使用技術</span>
                </h2>

                <ul>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>React Router</li>
                    <li>CSS Modules</li>
                </ul>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectitle}>
                    Background <span className={styles.secsubtitle}>背景・目的</span>
                </h2>

            <p>制作物が増えても一覧性や分かりやすさを保てるポートフォリオを作りたいと考えたため</p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectitle}>
                    Solution <span className={styles.secsubtitle}>工夫した点・解決方法</span>
                </h2>

                <p>UIの見やすさや分かりやすさの工夫をした</p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectitle}>
                    Features <span className={styles.secsubtitle}>主な機能</span>
                </h2>

                <ul>
                    <li>カテゴリ絞り込み</li>
                    <li>ページネーション</li>
                    <li>モーダル表示</li>
                    <li>レスポンシブ対応</li>
                </ul>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectitle}>
                    Implementation <span className={styles.secsubtitle}>実装・設計</span>
                </h2>

                <p>作品や写真は全てデータとして管理し、UIのロジックを変更せずに追加できる設計にした</p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectitle}>
                    Next <span className={styles.secsubtitle}>今後の改善</span>
                </h2>

                <p>アニメーションの工夫やNext.jsへの移行</p>
            </section>
        </div>
    )
}

export default Portfolio;