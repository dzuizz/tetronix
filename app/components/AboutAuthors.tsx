import React from 'react';

const authors = [
    {
        name: "Tyler Kiong Tai Le",
        role: "Game Designer",
        description: "skibidi skibidi dattebayo",
        image: "/images/tyler.jpg"
    },
    {
        name: "Jiang Muzhen",
        role: "Game Designer",
        description: "asher~~~ <3 uWu",
        image: "/images/muzhen.jpg"
    },
    {
        name: "Ahmad Dzuizz Annajib",
        role: "Game Designer",
        description: "One for all and all for one, musketeers are always ready!",
        image: "/images/dzuizz.jpg"
    },
    {
        name: "Kishan Balamurgan",
        role: "Game Designer",
        description: "I am inevitable",
        image: "/images/kishan.jpg"
    }
];

const AboutAuthors: React.FC = () => {
    return (
        <section id="about" className="py-16 px-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">About the Authors</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
                {authors.map((author, index) => (
                    <div key={index} className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-900 transition-transform transform hover:scale-105 mx-4">
                        <img className="w-full h-48 object-cover" src={author.image} alt={author.name} />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{author.name}</h3>
                            <p className="text-gray-700 dark:text-gray-300">{author.role}</p>
                            <p className="mt-4 text-gray-700 dark:text-gray-300">{author.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutAuthors;
