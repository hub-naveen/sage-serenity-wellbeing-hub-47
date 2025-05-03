
/**
 * Environment variable utility functions
 * Provides type-safe access to environment variables
 */

// API Keys
export const getApiKeys = () => ({
  fitness: {
    apiKey: import.meta.env.FITNESS_API_KEY || '',
    apiSecret: import.meta.env.FITNESS_API_SECRET || '',
  },
  nutrition: {
    apiKey: import.meta.env.NUTRITION_API_KEY || '',
    apiSecret: import.meta.env.NUTRITION_API_SECRET || '',
  },
  riskAssessment: {
    apiKey: import.meta.env.RISK_ASSESSMENT_API_KEY || '',
  },
});

// API Base URL
export const getApiBaseUrl = () => import.meta.env.API_BASE_URL || 'https://api.example.com';

// Check if environment variables are set
export const checkRequiredEnvVars = (): string[] => {
  const missing: string[] = [];
  
  // Add checks for required environment variables
  if (!import.meta.env.FITNESS_API_KEY) missing.push('FITNESS_API_KEY');
  if (!import.meta.env.NUTRITION_API_KEY) missing.push('NUTRITION_API_KEY');
  
  return missing;
};
