
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Activity, Utensils, Scale, Dumbbell, Heart, Apple, Salad, Medal } from "lucide-react"
import { Link } from "react-router-dom"

export const FitnessDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-1">
          <Activity className="h-4 w-4 mr-1" />
          Fitness
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white dark:bg-gray-800 border border-border">
        <DropdownMenuLabel>Fitness Programs</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/fitness-trainer" className="flex items-center cursor-pointer">
            <Dumbbell className="mr-2 h-4 w-4" />
            <span>Fitness Trainer</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/gym-training" className="flex items-center cursor-pointer">
            <Medal className="mr-2 h-4 w-4" />
            <span>Gym Training</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/learn-exercise-ai" className="flex items-center cursor-pointer">
            <Activity className="mr-2 h-4 w-4" />
            <span>Exercise Library</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/trainer" className="flex items-center cursor-pointer">
            <Heart className="mr-2 h-4 w-4" />
            <span>Health Analytics</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const DietDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-1">
          <Utensils className="h-4 w-4 mr-1" />
          Nutrition
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white dark:bg-gray-800 border border-border">
        <DropdownMenuLabel>Nutrition Services</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/meal-planner" className="flex items-center cursor-pointer">
            <Salad className="mr-2 h-4 w-4" />
            <span>Meal Planner</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/diet" className="flex items-center cursor-pointer">
            <Apple className="mr-2 h-4 w-4" />
            <span>Diet Plans</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/risk" className="flex items-center cursor-pointer">
            <Scale className="mr-2 h-4 w-4" />
            <span>Risk Assessment</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
