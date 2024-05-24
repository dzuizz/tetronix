"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    useEffect(() => {
        // Handle mouse move for flashlight effect
        const handleMouseMove = (event: MouseEvent) => {
            const x = (event.clientX / window.innerWidth) * 100;
            const y = (event.clientY / window.innerHeight) * 100;
            document.documentElement.style.setProperty('--cursor-x', `${x}%`);
            document.documentElement.style.setProperty('--cursor-y', `${y}%`);
        };

        // Apply initial theme
        const applyTheme = () => {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        };

        window.addEventListener('mousemove', handleMouseMove);
        applyTheme();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <html lang="en">
        <body className={`bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white ${inter.className}`}>
        {children}
        </body>
        </html>
    );
}
