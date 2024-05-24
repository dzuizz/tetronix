"use client";

import React, { useEffect } from 'react';

const features = [
    {
        title: "Beautiful Design",
        description: "Sleek, modern interface with stunning visuals.",
        image: "/images/design.png"
    },
    {
        title: "Smooth Gameplay",
        description: "Experience seamless and responsive controls.",
        image: "/images/gameplay.png"
    },
    {
        title: "Competitive Leaderboards",
        description: "Challenge friends and climb the global ranks.",
        image: "/images/leaderboards.png"
    }
];

const FeatureSection: React.FC = () => {
    useEffect(() => {
        const scrollableContent = document.querySelector('.feature-scrollable-content') as HTMLElement;
        if (scrollableContent) {
            const contentWidth = scrollableContent.scrollWidth;
            scrollableContent.innerHTML += scrollableContent.innerHTML; // Duplicate content for infinite scroll
            scrollableContent.style.animationDuration = `${contentWidth / 50}s`;
        }
    }, []);

    return (
        <section id="features" className="py-16 px-8 bg-gray-100 dark:bg-gray-800">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Features</h2>
            <div className="scrollable-section overflow-hidden">
                <div className="feature-scrollable-content flex animate-scroll">
                    {features.map((feature, index) => (
                        <div key={index} className="inline-block max-w-sm bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-900 transition-transform transform hover:scale-105 mx-4">
                            {/*<img className="w-full h-48 object-cover" src={feature.image} alt={feature.title} />*/}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                                <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
