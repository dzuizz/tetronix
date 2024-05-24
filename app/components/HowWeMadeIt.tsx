"use client";

import React from 'react';

const HowWeMadeIt: React.FC = () => {
    return (
        <section className="relative py-16 px-8">
            <div className="absolute inset-0 opacity-10 z-0">
                {/* Add Tetris pieces background */}
                <div className="absolute top-10 left-10"><span className="tetris-piece">L</span></div>
                <div className="absolute top-40 right-20"><span className="tetris-piece">O</span></div>
                <div className="absolute bottom-20 left-32"><span className="tetris-piece">I</span></div>
                <div className="absolute bottom-10 right-10"><span className="tetris-piece">T</span></div>
            </div>
            <h2 className="relative text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white z-10">How We Made It</h2>
            <div className="relative max-w-3xl mx-auto text-gray-700 dark:text-gray-300 z-10">
                <p className="mb-4">
                    Tetronix was built with love and passion by a team of dedicated developers and designers. The entire game was developed using <a href="https://unity.com/" className="underline">Unity</a>, a powerful and versatile game development engine.
                </p>
                <p className="mb-4">
                    Unity allowed us to create a seamless and engaging gameplay experience. We used its advanced features to perfect the game's mechanics and ensure smooth, responsive controls.
                </p>
                <p className="mb-4">
                    The visual design and user interface were also crafted using Unity, enabling us to produce stunning graphics and an intuitive layout that enhances the player's experience.
                </p>
                <p className="mb-4">
                    From concept to execution, every step of the development process was made possible through Unity. Its flexibility and robust toolset made it the perfect choice for creating Tetronix.
                </p>
                <div className="flex justify-center items-center gap-8 mt-8">
                    <img src="/images/development-process.jpg" alt="Development Process" className="w-1/2 rounded-lg shadow-lg"/>
                    <img src="/images/team-working.jpg" alt="Team Working" className="w-1/2 rounded-lg shadow-lg"/>
                </div>
            </div>
        </section>
    );
};

export default HowWeMadeIt;
