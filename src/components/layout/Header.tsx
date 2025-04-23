
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ isDarkMode, toggleDarkMode }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-3xl font-semibold bg-gradient-to-r from-forest to-sage bg-clip-text text-transparent">
              Sage Serenity
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
          <Link to="/risk" className="text-foreground hover:text-primary transition-colors">Risk Predictor</Link>
          <Link to="/trainer" className="text-foreground hover:text-primary transition-colors">Workout Coach</Link>
          <Link to="/diet" className="text-foreground hover:text-primary transition-colors">Diet Planner</Link>
          <Link to="/chat" className="text-foreground hover:text-primary transition-colors">Health Chat</Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
          
          <div className="flex items-center space-x-4 ml-4">
            <Button variant="outline" onClick={toggleDarkMode} size="icon" className="rounded-full">
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            <Link to="/auth">
              <Button className="bg-forest hover:bg-forest-dark text-white">Sign In</Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <Button variant="outline" onClick={toggleDarkMode} size="icon" className="mr-2 rounded-full">
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          <button 
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-foreground focus:outline-none"
          >
            <svg 
              className="h-6 w-6" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <Link to="/" className="block py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/risk" className="block py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Risk Predictor</Link>
            <Link to="/trainer" className="block py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Workout Coach</Link>
            <Link to="/diet" className="block py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Diet Planner</Link>
            <Link to="/chat" className="block py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Health Chat</Link>
            <Link to="/about" className="block py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-forest hover:bg-forest-dark text-white mt-2">Sign In</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
