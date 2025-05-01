
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

// Pages
import Home from "./pages/Home";
import DiseasePredictor from "./pages/DiseasePredictor";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import DoctorPanel from "./pages/DoctorPanel";
import HealthRecords from "./pages/HealthRecords";
import AdminPanel from "./pages/AdminPanel";
import FitnessTrainer from "./pages/FitnessTrainer";
import GymTraining from "./pages/GymTraining";
import RiskPlanner from "./pages/RiskPlanner";
import AccountManager from "./pages/AccountManager";
import NotFound from "./pages/NotFound";
import Risk from "./pages/Risk";
import Trainer from "./pages/Trainer";
import Diet from "./pages/Diet";
import Chat from "./pages/Chat";
import Ocr from "./pages/Ocr";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/disease-predictor" element={<DiseasePredictor />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/doctor-panel" element={<DoctorPanel />} />
          <Route path="/health-records" element={<HealthRecords />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/fitness-trainer" element={<FitnessTrainer />} />
          <Route path="/gym-training" element={<GymTraining />} />
          <Route path="/risk-planner" element={<RiskPlanner />} />
          <Route path="/account" element={<AccountManager />} />
          <Route path="/risk" element={<Risk />} />
          <Route path="/trainer" element={<Trainer />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/ocr" element={<Ocr />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
