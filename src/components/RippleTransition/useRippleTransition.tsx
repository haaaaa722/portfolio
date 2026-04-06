import React, { useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./useRippleTransition.module.css";

const useRippleTransition = ()=>{
    const navigate = useNavigate();
    const [ripple, setRipple] = useState({ radius: 0, x: 50, y: 50, isFading: false });
    const [isNavigating, setIsNavigating] = useState(false);

    const navigateWithRipple = (e: MouseEvent<HTMLAnchorElement>, path: string)=>{
        if(window.location.pathname === path) return; // 同じパスなら何もしない

        e.preventDefault();
        if(isNavigating) return; // 連打防止
        setIsNavigating(true);
        document.body.classList.add("navigating") // スクロールロック

        // クリックした要素の座標を撮る
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const clickX = rect.left + rect.width/2;
        const clickY = rect.top + rect.height/2;

        // 画面の端まで届く半径を計算
        const maxRadius = Math.hypot(
            Math.max(clickX, window.innerWidth - clickX),
            Math.max(clickY, window.innerHeight - clickY)
        );

        // まず0で描画
        setRipple({ radius: 0, x: clickX, y: clickY, isFading: false });

        // 次フレームで広げる
        requestAnimationFrame(()=>{
            requestAnimationFrame(()=>{
                setRipple({ radius: maxRadius, x: clickX, y: clickY, isFading: false });
            });
        });

        // 広がり切ったら遷移
        setTimeout(()=>{
            navigate(path);

            requestAnimationFrame(()=>{
                setRipple(prev => ({ ...prev, isFading: true }));
            });

            setTimeout(()=>{
                setRipple({ radius: 0, x: 50, y: 50, isFading: false });
                setIsNavigating(false);
                document.body.classList.remove("navigating")
            }, 300);
        }, 600);
    };

    // 画面に配置する用のコンポーネント
    const RippleOverlay = ()=>{
        return(
            <div
                className={`${styles.rippleOverlay} ${ripple.isFading ? styles.fading : ""}`}
                style={{
                    "--radius": `${ripple.radius}px`,
                    "--x": `${ripple.x}px`,
                    "--y": `${ripple.y}px`
                } as React.CSSProperties}
            />
        );
    };

    return { navigateWithRipple, RippleOverlay };
};

export default useRippleTransition;