
import React from 'react';
import type { NavItem, NewsItem, Feature, Faculty, Stat, College } from './types';

// Icons (Heroicons)
export const MailIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 inline-block" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>;
export const PhoneIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 inline-block" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>;

export const TOP_BAR_LINKS = [
  { label: 'Webmail', href: '#' },
  { label: 'Downloads', href: '#' },
  { label: 'Tenders', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Contact Us', href: '#' },
];

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Academics', href: '#' },
  { label: 'Admissions', href: '#' },
  { label: 'Examinations', href: '#' },
  { label: 'Research', href: '#' },
  { label: 'Campus Life', href: '#' },
  { label: 'Alumni', href: '#' },
];

export const HERO_SLIDES = [
    {
        image: 'https://picsum.photos/1600/600?random=1',
        title: 'Excellence in Education',
        subtitle: 'Fostering a community of scholars and innovators.'
    },
    {
        image: 'https://picsum.photos/1600/600?random=2',
        title: 'Vibrant Campus Life',
        subtitle: 'Explore a rich and diverse student experience.'
    },
    {
        image: 'https://picsum.photos/1600/600?random=3',
        title: 'Pioneering Research',
        subtitle: 'Pushing the boundaries of knowledge and discovery.'
    }
];

const generateNews = (title: string, count: number): NewsItem[] =>
  Array.from({ length: count }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - i * 3);
    return {
      date: d.toISOString(),
      day: d.getDate().toString().padStart(2, '0'),
      month: d.toLocaleString('default', { month: 'short' }).toUpperCase(),
      title: `${title} Item ${i + 1}`,
      description: `Details about the ${title.toLowerCase()} item number ${i + 1} go here.`,
    };
  });

export const NEWS_DATA = generateNews("Latest News", 5);
export const EVENTS_DATA = generateNews("Upcoming Event", 4);
export const NOTIFICATIONS_DATA = generateNews("Recent Notification", 6);

export const FEATURES_DATA: Feature[] = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-9-5.747h18" /></svg>,
        title: 'Quality Education',
        description: 'Commitment to the highest standards of teaching and learning.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20M1 12l11 6 11-6M1 12v6a2 2 0 002 2h18a2 2 0 002-2v-6" /></svg>,
        title: 'Experienced Faculty',
        description: 'Learn from distinguished scholars and industry experts.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" /></svg>,
        title: 'Global Linkages',
        description: 'Collaborations with international universities and organizations.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
        title: 'Modern Labs',
        description: 'State-of-the-art facilities for research and practicals.'
    },
];

export const FACULTIES_DATA: Faculty[] = [
    { name: 'Arts', imageUrl: 'https://picsum.photos/400/300?random=11' },
    { name: 'Commerce & Business Administration', imageUrl: 'https://picsum.photos/400/300?random=12' },
    { name: 'Education', imageUrl: 'https://picsum.photos/400/300?random=13' },
    { name: 'Islamic Studies', imageUrl: 'https://picsum.photos/400/300?random=14' },
    { name: 'Law', imageUrl: 'https://picsum.photos/400/300?random=15' },
    { name: 'Natural Sciences', imageUrl: 'https://picsum.photos/400/300?random=16' },
    { name: 'Pharmacy', imageUrl: 'https://picsum.photos/400/300?random=17' },
    { name: 'Social Sciences', imageUrl: 'https://picsum.photos/400/300?random=18' },
];

export const STATS_DATA: Stat[] = [
    { value: 40000, label: 'Students' },
    { value: 1200, label: 'Faculty Members' },
    { value: 58, label: 'Departments' },
    { value: 150000, label: 'Alumni' },
];

export const GALLERY_IMAGES = Array.from({ length: 8 }, (_, i) => `https://picsum.photos/400/400?random=${20 + i}`);

export const CONSTITUENT_COLLEGES: College[] = [
    { name: 'Sindh University Laar Campus, Badin', location: 'Badin' },
    { name: 'Mohtarma Benazir Bhutto Shaheed Campus, Dadu', location: 'Dadu' },
    { name: 'Government College of Technology, Hyderabad', location: 'Hyderabad' },
    { name: 'University of Sindh, Mirpurkhas Campus', location: 'Mirpurkhas' },
    { name: 'University of Sindh, Larkana Campus', location: 'Larkana' },
    { name: 'Sindh University Thatta Campus', location: 'Thatta' },
    { name: 'University of Sindh, Bhitshah Campus', location: 'Bhitshah' },
];

export const AFFILIATED_COLLEGES: College[] = [
    { name: 'Govt. S.S. Arts, Commerce & S.S.H. Science College, Matiari', location: 'Matiari' },
    { name: 'Govt. Boys Degree College, Shahdadpur', location: 'Shahdadpur' },
    { name: 'Govt. Girls Degree College, Tando Adam', location: 'Tando Adam' },
    { name: 'Govt. Degree College, Sakrand', location: 'Sakrand' },
    { name: 'Govt. Degree College for (Women) Sakrand', location: 'Sakrand' },
    { name: 'Govt. Degree College, Khipro', location: 'Khipro' },
    { name: 'Govt. Islamia Arts & Commerce College, Sukkur', location: 'Sukkur' },
    { name: 'Govt. Girls Degree College, Sanghar', location: 'Sanghar' },
];
