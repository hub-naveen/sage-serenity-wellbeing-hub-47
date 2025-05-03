
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryText?: string;
  secondaryLink?: string;
}

const HeroSection = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryText,
  secondaryLink,
}: HeroSectionProps) => {
  return (
    <div className="relative overflow-hidden bg-sage/5 pt-10 pb-24 md:pt-16 md:pb-32">
      {/* Background decorative elements - enhanced with animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div 
          className="absolute top-10 left-10 md:top-20 md:left-20 w-96 h-96 bg-cream rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ 
            duration: 8, 
            ease: "easeInOut", 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 -right-10 md:right-20 w-96 h-96 bg-lilac rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ 
            duration: 10, 
            ease: "easeInOut", 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1 
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-sage/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 12, 
            ease: "easeInOut", 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-forest"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {title}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-foreground/80 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {subtitle}
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to={ctaLink}>
                <Button className="bg-forest hover:bg-forest-dark text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  {ctaText}
                </Button>
              </Link>
            </motion.div>
            {secondaryText && secondaryLink && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to={secondaryLink}>
                  <Button variant="outline" className="border-forest text-forest hover:bg-forest/10 px-8 py-6 text-lg transition-all duration-300">
                    {secondaryText}
                  </Button>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Enhanced wave separator with animation */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <svg 
            viewBox="0 0 1440 74" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-full text-background"
            preserveAspectRatio="none"
          >
            <path 
              d="M0 24L120 32C240 40 480 56 720 64C960 72 1200 72 1320 72H1440V0H1320C1200 0 960 0 720 0C480 0 240 0 120 0H0V24Z" 
              fill="currentColor"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
