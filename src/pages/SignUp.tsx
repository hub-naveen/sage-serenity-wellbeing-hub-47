
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { UserPlus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import GoogleButton from "@/components/auth/GoogleButton";

const SignUp = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Account created",
      description: "Your account has been created successfully."
    });
  };

  const handleGoogleSuccess = (token: string) => {
    console.log("Google sign-up successful, token:", token);
    // In a real app, you would store the token and redirect the user
    toast({
      title: "Google Sign-Up Successful",
      description: "Your account has been created with Google."
    });
  };

  return (
    <Layout>
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-cream/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-sage/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
        <div className="container mx-auto px-4 py-8 max-w-md relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="backdrop-blur-sm bg-white/90 border-sage/20 shadow-lg dark:bg-black/50 dark:border-white/10">
              <CardHeader className="text-center">
                <div className="mx-auto bg-sage/15 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <UserPlus className="h-8 w-8 text-forest dark:text-cream" />
                </div>
                <CardTitle className="text-2xl font-bold text-center text-forest dark:text-cream">
                  Create Your Account
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
                    <Label htmlFor="name" className="text-forest dark:text-cream">Full Name</Label>
                    <Input id="name" placeholder="John Doe" className="transition-all focus:border-forest focus:ring-forest" />
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 10 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <Label htmlFor="email" className="text-forest dark:text-cream">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="transition-all focus:border-forest focus:ring-forest" />
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 10 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <Label htmlFor="password" className="text-forest dark:text-cream">Password</Label>
                    <Input id="password" type="password" placeholder="••••••••" className="transition-all focus:border-forest focus:ring-forest" />
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 10 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <Label htmlFor="confirm-password" className="text-forest dark:text-cream">Confirm Password</Label>
                    <Input id="confirm-password" type="password" placeholder="••••••••" className="transition-all focus:border-forest focus:ring-forest" />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 10 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <Button className="w-full bg-forest hover:bg-forest-dark transition-colors text-cream" type="submit">
                      Sign Up
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 10 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="relative flex items-center py-2"
                  >
                    <div className="flex-grow border-t border-border"></div>
                    <span className="flex-shrink mx-4 text-muted-foreground text-sm">or</span>
                    <div className="flex-grow border-t border-border"></div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 10 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <GoogleButton onSuccess={handleGoogleSuccess} />
                  </motion.div>
                  
                  <motion.p 
                    className="text-center text-sm text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 1 : 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    Already have an account?{" "}
                    <Link to="/login" className="text-forest dark:text-cream hover:underline">
                      Login
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

export default SignUp;
