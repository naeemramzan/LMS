
import React from 'react';

const Footer: React.FC = () => {
    const quickLinks = ['Admissions', 'Examinations', 'Faculties', 'Downloads', 'Careers'];
    const aboutLinks = ['History', 'Vision & Mission', 'Vice Chancellor', 'Administration'];

    return (
        <footer className="bg-gray-800 text-gray-300">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">University of Sindh</h3>
                        <p className="text-sm">
                            The University of Sindh is a public research university in the residential area of Jamshoro, Sindh, Pakistan. It is one of the oldest universities in Pakistan.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            {quickLinks.map(link => (
                                <li key={link}>
                                    <a href="#" className="hover:text-yellow-400 transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* About SU */}
                     <div>
                        <h3 className="text-lg font-semibold text-white mb-4">About SU</h3>
                        <ul className="space-y-2 text-sm">
                            {aboutLinks.map(link => (
                                <li key={link}>
                                    <a href="#" className="hover:text-yellow-400 transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Allama I.I. Kazi Campus, Jamshoro-76080, Sindh, Pakistan.</li>
                            <li>Phone: +92-22-9213181-90</li>
                            <li>Email: info@usindh.edu.pk</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900 py-4 text-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} University of Sindh. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
