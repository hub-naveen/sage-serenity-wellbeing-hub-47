
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Apple, Utensils, ShoppingCart, Calendar, ArrowRight, Check, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Diet = () => {
  const [activeTab, setActiveTab] = useState("meal-plans");
  const { toast } = useToast();
  
  const savePreferences = () => {
    toast({
      title: "Preferences Saved",
      description: "Your dietary preferences have been updated."
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-forest mb-6">Nutrition & Diet Planning</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-forest">Your Nutrition Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="meal-plans">
                  <Utensils className="h-4 w-4 mr-2" />
                  Meal Plans
                </TabsTrigger>
                <TabsTrigger value="recipes">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Recipes
                </TabsTrigger>
                <TabsTrigger value="grocery">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Grocery Lists
                </TabsTrigger>
                <TabsTrigger value="schedules">
                  <Calendar className="h-4 w-4 mr-2" />
                  Meal Schedules
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="meal-plans">
                <div className="space-y-6">
                  <div className="bg-sage-light/10 p-6 rounded-lg">
                    <h3 className="text-lg font-medium mb-4">Your Current Meal Plan: Balanced Nutrition</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="p-4 bg-white rounded-lg shadow-sm">
                        <h4 className="font-medium mb-2">Daily Calories</h4>
                        <p className="text-2xl font-bold">2,100</p>
                        <p className="text-sm text-muted-foreground">Target intake</p>
                      </div>
                      
                      <div className="p-4 bg-white rounded-lg shadow-sm">
                        <h4 className="font-medium mb-2">Protein</h4>
                        <p className="text-2xl font-bold">120g</p>
                        <p className="text-sm text-muted-foreground">23% of calories</p>
                      </div>
                      
                      <div className="p-4 bg-white rounded-lg shadow-sm">
                        <h4 className="font-medium mb-2">Carbs / Fat</h4>
                        <p className="text-2xl font-bold">225g / 70g</p>
                        <p className="text-sm text-muted-foreground">43% / 34% of calories</p>
                      </div>
                    </div>
                    
                    <Button>View Full Nutrition Breakdown</Button>
                  </div>
                  
                  <h3 className="text-lg font-medium mb-4">Available Meal Plans</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Weight Management",
                        description: "Balanced nutrition with moderate caloric deficit to support healthy weight loss.",
                        features: ["Portion-controlled meals", "Higher protein content", "Low added sugars"]
                      },
                      {
                        title: "Heart Healthy",
                        description: "Focus on cardiovascular health with foods that support healthy cholesterol levels.",
                        features: ["Low in saturated fats", "Rich in omega-3s", "High in fiber"]
                      },
                      {
                        title: "Plant-Based",
                        description: "Primarily plant-focused nutrition with complete proteins and essential nutrients.",
                        features: ["Diverse plant proteins", "Nutrient-dense foods", "Optional dairy supplements"]
                      }
                    ].map((plan, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <h3 className="text-lg font-medium mb-2">{plan.title}</h3>
                          <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                          <ul className="space-y-2 mb-4">
                            {plan.features.map((feature, i) => (
                              <li key={i} className="flex items-start">
                                <Check className="h-4 w-4 text-green-600 mr-2 mt-1" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <Button variant="outline" className="w-full">
                            Select Plan
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="recipes">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Mediterranean Bowl",
                        time: "25 mins",
                        difficulty: "Easy",
                        calories: 450
                      },
                      {
                        title: "Grilled Chicken Salad",
                        time: "20 mins",
                        difficulty: "Easy",
                        calories: 380
                      },
                      {
                        title: "Quinoa Veggie Stir-fry",
                        time: "30 mins",
                        difficulty: "Medium",
                        calories: 420
                      },
                      {
                        title: "Salmon with Roasted Vegetables",
                        time: "35 mins",
                        difficulty: "Medium",
                        calories: 520
                      },
                      {
                        title: "Greek Yogurt Parfait",
                        time: "10 mins",
                        difficulty: "Easy",
                        calories: 320
                      },
                      {
                        title: "Lentil Soup",
                        time: "45 mins",
                        difficulty: "Medium",
                        calories: 380
                      }
                    ].map((recipe, index) => (
                      <Card key={index}>
                        <div className="aspect-[4/3] bg-sage-light/20 flex items-center justify-center">
                          <Utensils className="h-12 w-12 text-forest/30" />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-medium">{recipe.title}</h3>
                          <div className="flex justify-between text-sm mt-2 text-muted-foreground">
                            <span>Time: {recipe.time}</span>
                            <span>Calories: {recipe.calories}</span>
                          </div>
                          <Button variant="ghost" size="sm" className="w-full mt-2">
                            View Recipe
                            <ArrowRight className="ml-auto h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="flex justify-center">
                    <Button variant="outline">
                      Show More Recipes
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-forest">Dietary Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-md font-medium mb-3">Food Preferences</h3>
                  <div className="space-y-2">
                    {["Vegetarian", "Vegan", "Pescatarian", "Keto-friendly", "Paleo", "Gluten-free", "Dairy-free", "Low FODMAP"].map((pref, index) => (
                      <div key={index} className="flex items-center">
                        <input 
                          type="checkbox" 
                          id={`pref-${index}`} 
                          className="h-4 w-4 rounded border-gray-300 text-forest focus:ring-forest" 
                        />
                        <label htmlFor={`pref-${index}`} className="ml-2 text-sm text-gray-700">
                          {pref}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-md font-medium mb-3">Allergies & Intolerances</h3>
                  <div className="space-y-2">
                    {["Peanuts", "Tree nuts", "Shellfish", "Eggs", "Soy", "Wheat", "Lactose", "Sesame"].map((allergen, index) => (
                      <div key={index} className="flex items-center">
                        <input 
                          type="checkbox" 
                          id={`allergen-${index}`} 
                          className="h-4 w-4 rounded border-gray-300 text-forest focus:ring-forest" 
                        />
                        <label htmlFor={`allergen-${index}`} className="ml-2 text-sm text-gray-700">
                          {allergen}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button onClick={savePreferences}>Save Preferences</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Diet;
