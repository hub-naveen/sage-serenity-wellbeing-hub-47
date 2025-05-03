import React, { useState, useEffect } from 'react';
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, AlertCircle } from "lucide-react";

const MealPlanner = () => {
  const [age, setAge] = useState<number>(30);
  const [weight, setWeight] = useState<number>(70);
  const [height, setHeight] = useState<number>(170);
  const [gender, setGender] = useState<string>('male');
  const [activityLevel, setActivityLevel] = useState<number>(1.55);
  const [goal, setGoal] = useState<string>('maintain');
  const [calories, setCalories] = useState<number[]>([2000]);
  const [protein, setProtein] = useState<number>(150);
  const [carbs, setCarbs] = useState<number>(250);
  const [fat, setFat] = useState<number>(70);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Calculate BMR (Basal Metabolic Rate)
    let bmr: number;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Adjust for activity level
    const adjustedCalories = bmr * activityLevel;

    // Adjust for goal (lose, maintain, gain)
    let finalCalories: number;
    if (goal === 'lose') {
      finalCalories = adjustedCalories * 0.85; // 15% deficit
    } else if (goal === 'gain') {
      finalCalories = adjustedCalories * 1.15; // 15% surplus
    } else {
      finalCalories = adjustedCalories;
    }

    setCalories([Math.round(finalCalories)]);

    // Calculate macro ratios (example: 40% carbs, 30% protein, 30% fat)
    setProtein(Math.round(finalCalories * 0.30 / 4)); // 4 calories per gram of protein
    setCarbs(Math.round(finalCalories * 0.40 / 4));   // 4 calories per gram of carbs
    setFat(Math.round(finalCalories * 0.30 / 9));     // 9 calories per gram of fat

    setSuccess(true);
    setError(null);
  }, [age, weight, height, gender, activityLevel, goal]);

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Meal Planner</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">

            {/* Age Input */}
            <div className="grid gap-2">
              <Label htmlFor="age">Age</Label>
              <Input
                type="number"
                id="age"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
              />
            </div>

            {/* Weight Input */}
            <div className="grid gap-2">
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
              />
            </div>

            {/* Height Input */}
            <div className="grid gap-2">
              <Label htmlFor="height">Height (cm)</Label>
              <Input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
              />
            </div>

            {/* Gender Selection */}
            <div className="grid gap-2">
              <Label>Gender</Label>
              <div className="flex gap-2">
                <Button
                  variant={gender === 'male' ? 'default' : 'outline'}
                  onClick={() => setGender('male')}
                >
                  Male
                </Button>
                <Button
                  variant={gender === 'female' ? 'default' : 'outline'}
                  onClick={() => setGender('female')}
                >
                  Female
                </Button>
              </div>
            </div>

            {/* Activity Level Slider */}
            <div className="grid gap-2">
              <Label htmlFor="activity">Activity Level</Label>
              <Slider
                id="activity"
                defaultValue={[activityLevel]}
                max={2}
                min={1.2}
                step={0.05}
                onValueChange={(value) => setActivityLevel(value[0])}
              />
              <p className="text-sm text-muted-foreground">
                {getActivityLevelDescription(activityLevel)}
              </p>
            </div>

            {/* Goal Selection */}
            <div className="grid gap-2">
              <Label>Goal</Label>
              <div className="flex gap-2">
                <Button
                  variant={goal === 'lose' ? 'default' : 'outline'}
                  onClick={() => setGoal('lose')}
                >
                  Lose Weight
                </Button>
                <Button
                  variant={goal === 'maintain' ? 'default' : 'outline'}
                  onClick={() => setGoal('maintain')}
                >
                  Maintain Weight
                </Button>
                <Button
                  variant={goal === 'gain' ? 'default' : 'outline'}
                  onClick={() => setGoal('gain')}
                >
                  Gain Weight
                </Button>
              </div>
            </div>

            {/* Results Display */}
            {success && (
              <Alert>
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>Meal Plan Generated</AlertTitle>
                <AlertDescription>
                  Here's your personalized meal plan based on your inputs.
                </AlertDescription>
              </Alert>
            )}

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  {error}
                </AlertDescription>
              </Alert>
            )}

            {/* Calorie Display */}
            <div className="grid gap-2">
              <Label>Calories</Label>
              <Progress value={calories[0] / 3000 * 100} />
              <p className="text-sm text-muted-foreground">
                {calories[0]} kcal
              </p>
            </div>

            {/* Macro Display */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label>Protein</Label>
                <Progress value={protein / 200 * 100} />
                <p className="text-sm text-muted-foreground">
                  {protein} g
                </p>
              </div>
              <div>
                <Label>Carbs</Label>
                <Progress value={carbs / 300 * 100} />
                <p className="text-sm text-muted-foreground">
                  {carbs} g
                </p>
              </div>
              <div>
                <Label>Fat</Label>
                <Progress value={fat / 100 * 100} />
                <p className="text-sm text-muted-foreground">
                  {fat} g
                </p>
              </div>
            </div>

          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

// Helper function to describe activity level
const getActivityLevelDescription = (level: number): string => {
  if (level <= 1.3) return 'Sedentary: little or no exercise';
  if (level <= 1.55) return 'Lightly Active: light exercise/sports 1-3 days/week';
  if (level <= 1.75) return 'Moderately Active: moderate exercise/sports 3-5 days/week';
  return 'Very Active: hard exercise/sports 6-7 days a week';
};

export default MealPlanner;
