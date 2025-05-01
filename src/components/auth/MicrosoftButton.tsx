
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Microsoft } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

interface MicrosoftButtonProps {
  text?: string;
  className?: string;
  onSuccess?: (token: string) => void;
}

const MicrosoftButton = ({ 
  text = "Continue with Microsoft", 
  className = "",
  onSuccess
}: MicrosoftButtonProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { loginWithProvider } = useAuth();

  const handleMicrosoftSignIn = async () => {
    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock success case with Microsoft provider
      const success = await loginWithProvider("microsoft");
      
      if (success && onSuccess) {
        const mockToken = "microsoft-mock-token-" + Math.random().toString(36).substring(2);
        onSuccess(mockToken);
      }
    } catch (error) {
      toast({
        title: "Authentication Failed",
        description: "Could not sign in with Microsoft. Please try again.",
        variant: "destructive",
      });
      console.error("Microsoft sign-in error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button 
      type="button"
      variant="outline" 
      onClick={handleMicrosoftSignIn}
      disabled={isLoading}
      className={`w-full flex items-center justify-center gap-2 ${className}`}
    >
      {!isLoading ? (
        <Microsoft className="h-5 w-5 text-[#00A4EF]" />
      ) : null}
      {isLoading ? "Processing..." : text}
    </Button>
  );
};

export default MicrosoftButton;
