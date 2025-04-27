
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  FileText, 
  FilePlus, 
  Pill, 
  Stethoscope, 
  Syringe, 
  Flask, 
  Heart, 
  HeartPulse,
  Calendar,
  Download,
  Share,
  Search,
  Upload,
  Clock,
  AlertCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const HealthRecords = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("summary");

  const handleUpload = () => {
    toast({
      title: "File uploaded",
      description: "Your health record has been uploaded successfully."
    });
  };

  const handleShare = () => {
    toast({
      title: "Records shared",
      description: "Your records have been shared with Dr. Johnson."
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-forest">Health Records</h1>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button variant="outline" onClick={handleShare}>
              <Share className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button onClick={handleUpload}>
              <Upload className="mr-2 h-4 w-4" />
              Upload
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="md:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-1">
                  <Button
                    variant={activeTab === "summary" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("summary")}
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Summary
                  </Button>
                  <Button
                    variant={activeTab === "medications" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("medications")}
                  >
                    <Pill className="mr-2 h-4 w-4" />
                    Medications
                  </Button>
                  <Button
                    variant={activeTab === "conditions" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("conditions")}
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    Conditions
                  </Button>
                  <Button
                    variant={activeTab === "allergies" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("allergies")}
                  >
                    <AlertCircle className="mr-2 h-4 w-4" />
                    Allergies
                  </Button>
                  <Button
                    variant={activeTab === "vaccinations" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("vaccinations")}
                  >
                    <Syringe className="mr-2 h-4 w-4" />
                    Vaccinations
                  </Button>
                  <Button
                    variant={activeTab === "labResults" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("labResults")}
                  >
                    <Flask className="mr-2 h-4 w-4" />
                    Lab Results
                  </Button>
                  <Button
                    variant={activeTab === "vitals" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("vitals")}
                  >
                    <HeartPulse className="mr-2 h-4 w-4" />
                    Vitals
                  </Button>
                  <Button
                    variant={activeTab === "visits" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("visits")}
                  >
                    <Stethoscope className="mr-2 h-4 w-4" />
                    Doctor Visits
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Recent Updates */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-forest">Recent Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-sage/20 text-forest rounded-md p-2 flex-shrink-0">
                      <Pill className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Medication Updated</p>
                      <p className="text-sm text-muted-foreground">Apr 20, 2025</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-sage/20 text-forest rounded-md p-2 flex-shrink-0">
                      <Flask className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Lab Results Added</p>
                      <p className="text-sm text-muted-foreground">Apr 15, 2025</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-sage/20 text-forest rounded-md p-2 flex-shrink-0">
                      <HeartPulse className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Vitals Recorded</p>
                      <p className="text-sm text-muted-foreground">Apr 10, 2025</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            {activeTab === "summary" && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-forest">Health Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Basic Information</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Name</p>
                          <p className="font-medium">Jane Smith</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Date of Birth</p>
                          <p className="font-medium">January 15, 1980</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Gender</p>
                          <p className="font-medium">Female</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Blood Type</p>
                          <p className="font-medium">A+</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Active Conditions</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Hypertension (diagnosed 2020)</li>
                        <li>Seasonal Allergies</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Current Medications</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Lisinopril 10mg, once daily</li>
                        <li>Loratadine 10mg, as needed</li>
                        <li>Multivitamin, once daily</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Allergies</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Penicillin (Severe)</li>
                        <li>Pollen (Mild)</li>
                        <li>Shellfish (Moderate)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Recent Vitals</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Card className="p-3">
                          <p className="text-sm text-muted-foreground">Blood Pressure</p>
                          <p className="font-medium text-lg">120/80 mmHg</p>
                          <p className="text-xs text-muted-foreground">Apr 20, 2025</p>
                        </Card>
                        <Card className="p-3">
                          <p className="text-sm text-muted-foreground">Heart Rate</p>
                          <p className="font-medium text-lg">72 bpm</p>
                          <p className="text-xs text-muted-foreground">Apr 20, 2025</p>
                        </Card>
                        <Card className="p-3">
                          <p className="text-sm text-muted-foreground">Temperature</p>
                          <p className="font-medium text-lg">98.6 °F</p>
                          <p className="text-xs text-muted-foreground">Apr 20, 2025</p>
                        </Card>
                        <Card className="p-3">
                          <p className="text-sm text-muted-foreground">Weight</p>
                          <p className="font-medium text-lg">145 lbs</p>
                          <p className="text-xs text-muted-foreground">Apr 20, 2025</p>
                        </Card>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Upcoming Appointments</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 bg-sage-light/10 rounded-lg">
                          <div className="flex items-center">
                            <div className="h-10 w-10 bg-sage/20 rounded-full flex items-center justify-center mr-4">
                              <Calendar className="h-5 w-5 text-forest" />
                            </div>
                            <div>
                              <p className="font-medium">Annual Physical</p>
                              <p className="text-sm text-muted-foreground">Dr. Emily Chen</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">May 15, 2025</p>
                            <p className="text-sm text-muted-foreground">9:00 AM</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-sage-light/10 rounded-lg">
                          <div className="flex items-center">
                            <div className="h-10 w-10 bg-sage/20 rounded-full flex items-center justify-center mr-4">
                              <Clock className="h-5 w-5 text-forest" />
                            </div>
                            <div>
                              <p className="font-medium">Cardiology Follow-up</p>
                              <p className="text-sm text-muted-foreground">Dr. Robert Johnson</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">Jun 5, 2025</p>
                            <p className="text-sm text-muted-foreground">2:30 PM</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {activeTab === "medications" && (
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl font-semibold text-forest">Medications</CardTitle>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="Search medications..." 
                        className="pl-9 w-[250px]" 
                      />
                    </div>
                    <Button>
                      <FilePlus className="mr-2 h-4 w-4" />
                      Add Medication
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="current">
                    <TabsList className="mb-6">
                      <TabsTrigger value="current">Current</TabsTrigger>
                      <TabsTrigger value="past">Past</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="current">
                      <div className="space-y-4">
                        <div className="p-4 border rounded-lg">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="text-lg font-semibold">Lisinopril 10mg</h4>
                              <p className="text-sm text-muted-foreground">For Hypertension</p>
                              <div className="mt-2">
                                <span className="text-sm font-medium">Instructions:</span>
                                <span className="text-sm text-muted-foreground ml-1">Take once daily in the morning</span>
                              </div>
                              <div className="mt-1">
                                <span className="text-sm font-medium">Prescribed:</span>
                                <span className="text-sm text-muted-foreground ml-1">Feb 15, 2025 by Dr. Robert Johnson</span>
                              </div>
                            </div>
                            <div>
                              <Button variant="outline" size="sm">Refill</Button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4 border rounded-lg">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="text-lg font-semibold">Loratadine 10mg</h4>
                              <p className="text-sm text-muted-foreground">For Seasonal Allergies</p>
                              <div className="mt-2">
                                <span className="text-sm font-medium">Instructions:</span>
                                <span className="text-sm text-muted-foreground ml-1">Take as needed for allergy symptoms</span>
                              </div>
                              <div className="mt-1">
                                <span className="text-sm font-medium">Prescribed:</span>
                                <span className="text-sm text-muted-foreground ml-1">Mar 10, 2025 by Dr. Emily Chen</span>
                              </div>
                            </div>
                            <div>
                              <Button variant="outline" size="sm">Refill</Button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4 border rounded-lg">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="text-lg font-semibold">Multivitamin</h4>
                              <p className="text-sm text-muted-foreground">Supplement</p>
                              <div className="mt-2">
                                <span className="text-sm font-medium">Instructions:</span>
                                <span className="text-sm text-muted-foreground ml-1">Take once daily with food</span>
                              </div>
                              <div className="mt-1">
                                <span className="text-sm font-medium">Recommended:</span>
                                <span className="text-sm text-muted-foreground ml-1">Jan 5, 2025 by Dr. Emily Chen</span>
                              </div>
                            </div>
                            <div>
                              <Button variant="outline" size="sm">Refill</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="past">
                      <div className="space-y-4">
                        <div className="p-4 border rounded-lg">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="text-lg font-semibold">Amoxicillin 500mg</h4>
                              <p className="text-sm text-muted-foreground">For Respiratory Infection</p>
                              <div className="mt-2">
                                <span className="text-sm font-medium">Instructions:</span>
                                <span className="text-sm text-muted-foreground ml-1">Take twice daily for 10 days</span>
                              </div>
                              <div className="mt-1">
                                <span className="text-sm font-medium">Prescribed:</span>
                                <span className="text-sm text-muted-foreground ml-1">Dec 5, 2024 by Dr. Emily Chen</span>
                              </div>
                              <div className="mt-1">
                                <span className="text-sm font-medium">End Date:</span>
                                <span className="text-sm text-muted-foreground ml-1">Dec 15, 2024</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HealthRecords;
