
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-forest mb-6">
            Welcome to HealthHub.ai
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Your comprehensive healthcare platform powered by artificial intelligence
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {/* Feature Cards */}
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-forest">Disease Prediction</h3>
              <p className="mb-4 text-muted-foreground">AI-powered disease prediction and risk assessment</p>
              <Link to="/disease-predictor">
                <Button className="w-full">Try Now</Button>
              </Link>
            </div>

            <div className="p-6 rounded-lg bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-forest">Fitness Training</h3>
              <p className="mb-4 text-muted-foreground">Personalized workout plans and trainer matching</p>
              <Link to="/fitness-trainer">
                <Button className="w-full">Get Started</Button>
              </Link>
            </div>

            <div className="p-6 rounded-lg bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-forest">Health Records</h3>
              <p className="mb-4 text-muted-foreground">Secure storage and management of your health data</p>
              <Link to="/health-records">
                <Button className="w-full">View Records</Button>
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <Link to="/signup">
              <Button size="lg" className="mx-2">Sign Up</Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="mx-2">Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
