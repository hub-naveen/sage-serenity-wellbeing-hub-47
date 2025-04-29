
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Search, 
  FileText, 
  Calendar, 
  AlertCircle, 
  Download, 
  Share2,
  FlaskConical,
  Activity,
  Info,
  Shield
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const HealthRecords = () => {
  const [activeTab, setActiveTab] = useState("medical");
  const { toast } = useToast();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const downloadReport = () => {
    toast({
      title: "Report Downloaded",
      description: "Your health report has been downloaded."
    });
  };
  
  const shareReport = () => {
    toast({
      title: "Report Shared",
      description: "Your report has been shared with Dr. Johnson."
    });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Layout>
      <div className="relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-40 left-20 w-72 h-72 bg-sage/20 dark:bg-sage/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-forest/10 dark:bg-cream/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '15s' }}></div>
      
        <div className="container relative mx-auto px-4 py-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }} 
            transition={{ duration: 0.5 }}
            className="flex justify-between items-center mb-6"
          >
            <h1 className="text-3xl font-bold text-forest dark:text-sage-light mb-2">Health Records</h1>
            <div className="flex space-x-2">
              <Button variant="outline" onClick={downloadReport} className="group">
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Export
              </Button>
              <Button variant="outline" onClick={shareReport} className="group">
                <Share2 className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Share
              </Button>
            </div>
          </motion.div>

          {/* Privacy notice */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 p-3 bg-sage/10 dark:bg-forest-light/10 rounded-lg flex items-center space-x-3 border border-sage/30 dark:border-sage/20"
          >
            <Shield className="text-forest dark:text-sage-light h-5 w-5" />
            <p className="text-sm text-muted-foreground dark:text-sage/80">
              Your health records are securely encrypted and only accessible by you and your authorized healthcare providers.
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="backdrop-blur-sm bg-white/80 dark:bg-forest-dark/80 border-sage/20 dark:border-sage/30 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-forest dark:text-sage-light">Your Health Information</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="medical" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="mb-4 bg-sage/10 dark:bg-forest-light/20">
                    <TabsTrigger value="medical" className="data-[state=active]:bg-forest data-[state=active]:text-white dark:data-[state=active]:bg-sage dark:data-[state=active]:text-forest">Medical Records</TabsTrigger>
                    <TabsTrigger value="lab" className="data-[state=active]:bg-forest data-[state=active]:text-white dark:data-[state=active]:bg-sage dark:data-[state=active]:text-forest">Lab Results</TabsTrigger>
                    <TabsTrigger value="prescriptions" className="data-[state=active]:bg-forest data-[state=active]:text-white dark:data-[state=active]:bg-sage dark:data-[state=active]:text-forest">Prescriptions</TabsTrigger>
                    <TabsTrigger value="vaccinations" className="data-[state=active]:bg-forest data-[state=active]:text-white dark:data-[state=active]:bg-sage dark:data-[state=active]:text-forest">Vaccinations</TabsTrigger>
                  </TabsList>
                  
                  {/* Medical Records Tab */}
                  <TabsContent value="medical" className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h2 className="text-lg font-semibold text-forest dark:text-sage-light">Recent Medical Records</h2>
                      <Button variant="outline">
                        <FileText className="mr-2 h-4 w-4" />
                        Add Record
                      </Button>
                    </div>
                    
                    <ScrollArea className="h-[300px] pr-4">
                      <motion.div 
                        className="space-y-3"
                        variants={container}
                        initial="hidden"
                        animate="show"
                      >
                        {[
                          { name: "Annual Physical Exam", date: "Apr 15, 2025", doctor: "Dr. Emily Chen" },
                          { name: "Cardiology Consultation", date: "Mar 20, 2025", doctor: "Dr. Robert Johnson" },
                          { name: "Dermatology Checkup", date: "Feb 10, 2025", doctor: "Dr. Sarah Williams" },
                          { name: "Orthopedic Assessment", date: "Jan 25, 2025", doctor: "Dr. Michael Taylor" },
                          { name: "Vision Examination", date: "Dec 12, 2024", doctor: "Dr. Lisa Garcia" }
                        ].map((record, index) => (
                          <motion.div 
                            key={index} 
                            className="flex items-center justify-between p-3 bg-sage-light/10 hover:bg-sage-light/20 dark:bg-forest-light/10 dark:hover:bg-forest-light/20 rounded-lg transition-colors border border-sage/10 dark:border-sage/20"
                            variants={item}
                          >
                            <div>
                              <p className="font-medium text-forest-dark dark:text-sage-light">{record.name}</p>
                              <p className="text-sm text-muted-foreground dark:text-sage/70">{record.date} - {record.doctor}</p>
                            </div>
                            <Button variant="ghost" size="sm" className="hover:bg-forest/10 dark:hover:bg-sage/10">View</Button>
                          </motion.div>
                        ))}
                      </motion.div>
                    </ScrollArea>
                  </TabsContent>
                  
                  {/* Other tabs content - we'll keep the same structure but with animations */}
                  <TabsContent value="lab" className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h2 className="text-lg font-semibold text-forest dark:text-sage-light">Recent Lab Results</h2>
                      <Button variant="outline">
                        <FlaskConical className="mr-2 h-4 w-4" />
                        Add Result
                      </Button>
                    </div>
                    
                    {[
                      { name: "Blood Test", date: "Apr 22, 2025", lab: "City Medical Lab" },
                      { name: "Cholesterol Test", date: "Mar 15, 2025", lab: "Healthcare Diagnostics" },
                      { name: "Urinalysis", date: "Feb 01, 2025", lab: "Community Labs" }
                    ].map((result, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-sage-light/10 dark:bg-forest-light/10 hover:bg-sage-light/20 dark:hover:bg-forest-light/20 rounded-lg transition-all border border-sage/10 dark:border-sage/20">
                        <div>
                          <p className="font-medium text-forest-dark dark:text-sage-light">{result.name}</p>
                          <p className="text-sm text-muted-foreground dark:text-sage/70">{result.date} - {result.lab}</p>
                        </div>
                        <Button variant="ghost" size="sm" className="hover:bg-forest/10 dark:hover:bg-sage/10">View</Button>
                      </div>
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="prescriptions" className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h2 className="text-lg font-semibold text-forest dark:text-sage-light">Active Prescriptions</h2>
                      <Button variant="outline">
                        <FileText className="mr-2 h-4 w-4" />
                        Add Prescription
                      </Button>
                    </div>
                    
                    {[
                      { name: "Amoxicillin", date: "Apr 28, 2025", doctor: "Dr. Emily Chen" },
                      { name: "Lisinopril", date: "Mar 10, 2025", doctor: "Dr. Robert Johnson" },
                      { name: "Vitamin D", date: "Jan 25, 2025", doctor: "Dr. Sarah Williams" }
                    ].map((prescription, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-sage-light/10 dark:bg-forest-light/10 hover:bg-sage-light/20 dark:hover:bg-forest-light/20 rounded-lg transition-all border border-sage/10 dark:border-sage/20">
                        <div>
                          <p className="font-medium text-forest-dark dark:text-sage-light">{prescription.name}</p>
                          <p className="text-sm text-muted-foreground dark:text-sage/70">Prescribed on {prescription.date} by {prescription.doctor}</p>
                        </div>
                        <Button variant="ghost" size="sm" className="hover:bg-forest/10 dark:hover:bg-sage/10">View</Button>
                      </div>
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="vaccinations" className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h2 className="text-lg font-semibold text-forest dark:text-sage-light">Vaccination Records</h2>
                      <Button variant="outline">
                        <Activity className="mr-2 h-4 w-4" />
                        Add Vaccination
                      </Button>
                    </div>
                    
                    {[
                      { name: "Influenza", date: "Oct 15, 2024" },
                      { name: "Tdap", date: "Jun 01, 2023" },
                      { name: "MMR", date: "Aug 10, 2000" }
                    ].map((vaccination, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-sage-light/10 dark:bg-forest-light/10 hover:bg-sage-light/20 dark:hover:bg-forest-light/20 rounded-lg transition-all border border-sage/10 dark:border-sage/20">
                        <div>
                          <p className="font-medium text-forest-dark dark:text-sage-light">{vaccination.name}</p>
                          <p className="text-sm text-muted-foreground dark:text-sage/70">Administered on {vaccination.date}</p>
                        </div>
                        <Button variant="ghost" size="sm" className="hover:bg-forest/10 dark:hover:bg-sage/10">View</Button>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>

          {/* Upload New Record with improved dark mode visibility */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6"
          >
            <Card className="backdrop-blur-sm bg-white/80 dark:bg-forest-dark/80 border-sage/20 dark:border-sage/30 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-forest dark:text-sage-light">Upload New Document</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="border-2 border-dashed border-sage dark:border-sage/50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-sage/5 dark:hover:bg-sage/10 transition-colors cursor-pointer"
                  >
                    <FileText className="h-10 w-10 text-sage dark:text-sage-light mb-4" />
                    <h3 className="text-lg font-medium text-forest-dark dark:text-sage-light">Drag and drop files here</h3>
                    <p className="text-sm text-muted-foreground dark:text-sage/80 max-w-xs mt-2">
                      Or click to select files from your computer
                    </p>
                    <Button variant="outline" className="mt-4 border-sage hover:bg-sage/20 dark:border-sage/50 dark:hover:bg-sage/10">
                      Upload Files
                    </Button>
                  </motion.div>
                  
                  <div>
                    <Label htmlFor="record-type" className="text-forest-dark dark:text-sage">Record Type</Label>
                    <select 
                      id="record-type"
                      className="w-full mt-1 rounded-md border border-input bg-background text-foreground dark:text-sage-light dark:bg-forest-dark px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option>Medical Record</option>
                      <option>Lab Result</option>
                      <option>Prescription</option>
                      <option>Vaccination</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="additional-notes" className="text-forest-dark dark:text-sage">Additional Notes</Label>
                    <Input 
                      id="additional-notes" 
                      placeholder="Add any notes about this record"
                      className="dark:bg-forest-dark dark:text-sage-light dark:border-sage/30 dark:placeholder:text-sage/50"
                    />
                  </div>
                  
                  <Button className="w-full bg-forest hover:bg-forest-dark dark:bg-sage dark:text-forest dark:hover:bg-sage-light transition-colors">Save Record</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default HealthRecords;
