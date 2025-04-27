import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  AlertTriangle,
  Heart,
  Brain,
  FileCheck,
  ChevronRight,
  Percent,
  Calendar,
  Download,
  BarChart4,
  ActivitySquare,
  Droplet,
  Share2,
  ArrowRight,
  Info
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const RiskPlanner = () => {
  const [activeTab, setActiveTab] = useState("cardiac");
  const { toast } = useToast();
  
  const downloadReport = () => {
    toast({
      title: "Report Downloaded",
      description: "Your risk assessment report has been downloaded."
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
          <h1 className="text-3xl font-bold text-forest">Health Risk Planner</h1>
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

        {/* Risk Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card className={`border-l-4 border-l-yellow-500`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold">Cardiac Risk</h4>
                  <div className="flex items-center mt-1">
                    <AlertTriangle className="h-4 w-4 text-yellow-500 mr-1" />
                    <p className="text-sm font-medium text-yellow-600">Moderate Risk</p>
                  </div>
                </div>
                <div className="h-16 w-16 bg-yellow-50 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-xl font-bold text-yellow-600">28%</span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="w-full mt-4" onClick={() => setActiveTab("cardiac")}>
                View Details
                <ChevronRight className="ml-auto h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          <Card className={`border-l-4 border-l-green-500`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold">Diabetes Risk</h4>
                  <div className="flex items-center mt-1">
                    <AlertTriangle className="h-4 w-4 text-green-500 mr-1" />
                    <p className="text-sm font-medium text-green-600">Low Risk</p>
                  </div>
                </div>
                <div className="h-16 w-16 bg-green-50 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-xl font-bold text-green-600">12%</span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="w-full mt-4" onClick={() => setActiveTab("diabetes")}>
                View Details
                <ChevronRight className="ml-auto h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          <Card className={`border-l-4 border-l-orange-500`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold">Stroke Risk</h4>
                  <div className="flex items-center mt-1">
                    <AlertTriangle className="h-4 w-4 text-orange-500 mr-1" />
                    <p className="text-sm font-medium text-orange-600">Medium-High Risk</p>
                  </div>
                </div>
                <div className="h-16 w-16 bg-orange-50 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-xl font-bold text-orange-600">35%</span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="w-full mt-4" onClick={() => setActiveTab("stroke")}>
                View Details
                <ChevronRight className="ml-auto h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Risk Analysis */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-forest">Detailed Risk Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="cardiac" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="cardiac">
                  <Heart className="h-4 w-4 mr-2" />
                  Cardiac Risk
                </TabsTrigger>
                <TabsTrigger value="diabetes">
                  <Droplet className="h-4 w-4 mr-2" />
                  Diabetes Risk
                </TabsTrigger>
                <TabsTrigger value="stroke">
                  <Brain className="h-4 w-4 mr-2" />
                  Stroke Risk
                </TabsTrigger>
                <TabsTrigger value="respiratory">
                  <Lungs className="h-4 w-4 mr-2" />
                  Respiratory Risk
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="cardiac" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Risk Factors</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-sage-light/10 rounded-lg">
                          <div className="flex items-center">
                            <div className="h-10 w-10 bg-yellow-50 rounded-full flex items-center justify-center mr-4">
                              <BarChart4 className="h-5 w-5 text-yellow-600" />
                            </div>
                            <div>
                              <p className="font-medium">Blood Pressure</p>
                              <p className="text-sm text-muted-foreground">135/85 mmHg</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700">
                              Moderate Risk
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-sage-light/10 rounded-lg">
                          <div className="flex items-center">
                            <div className="h-10 w-10 bg-red-50 rounded-full flex items-center justify-center mr-4">
                              <Heart className="h-5 w-5 text-red-600" />
                            </div>
                            <div>
                              <p className="font-medium">Family History</p>
                              <p className="text-sm text-muted-foreground">First-degree relative with heart disease</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700">
                              High Risk
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-sage-light/10 rounded-lg">
                          <div className="flex items-center">
                            <div className="h-10 w-10 bg-green-50 rounded-full flex items-center justify-center mr-4">
                              <ActivitySquare className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                              <p className="font-medium">Physical Activity</p>
                              <p className="text-sm text-muted-foreground">Moderately active, 3-4 times per week</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                              Low Risk
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Recommendations</h3>
                      <Card>
                        <CardContent className="p-4 space-y-4">
                          <div className="flex items-start">
                            <div className="h-8 w-8 bg-forest/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                              <span className="font-bold text-forest">1</span>
                            </div>
                            <div>
                              <p className="font-medium">Monitor Blood Pressure</p>
                              <p className="text-sm text-muted-foreground">Check your blood pressure weekly and maintain records. Consider a home blood pressure monitor.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="h-8 w-8 bg-forest/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                              <span className="font-bold text-forest">2</span>
                            </div>
                            <div>
                              <p className="font-medium">Dietary Adjustments</p>
                              <p className="text-sm text-muted-foreground">Reduce sodium intake to less than 2,300mg daily. Increase consumption of foods rich in potassium, calcium, and magnesium.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="h-8 w-8 bg-forest/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                              <span className="font-bold text-forest">3</span>
                            </div>
                            <div>
                              <p className="font-medium">Schedule Cardiology Consultation</p>
                              <p className="text-sm text-muted-foreground">Given your family history, we recommend a consultation with a cardiologist for a more comprehensive evaluation.</p>
                              <Button size="sm" className="mt-2">
                                Schedule Appointment
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Risk Breakdown</h3>
                    <Card className="h-80">
                      <CardContent className="p-4">
                        <div className="h-full flex items-center justify-center">
                          <p className="text-muted-foreground text-sm">Risk breakdown chart would appear here</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <div className="mt-6">
                      <h3 className="text-lg font-medium mb-2">Trends</h3>
                      <Card className="h-64">
                        <CardContent className="p-4">
                          <div className="h-full flex items-center justify-center">
                            <p className="text-muted-foreground text-sm">Risk trend chart would appear here</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="diabetes">
                <div className="flex flex-col items-center justify-center py-12">
                  <Droplet className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">Low Risk for Type 2 Diabetes</h3>
                  <p className="text-sm text-muted-foreground max-w-md text-center mt-2">Based on your health data, you have a low risk profile for developing Type 2 Diabetes in the next 5 years.</p>
                  <Button className="mt-6">View Detailed Analysis</Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Risk Management Plan */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-forest">Your Risk Management Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Next Steps for Reducing Risk</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-4 flex flex-col h-full">
                      <div className="h-12 w-12 bg-sage/20 rounded-full flex items-center justify-center mb-4">
                        <Calendar className="h-6 w-6 text-forest" />
                      </div>
                      <h4 className="text-md font-semibold mb-2">Schedule Check-ups</h4>
                      <p className="text-sm text-muted-foreground flex-grow">Regular check-ups help monitor your health markers and adjust your plan as needed.</p>
                      <Button size="sm" className="mt-4">
                        Schedule Now
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4 flex flex-col h-full">
                      <div className="h-12 w-12 bg-sage/20 rounded-full flex items-center justify-center mb-4">
                        <FileCheck className="h-6 w-6 text-forest" />
                      </div>
                      <h4 className="text-md font-semibold mb-2">Complete Risk Assessment</h4>
                      <p className="text-sm text-muted-foreground flex-grow">Answer additional questions to refine your risk profile and get more targeted recommendations.</p>
                      <Button size="sm" className="mt-4">
                        Start Assessment
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4 flex flex-col h-full">
                      <div className="h-12 w-12 bg-sage/20 rounded-full flex items-center justify-center mb-4">
                        <Info className="h-6 w-6 text-forest" />
                      </div>
                      <h4 className="text-md font-semibold mb-2">Learn More</h4>
                      <p className="text-sm text-muted-foreground flex-grow">Access educational resources about your specific risk factors and management strategies.</p>
                      <Button size="sm" className="mt-4">
                        View Resources
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Long-term Monitoring Plan</h3>
                <div className="space-y-3">
                  {[
                    {
                      test: "Blood Pressure Check",
                      frequency: "Weekly",
                      nextDate: "Apr 30, 2025",
                      importance: "High"
                    },
                    {
                      test: "Lipid Panel",
                      frequency: "Every 6 months",
                      nextDate: "Aug 15, 2025",
                      importance: "Medium"
                    },
                    {
                      test: "Cardiac Assessment",
                      frequency: "Annually",
                      nextDate: "Jan 10, 2026",
                      importance: "High"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-sage-light/10 rounded-lg">
                      <div>
                        <p className="font-medium">{item.test}</p>
                        <p className="text-sm text-muted-foreground">Frequency: {item.frequency}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{item.nextDate}</p>
                        <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                          item.importance === "High" 
                            ? "bg-red-50 text-red-700" 
                            : "bg-yellow-50 text-yellow-700"
                        }`}>
                          {item.importance} Priority
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Risk Factors */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-forest">Modifiable Risk Factors</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">These factors can be changed through lifestyle modifications to reduce your overall health risks.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  factor: "Blood Pressure",
                  current: "135/85 mmHg",
                  target: "<120/80 mmHg",
                  impact: "High",
                  recommendations: [
                    "Reduce sodium intake",
                    "Regular exercise",
                    "Stress management techniques"
                  ]
                },
                {
                  factor: "Cholesterol",
                  current: "Total: 210 mg/dL",
                  target: "Total: <200 mg/dL",
                  impact: "Medium",
                  recommendations: [
                    "Increase soluble fiber intake",
                    "Limit saturated fats",
                    "Consider plant stanols/sterols"
                  ]
                },
                {
                  factor: "Physical Activity",
                  current: "3-4 times per week",
                  target: "5+ times per week",
                  impact: "Medium",
                  recommendations: [
                    "Add 2 more activity days",
                    "Include both cardio and strength training",
                    "Aim for at least 150 minutes weekly"
                  ]
                },
                {
                  factor: "Stress Management",
                  current: "Moderate stress levels",
                  target: "Low stress levels",
                  impact: "Medium",
                  recommendations: [
                    "Daily meditation practice",
                    "Breathing exercises",
                    "Consider stress reduction program"
                  ]
                }
              ].map((factor, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-md">{factor.factor}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <p className="text-sm text-muted-foreground">Current:</p>
                        <p className="text-sm font-medium">{factor.current}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm text-muted-foreground">Target:</p>
                        <p className="text-sm font-medium text-green-600">{factor.target}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm text-muted-foreground">Impact on Risk:</p>
                        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                          factor.impact === "High" 
                            ? "bg-red-50 text-red-700" 
                            : "bg-yellow-50 text-yellow-700"
                        }`}>
                          {factor.impact}
                        </span>
                      </div>
                      
                      <div className="pt-2">
                        <p className="text-sm font-medium">Recommendations:</p>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-1">
                          {factor.recommendations.map((rec, i) => (
                            <li key={i}>{rec}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default RiskPlanner;
