
import { getApiBaseUrl, getApiKeys } from './env';

/**
 * API configuration for fitness-related endpoints
 */
export const fitnessApi = {
  baseUrl: `${getApiBaseUrl()}/fitness`,
  headers: () => ({
    'Authorization': `Bearer ${getApiKeys().fitness.apiKey}`,
    'Content-Type': 'application/json',
  }),
  endpoints: {
    exercises: '/exercises',
    plans: '/workout-plans',
    tracking: '/tracking',
  }
};

/**
 * API configuration for nutrition and diet-related endpoints
 */
export const nutritionApi = {
  baseUrl: `${getApiBaseUrl()}/nutrition`,
  headers: () => ({
    'Authorization': `Bearer ${getApiKeys().nutrition.apiKey}`,
    'Content-Type': 'application/json',
  }),
  endpoints: {
    recipes: '/recipes',
    mealPlans: '/meal-plans',
    nutritionInfo: '/nutrition-info',
  }
};

/**
 * API configuration for risk assessment endpoints
 */
export const riskAssessmentApi = {
  baseUrl: `${getApiBaseUrl()}/risk`,
  headers: () => ({
    'Authorization': `Bearer ${getApiKeys().riskAssessment.apiKey}`,
    'Content-Type': 'application/json',
  }),
  endpoints: {
    assessment: '/assessment',
    history: '/history',
    recommendations: '/recommendations',
  }
};
