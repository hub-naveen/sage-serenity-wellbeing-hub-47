
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Risk = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the enhanced risk planner page after a short delay
    const timer = setTimeout(() => {
      navigate("/risk-planner");
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="mb-6 overflow-hidden relative border-2 border-sage/30">
            <div className="absolute inset-0 bg-gradient-to-br from-forest/5 to-sage/10 z-0"></div>
            <CardContent className="flex flex-col items-center justify-center py-12 text-center relative z-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Loader2 className="h-12 w-12 text-forest mb-4" />
              </motion.div>
              <motion.h3 
                className="text-xl font-medium mb-2 text-forest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Redirecting to Risk Assessment Hub
              </motion.h3>
              <motion.p 
                className="text-muted-foreground max-w-md mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                We've enhanced our risk assessment functionality. Redirecting you to our new Risk Assessment Hub.
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => navigate("/risk-planner")}
                  className="bg-forest hover:bg-forest-dark text-white px-6 py-2 flex items-center gap-2 transition-all"
                >
                  Go to Risk Assessment Hub
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Risk;
