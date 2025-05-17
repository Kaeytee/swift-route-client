
import React from 'react';
import Layout from '../components/Layout';
import { Award, TrendingUp, Globe, Users } from 'lucide-react';

const About = () => {
  return (
    <Layout title="About Us">
      <div className="p-4 md:p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">About Our Company</h2>
          <p className="text-gray-600 text-lg">
            Leading the way in logistics solutions since 2005.
          </p>
        </div>

        <div className="bg-white p-6 rounded-md border shadow-sm mb-6">
          <h3 className="text-xl font-medium mb-4">Our Story</h3>
          <p className="text-gray-600 mb-4">
            Founded in 2005, our logistics company has grown from a small local operation to a 
            global leader in shipping and logistics solutions. We started with the vision to make 
            shipping accessible, efficient, and reliable for businesses of all sizes.
          </p>
          <p className="text-gray-600 mb-4">
            Today, we operate in over 30 countries, with a team of more than 5,000 dedicated 
            professionals committed to delivering excellence in logistics services. Our extensive 
            network allows us to offer comprehensive solutions tailored to meet the unique needs 
            of our diverse client base.
          </p>
          <p className="text-gray-600">
            Our commitment to innovation, sustainability, and customer satisfaction has made us 
            a trusted partner for thousands of businesses worldwide. We continue to invest in 
            cutting-edge technology and sustainable practices to ensure we remain at the forefront 
            of the logistics industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 rounded-md border shadow-sm">
            <div className="flex items-center mb-4">
              <Award className="text-logistic-DEFAULT mr-3" size={24} />
              <h3 className="text-xl font-medium">Our Mission</h3>
            </div>
            <p className="text-gray-600">
              To provide innovative, reliable, and sustainable logistics solutions that empower 
              businesses to thrive in a global marketplace, while maintaining the highest standards 
              of service excellence and environmental responsibility.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-md border shadow-sm">
            <div className="flex items-center mb-4">
              <TrendingUp className="text-logistic-DEFAULT mr-3" size={24} />
              <h3 className="text-xl font-medium">Our Vision</h3>
            </div>
            <p className="text-gray-600">
              To be the global leader in logistics innovation, setting new standards for efficiency, 
              sustainability, and customer satisfaction. We aim to transform the logistics industry 
              through technology, people, and processes that create meaningful value for our clients and communities.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-md border shadow-sm">
            <div className="flex items-center mb-4">
              <Globe className="text-logistic-DEFAULT mr-3" size={24} />
              <h3 className="text-xl font-medium">Global Reach</h3>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Operations in over 30 countries across 6 continents</li>
              <li>Strategic partnerships with major carriers worldwide</li>
              <li>24/7 global customer support network</li>
              <li>Multiple international hubs for efficient distribution</li>
              <li>Custom clearance expertise in all major markets</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-md border shadow-sm">
            <div className="flex items-center mb-4">
              <Users className="text-logistic-DEFAULT mr-3" size={24} />
              <h3 className="text-xl font-medium">Our Team</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Our team consists of over 5,000 dedicated professionals with expertise in logistics, 
              technology, customer service, and sustainability. We believe our people are our greatest 
              asset, and we invest heavily in their development and well-being.
            </p>
            <p className="text-gray-600">
              With diverse backgrounds and experiences, our team brings innovative thinking and 
              a global perspective to every challenge, ensuring we deliver the best possible solutions 
              for our clients.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
