
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  HeartPulse, 
  Brain, 
  Activity, 
  Dumbbell, 
  Salad, 
  FileText,
  BarChart4,
  CircleUser,
  MessageSquare,
  Star,
  ChevronRight
} from "lucide-react";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3
      }
    }
  };

  return (
    <Layout>
      {/* Hero Section with animated elements */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4">
        {/* Animated background shapes */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cream opacity-20 blur-3xl animate-pulse" 
               style={{ animationDuration: '15s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-sage/20 opacity-25 blur-3xl animate-pulse" 
               style={{ animationDuration: '18s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-lilac/10 opacity-30 blur-3xl animate-pulse" 
               style={{ animationDuration: '12s' }}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            {/* Hero content - Left side */}
            <motion.div 
              className="lg:col-span-3 space-y-6 text-center lg:text-left"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.span 
                variants={fadeInUp}
                className="inline-block py-1.5 px-4 rounded-full bg-forest/10 text-forest font-medium text-sm"
              >
                Health Reimagined with AI
              </motion.span>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest tracking-tight leading-tight"
              >
                Your Complete <br className="hidden md:inline" />
                <span className="relative">
                  <span className="relative z-10">AI-Powered</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-sage/30 -z-10 rounded-sm"></span>
                </span> <br className="hidden md:inline" />
                Health Partner
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0"
              >
                Experience personalized care through advanced AI that predicts health risks, 
                coaches your workouts, plans your meals, and securely manages your records.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <Link to="/signup">
                  <Button 
                    size="lg" 
                    className="group bg-forest hover:bg-forest-dark text-white font-medium transition-all duration-300 shadow-md hover:shadow-xl"
                  >
                    Start Your Journey
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/risk">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-forest text-forest hover:bg-forest/5 font-medium"
                  >
                    Explore Features
                  </Button>
                </Link>
              </motion.div>
              
              {/* Trust indicators */}
              <motion.div 
                variants={fadeInUp}
                className="pt-4 flex items-center justify-center lg:justify-start text-muted-foreground"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-8 h-8 rounded-full bg-sage/80 border-2 border-background flex items-center justify-center text-xs text-white font-semibold"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div className="ml-2 flex items-center text-sm">
                  <Star className="h-4 w-4 text-forest fill-forest mr-1" />
                  <span>Trusted by <span className="font-semibold">10,000+</span> users</span>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Hero visual - Right side */}
            <motion.div 
              className="lg:col-span-2 relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative h-[400px] md:h-[500px]">
                {/* Main visual frame */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-forest-light/20 to-forest-dark/40 backdrop-blur-sm p-4 shadow-2xl overflow-hidden">
                  <div className="absolute top-2 left-4 flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  
                  {/* Visual content - App preview mockup */}
                  <div className="w-full h-full mt-4 rounded-lg bg-white/90 overflow-hidden flex flex-col">
                    <div className="h-16 border-b flex items-center px-4">
                      <div className="w-8 h-8 rounded-full bg-forest/10 flex items-center justify-center mr-3">
                        <HeartPulse className="h-4 w-4 text-forest" />
                      </div>
                      <div>
                        <div className="h-4 w-32 bg-forest/20 rounded-full"></div>
                        <div className="h-3 w-24 bg-forest/10 rounded-full mt-1"></div>
                      </div>
                    </div>
                    
                    <div className="flex-1 p-4 grid grid-cols-2 gap-3">
                      {[
                        { icon: <HeartPulse className="h-5 w-5" />, color: "bg-red-100 text-red-500" },
                        { icon: <Brain className="h-5 w-5" />, color: "bg-purple-100 text-purple-500" },
                        { icon: <Activity className="h-5 w-5" />, color: "bg-blue-100 text-blue-500" },
                        { icon: <Dumbbell className="h-5 w-5" />, color: "bg-amber-100 text-amber-500" },
                      ].map((item, i) => (
                        <div 
                          key={i}
                          className="rounded-lg bg-white shadow-sm p-3 flex flex-col justify-between"
                        >
                          <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center mb-2`}>
                            {item.icon}
                          </div>
                          <div className="space-y-1.5">
                            <div className="h-3 w-full bg-gray-100 rounded-full"></div>
                            <div className="h-3 w-2/3 bg-gray-100 rounded-full"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="h-16 border-t flex items-center justify-around px-4">
                      {[HeartPulse, Activity, CircleUser, MessageSquare].map((Icon, i) => (
                        <div key={i} className={`w-10 h-10 rounded-full ${i === 0 ? 'bg-forest/10' : 'bg-transparent'} flex items-center justify-center`}>
                          <Icon className={`h-5 w-5 ${i === 0 ? 'text-forest' : 'text-gray-400'}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute -right-6 top-1/4 p-3 rounded-lg bg-white shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <BarChart4 className="h-5 w-5 text-forest" />
                </motion.div>
                <motion.div 
                  className="absolute -left-8 top-1/2 p-3 rounded-lg bg-white shadow-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                >
                  <FileText className="h-5 w-5 text-forest" />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-4 left-1/3 p-3 rounded-lg bg-white shadow-xl"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                >
                  <Salad className="h-5 w-5 text-forest" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-forest mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              Comprehensive Health Features
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Experience our suite of AI-powered tools designed to revolutionize your health journey
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: <Activity className="h-6 w-6" />,
                title: "Health Risk Assessment",
                description: "AI-powered analysis of your health metrics to predict and prevent potential issues",
                link: "/risk",
                color: "from-red-50 to-pink-50 border-red-100/50 hover:border-red-200",
                iconBg: "bg-red-100/80 text-red-600"
              },
              {
                icon: <Dumbbell className="h-6 w-6" />,
                title: "AI Workout Coach",
                description: "Personalized training plans with real-time form correction and feedback",
                link: "/trainer",
                color: "from-amber-50 to-orange-50 border-amber-100/50 hover:border-amber-200",
                iconBg: "bg-amber-100/80 text-amber-600"
              },
              {
                icon: <Salad className="h-6 w-6" />,
                title: "Smart Diet Planner",
                description: "Customized meal plans based on your preferences and nutritional needs",
                link: "/diet",
                color: "from-green-50 to-emerald-50 border-green-100/50 hover:border-green-200",
                iconBg: "bg-green-100/80 text-green-600"
              },
              {
                icon: <MessageSquare className="h-6 w-6" />,
                title: "Health Chatbot",
                description: "Instant answers to your wellness and fitness questions from our AI assistant",
                link: "/chat",
                color: "from-blue-50 to-sky-50 border-blue-100/50 hover:border-blue-200",
                iconBg: "bg-blue-100/80 text-blue-600"
              },
              {
                icon: <FileText className="h-6 w-6" />,
                title: "OCR Prescription Scanner",
                description: "Digitize your prescriptions for easy management and automated scheduling",
                link: "/ocr",
                color: "from-indigo-50 to-violet-50 border-indigo-100/50 hover:border-indigo-200",
                iconBg: "bg-indigo-100/80 text-indigo-600"
              },
              {
                icon: <Brain className="h-6 w-6" />,
                title: "Disease Predictor",
                description: "Advanced disease risk assessment using cutting-edge machine learning models",
                link: "/disease-predictor",
                color: "from-purple-50 to-pink-50 border-purple-100/50 hover:border-purple-200",
                iconBg: "bg-purple-100/80 text-purple-600"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`group rounded-xl bg-gradient-to-br ${feature.color} border p-6 shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <div className={`${feature.iconBg} h-12 w-12 rounded-lg flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-forest">{feature.title}</h3>
                <p className="mb-4 text-muted-foreground">{feature.description}</p>
                <Link to={feature.link} className="inline-flex items-center text-sm font-medium text-forest group-hover:text-forest-dark">
                  Explore 
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage/10 to-cream/20 -z-10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-lilac/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cream/20 rounded-full blur-3xl -z-10"></div>
        
        <motion.div
          className="container mx-auto max-w-4xl relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-forest to-forest-dark rounded-2xl p-10 text-white shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold mb-2">Ready to transform your health?</h2>
                <p className="text-white/80 text-lg max-w-md">
                  Join thousands of users who have improved their well-being with our AI-powered platform.
                </p>
              </div>
              <Link to="/signup">
                <Button size="lg" className="bg-white hover:bg-sage text-forest hover:text-forest-dark font-medium px-8 min-w-[200px] shadow-lg hover:shadow-xl transition-all">
                  Get Started Free
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Home;
