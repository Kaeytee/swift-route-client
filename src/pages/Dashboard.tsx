
import React from 'react';
import { Box, Clock, History, Wallet } from 'lucide-react';
import DashboardCard from '../components/DashboardCard';

const Dashboard: React.FC = () => {
  /**
   * Dashboard actions - you can replace these with actual navigation or functionality
   * Each action would typically trigger navigation or open modals
   */
  const handleCardClick = (actionType: string) => {
    console.log(`Action clicked: ${actionType}`);
    
    /**
     * TODO: Implement proper action handlers
     * Examples:
     * - Navigate to specific page
     * - Open a modal for data entry
     * - Fetch data from API
     */
  };

  // Dashboard card configuration
  const dashboardCards = [
    {
      title: "Submit Shipment",
      icon: <Box size={48} />,
      action: () => handleCardClick("submit_shipment"),
    },
    {
      title: "Awaiting Shipments",
      icon: <Clock size={48} />,
      action: () => handleCardClick("awaiting_shipments"),
    },
    {
      title: "Fund Wallet",
      icon: <Wallet size={48} />,
      action: () => handleCardClick("fund_wallet"),
    },
    {
      title: "Shipment History",
      icon: <History size={48} />,
      action: () => handleCardClick("shipment_history"),
    }
  ];

  return (
    <div className="p-4 md:p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Welcome</h2>
        <p className="text-gray-600 text-lg">What would you like to do?</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dashboardCards.map((card, index) => (
          <DashboardCard
            key={index}
            title={card.title}
            icon={card.icon}
            onClick={card.action}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
