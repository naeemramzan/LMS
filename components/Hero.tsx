
import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../constants';

const Hero: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearTimeout(timer);
    }, [currentSlide]);

    return (
        <section className="relative h-[60vh] w-full overflow-hidden">
            {HERO_SLIDES.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-center text-white p-4">
                            <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg animate-fade-in-down">
                                {slide.title}
                            </h2>
                            <p className="text-lg md:text-2xl drop-shadow-md animate-fade-in-up">
                                {slide.subtitle}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {HERO_SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white'}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
