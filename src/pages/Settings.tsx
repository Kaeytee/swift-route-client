
import React from 'react';
import Layout from '../components/Layout';

const Settings = () => {
  return (
    <Layout title="Settings">
      <div className="p-4 md:p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Account Settings</h2>
          <p className="text-gray-600 text-lg">
            Manage your account preferences and settings.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-md border shadow-sm">
          <p className="text-gray-600 text-center py-8">
            Settings options will appear here.
            <br />
            This section is ready to integrate with your backend API.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
