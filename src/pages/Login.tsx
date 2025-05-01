
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import GoogleButton from "@/components/auth/GoogleButton";

const Login = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login successful",
        description: "You have been logged in successfully.",
      });
    }, 1500);
  };

  const handleGoogleSuccess = (token: string) => {
    console.log("Google login successful, token:", token);
    // In a real app, you would store the token and redirect the user
    toast({
      title: "Google Login Successful",
      description: "You have been logged in with Google."
    });
  };

  return (
    <Layout>
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-sage/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-lilac/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-4 py-8 max-w-md relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="backdrop-blur-sm bg-white/90 border-sage/20 shadow-lg dark:bg-black/50 dark:border-white/10">
              <CardHeader className="text-center">
                <div className="mx-auto bg-sage/15 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Lock className="h-8 w-8 text-forest dark:text-cream" />
                </div>
                <CardTitle className="text-2xl font-bold text-center text-forest dark:text-cream">
                  Login to Your Account
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 10 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    <Label htmlFor="email" className="text-forest dark:text-cream">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="transition-all focus:border-forest focus:ring-forest"
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 10 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password" className="text-forest dark:text-cream">Password</Label>
                      <Link to="/forgot-password" className="text-sm text-forest hover:underline dark:text-cream">
                        Forgot Password?
                      </Link>
                    </div>
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="••••••••" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="transition-all focus:border-forest focus:ring-forest"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 10 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <Button 
                      className="w-full bg-forest hover:bg-forest-dark transition-colors text-cream" 
                      type="submit" 
                      disabled={isLoading}
                    >
                      {isLoading ? "Logging in..." : "Login"}
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 10 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="relative flex items-center py-2"
                  >
                    <div className="flex-grow border-t border-border"></div>
                    <span className="flex-shrink mx-4 text-muted-foreground text-sm">or</span>
                    <div className="flex-grow border-t border-border"></div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 10 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <GoogleButton 
                      text="Login with Google"
                      onSuccess={handleGoogleSuccess}
                    />
                  </motion.div>
                  
                  <motion.p 
                    className="text-center text-sm text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 1 : 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-forest hover:underline dark:text-cream">
                      Sign Up
                    </Link>
                  </motion.p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
