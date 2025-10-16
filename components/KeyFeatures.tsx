
import React from 'react';
import type { Feature } from '../types';
import { FEATURES_DATA } from '../constants';

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
    <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="mb-4 inline-flex items-center justify-center h-20 w-20 rounded-full bg-red-900">
            {feature.icon}
        </div>
        <h3 className="text-xl font-bold text-red-900 mb-2">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
    </div>
);

const KeyFeatures: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-red-900">Why Choose University of Sindh?</h2>
                    <p className="text-gray-600 mt-2">A tradition of excellence and a future of promise.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FEATURES_DATA.map(feature => (
                        <FeatureCard key={feature.title} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyFeatures;
