
import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-red-900">Campus Glimpses</h2>
                    <p className="text-gray-600 mt-2">A snapshot of life at the University of Sindh.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {GALLERY_IMAGES.map((src, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-md group">
                            <img 
                                src={src} 
                                alt={`Campus Gallery Image ${index + 1}`}
                                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
