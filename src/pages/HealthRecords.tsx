import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  FileText, 
  Calendar, 
  AlertCircle, 
  Download, 
  Share2,
  FlaskConical,
  Activity,
  Info
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const HealthRecords = () => {
  const [activeTab, setActiveTab] = useState("medical");
  const { toast } = useToast();
  
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

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-forest">Health Records</h1>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={downloadReport}>
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button variant="outline" onClick={shareReport}>
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-forest">Your Health Information</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="medical" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-4">
                <TabsTrigger value="medical">Medical Records</TabsTrigger>
                <TabsTrigger value="lab">Lab Results</TabsTrigger>
                <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
                <TabsTrigger value="vaccinations">Vaccinations</TabsTrigger>
              </TabsList>
              
              {/* Medical Records Tab */}
              <TabsContent value="medical" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Recent Medical Records</h2>
                  <Button variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    Add Record
                  </Button>
                </div>
                
                {[
                  { name: "Annual Physical Exam", date: "Apr 15, 2025", doctor: "Dr. Emily Chen" },
                  { name: "Cardiology Consultation", date: "Mar 20, 2025", doctor: "Dr. Robert Johnson" },
                  { name: "Dermatology Checkup", date: "Feb 10, 2025", doctor: "Dr. Sarah Williams" }
                ].map((record, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-sage-light/10 rounded-lg">
                    <div>
                      <p className="font-medium">{record.name}</p>
                      <p className="text-sm text-muted-foreground">{record.date} - {record.doctor}</p>
                    </div>
                    <Button variant="ghost" size="sm">View</Button>
                  </div>
                ))}
              </TabsContent>
              
              {/* Lab Results Tab */}
              <TabsContent value="lab" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Recent Lab Results</h2>
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
                  <div key={index} className="flex items-center justify-between p-3 bg-sage-light/10 rounded-lg">
                    <div>
                      <p className="font-medium">{result.name}</p>
                      <p className="text-sm text-muted-foreground">{result.date} - {result.lab}</p>
                    </div>
                    <Button variant="ghost" size="sm">View</Button>
                  </div>
                ))}
              </TabsContent>
              
              {/* Prescriptions Tab */}
              <TabsContent value="prescriptions" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Active Prescriptions</h2>
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
                  <div key={index} className="flex items-center justify-between p-3 bg-sage-light/10 rounded-lg">
                    <div>
                      <p className="font-medium">{prescription.name}</p>
                      <p className="text-sm text-muted-foreground">Prescribed on {prescription.date} by {prescription.doctor}</p>
                    </div>
                    <Button variant="ghost" size="sm">View</Button>
                  </div>
                ))}
              </TabsContent>
              
              {/* Vaccinations Tab */}
              <TabsContent value="vaccinations" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Vaccination Records</h2>
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
                  <div key={index} className="flex items-center justify-between p-3 bg-sage-light/10 rounded-lg">
                    <div>
                      <p className="font-medium">{vaccination.name}</p>
                      <p className="text-sm text-muted-foreground">Administered on {vaccination.date}</p>
                    </div>
                    <Button variant="ghost" size="sm">View</Button>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Upload New Record */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-forest">Upload New Document</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-muted rounded-lg p-6 flex flex-col items-center justify-center text-center">
                <FileText className="h-10 w-10 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">Drag and drop files here</h3>
                <p className="text-sm text-muted-foreground max-w-xs mt-2">
                  Or click to select files from your computer
                </p>
                <Button variant="outline" className="mt-4">
                  Upload Files
                </Button>
              </div>
              
              <div>
                <Label htmlFor="record-type">Record Type</Label>
                <select 
                  id="record-type"
                  className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option>Medical Record</option>
                  <option>Lab Result</option>
                  <option>Prescription</option>
                  <option>Vaccination</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="additional-notes">Additional Notes</Label>
                <Input 
                  id="additional-notes" 
                  placeholder="Add any notes about this record"
                />
              </div>
              
              <Button>Save Record</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default HealthRecords;
