"use client";

import React, { useEffect } from 'react';

const testimonials = [
    {
        name: "Jane Doe",
        role: "High School Student",
        testimonial: "Tetronix is the best version of Tetris I've ever played. The design is stunning and the gameplay is super smooth!"
    },
    {
        name: "John Smith",
        role: "Gamer",
        testimonial: "The competitive leaderboards keep me coming back. I've never had so much fun playing Tetris!"
    },
    {
        name: "Alice Johnson",
        role: "Teacher",
        testimonial: "Tetronix is a fantastic educational tool. My students love it and it helps them learn while having fun!"
    },
    {
        name: "Bob Williams",
        role: "Developer",
        testimonial: "The smooth gameplay and modern design make Tetronix a joy to play. It's a perfect blend of classic and new."
    },
    {
        name: "Charlie Brown",
        role: "Designer",
        testimonial: "Tetronix's design is sleek and intuitive. It's a great example of how classic games can be modernized."
    }
];

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-16 px-8 bg-gray-100 dark:bg-gray-800">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Testimonials</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="max-w-lg bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-900 transition-transform transform hover:scale-105 p-6">
                        <p className="text-lg italic text-gray-700 dark:text-gray-300">&quot;{testimonial.testimonial}&quot;</p>
                        <p className="mt-4 text-right text-gray-900 dark:text-white">- {testimonial.name}, {testimonial.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
