
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
  delay?: number;
}

export function FeatureCard({
  title,
  description,
  icon,
  to,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.001 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Link to={to}>
        <div className="group h-full rounded-lg border border-border p-6 shadow-sm transition-all duration-300 hover:border-sage hover:shadow-md bg-card dark:bg-card/80 backdrop-blur-sm relative overflow-hidden">
          {/* Animated hover effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-sage/5 to-forest/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          <div className="flex h-full flex-col justify-between">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sage/10 text-forest">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {icon}
                </motion.div>
              </div>
              <h3 className="font-medium text-xl mb-2 text-forest group-hover:text-forest-dark transition-colors">
                {title}
              </h3>
              <p className="text-muted-foreground mb-4 group-hover:text-foreground/90 transition-colors">
                {description}
              </p>
            </div>
            <div className="flex items-center text-sm text-forest group-hover:text-forest-dark transition-all">
              <span className="mr-2">Learn more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
