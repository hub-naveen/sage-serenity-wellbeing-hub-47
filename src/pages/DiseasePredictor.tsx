
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DiseasePredictor = () => {
  const [activeTab, setActiveTab] = useState("d-type1");

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-forest mb-6">Disease Predictor</h1>
        
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="col-span-3">
            <div className="space-y-2">
              <Button
                variant={activeTab === "d-type1" ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => setActiveTab("d-type1")}
              >
                D-Type 1
              </Button>
              <Button
                variant={activeTab === "d-type2" ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => setActiveTab("d-type2")}
              >
                D-Type 2
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-9">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="w-full">
                  <CardHeader>
                    <CardTitle className="text-lg">Disease {item}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Description and risk factors for Disease {item}
                    </p>
                    <div className="mt-4 space-x-2">
                      <Button size="sm">Details</Button>
                      <Button size="sm" variant="outline">Analyze</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DiseasePredictor;
