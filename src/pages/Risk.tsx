
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, ArrowRight } from "lucide-react";

const Risk = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-forest mb-6">Health Risk Assessment</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-forest">Risk Assessment Portal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <AlertTriangle className="h-16 w-16 text-yellow-500 mb-4" />
              <h3 className="text-lg font-medium mb-2">Welcome to the Risk Assessment Portal</h3>
              <p className="text-muted-foreground max-w-md mb-6">
                This simplified risk assessment will help you understand your potential health risks and provide personalized recommendations.
              </p>
              <Button onClick={() => navigate("/risk-planner")}>
                Go to Risk Planner
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Cardiac Risk Assessment",
              description: "Evaluate your heart health and identify risk factors for cardiovascular disease.",
              color: "bg-red-50 text-red-700"
            },
            {
              title: "Diabetes Risk Assessment",
              description: "Understand your risk factors for developing type 2 diabetes.",
              color: "bg-blue-50 text-blue-700"
            },
            {
              title: "Stroke Risk Assessment",
              description: "Identify potential risk factors for stroke and cerebrovascular events.",
              color: "bg-purple-50 text-purple-700"
            }
          ].map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                <Button variant="outline" className="w-full">
                  Start Assessment
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Risk;
