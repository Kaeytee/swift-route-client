
import React from 'react';

interface DashboardCardProps {
  title: string;
  icon: string;
  onClick?: () => void;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, icon, onClick }) => {
  return (
    <div 
      className="dashboard-card"
      onClick={onClick}
    >
      <div className="mb-4 flex items-center justify-center h-20">
        <img src={icon} alt={title} className="h-16 w-16" />
      </div>
      <div className="text-center font-medium">{title}</div>
    </div>
  );
};

export default DashboardCard;
