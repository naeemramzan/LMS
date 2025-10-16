
import React from 'react';
import { CONSTITUENT_COLLEGES, AFFILIATED_COLLEGES } from '../constants';
import type { College } from '../types';

const CollegeCard: React.FC<{ college: College }> = ({ college }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-900 h-full">
        <h3 className="text-xl font-bold text-red-900 mb-2">{college.name}</h3>
        <p className="text-gray-600">{college.location}</p>
    </div>
);

const Colleges: React.FC = () => {
    return (
        <div>
            <div className="py-8 bg-gray-200 border-y border-gray-300">
                 <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-red-900">Colleges</h2>
                    <nav aria-label="breadcrumb">
                        <ol className="flex text-sm text-gray-600">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li className="mx-2" aria-hidden="true">/</li>
                            <li aria-current="page">Colleges</li>
                        </ol>
                    </nav>
                 </div>
            </div>
            
            <section className="py-16 bg-white" aria-labelledby="constituent-colleges-heading">
                <div className="container mx-auto px-4">
                    <h3 id="constituent-colleges-heading" className="text-3xl font-bold text-red-900 mb-8 border-b-2 border-yellow-400 pb-2">Constituent Colleges</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {CONSTITUENT_COLLEGES.map(college => (
                            <CollegeCard key={college.name} college={college} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50" aria-labelledby="affiliated-colleges-heading">
                <div className="container mx-auto px-4">
                    <h3 id="affiliated-colleges-heading" className="text-3xl font-bold text-red-900 mb-8 border-b-2 border-yellow-400 pb-2">Affiliated Colleges</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {AFFILIATED_COLLEGES.map(college => (
                            <CollegeCard key={college.name} college={college} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Colleges;
