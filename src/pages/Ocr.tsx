
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileText, Upload, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Ocr = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<null | string>(null);
  const { toast } = useToast();
  
  const handleUpload = () => {
    setIsUploading(true);
    
    // Simulate upload and processing
    setTimeout(() => {
      setIsUploading(false);
      setIsProcessing(true);
      
      setTimeout(() => {
        setIsProcessing(false);
        setResults("Sample medical report data extracted from the document. This would contain patient information, test results, diagnoses, medications, and other relevant health data.");
        toast({
          title: "Document Processed",
          description: "Your medical document has been successfully processed."
        });
      }, 2000);
    }, 1500);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-forest mb-6">Medical Document Scanner</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-forest">Upload Document</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-2 border-dashed border-muted rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <FileText className="h-10 w-10 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">Upload Medical Document</h3>
                  <p className="text-sm text-muted-foreground max-w-xs mt-2 mb-4">
                    Upload medical reports, prescriptions, or lab results to extract their content
                  </p>
                  <div className="flex gap-4">
                    <Button onClick={handleUpload} disabled={isUploading || isProcessing}>
                      <Upload className="mr-2 h-4 w-4" />
                      {isUploading ? "Uploading..." : "Upload File"}
                    </Button>
                    <Button variant="outline" disabled={isUploading || isProcessing}>
                      Take Photo
                    </Button>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="document-type">Document Type</Label>
                  <select 
                    id="document-type"
                    className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    defaultValue=""
                  >
                    <option value="" disabled>Select document type</option>
                    <option value="prescription">Prescription</option>
                    <option value="lab-results">Lab Results</option>
                    <option value="medical-report">Medical Report</option>
                    <option value="insurance">Insurance Document</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="additional-notes">Additional Notes</Label>
                  <Input 
                    id="additional-notes" 
                    placeholder="Add any notes about the document"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-forest">Extracted Content</CardTitle>
            </CardHeader>
            <CardContent>
              {isProcessing ? (
                <div className="h-64 flex flex-col items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-forest mb-4"></div>
                  <p className="text-muted-foreground">Processing document...</p>
                </div>
              ) : results ? (
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium text-green-800">Document processed successfully</p>
                      <p className="text-sm text-green-700">All content has been extracted</p>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <p className="text-sm whitespace-pre-line">{results}</p>
                  </div>
                  
                  <div className="flex justify-end gap-2">
                    <Button variant="outline">
                      Download Data
                    </Button>
                    <Button>
                      Save to Health Records
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="h-64 flex flex-col items-center justify-center text-center">
                  <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">No Document Uploaded</h3>
                  <p className="text-sm text-muted-foreground max-w-xs mt-2">
                    Upload a document to extract the content and view it here
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-forest">Recently Processed Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[
                { name: "Annual Physical Report.pdf", date: "Apr 25, 2025", type: "Medical Report" },
                { name: "Blood Test Results.pdf", date: "Apr 20, 2025", type: "Lab Results" },
                { name: "Prescription - Dr. Johnson.pdf", date: "Apr 15, 2025", type: "Prescription" }
              ].map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-sage-light/10 rounded-lg">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-forest mr-3" />
                    <div>
                      <p className="font-medium">{doc.name}</p>
                      <p className="text-xs text-muted-foreground">{doc.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{doc.date}</p>
                    <Button variant="ghost" size="sm" className="text-forest">
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Ocr;
