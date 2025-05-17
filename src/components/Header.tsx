
import React from 'react';
import { Menu, X, User } from 'lucide-react';

interface HeaderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ isSidebarOpen, toggleSidebar, title }) => {
  /**
   * User information would typically come from your authentication system
   * This is a placeholder that you can replace with your API integration
   */
  const userInfo = {
    name: "UserName",
    email: "email@example.com",
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          {/* Mobile Sidebar Toggle */}
          <button 
            className="lg:hidden text-gray-700 hover:text-gray-900" 
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="text-xl md:text-2xl font-medium">{title}</h1>
        </div>
        
        {/* User Profile Section */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden md:block">
            <div className="font-medium">{userInfo.name}</div>
            <div className="text-sm text-gray-500">{userInfo.email}</div>
          </div>
          <div className="bg-gray-100 rounded-full p-2">
            <User className="text-gray-700" size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
