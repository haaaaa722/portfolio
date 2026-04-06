import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Scrollbar.module.css";

const Scrollbar = ()=>{
    const [scrollProgress, setScrollProgress] = useState(0);
    const [trackHeight, setTrackHeight] = useState("40vh");
    const [isVisible, setIsVisible] = useState(false);

    const location = useLocation();

    useEffect(()=>{
        const scrollContainer = document.getElementById("main-scroll-container");
        const targetNode = scrollContainer  || window;
        const elementNode = scrollContainer || document.documentElement;

        const handleScrollAndResize = ()=>{
            const isWindow = targetNode === window;

            // 要素に応じて取得するプロパティを変える
            const totalHeight = elementNode.scrollHeight; //全体の高さ
            const clientHeight = isWindow ? window.innerHeight : elementNode.clientHeight; //今見えている画面の高さ
            const currentPos = isWindow ? window.scrollY : elementNode.scrollTop; //現在のスクロール位置

            // スクロールが必要かチェック
            const hasScroll = totalHeight > clientHeight;
            setIsVisible(hasScroll);

            if (!hasScroll) return; //スクロール不要なら計算しない

            const maxScroll = totalHeight - clientHeight; //スクロールできる最大長

            let progress = 0;
            if(maxScroll > 0){
                progress = currentPos / maxScroll;
            }

            if(progress > 1) progress = 1;
            if(progress < 0) progress = 0;

            setScrollProgress(progress);

            // レール長計算
            let calculatedHeight = totalHeight * 0.2;
            
            const minHeight = 100;
            const maxHeight = clientHeight * 0.8;

            if(calculatedHeight < minHeight) calculatedHeight = minHeight;
            if(calculatedHeight > maxHeight) calculatedHeight = maxHeight;

            setTrackHeight(`${calculatedHeight}px`);
        };

        targetNode.addEventListener("scroll", handleScrollAndResize);
        window.addEventListener("resize", handleScrollAndResize);

        // 初期計算
        setTimeout(handleScrollAndResize, 50);

        return ()=>{
            targetNode.removeEventListener("scroll", handleScrollAndResize);
            window.removeEventListener("resize", handleScrollAndResize);
        }
    },[location.pathname]);

    if (!isVisible) return null;

    return(
        <div className={styles.track} style={{height: trackHeight}}>
            <div className={styles.thumb} style={{top:`calc(${scrollProgress * 100}% - ${scrollProgress*40}px)`}} />
        </div>
    );
};

export default Scrollbar;