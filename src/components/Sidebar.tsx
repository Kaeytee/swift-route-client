
import React, { useState } from 'react';
import { 
  Box, 
  Clock, 
  Settings,
  MessageCircleQuestion,
  Info,
  LogOut
} from 'lucide-react';

// Interface for sidebar items
interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  onClick?: () => void;
}

// Sidebar item component
const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, active = false, onClick }) => {
  return (
    <div 
      className={`sidebar-item ${active ? 'active' : ''}`} 
      onClick={onClick}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
};

// Main sidebar component
const Sidebar: React.FC<{ isMobile: boolean; toggleSidebar: () => void }> = ({ 
  isMobile, 
  toggleSidebar 
}) => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  // Navigation items
  const navItems = [
    { icon: <Box size={20} />, text: 'Dashboard' },
    { icon: <Box size={20} />, text: 'Submit Shipment' },
    { icon: <Clock size={20} />, text: 'Awaiting Shipments' },
    { icon: <Clock size={20} />, text: 'Shipment History' },
    { icon: <Settings size={20} />, text: 'Settings' },
  ];

  // Footer items
  const footerItems = [
    { icon: <MessageCircleQuestion size={20} />, text: 'Support' },
    { icon: <Info size={20} />, text: 'About' },
    { icon: <LogOut size={20} />, text: 'Exit' },
  ];

  // Handle item click
  const handleItemClick = (text: string) => {
    setActiveItem(text);
    if (isMobile) toggleSidebar();
    
    // This is where you can add navigation logic or state changes
    console.log(`Clicked on: ${text}`);
    
    /**
     * TODO: Implement navigation or content switching logic
     * This could connect to your routing system or state management
     */
  };

  return (
    <div className="sidebar flex flex-col h-full">
      {/* Sidebar Header with Logo */}
      <div className="p-4 border-b border-logistic-dark">
        <h1 className="text-2xl font-bold">Logistics.</h1>
      </div>

      {/* Navigation Links */}
      <div className="flex-grow">
        {navItems.map((item) => (
          <SidebarItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            active={activeItem === item.text}
            onClick={() => handleItemClick(item.text)}
          />
        ))}
      </div>

      {/* Footer Links */}
      <div className="mt-auto border-t border-logistic-dark">
        {footerItems.map((item) => (
          <SidebarItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            onClick={() => handleItemClick(item.text)}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
