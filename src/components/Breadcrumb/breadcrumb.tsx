import { Link, useLocation } from "react-router-dom";
import styles from "./breadcrumb.module.css"

const Breadcrumbs = ()=>{
    const location = useLocation();
    const paths = location.pathname.split("/").filter(Boolean);

    return(
        <nav className={styles.breadcrumb} aria-label="breadcrumb">
            <ol className={styles.list}>
                <li>
                    <Link to="/works">Works</Link>
                </li>

                {paths.slice(1).map((segment, index)=>{
                    const to = "/works/" + paths.slice(1, index + 2).join("/");

                    return(
                        <li key={to}>
                            <span className={styles.separator}>/</span>{" "}
                            <Link to={to}>
                                {segment.replace("-", " ")}
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;