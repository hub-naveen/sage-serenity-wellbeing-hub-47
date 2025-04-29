
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Moon, 
  Sun, 
  Menu, 
  X, 
  Activity, 
  HeartPulse, 
  Dumbbell, 
  FileText, 
  LayoutDashboard,
  User
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ isDarkMode, toggleDarkMode }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Check if the path matches the current location
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-sm' 
        : 'bg-background/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <HeartPulse className="h-6 w-6 text-forest dark:text-sage-light transition-transform group-hover:scale-110" />
            <span className="text-2xl font-bold text-forest dark:text-sage-light">HealthHub.ai</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-2">
            {/* Health Assessment Hub Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={`flex items-center space-x-1 ${
                  isActive('/disease-predictor') || isActive('/risk') || isActive('/risk-planner')
                  ? 'bg-primary/10 text-primary'
                  : ''
                }`}>
                  <Activity className="mr-1 h-4 w-4" />
                  <span>Health Assessment</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56 bg-card/95 backdrop-blur-sm border-border">
                <DropdownMenuLabel>Health Assessment Tools</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/disease-predictor" className="w-full cursor-pointer">
                    Disease Predictor
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/risk" className="w-full cursor-pointer">
                    Health Risk Analysis
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/risk-planner" className="w-full cursor-pointer">
                    Risk Management Planner
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Fitness & Diet Hub Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={`flex items-center space-x-1 ${
                  isActive('/fitness-trainer') || isActive('/trainer') || isActive('/diet') || isActive('/gym-training')
                  ? 'bg-primary/10 text-primary'
                  : ''
                }`}>
                  <Dumbbell className="mr-1 h-4 w-4" />
                  <span>Fitness & Diet</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56 bg-card/95 backdrop-blur-sm border-border">
                <DropdownMenuLabel>Fitness & Nutrition</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/fitness-trainer" className="w-full cursor-pointer">
                    AI Fitness Trainer
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/trainer" className="w-full cursor-pointer">
                    Personalized Workout Plans
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/diet" className="w-full cursor-pointer">
                    Diet & Nutrition Planner
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/gym-training" className="w-full cursor-pointer">
                    Gym Training Guide
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Records & Documents Hub */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={`flex items-center space-x-1 ${
                  isActive('/health-records') || isActive('/ocr')
                  ? 'bg-primary/10 text-primary'
                  : ''
                }`}>
                  <FileText className="mr-1 h-4 w-4" />
                  <span>Records</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56 bg-card/95 backdrop-blur-sm border-border">
                <DropdownMenuLabel>Health Documentation</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/health-records" className="w-full cursor-pointer">
                    Health Records
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/ocr" className="w-full cursor-pointer">
                    Prescription Scanner
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button
              variant={isActive('/dashboard') ? 'secondary' : 'ghost'}
              className="flex items-center"
              asChild
            >
              <Link to="/dashboard">
                <LayoutDashboard className="mr-1 h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            </Button>
            
            <Button
              variant={isActive('/chat') ? 'secondary' : 'ghost'}
              className="flex items-center"
              asChild
            >
              <Link to="/chat">
                AI Chat
              </Link>
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            
            {/* User Account Button */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User size={18} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-card/95 backdrop-blur-sm border-border">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="w-full cursor-pointer">
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/account" className="w-full cursor-pointer">
                    Account Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/login" className="w-full cursor-pointer">
                    Sign In
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/signup" className="w-full cursor-pointer">
                    Sign Up
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Improved for better visibility and organization */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-3 space-y-1 divide-y divide-border/40">
            <div className="py-2 space-y-1">
              <p className="text-xs font-medium text-muted-foreground px-3 py-1">Health Assessment</p>
              <Link
                to="/disease-predictor"
                className="block px-3 py-2 rounded-md hover:bg-primary/10 text-foreground hover:text-primary"
              >
                Disease Predictor
              </Link>
              <Link
                to="/risk"
                className="block px-3 py-2 rounded-md hover:bg-primary/10 text-foreground hover:text-primary"
              >
                Health Risk Analysis
              </Link>
              <Link
                to="/risk-planner"
                className="block px-3 py-2 rounded-md hover:bg-primary/10 text-foreground hover:text-primary"
              >
                Risk Management Planner
              </Link>
            </div>
            
            <div className="py-2 space-y-1">
              <p className="text-xs font-medium text-muted-foreground px-3 py-1">Fitness & Diet</p>
              <Link
                to="/fitness-trainer"
                className="block px-3 py-2 rounded-md hover:bg-primary/10 text-foreground hover:text-primary"
              >
                AI Fitness Trainer
              </Link>
              <Link
                to="/trainer"
                className="block px-3 py-2 rounded-md hover:bg-primary/10 text-foreground hover:text-primary"
              >
                Personalized Workout Plans
              </Link>
              <Link
                to="/diet"
                className="block px-3 py-2 rounded-md hover:bg-primary/10 text-foreground hover:text-primary"
              >
                Diet & Nutrition Planner
              </Link>
              <Link
                to="/gym-training"
                className="block px-3 py-2 rounded-md hover:bg-primary/10 text-foreground hover:text-primary"
              >
                Gym Training Guide
              </Link>
            </div>
            
            <div className="py-2 space-y-1">
              <p className="text-xs font-medium text-muted-foreground px-3 py-1">Records & Documents</p>
              <Link
                to="/health-records"
                className="block px-3 py-2 rounded-md hover:bg-primary/10 text-foreground hover:text-primary"
              >
                Health Records
              </Link>
              <Link
                to="/ocr"
                className="block px-3 py-2 rounded-md hover:bg-primary/10 text-foreground hover:text-primary"
              >
                Prescription Scanner
              </Link>
            </div>
            
            <div className="py-2 space-y-1">
              <Link
                to="/dashboard"
                className="block px-3 py-2 rounded-md hover:bg-primary/10 text-foreground hover:text-primary"
              >
                Dashboard
              </Link>
              <Link
                to="/chat"
                className="block px-3 py-2 rounded-md hover:bg-primary/10 text-foreground hover:text-primary"
              >
                AI Chat
              </Link>
            </div>
            
            <div className="py-2 space-y-1">
              <p className="text-xs font-medium text-muted-foreground px-3 py-1">Account</p>
              <Link
                to="/profile"
                className="block px-3 py-2 rounded-md hover:bg-primary/10 text-foreground hover:text-primary"
              >
                Profile
              </Link>
              <Link
                to="/account"
                className="block px-3 py-2 rounded-md hover:bg-primary/10 text-foreground hover:text-primary"
              >
                Account Settings
              </Link>
            </div>
            
            <div className="pt-2 flex items-center justify-between">
              <Button onClick={toggleDarkMode} variant="outline" size="sm" className="text-sm">
                {isDarkMode ? <Sun size={16} className="mr-2" /> : <Moon size={16} className="mr-2" />}
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </Button>
              <Link to="/signup">
                <Button size="sm" variant="default">Sign Up</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
