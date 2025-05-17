import React from 'react';
import Layout from '../components/Layout';

const SubmitShipment = () => {
  return (
    <Layout title="Submit Shipment">
      <div className="p-4 md:p-6 bg-gray-100 dark:bg-gray-800 min-h-screen">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 dark:text-gray-100">Submit New Shipment</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Create and submit a new shipment request.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-md border dark:border-gray-700 shadow-sm">
          <p className="text-gray-600 dark:text-gray-300 text-center py-8">
            New shipment form will appear here.
            <br />
            This section is ready to integrate with your backend API.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default SubmitShipment;
