
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, 
  LineChart, 
  Calendar, 
  Heart, 
  Activity, 
  Thermometer,
  User, 
  Bell 
} from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [period, setPeriod] = useState("week");
  
  // Mock data for charts
  const heartRateData = [
    { name: 'Mon', value: 72 },
    { name: 'Tue', value: 75 },
    { name: 'Wed', value: 70 },
    { name: 'Thu', value: 73 },
    { name: 'Fri', value: 78 },
    { name: 'Sat', value: 76 },
    { name: 'Sun', value: 74 }
  ];

  const activityData = [
    { name: 'Mon', steps: 6500, calories: 1800 },
    { name: 'Tue', steps: 8200, calories: 2100 },
    { name: 'Wed', steps: 7300, calories: 1950 },
    { name: 'Thu', steps: 9100, calories: 2300 },
    { name: 'Fri', steps: 8700, calories: 2250 },
    { name: 'Sat', steps: 10200, calories: 2500 },
    { name: 'Sun', steps: 5800, calories: 1650 }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-forest">Health Dashboard</h1>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule
            </Button>
            <Button variant="outline" size="sm">
              <Bell className="mr-2 h-4 w-4" />
              Alerts
            </Button>
            <Button variant="outline" size="sm">
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <Card className="bg-white dark:bg-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Heart Rate</p>
                  <h4 className="text-2xl font-bold">72 BPM</h4>
                </div>
                <div className="h-12 w-12 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-red-500" />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-green-500 text-xs font-medium">↑ 3%</span>
                <span className="text-xs text-muted-foreground ml-1">from yesterday</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Steps</p>
                  <h4 className="text-2xl font-bold">8,756</h4>
                </div>
                <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                  <Activity className="h-6 w-6 text-blue-500" />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-green-500 text-xs font-medium">↑ 12%</span>
                <span className="text-xs text-muted-foreground ml-1">from yesterday</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Calories</p>
                  <h4 className="text-2xl font-bold">1,925</h4>
                </div>
                <div className="h-12 w-12 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
                  <BarChart className="h-6 w-6 text-orange-500" />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-red-500 text-xs font-medium">↓ 5%</span>
                <span className="text-xs text-muted-foreground ml-1">from yesterday</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Temperature</p>
                  <h4 className="text-2xl font-bold">98.6°F</h4>
                </div>
                <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                  <Thermometer className="h-6 w-6 text-purple-500" />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-gray-500 text-xs font-medium">-</span>
                <span className="text-xs text-muted-foreground ml-1">normal</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Heart Rate Chart */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-semibold text-forest">Heart Rate</CardTitle>
              <div className="flex gap-2">
                <Button 
                  variant={period === "day" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setPeriod("day")}
                >
                  Day
                </Button>
                <Button 
                  variant={period === "week" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setPeriod("week")}
                >
                  Week
                </Button>
                <Button 
                  variant={period === "month" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setPeriod("month")}
                >
                  Month
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={heartRateData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[60, 90]} />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#4D5D53" fill="#B2AC88" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        {/* Activity Chart */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-forest">Activity Overview</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" stroke="#4D5D53" />
                <YAxis yAxisId="right" orientation="right" stroke="#B2AC88" />
                <Tooltip />
                <Area yAxisId="left" type="monotone" dataKey="steps" stroke="#4D5D53" fill="#4D5D53" fillOpacity={0.3} />
                <Area yAxisId="right" type="monotone" dataKey="calories" stroke="#B2AC88" fill="#B2AC88" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Upcoming Appointments */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-forest">Upcoming Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-sage-light/10 rounded-lg">
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-sage/20 rounded-full flex items-center justify-center mr-4">
                    <Heart className="h-6 w-6 text-forest" />
                  </div>
                  <div>
                    <p className="font-medium">Cardiology Checkup</p>
                    <p className="text-sm text-muted-foreground">Dr. Robert Johnson</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">Tomorrow</p>
                  <p className="text-sm text-muted-foreground">10:00 AM</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-sage-light/10 rounded-lg">
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-sage/20 rounded-full flex items-center justify-center mr-4">
                    <Activity className="h-6 w-6 text-forest" />
                  </div>
                  <div>
                    <p className="font-medium">Fitness Assessment</p>
                    <p className="text-sm text-muted-foreground">Sarah Williams, PT</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">Aug 5, 2025</p>
                  <p className="text-sm text-muted-foreground">2:30 PM</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-sage-light/10 rounded-lg">
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-sage/20 rounded-full flex items-center justify-center mr-4">
                    <LineChart className="h-6 w-6 text-forest" />
                  </div>
                  <div>
                    <p className="font-medium">Annual Physical</p>
                    <p className="text-sm text-muted-foreground">Dr. Emily Chen</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">Aug 12, 2025</p>
                  <p className="text-sm text-muted-foreground">9:00 AM</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;
