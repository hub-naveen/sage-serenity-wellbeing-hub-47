
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

interface LogoutButtonProps {
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | 
             "ghost" | "link" | null | undefined;
}

const LogoutButton = ({ 
  className = "",
  variant = "outline" 
}: LogoutButtonProps) => {
  const { logout } = useAuth();

  return (
    <Button 
      onClick={logout} 
      variant={variant} 
      className={`flex items-center gap-2 ${className}`}
    >
      <LogOut className="h-4 w-4" />
      <span>Logout</span>
    </Button>
  );
};

export default LogoutButton;
