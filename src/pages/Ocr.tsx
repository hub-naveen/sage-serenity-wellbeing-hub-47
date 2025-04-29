
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, FileText, CheckCircle, ScanLine, File, Stethoscope, Calendar, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
        {/* Enhanced background effects for both light and dark modes */}
        <div className="absolute top-40 right-20 w-72 h-72 bg-cream/30 dark:bg-sage/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-sage/20 dark:bg-cream/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '15s' }}></div>
      
        <div className="container mx-auto px-4 py-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 10 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-forest dark:text-sage-light mb-2">Medical Document Scanner</h1>
            <p className="text-muted-foreground mb-2">Upload and digitize your medical documents for easy management and sharing</p>
            <div className="h-1 w-20 bg-sage rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="backdrop-blur-sm bg-white/80 dark:bg-forest-dark/80 border-sage/20 dark:border-sage/40 shadow-lg hover:shadow-xl transition-all h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-forest dark:text-sage-light flex items-center">
                    <ScanLine className="h-5 w-5 mr-2 text-forest dark:text-sage-light" />
                    Upload Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-sage rounded-lg bg-sage/5 dark:bg-forest-light/5"
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
                      <Upload className="h-12 w-12 text-sage dark:text-sage-light mb-4" />
                    </motion.div>
                    <p className="text-sm text-forest dark:text-sage mb-4 text-center">
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
              <Card className="backdrop-blur-sm bg-white/80 dark:bg-forest-dark/80 border-sage/20 dark:border-sage/40 shadow-lg hover:shadow-xl transition-all h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-forest dark:text-sage-light flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-forest dark:text-sage-light" />
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
                          className="flex items-center p-3 bg-sage/10 dark:bg-sage/20 rounded-lg border border-sage/20 dark:border-sage/40 hover:bg-sage/15 dark:hover:bg-sage/25 transition-colors"
                          variants={item}
                          whileHover={{ x: 5 }}
                        >
                          <FileText className="h-5 w-5 text-forest dark:text-sage-light mr-3" />
                          <span className="flex-1 text-sm text-forest dark:text-sage-light">{file}</span>
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <div className="text-center p-8">
                      <File className="h-12 w-12 text-forest/30 dark:text-sage/30 mx-auto mb-4" />
                      <p className="text-forest dark:text-sage-light">No documents scanned yet</p>
                      <p className="text-sm mt-2 text-forest-dark/70 dark:text-sage/70">Upload your first document to get started</p>
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
            className="mt-8"
          >
            <Card className="backdrop-blur-sm bg-white/80 dark:bg-forest-dark/80 border-sage/20 dark:border-sage/40 shadow-lg hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-forest dark:text-sage-light flex items-center">
                  <ClipboardList className="h-5 w-5 mr-2 text-forest dark:text-sage-light" />
                  Scan History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {id: 1, title: "Medical Report", icon: <FileText />, date: "2 days ago", pages: 2},
                    {id: 2, title: "Prescription", icon: <Stethoscope />, date: "1 week ago", pages: 1},
                    {id: 3, title: "Lab Results", icon: <Calendar />, date: "2 weeks ago", pages: 4},
                  ].map((item) => (
                    <TooltipProvider key={item.id}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <motion.div 
                            className="p-4 bg-sage/5 dark:bg-sage/10 rounded-lg border border-sage/10 dark:border-sage/30 hover:bg-sage/10 dark:hover:bg-sage/20 transition-all hover:shadow-md"
                            whileHover={{ y: -5 }}
                          >
                            <div className="flex items-center mb-2">
                              <span className="text-forest dark:text-sage-light mr-2">
                                {item.icon}
                              </span>
                              <span className="text-sm font-medium text-forest dark:text-sage-light">{item.title} {item.id}</span>
                            </div>
                            <p className="text-xs text-forest-dark/70 dark:text-sage/70">Scanned {item.date}</p>
                            <div className="mt-2 pt-2 border-t border-sage/10 dark:border-sage/30 flex justify-between items-center">
                              <span className="text-xs text-forest-dark/70 dark:text-sage/70">{item.pages} pages</span>
                              <Button variant="ghost" size="sm" className="h-8 px-2 text-xs hover:bg-sage/20 dark:hover:bg-sage/30 text-forest dark:text-sage-light">View</Button>
                            </div>
                          </motion.div>
                        </TooltipTrigger>
                        <TooltipContent className="bg-white dark:bg-forest-dark text-forest dark:text-sage-light">
                          Click to view {item.title.toLowerCase()}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>

                {/* Action buttons with improved visibility */}
                <div className="flex justify-center mt-8 space-x-4">
                  <Button variant="outline" className="border-forest text-forest hover:bg-forest/10 dark:border-sage dark:text-sage-light dark:hover:bg-sage/10">
                    View All Records
                  </Button>
                  <Button className="bg-forest text-white hover:bg-forest-dark dark:bg-sage dark:text-forest dark:hover:bg-sage-light">
                    New Scan
                  </Button>
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
