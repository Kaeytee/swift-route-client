import React from 'react';
import DashboardCard from '../components/DashboardCard';
import { useNavigate } from 'react-router-dom';

// Import images
import submitShipmentIcon from '../assets/images/submit-shipment.png';
import awaitingShipmentsIcon from '../assets/images/awaiting-shipments.png';
import fundWalletIcon from '../assets/images/fund-wallet.png';
import shipmentHistoryIcon from '../assets/images/shipment-history.png';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  /**
   * Dashboard actions - navigate to respective pages
   */
  const handleCardClick = (actionType: string) => {
    console.log(`Action clicked: ${actionType}`);

    switch (actionType) {
      case "submit_shipment":
        navigate("/submit-shipment");
        break;
      case "awaiting_shipments":
        navigate("/awaiting-shipments");
        break;
      case "fund_wallet":
        // Placeholder for fund wallet functionality
        console.log("Fund wallet functionality will be implemented here");
        break;
      case "shipment_history":
        navigate("/shipment-history");
        break;
      default:
        break;
    }
  };

  // Dashboard card configuration
  const dashboardCards = [
    {
      title: "Submit Shipment",
      icon: submitShipmentIcon,
      action: () => handleCardClick("submit_shipment"),
    },
    {
      title: "Awaiting Shipments",
      icon: awaitingShipmentsIcon,
      action: () => handleCardClick("awaiting_shipments"),
    },
    {
      title: "Fund Wallet",
      icon: fundWalletIcon,
      action: () => handleCardClick("fund_wallet"),
    },
    {
      title: "Shipment History",
      icon: shipmentHistoryIcon,
      action: () => handleCardClick("shipment_history"),
    }
  ];

  return (
    <div className="p-4 md:p-6 bg-gray-100 dark:bg-gray-800 min-h-screen">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 dark:text-gray-100">Welcome</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">What would you like to do?</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
