
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

// Mock data for dashboard summary
const mockDashboardSummary = {
  heartRate: {
    value: 72,
    unit: 'bpm',
    change: 2,
    trendData: [68, 70, 72, 71, 69, 74, 72]
  },
  steps: {
    value: 8432,
    change: -5,
    trendData: [9200, 8900, 9100, 8700, 8500, 8300, 8432]
  },
  calories: {
    value: 1840,
    change: 12,
    trendData: [1650, 1720, 1790, 1830, 1820, 1790, 1840]
  },
  temperature: {
    value: 98.6,
    unit: '°F',
    trendData: [98.4, 98.5, 98.7, 98.6, 98.5, 98.6, 98.6]
  }
};

// Mock data for heart rate
const mockHeartRateData = {
  day: [
    { name: '6 AM', value: 68 },
    { name: '9 AM', value: 72 },
    { name: '12 PM', value: 74 },
    { name: '3 PM', value: 76 },
    { name: '6 PM', value: 78 },
    { name: '9 PM', value: 71 },
    { name: '12 AM', value: 65 }
  ],
  week: [
    { name: 'Mon', value: 72 },
    { name: 'Tue', value: 74 },
    { name: 'Wed', value: 69 },
    { name: 'Thu', value: 73 },
    { name: 'Fri', value: 75 },
    { name: 'Sat', value: 71 },
    { name: 'Sun', value: 70 }
  ],
  month: [
    { name: 'Week 1', value: 72 },
    { name: 'Week 2', value: 73 },
    { name: 'Week 3', value: 71 },
    { name: 'Week 4', value: 74 }
  ]
};

// Mock data for activity
const mockActivityData = {
  day: [
    { name: '6 AM', steps: 1200, calories: 150 },
    { name: '9 AM', steps: 2500, calories: 320 },
    { name: '12 PM', steps: 3800, calories: 580 },
    { name: '3 PM', steps: 5200, calories: 850 },
    { name: '6 PM', steps: 7300, calories: 1200 },
    { name: '9 PM', steps: 8200, calories: 1650 },
    { name: '12 AM', steps: 8432, calories: 1840 }
  ],
  week: [
    { name: 'Mon', steps: 7500, calories: 1750 },
    { name: 'Tue', steps: 8200, calories: 1820 },
    { name: 'Wed', steps: 7800, calories: 1690 },
    { name: 'Thu', steps: 9100, calories: 1950 },
    { name: 'Fri', steps: 8700, calories: 1880 },
    { name: 'Sat', steps: 6500, calories: 1600 },
    { name: 'Sun', steps: 5200, calories: 1450 }
  ],
  month: [
    { name: 'Week 1', steps: 42000, calories: 9800 },
    { name: 'Week 2', steps: 45600, calories: 10200 },
    { name: 'Week 3', steps: 47800, calories: 10600 },
    { name: 'Week 4', steps: 43500, calories: 9900 }
  ]
};

// Mock data for appointments
const mockAppointments = [
  {
    id: '1',
    title: 'Annual Physical Checkup',
    doctorName: 'Dr. Sarah Johnson',
    dateTime: '2025-05-10T10:30:00',
    icon: 'Heart'
  },
  {
    id: '2',
    title: 'Fitness Assessment',
    doctorName: 'Coach Mike Peterson',
    dateTime: '2025-05-15T14:00:00',
    icon: 'Activity'
  },
  {
    id: '3',
    title: 'Nutrition Consultation',
    doctorName: 'Dietitian Emma Roberts',
    dateTime: '2025-05-20T11:00:00',
    icon: 'LineChart'
  }
];

/**
 * Fetch dashboard summary data
 * @param userId - Optional user ID for personalized data
 * @returns Dashboard summary data
 */
export const fetchDashboardSummary = async (userId: string | null) => {
  // In a real app, this would fetch data from an API using the userId
  // For this demo, we're returning mock data
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockDashboardSummary), 500);
  });
};

/**
 * Fetch heart rate data
 * @param userId - Optional user ID for personalized data
 * @param period - Time period for the data (day, week, month)
 * @returns Heart rate data for the specified period
 */
export const fetchHeartRateData = async (userId: string | null, period: 'day' | 'week' | 'month') => {
  // In a real app, this would fetch data from an API using the userId and period
  // For this demo, we're returning mock data based on the period
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockHeartRateData[period]), 500);
  });
};

/**
 * Fetch activity data
 * @param userId - Optional user ID for personalized data
 * @param period - Time period for the data (day, week, month)
 * @returns Activity data for the specified period
 */
export const fetchActivityData = async (userId: string | null, period: 'day' | 'week' | 'month') => {
  // In a real app, this would fetch data from an API using the userId and period
  // For this demo, we're returning mock data based on the period
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockActivityData[period]), 500);
  });
};

/**
 * Fetch upcoming appointments
 * @param userId - Optional user ID for personalized appointments
 * @returns List of upcoming appointments
 */
export const fetchUpcomingAppointments = async (userId: string | null) => {
  // In a real app, this would fetch data from an API using the userId
  // For this demo, we're returning mock data
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockAppointments), 500);
  });
};
