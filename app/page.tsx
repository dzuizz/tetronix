import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Testimonials from './components/Testimonials';
import Inspirations from './components/Inspirations';
import HowWeMadeIt from './components/HowWeMadeIt';
import Footer from './components/Footer';

const Home: React.FC = () => {
    return (
        <div className="dark:bg-gray-900 dark:text-white">
            <Navbar />
            <HeroSection />
            <FeatureSection />
            <Testimonials />
            <Inspirations />
            <HowWeMadeIt />
            <Footer />
        </div>
    );
};

export default Home;
