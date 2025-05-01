
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

// Define user types and authentication state
type UserRole = "admin" | "doctor" | "patient" | null;
type AuthProvider = "email" | "google" | "microsoft";

interface User {
  email: string;
  role: UserRole;
  name?: string;
  provider?: AuthProvider;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signUp: (name: string, email: string, password: string) => Promise<boolean>;
  loginWithProvider: (provider: "google" | "microsoft") => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check for saved session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Failed to parse saved user:", error);
        localStorage.removeItem("user");
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // This is a mock implementation - in a real app, this would call an API
      // Special credential check for admin and doctor roles
      if (email === "personalaccdinesh@gmail.com") {
        if (password === "admin@123") {
          const adminUser = { email, role: "admin" as UserRole, name: "Admin User", provider: "email" as AuthProvider };
          setUser(adminUser);
          setIsAuthenticated(true);
          localStorage.setItem("user", JSON.stringify(adminUser));
          toast({
            title: "Login Successful",
            description: "Welcome to the admin panel!",
          });
          navigate("/admin");
          return true;
        } else if (password === "doctor@123") {
          const doctorUser = { email, role: "doctor" as UserRole, name: "Doctor User", provider: "email" as AuthProvider };
          setUser(doctorUser);
          setIsAuthenticated(true);
          localStorage.setItem("user", JSON.stringify(doctorUser));
          toast({
            title: "Login Successful",
            description: "Welcome to the doctor panel!",
          });
          navigate("/doctor-panel");
          return true;
        }
      }

      // Regular user login (mock)
      if (email && password.length >= 6) {
        const regularUser = { email, role: "patient" as UserRole, provider: "email" as AuthProvider };
        setUser(regularUser);
        setIsAuthenticated(true);
        localStorage.setItem("user", JSON.stringify(regularUser));
        toast({
          title: "Login Successful",
          description: "Welcome back!",
        });
        navigate("/dashboard");
        return true;
      }

      toast({
        title: "Login Failed",
        description: "Invalid email or password. Please try again.",
        variant: "destructive",
      });
      return false;
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Login Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      return false;
    }
  };

  const signUp = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      // This is a mock implementation - in a real app, this would call an API
      if (email && password.length >= 6 && name) {
        const newUser = { email, role: "patient" as UserRole, name, provider: "email" as AuthProvider };
        setUser(newUser);
        setIsAuthenticated(true);
        localStorage.setItem("user", JSON.stringify(newUser));
        toast({
          title: "Account Created",
          description: "Your account has been created successfully!",
        });
        navigate("/dashboard");
        return true;
      }

      toast({
        title: "Sign Up Failed",
        description: "Please fill in all fields correctly.",
        variant: "destructive",
      });
      return false;
    } catch (error) {
      console.error("Sign up error:", error);
      toast({
        title: "Sign Up Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      return false;
    }
  };

  const loginWithProvider = async (provider: "google" | "microsoft"): Promise<boolean> => {
    try {
      // In a real app, this would verify the tokens from the providers
      const providerName = provider === "google" ? "Google" : "Microsoft";
      
      // Create a mock user based on the provider
      const mockEmail = `user-${Math.random().toString(36).substring(2)}@${provider}.com`;
      const mockName = `${providerName} User`;
      
      const newUser = { 
        email: mockEmail, 
        role: "patient" as UserRole, 
        name: mockName, 
        provider: provider as AuthProvider 
      };
      
      setUser(newUser);
      setIsAuthenticated(true);
      localStorage.setItem("user", JSON.stringify(newUser));
      
      toast({
        title: "Login Successful",
        description: `You've been logged in with ${providerName}!`,
      });
      
      navigate("/dashboard");
      return true;
    } catch (error) {
      console.error(`${provider} login error:`, error);
      toast({
        title: "Authentication Failed",
        description: `Could not sign in with ${provider}. Please try again.`,
        variant: "destructive",
      });
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
    toast({
      title: "Logged Out",
      description: "You've been successfully logged out.",
    });
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, signUp, loginWithProvider, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
