
import React, { useState } from 'react';
import { NEWS_DATA, EVENTS_DATA, NOTIFICATIONS_DATA } from '../constants';
import type { NewsItem } from '../types';

const NewsCard: React.FC<{ item: NewsItem }> = ({ item }) => (
    <div className="flex items-start space-x-4 p-4 hover:bg-red-50 rounded-lg transition-colors">
        <div className="flex-shrink-0 text-center bg-red-900 text-white rounded-md p-2 w-16">
            <span className="block text-2xl font-bold">{item.day}</span>
            <span className="block text-xs font-semibold">{item.month}</span>
        </div>
        <div>
            <h3 className="font-bold text-red-900 hover:underline cursor-pointer">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
        </div>
    </div>
);

const NewsAndEvents: React.FC = () => {
    const [activeTab, setActiveTab] = useState('news');

    const tabs = [
        { id: 'news', label: 'Latest News', data: NEWS_DATA },
        { id: 'events', label: 'Events', data: EVENTS_DATA },
        { id: 'notifications', label: 'Notifications', data: NOTIFICATIONS_DATA },
    ];

    const activeData = tabs.find(tab => tab.id === activeTab)?.data || [];

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="flex border-b-2 border-gray-200 mb-6">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 text-lg font-semibold transition-colors focus:outline-none 
                                ${activeTab === tab.id 
                                    ? 'border-b-4 border-red-900 text-red-900' 
                                    : 'text-gray-500 hover:text-red-900'}`
                                }
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="space-y-4">
                    {activeData.map(item => (
                        <NewsCard key={item.date + item.title} item={item} />
                    ))}
                </div>
                 <div className="text-center mt-8">
                    <a href="#" className="bg-white text-red-900 border border-red-900 font-semibold py-2 px-6 rounded-md hover:bg-red-900 hover:text-white transition-all duration-300 shadow-md">
                        View All
                    </a>
                </div>
            </div>
        </section>
    );
};

export default NewsAndEvents;
