// src/app/layout.js

import '@/styles/globals.css'; // Đảm bảo đường dẫn chính xác
import Link from 'next/link';
import styles from '@/styles/Layout.module.css'; // Đường dẫn CSS chính xác

export const metadata = {
    title: 'My App',
    description: 'My application description',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About Us</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/login">Login</Link>
                </li>
            </ul>
            <div className={styles.container}>{children}</div>
        </div>
        </body>
        </html>
    );
}
