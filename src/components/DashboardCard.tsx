
import React, { ReactNode } from 'react';

interface DashboardCardProps {
  title: string;
  icon: ReactNode;
  onClick?: () => void;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, icon, onClick }) => {
  return (
    <div 
      className="dashboard-card"
      onClick={onClick}
    >
      <div className="text-4xl mb-4 text-[#e60000]">
        {icon}
      </div>
      <div className="text-center font-medium">{title}</div>
    </div>
  );
};

export default DashboardCard;
