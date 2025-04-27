
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Activity, FileText, Brain, Dumbbell, Heart, Clipboard } from "lucide-react";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-sage/5 to-background">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cream rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-lilac rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '8s' }}></div>
        </div>
        
        <div className="container relative mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-forest mb-6 animate-fade-in opacity-0">
            Welcome to HealthHub.ai
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in opacity-0 delay-200">
            Your comprehensive healthcare platform powered by artificial intelligence. Experience personalized health management like never before.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in opacity-0 delay-300">
            <Link to="/signup">
              <Button size="lg" className="bg-forest hover:bg-forest-dark">Get Started</Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="border-forest text-forest hover:bg-forest/10">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div 
              key={index}
              className="group p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
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
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-sage/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-forest mb-4">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who have transformed their health journey with HealthHub.ai
          </p>
          <div className="flex justify-center gap-4">
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
      </div>
    </Layout>
  );
};

export default Home;
