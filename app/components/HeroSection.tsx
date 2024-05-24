"use client";

import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 text-center dark:from-gray-800 dark:to-gray-900">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10">
                <h1 className="text-6xl font-bold mb-6 text-white">Tetronix</h1>
                <p className="text-2xl mb-8 text-white">An AppVenture Tetris Rhythm Game. Modern Tetris with a Fun Twist of Rhythm.</p>
                <button className="px-6 py-3 bg-white text-indigo-500 rounded-full text-xl font-semibold transition-transform transform hover:scale-105 dark:bg-gray-700 dark:text-white">Play Now</button>
                <div className="mt-8 text-white text-lg">
                    <p>Built with <a href="https://unity.com/" className="underline">Unity</a> and a lot of hard work</p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
