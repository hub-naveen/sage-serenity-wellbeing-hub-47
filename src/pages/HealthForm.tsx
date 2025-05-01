import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Layout from "@/components/layout/Layout";
import { useAuth, User } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, User as UserIcon, Mail, Calendar, Weight, Ruler, Activity, FileUp } from "lucide-react";

// Define health form schema
const healthFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  age: z.coerce
    .number()
    .min(1, "Age must be at least 1")
    .max(120, "Age cannot exceed 120"),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select a gender",
  }),
  height: z.coerce
    .number()
    .min(50, "Height must be at least 50 cm")
    .max(250, "Height cannot exceed 250 cm"),
  weight: z.coerce
    .number()
    .min(2, "Weight must be at least 2 kg")
    .max(300, "Weight cannot exceed 300 kg"),
  activityLevel: z.enum(
    ["sedentary", "lightly_active", "moderately_active", "very_active", "super_active"],
    {
      required_error: "Please select your activity level",
    }
  ),
  healthConcerns: z.object({
    diabetes: z.boolean().default(false),
    heartDisease: z.boolean().default(false),
    cancer: z.boolean().default(false),
    kidneyDisease: z.boolean().default(false),
    liverDisease: z.boolean().default(false),
    respiratoryIssues: z.boolean().default(false),
    other: z.boolean().default(false),
  }),
  otherHealthConcerns: z.string().optional(),
  geneticDataFile: z.instanceof(FileList).optional(),
});

type HealthFormValues = z.infer<typeof healthFormSchema>;

