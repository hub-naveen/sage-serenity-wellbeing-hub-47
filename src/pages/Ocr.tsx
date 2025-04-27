
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, FileText, CheckCircle } from "lucide-react";

const Ocr = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const handleUpload = () => {
    setIsUploading(true);
    // Simulating upload delay
    setTimeout(() => {
      setUploadedFiles(prev => [...prev, "Sample_Prescription.pdf"]);
      setIsUploading(false);
    }, 1500);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-forest mb-6">Medical Document Scanner</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-forest">Upload Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-sage rounded-lg bg-sage/5">
                <Upload className="h-12 w-12 text-sage mb-4" />
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  Drag and drop your medical documents here, or click to select files
                </p>
                <Button onClick={handleUpload} disabled={isUploading}>
                  {isUploading ? "Uploading..." : "Select Files"}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-forest">Recent Scans</CardTitle>
            </CardHeader>
            <CardContent>
              {uploadedFiles.length > 0 ? (
                <div className="space-y-4">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="flex items-center p-3 bg-sage/5 rounded-lg">
                      <FileText className="h-5 w-5 text-sage mr-3" />
                      <span className="flex-1 text-sm">{file}</span>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center p-8 text-muted-foreground">
                  No documents scanned yet
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-forest">Scan History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="p-4 bg-sage/5 rounded-lg">
                  <div className="flex items-center mb-2">
                    <FileText className="h-5 w-5 text-sage mr-2" />
                    <span className="text-sm font-medium">Document {item}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Scanned 2 days ago</p>
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
