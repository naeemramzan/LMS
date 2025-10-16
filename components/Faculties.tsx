
import React from 'react';
import { FACULTIES_DATA } from '../constants';
import type { Faculty } from '../types';

const FacultyCard: React.FC<{ faculty: Faculty }> = ({ faculty }) => (
    <div className="relative rounded-lg overflow-hidden shadow-lg group h-60">
        <img src={faculty.imageUrl} alt={faculty.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-colors duration-300 flex items-center justify-center">
            <h3 className="text-white text-xl font-bold text-center p-4">{faculty.name}</h3>
        </div>
    </div>
);

const Faculties: React.FC = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-red-900">Our Faculties</h2>
                    <p className="text-gray-600 mt-2">Diverse fields of study to shape your future.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {FACULTIES_DATA.map(faculty => (
                        <FacultyCard key={faculty.name} faculty={faculty} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faculties;
