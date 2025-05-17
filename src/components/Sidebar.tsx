
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Clock,
  Settings,
  MessageCircleQuestion,
  Info,
  LogOut,
  ChevronLeft,
  ChevronRight,
  History,
  Wallet,
  Sun,
  Moon,
  Monitor
} from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

// Interface for sidebar items
interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  onClick?: () => void;
  collapsed?: boolean;
}

// Sidebar item component
const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  text,
  active = false,
  onClick,
  collapsed = false
}) => {
  return (
    <div
      className={`sidebar-item ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      <span className="flex items-center justify-center">{icon}</span>
      {!collapsed && <span className="transition-opacity duration-200">{text}</span>}
    </div>
  );
};

// Main sidebar component
const Sidebar: React.FC<{ isMobile: boolean; toggleSidebar: () => void }> = ({
  isMobile,
  toggleSidebar
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const { theme, setTheme } = useTheme();

  // Handler for collapsing/expanding the sidebar
  const toggleCollapse = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCollapsed(!collapsed);
  };

  // Navigation items with paths
  const navItems = [
    { icon: <Box size={20} />, text: 'Dashboard', path: '/' },
    { icon: <Box size={20} />, text: 'Submit Shipment', path: '/submit-shipment' },
    { icon: <Clock size={20} />, text: 'Awaiting Shipments', path: '/awaiting-shipments' },
    { icon: <History size={20} />, text: 'Shipment History', path: '/shipment-history' },
    { icon: <Settings size={20} />, text: 'Settings', path: '/settings' },
  ];

  // Footer items with paths
  const footerItems = [
    { icon: <MessageCircleQuestion size={20} />, text: 'Support', path: '/support' },
    { icon: <Info size={20} />, text: 'About', path: '/about' },
    { icon: <LogOut size={20} />, text: 'Exit', path: '/logout' },
  ];

  // Handle item click for navigation
  const handleItemClick = (path: string) => {
    // If sidebar is collapsed on desktop, expand it
    if (collapsed && !isMobile) {
      setCollapsed(false);
    }

    // On mobile, close the sidebar after navigation
    if (isMobile) toggleSidebar();

    // Navigate to the selected path
    if (path === '/logout') {
      // Handle logout action here
      console.log('Logout clicked');
    } else {
      navigate(path);
    }
  };

  // Handle theme switching
  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
  };

  return (
    <div className={`sidebar flex flex-col h-full ${collapsed ? 'w-16' : 'w-64'} transition-all duration-300`}>
      {/* Sidebar Header with Logo */}
      <div className="p-4 border-b border-navy-light flex justify-between  pb-8 items-center dark:bg-navy-dark">
        {!collapsed && <h1 className="text-2xl font-bold">Logistics.</h1>}
        {!collapsed && (
          <button
            onClick={toggleCollapse}
            className="text-white hover:bg-logistic-dark p-1 rounded transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
        )}
        {collapsed && (
          <button
            onClick={toggleCollapse}
            className="mx-auto text-white hover:bg-logistic-dark p-1 rounded transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>

      {/* Navigation Links */}
      <div className="flex-grow dark:bg-navy-dark">
        {navItems.map((item) => (
          <SidebarItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            active={location.pathname === item.path}
            onClick={() => handleItemClick(item.path)}
            collapsed={collapsed}
          />
        ))}
      </div>

      {/* Theme Switcher */}
      <div className="px-4 py-3 border-t border-navy-light dark:bg-navy-dark">
        {!collapsed && <p className="text-sm text-white/70 mb-2">Theme</p>}
        <div className={`flex ${collapsed ? 'flex-col' : ''} gap-2`}>
          <button
            onClick={() => handleThemeChange('light')}
            className={`p-2 rounded ${theme === 'light' ? 'bg-white/20' : 'hover:bg-white/10'} transition-colors`}
            title="Light Mode"
          >
            <Sun size={18} className="text-white" />
          </button>
          <button
            onClick={() => handleThemeChange('dark')}
            className={`p-2 rounded ${theme === 'dark' ? 'bg-white/20' : 'hover:bg-white/10'} transition-colors`}
            title="Dark Mode"
          >
            <Moon size={18} className="text-white" />
          </button>
          <button
            onClick={() => handleThemeChange('system')}
            className={`p-2 rounded ${theme === 'system' ? 'bg-white/20' : 'hover:bg-white/10'} transition-colors`}
            title="System Theme"
          >
            <Monitor size={18} className="text-white" />
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="mt-auto border-t border-navy-light dark:bg-navy-dark">
        {footerItems.map((item) => (
          <SidebarItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            onClick={() => handleItemClick(item.path)}
            collapsed={collapsed}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
