
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ isDarkMode, toggleDarkMode }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-forest">HealthHub.ai</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/disease-predictor" className="text-forest hover:text-forest-dark">
              Disease Predictor
            </Link>
            <Link to="/fitness-trainer" className="text-forest hover:text-forest-dark">
              Fitness Trainer
            </Link>
            <Link to="/health-records" className="text-forest hover:text-forest-dark">
              Health Records
            </Link>
            <Link to="/dashboard" className="text-forest hover:text-forest-dark">
              Dashboard
            </Link>
            <Link to="/profile" className="text-forest hover:text-forest-dark">
              Profile
            </Link>
            
            <Button
              variant="outline"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-2">
            <Link
              to="/disease-predictor"
              className="block px-3 py-2 text-forest hover:bg-forest/10 rounded-md"
            >
              Disease Predictor
            </Link>
            <Link
              to="/fitness-trainer"
              className="block px-3 py-2 text-forest hover:bg-forest/10 rounded-md"
            >
              Fitness Trainer
            </Link>
            <Link
              to="/health-records"
              className="block px-3 py-2 text-forest hover:bg-forest/10 rounded-md"
            >
              Health Records
            </Link>
            <Link
              to="/dashboard"
              className="block px-3 py-2 text-forest hover:bg-forest/10 rounded-md"
            >
              Dashboard
            </Link>
            <Link
              to="/profile"
              className="block px-3 py-2 text-forest hover:bg-forest/10 rounded-md"
            >
              Profile
            </Link>
            <Link to="/signup">
              <Button className="w-full">Sign Up</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
