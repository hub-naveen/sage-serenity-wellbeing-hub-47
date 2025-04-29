
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, FileText, CheckCircle, ScanLine, File } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const Ocr = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleUpload = () => {
    setIsUploading(true);
    // Simulating upload delay
    setTimeout(() => {
      const newFile = "Medical_Report_" + (uploadedFiles.length + 1) + ".pdf";
      setUploadedFiles(prev => [...prev, newFile]);
      setIsUploading(false);
      toast({
        title: "File uploaded successfully",
        description: `${newFile} has been uploaded and processed.`,
      });
    }, 1500);
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
        <div className="absolute top-40 right-20 w-72 h-72 bg-cream/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-sage/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '15s' }}></div>
      
        <div className="container mx-auto px-4 py-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 10 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-forest mb-2">Medical Document Scanner</h1>
            <p className="text-muted-foreground mb-6">Upload and digitize your medical documents for easy management and sharing</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="backdrop-blur-sm bg-white/80 border-sage/20 shadow-lg h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-forest flex items-center">
                    <ScanLine className="h-5 w-5 mr-2 text-forest" />
                    Upload Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-sage rounded-lg bg-sage/5"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 3,
                      }}
                    >
                      <Upload className="h-12 w-12 text-sage mb-4" />
                    </motion.div>
                    <p className="text-sm text-muted-foreground mb-4 text-center">
                      Drag and drop your medical documents here, or click to select files
                    </p>
                    <Button 
                      onClick={handleUpload} 
                      disabled={isUploading}
                      className="relative overflow-hidden"
                    >
                      {isUploading ? (
                        <>
                          <span className="opacity-0">Uploading...</span>
                          <span className="absolute inset-0 flex items-center justify-center">
                            <motion.div 
                              className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                          </span>
                        </>
                      ) : "Select Files"}
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="backdrop-blur-sm bg-white/80 border-sage/20 shadow-lg h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-forest flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-forest" />
                    Recent Scans
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {uploadedFiles.length > 0 ? (
                    <motion.div 
                      className="space-y-4"
                      variants={container}
                      initial="hidden"
                      animate="show"
                    >
                      {uploadedFiles.map((file, index) => (
                        <motion.div 
                          key={index} 
                          className="flex items-center p-3 bg-sage/10 rounded-lg border border-sage/20 hover:bg-sage/15 transition-colors"
                          variants={item}
                          whileHover={{ x: 5 }}
                        >
                          <FileText className="h-5 w-5 text-sage mr-3" />
                          <span className="flex-1 text-sm">{file}</span>
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <div className="text-center p-8 text-muted-foreground">
                      <File className="h-12 w-12 text-muted-foreground opacity-20 mx-auto mb-4" />
                      <p>No documents scanned yet</p>
                      <p className="text-sm mt-2">Upload your first document to get started</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6"
          >
            <Card className="backdrop-blur-sm bg-white/80 border-sage/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-forest flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-forest" />
                  Scan History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((item) => (
                    <motion.div 
                      key={item} 
                      className="p-4 bg-sage/5 rounded-lg border border-sage/10 hover:bg-sage/10 transition-all hover:shadow-md"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center mb-2">
                        <FileText className="h-5 w-5 text-sage mr-2" />
                        <span className="text-sm font-medium">Medical Report {item}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Scanned 2 days ago</p>
                      <div className="mt-2 pt-2 border-t border-sage/10 flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">2 pages</span>
                        <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">View</Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Ocr;
