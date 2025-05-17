
import React from 'react';
import Layout from '../components/Layout';

const ShipmentHistory = () => {
  return (
    <Layout title="Shipment History">
      <div className="p-4 md:p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Shipment History</h2>
          <p className="text-gray-600 text-lg">
            View and track your past shipments.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-md border shadow-sm">
          <p className="text-gray-600 text-center py-8">
            Your shipment history will appear here.
            <br />
            This section is ready to integrate with your backend API.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ShipmentHistory;
