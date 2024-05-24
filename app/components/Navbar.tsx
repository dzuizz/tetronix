"use client";

import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

const Navbar: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(prefersDark ? 'dark' : 'light');
        }
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <nav className="p-6 bg-white dark:bg-gray-800 shadow-md fixed top-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">TetrisX</div>
                <div className="flex space-x-4 items-center">
                    <a href="#features" className="hover:underline">Features</a>
                    <a href="#testimonials" className="hover:underline">Testimonials</a>
                    <a href="#about" className="hover:underline">About</a>
                    <button onClick={toggleTheme} className="ml-4 p-2 bg-gray-200 dark:bg-gray-700 rounded">
                        {theme === 'light' ? <MoonIcon className="h-6 w-6 text-gray-800" /> : <SunIcon className="h-6 w-6 text-yellow-300" />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
