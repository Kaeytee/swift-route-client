
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full">
        <h1 className="text-6xl font-bold text-logistic-DEFAULT mb-6">404</h1>
        <p className="text-xl text-gray-700 mb-6">
          Oops! The page you're looking for cannot be found.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 bg-logistic-DEFAULT hover:bg-logistic-dark text-white py-2 px-6 rounded-md transition-colors duration-200"
        >
          <Home size={18} />
          Return to Dashboard
        </a>
      </div>
    </div>
  );
};

export default NotFound;
