import React from 'react';
import Layout from '../components/Layout';
import { MessageCircleQuestion, Mail, Phone, MapPin } from 'lucide-react';

const Support = () => {
  return (
    <Layout title="Support">
      <div className="p-4 md:p-6 bg-gray-100 dark:bg-gray-800 min-h-screen">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 dark:text-gray-100">Customer Support</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            We're here to help you with any questions or issues you may have.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-md border dark:border-gray-700 shadow-sm">
            <div className="flex items-center mb-4">
              <MessageCircleQuestion className="text-logistic-DEFAULT mr-3" size={24} />
              <h3 className="text-xl font-medium dark:text-gray-100">Frequently Asked Questions</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Find quick answers to common questions about our services, tracking, and deliveries.
            </p>
            <div className="space-y-4">
              <details className="border-b dark:border-gray-700 pb-2">
                <summary className="font-medium cursor-pointer dark:text-gray-200">How do I track my shipment?</summary>
                <p className="mt-2 text-gray-600 dark:text-gray-400 pl-4">
                  You can track your shipment by entering your tracking number in the tracking section
                  of our application or by contacting customer support.
                </p>
              </details>
              <details className="border-b dark:border-gray-700 pb-2">
                <summary className="font-medium cursor-pointer dark:text-gray-200">What are your delivery hours?</summary>
                <p className="mt-2 text-gray-600 dark:text-gray-400 pl-4">
                  Our standard delivery hours are from 8:00 AM to 8:00 PM local time, Monday through Saturday.
                </p>
              </details>
              <details className="border-b dark:border-gray-700 pb-2">
                <summary className="font-medium cursor-pointer dark:text-gray-200">How do I change my delivery address?</summary>
                <p className="mt-2 text-gray-600 dark:text-gray-400 pl-4">
                  To change your delivery address, please contact our customer support team as soon as possible
                  with your tracking number and new delivery details.
                </p>
              </details>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-md border dark:border-gray-700 shadow-sm">
            <div className="flex items-center mb-4">
              <Phone className="text-logistic-DEFAULT mr-3" size={24} />
              <h3 className="text-xl font-medium dark:text-gray-100">Contact Us</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our support team is available to assist you during business hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="text-logistic-DEFAULT mr-3 mt-1" size={20} />
                <div>
                  <p className="font-medium dark:text-gray-200">Phone Support</p>
                  <p className="text-gray-600 dark:text-gray-300">+1 (800) 123-4567</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Monday - Friday: 8AM - 8PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-logistic-DEFAULT mr-3 mt-1" size={20} />
                <div>
                  <p className="font-medium dark:text-gray-200">Email Support</p>
                  <p className="text-gray-600 dark:text-gray-300">support@logistics-company.com</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">24/7 support for urgent inquiries</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-logistic-DEFAULT mr-3 mt-1" size={20} />
                <div>
                  <p className="font-medium dark:text-gray-200">Headquarters</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    123 Logistics Way<br />
                    Shipping City, SC 12345<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Support;
