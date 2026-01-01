import React, { useState } from "react";
import styles from "./Contact.module.css";
import { Link } from "react-router-dom";

const Contact = ()=>{
    const [submitted, setsubmitted] = useState(false);

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        // いったんブラウザの送信を止めるかどうかを判断するフラグ
        let isValid = true;
        const newErrors = {name: "", email: "", message: ""};

        // フォームの値を取得
        const form = e.currentTarget;
        const nameVal = (form.elements.namedItem("entry.14958865") as HTMLInputElement).value;
        const emailVal = (form.elements.namedItem("entry.359138063") as HTMLInputElement).value;
        const msgVal = (form.elements.namedItem("entry.734964169") as HTMLTextAreaElement).value;

        // チェック開始
        if(!nameVal){
            newErrors.name = "お名前を入力してください";
            isValid = false;
        }
        if(!emailVal){
            newErrors.email = "メールアドレスを入力してください";
            isValid = false;
        }
        if(!msgVal){
            newErrors.message = "お問い合わせ内容を入力してください";
            isValid = false;
        }

        setErrors(newErrors);

        if(!isValid){
            // エラーがある場合:送信キャンセル
            e.preventDefault();
        }else{
            // エラーがない場合:送信後、画面切り替え
            setTimeout(()=>{
                setsubmitted(true);
            },100)
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Contact</h1>
            </div>
            
            <div className={styles.content}>
                {submitted ? (
                    <div className={styles.thanksMessage}>
                        <p>
                            お問い合わせありがとうございます！<br />
                            送信が完了しました！
                        </p>
                        <Link to="/about" className={styles.backToAbout}>もどる</Link>
                    </div>
                ):(
                    <form
                        action="https://docs.google.com/forms/d/e/1FAIpQLSceSoPNJhtNIbUJC3sAWqGX1w26IWoZczYHMfxJqdTvAdebpw/formResponse"
                        method="POST"
                        target="hidden_iframe"
                        className={styles.form}
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <div className={styles.formGroup}>
                            <label htmlFor="name">お名前</label>
                            <input
                                type="text"
                                id="name"
                                name="entry.14958865"
                                placeholder="山田 太郎"
                                className={errors.name ? styles.errorInput : ""}
                            />
                            {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">メールアドレス</label>
                            <input
                                type="email"
                                id="email"
                                name="entry.359138063"
                                placeholder="example@email.com"
                                className={errors.email ? styles.errorInput : ""}
                            />
                            {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message">お問い合わせ内容</label>
                            <textarea
                                id="message"
                                name="entry.734964169"
                                placeholder="入力してください"
                                rows={10}
                                className={errors.message ? styles.errorInput : ""}
                            ></textarea>
                            {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
                        </div>

                        <button type="submit" className={styles.submitbtn}>送信</button>

                        <iframe name="hidden_iframe" style={{display:"none"}} title="hidden_iframe"></iframe>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Contact;