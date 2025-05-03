
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import LogoutButton from '@/components/auth/LogoutButton';
import { useAuth } from '@/contexts/AuthContext';
import { FitnessDropdown, DietDropdown } from '@/components/navigation/HealthDropdowns';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ isDarkMode, toggleDarkMode }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on location change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <header 
      ref={headerRef}
      className={`sticky top-0 z-50 w-full transition-shadow duration-300 ${
        scrolled ? 'shadow-md bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-2xl tracking-tight text-forest dark:text-sage-light">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-forest to-sage opacity-30 blur"></div>
              <div className="relative">Health.AI</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button variant="ghost">Home</Button>
            </Link>
            
            <FitnessDropdown />
            <DietDropdown />
            
            <Link to="/disease-predictor">
              <Button variant="ghost">Disease Predictor</Button>
            </Link>
            
            <Link to="/chat">
              <Button variant="ghost">AI Chat</Button>
            </Link>
          </div>

          {/* Desktop Right Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Search */}
            <div className="relative">
              <Input
                type="text"
                placeholder="Search..."
                className={`w-[200px] transition-all duration-300 ${searchFocused ? 'w-[300px]' : ''}`}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
            </div>
            
            {/* Dark Mode Toggle */}
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isDarkMode ? 'dark' : 'light'}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDarkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                </motion.div>
              </AnimatePresence>
            </Button>
            
            {/* User Menu */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-1">
                <Link to="/profile">
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
                <LogoutButton />
              </div>
            ) : (
              <Link to="/login">
                <Button>Sign In</Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Dark Mode Toggle - Mobile */}
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {isDarkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white dark:bg-gray-900 border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              <div className="relative my-2">
                <Input
                  type="text"
                  placeholder="Search..."
                  className="w-full"
                />
                <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
              </div>
              
              <Link to="/" className="block py-2 hover:text-forest dark:hover:text-sage-light">
                Home
              </Link>
              <div className="py-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Fitness</span>
                </div>
                <div className="pl-4 mt-1 space-y-1 text-sm">
                  <Link to="/fitness-trainer" className="block py-1 hover:text-forest dark:hover:text-sage-light">
                    Fitness Trainer
                  </Link>
                  <Link to="/gym-training" className="block py-1 hover:text-forest dark:hover:text-sage-light">
                    Gym Training
                  </Link>
                  <Link to="/learn-exercise-ai" className="block py-1 hover:text-forest dark:hover:text-sage-light">
                    Exercise Library
                  </Link>
                </div>
              </div>
              <div className="py-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Nutrition</span>
                </div>
                <div className="pl-4 mt-1 space-y-1 text-sm">
                  <Link to="/meal-planner" className="block py-1 hover:text-forest dark:hover:text-sage-light">
                    Meal Planner
                  </Link>
                  <Link to="/diet" className="block py-1 hover:text-forest dark:hover:text-sage-light">
                    Diet Plans
                  </Link>
                  <Link to="/risk" className="block py-1 hover:text-forest dark:hover:text-sage-light">
                    Risk Assessment
                  </Link>
                </div>
              </div>
              <Link to="/disease-predictor" className="block py-2 hover:text-forest dark:hover:text-sage-light">
                Disease Predictor
              </Link>
              <Link to="/chat" className="block py-2 hover:text-forest dark:hover:text-sage-light">
                AI Chat
              </Link>
              
              <div className="pt-2 border-t border-border">
                {isAuthenticated ? (
                  <div className="flex flex-col space-y-2">
                    <Link to="/profile">
                      <Button variant="outline" className="w-full justify-start">
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </Button>
                    </Link>
                    <LogoutButton className="w-full" />
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    <Link to="/login">
                      <Button variant="outline" className="w-full">Sign In</Button>
                    </Link>
                    <Link to="/signup">
                      <Button className="w-full">Sign Up</Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
