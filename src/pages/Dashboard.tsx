
import React from 'react';
import DashboardCard from '../components/DashboardCard';
import { useNavigate } from 'react-router-dom';

// Import images
import submitShipmentIcon from '/lovable-uploads/b76a9235-b596-44c0-990a-fb18ec1dc364.png';
import awaitingShipmentsIcon from '/lovable-uploads/cf3b1440-adbb-4bf8-bccf-209fdc9e6582.png';
import fundWalletIcon from '/lovable-uploads/ca41f0f5-6f47-4b4b-ab1c-2e33c6304372.png';
import shipmentHistoryIcon from '/lovable-uploads/4817b46d-1c66-4053-8c02-409b95444db0.png';

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
