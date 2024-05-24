"use client";

import React from 'react';

const Inspirations: React.FC = () => {
    return (
        <section className="relative py-16 px-8 bg-gray-100 dark:bg-gray-800">
            <div className="absolute inset-0 opacity-10 z-0">
                {/* Add Tetris pieces background */}
                <div className="absolute top-10 left-10"><span className="tetris-piece">L</span></div>
                <div className="absolute top-40 right-20"><span className="tetris-piece">O</span></div>
                <div className="absolute bottom-20 left-32"><span className="tetris-piece">I</span></div>
                <div className="absolute bottom-10 right-10"><span className="tetris-piece">T</span></div>
            </div>
            <h2 className="relative text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white z-10">Inspirations</h2>
            <p className="relative text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8 z-10">
                Tetronix was inspired by the classic Tetris game but with a modern twist. We drew inspiration from <a href="https://tetr.io/" className="underline">TETR.IO</a>'s amazing community and gameplay, which showed us the potential of combining classic gameplay with modern features.
            </p>
            <div className="relative flex justify-center items-center gap-8 z-10">
                <img src="/images/tetrio-community.jpg" alt="TETR.IO Community" className="w-1/2 rounded-lg shadow-lg"/>
                <img src="/images/tetrio-gameplay.jpg" alt="TETR.IO Gameplay" className="w-1/2 rounded-lg shadow-lg"/>
            </div>
            <div className="relative text-center mt-8 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto z-10">
                <p className="italic">"The TETR.IO community is incredibly supportive and passionate. It's a joy to be part of it!"</p>
                <p className="mt-4 italic">"TETR.IO's gameplay is smooth and addictive. We wanted to bring that same experience to Tetronix."</p>
            </div>
        </section>
    );
};

export default Inspirations;