const HealthForm = () => {
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formProgress, setFormProgress] = useState(0);
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  // Define form
  const form = useForm<HealthFormValues>({
    resolver: zodResolver(healthFormSchema),
    defaultValues: {
      fullName: user?.name || "",
      email: user?.email || "",
      age: 30,
      gender: "male",
      height: 170,
      weight: 70,
      activityLevel: "moderately_active",
      healthConcerns: {
        diabetes: false,
        heartDisease: false,
        cancer: false,
        kidneyDisease: false,
        liverDisease: false,
        respiratoryIssues: false,
        other: false,
      },
      otherHealthConcerns: "",
    },
  });

  // Watch form values to update progress
  const watchedValues = form.watch();
  
  // Update form progress based on filled fields
  const updateFormProgress = () => {
    const totalFields = Object.keys(healthFormSchema.shape).length;
    const filledFields = Object.values(watchedValues).filter(
      (value) => value !== undefined && value !== "" && value !== null
    ).length;
    
    setFormProgress(Math.min(100, Math.round((filledFields / totalFields) * 100)));
  };
  
  // Update progress when form values change
  const checkProgress = () => {
    setTimeout(() => {
      updateFormProgress();
    }, 100);
  };
  
  // Handle form submission
  const onSubmit = async (data: HealthFormValues) => {
    setIsSubmitting(true);
    
    try {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Form submitted:", data);
      
      // Update user profile status
      if (updateUser) {
        updateUser({
          ...user,
          profileCompleted: true,
        } as User);
      }
      
      // Show success toast
      toast({
        title: "Profile saved!",
        description: "Let's get started.",
      });
      
      // Redirect to dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Error submitting health form:", error);
      toast({
        title: "Submission Failed",
        description: "There was a problem saving your profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Handle file change
  const handleFileChange = (files: FileList | null) => {
    form.setValue("geneticDataFile", files || undefined);
    checkProgress();
  };

  // Handle next step with validation
  const handleNextStep = async () => {
    let fieldsToValidate: (keyof HealthFormValues)[] = [];

    if (step === 1) {
      fieldsToValidate = ['fullName', 'email', 'age', 'gender', 'height', 'weight'];
    } else if (step === 2) {
      fieldsToValidate = ['activityLevel', 'healthConcerns', 'otherHealthConcerns'];
      // Conditional validation for otherHealthConcerns if 'other' is checked
      if (form.getValues('healthConcerns.other') && !form.getValues('otherHealthConcerns')) {
          form.setError('otherHealthConcerns', {
              type: 'manual',
              message: 'Please specify other concerns if checked.'
          });
          return; // Stop if conditional validation fails
      }
    }
    // No validation needed to move from step 3 (as submission handles final validation)

    const isValid = await form.trigger(fieldsToValidate);

    if (isValid && step < totalSteps) {
      setStep(step + 1);
    } else if (!isValid) {
        toast({
            title: "Missing Information",
            description: "Please fill out all required fields for this step.",
            variant: "destructive",
        });
    }
  };

  // Handle previous step
  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-3xl mx-auto shadow-lg border-sage/20">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-forest">Complete Your Health Profile</CardTitle>
            <CardDescription>
              Let us know about you to personalize your health recommendations
            </CardDescription>
            <div className="mt-2">
              <Progress value={formProgress} className="h-2 bg-sage/20" />
              <p className="text-xs text-right mt-1 text-muted-foreground">{formProgress}% complete</p>
            </div>
          </CardHeader>
          
          <CardContent>
            <Form {...form}>
              <form id="health-form" onSubmit={form.handleSubmit(onSubmit)} onChange={checkProgress}>
                {step === 1 && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-lg font-medium">Basic Information</h3>
                    
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <div className="relative">
                            <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <FormControl>
                              <Input
                                placeholder="John Doe"
                                className="pl-10"
                                {...field}
                              />
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <FormControl>
                              <Input
                                placeholder="your@email.com"
                                className="pl-10"
                                {...field}
                              />
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="age"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Age</FormLabel>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <FormControl>
                              <Input
                                type="number"
                                min={1}
                                max={120}
                                className="pl-10"
                                {...field}
                              />
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Gender</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex space-x-4"
                            >
                              <FormItem className="flex items-center space-x-2 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="male" />
                                </FormControl>
                                <FormLabel className="font-normal">Male</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-2 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="female" />
                                </FormControl>
                                <FormLabel className="font-normal">Female</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-2 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="other" />
                                </FormControl>
                                <FormLabel className="font-normal">Other</FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
                
                {step === 2 && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-lg font-medium">Physical Metrics</h3>
                    
                    <FormField
                      control={form.control}
                      name="height"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Height (cm)</FormLabel>
                          <div className="relative">
                            <Ruler className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <FormControl>
                              <Input
                                type="number"
                                min={50}
                                max={250}
                                className="pl-10"
                                {...field}
                              />
                            </FormControl>
                          </div>
                          <FormDescription className="text-xs">
                            Enter your height in centimeters (50-250 cm)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="weight"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Weight (kg)</FormLabel>
                          <div className="relative">
                            <Weight className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <FormControl>
                              <Input
                                type="number"
                                min={2}
                                max={300}
                                className="pl-10"
                                {...field}
                              />
                            </FormControl>
                          </div>
                          <FormDescription className="text-xs">
                            Enter your weight in kilograms (2-300 kg)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="activityLevel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Activity Level</FormLabel>
                          <div className="relative">
                            <Activity className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="pl-10">
                                  <SelectValue placeholder="Select your activity level" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                                <SelectItem value="lightly_active">Lightly active (1–3 days/week)</SelectItem>
                                <SelectItem value="moderately_active">Moderately active (3–5 days/week)</SelectItem>
                                <SelectItem value="very_active">Very active (6–7 days/week)</SelectItem>
                                <SelectItem value="super_active">Super active (professional athlete)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
                
                {step === 3 && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-lg font-medium">Health Concerns</h3>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 flex items-start mb-4">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 mr-2" />
                      <p className="text-sm text-yellow-700">
                        This information helps us provide personalized health recommendations. All your data is kept private and secure.
                      </p>
                    </div>
                    
                    <div className="space-y-4 border rounded-md p-4">
                      <FormLabel className="block mb-2">Health Concerns (select all that apply)</FormLabel>
                      
                      <FormField
                        control={form.control}
                        name="healthConcerns.diabetes"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">Diabetes</FormLabel>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="healthConcerns.heartDisease"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">Heart Disease</FormLabel>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="healthConcerns.cancer"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">Cancer</FormLabel>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="healthConcerns.kidneyDisease"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">Kidney Disease</FormLabel>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="healthConcerns.liverDisease"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">Liver Disease</FormLabel>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="healthConcerns.respiratoryIssues"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">Respiratory Issues</FormLabel>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="healthConcerns.other"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={(checked) => {
                                  field.onChange(checked);
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">Other</FormLabel>
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    {form.watch("healthConcerns.other") && (
                      <FormField
                        control={form.control}
                        name="otherHealthConcerns"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Please specify other health concerns</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Please describe your other health concerns here..."
                                className="min-h-[100px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                    
                    <FormItem>
                      <FormLabel>Genetic Data File (optional)</FormLabel>
                      <div className="relative mt-2">
                        <div className="flex items-center gap-3">
                          <label 
                            htmlFor="file-upload"
                            className="cursor-pointer bg-muted/50 hover:bg-muted transition-colors px-4 py-2 rounded-md flex items-center gap-2 text-sm border border-input"
                          >
                            <FileUp className="h-4 w-4" />
                            <span>Upload CSV file</span>
                            <input
                              id="file-upload"
                              type="file"
                              accept=".csv"
                              className="hidden"
                              onChange={(e) => handleFileChange(e.target.files)}
                            />
                          </label>
                          <span className="text-sm text-muted-foreground">
                            {form.watch("geneticDataFile")?.[0]?.name || "No file selected"}
                          </span>
                        </div>
                      </div>
                      <FormDescription className="text-xs mt-2">
                        Upload genetic data in CSV format (if available)
                      </FormDescription>
                    </FormItem>
                  </div>
                )}
              </form>
            </Form>
          </CardContent>
          
          <CardFooter className="flex justify-between">
            {step > 1 ? (
              <Button 
                type="button" 
                variant="outline" 
                onClick={handlePrevStep}
                disabled={isSubmitting}
              >
                Previous
              </Button>
            ) : (
              <div></div>
            )}
            
            {step < totalSteps ? (
              <Button 
                type="button" 
                onClick={handleNextStep}
              >
                Next
              </Button>
            ) : (
              <Button 
                type="submit" 
                form="health-form" 
                className="bg-[#4D5D53] hover:bg-[#3D4D43] text-white"
                disabled={isSubmitting || !form.formState.isValid}
              >
                {isSubmitting ? "Saving..." : "Save Profile"}
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default HealthForm;
