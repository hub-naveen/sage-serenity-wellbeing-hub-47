
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Activity, FileText, Brain, Dumbbell, Heart, Clipboard, ArrowRight } from "lucide-react";

const Home = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Layout>
      {/* Hero Section with enhanced background effects */}
      <div className="relative overflow-hidden bg-gradient-to-b from-sage/5 to-background min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cream rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-40 w-60 h-60 bg-sage rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '10s' }}></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-lilac rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-40 left-40 w-60 h-60 bg-forest/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '12s' }}></div>
        </div>
        
        <div className="container relative mx-auto px-4 py-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-forest mb-6"
          >
            Welcome to HealthHub.ai
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Your comprehensive healthcare platform powered by artificial intelligence. Experience personalized health management like never before.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/signup">
              <Button size="lg" className="bg-forest hover:bg-forest-dark group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="border-forest text-forest hover:bg-forest/10">
                Learn More
              </Button>
            </Link>
          </motion.div>
          
          {/* Floating decorative elements */}
          <div className="hidden md:block absolute -bottom-10 left-1/4 opacity-20">
            <Heart className="h-10 w-10 text-forest animate-bounce" style={{ animationDuration: '3s' }} />
          </div>
          <div className="hidden md:block absolute top-20 right-1/4 opacity-20">
            <Brain className="h-10 w-10 text-forest animate-pulse" style={{ animationDuration: '4s' }} />
          </div>
        </div>
      </div>

      {/* Features Grid with scroll animations */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-forest mb-10 text-center"
        >
          Comprehensive Health Features
        </motion.h2>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            {
              icon: <Brain className="h-8 w-8" />,
              title: "Disease Prediction",
              description: "AI-powered disease prediction and risk assessment",
              link: "/disease-predictor",
              buttonText: "Try Now"
            },
            {
              icon: <Dumbbell className="h-8 w-8" />,
              title: "Fitness Training",
              description: "Personalized workout plans and trainer matching",
              link: "/fitness-trainer",
              buttonText: "Get Started"
            },
            {
              icon: <FileText className="h-8 w-8" />,
              title: "Health Records",
              description: "Secure storage and management of your health data",
              link: "/health-records",
              buttonText: "View Records"
            },
            {
              icon: <Activity className="h-8 w-8" />,
              title: "Health Risk Assessment",
              description: "Analyze your health risks with AI assistance",
              link: "/risk",
              buttonText: "Check Risks"
            },
            {
              icon: <Heart className="h-8 w-8" />,
              title: "Personal Trainer",
              description: "Connect with expert fitness trainers",
              link: "/trainer",
              buttonText: "Meet Trainer"
            },
            {
              icon: <Clipboard className="h-8 w-8" />,
              title: "Diet Planning",
              description: "Get personalized nutrition guidance",
              link: "/diet",
              buttonText: "Plan Diet"
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-sage/15 flex items-center justify-center text-forest mb-4 group-hover:bg-forest group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-forest group-hover:text-forest-dark">
                {feature.title}
              </h3>
              <p className="mb-4 text-muted-foreground">
                {feature.description}
              </p>
              <Link to={feature.link}>
                <Button className="w-full group-hover:bg-forest">
                  {feature.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Call to Action with parallax effect */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-sage/5 py-16 overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-cream/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-forest/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-forest mb-4">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who have transformed their health journey with HealthHub.ai
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" className="bg-forest hover:bg-forest-dark">
                Sign Up Free
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="border-forest text-forest hover:bg-forest/10">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Home;
