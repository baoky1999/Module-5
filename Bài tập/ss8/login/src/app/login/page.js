// src/app/login/page.js

'use client'; // Thêm dòng này để chỉ định Client Component

import { useRouter } from 'next/navigation'; // Sử dụng next/navigation nếu bạn đang trong một Client Component
import styles from '../../styles/Login.module.css'; // Đảm bảo đường dẫn chính xác

export default function Login() {
    const router = useRouter();

    return (
        <div className={styles.wrapper}>
            <div className={styles.formContent}>
                <h2>Login</h2>
                <form>
                    <input className={styles.input} type="text" id="login" name="login" placeholder="Login" />
                    <input className={styles.input} type="password" id="password" name="password" placeholder="Password" />
                    <button type="button" className={styles.button} onClick={() => router.push('/')}>Log In</button>
                </form>
            </div>
        </div>
    );
}
