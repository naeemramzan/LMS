
import React, { useState, useEffect, useRef } from 'react';
import { STATS_DATA } from '../constants';
import type { Stat } from '../types';

const Counter: React.FC<{ value: number }> = ({ value }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const duration = 2000;
        const frameRate = 1000 / 60;
        const totalFrames = Math.round(duration / frameRate);
        let frame = 0;

        const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const currentCount = Math.round(value * progress);
            
            if (ref.current) {
               setCount(currentCount > value ? value : currentCount);
            }

            if (frame === totalFrames) {
                clearInterval(counter);
            }
        }, frameRate);

        return () => clearInterval(counter);
    }, [value]);

    return <span ref={ref} className="text-4xl md:text-5xl font-bold text-white">{count.toLocaleString()}</span>;
};

const StatItem: React.FC<{ stat: Stat }> = ({ stat }) => (
    <div className="text-center">
        <Counter value={stat.value} />
        <p className="text-yellow-300 text-lg mt-2">{stat.label}</p>
    </div>
);

const Stats: React.FC = () => {
    return (
        <section className="py-20 bg-red-900 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1600/400?random=40&blur=2')" }}>
             <div className="absolute inset-0 bg-red-900 bg-opacity-80"></div>
            <div className="container mx-auto px-4 relative">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {STATS_DATA.map(stat => (
                        <StatItem key={stat.label} stat={stat} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
