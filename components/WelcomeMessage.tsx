
import React from 'react';

const WelcomeMessage: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/3 text-center">
            <img 
              src="https://usindh.edu.pk/wp-content/uploads/2021/07/vc-siddique-kalhoro-1.jpg" 
              alt="Vice Chancellor Prof. Dr. Muhammad Siddique Kalhoro" 
              className="rounded-lg shadow-2xl mx-auto w-64 h-64 object-cover object-top border-4 border-red-900"
            />
            <h3 className="mt-4 text-xl font-bold text-red-900">Prof. Dr. Muhammad Siddique Kalhoro</h3>
            <p className="text-gray-600">Vice Chancellor</p>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-red-900 mb-4 border-b-2 border-yellow-400 pb-2">
              From the Vice Chancellor's Desk
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              It is a matter of great pride and privilege for me to welcome you to the University of Sindh, a beacon of knowledge and a cornerstone of higher education in Pakistan. Established in 1947, our university has a rich history of academic excellence and a commitment to nurturing the intellectual, personal, and professional growth of our students.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We strive to provide a dynamic and supportive learning environment that encourages critical thinking, innovation, and a passion for lifelong learning. Our distinguished faculty, state-of-the-art facilities, and diverse academic programs are all geared towards empowering our students to meet the challenges of a rapidly changing world.
            </p>
            <a href="#" className="bg-red-900 text-white font-semibold py-2 px-6 rounded-md hover:bg-red-800 transition-all duration-300 shadow-lg">
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMessage;
