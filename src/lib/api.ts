
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

// Define types for our dashboard data
export interface DashboardSummary {
  heartRate: {
    value: number;
    unit: string;
    change: number;
    trendData: { value: number }[];
  };
  steps: {
    value: number;
    change: number;
    trendData: { value: number }[];
  };
  calories: {
    value: number;
    change: number;
    trendData: { value: number }[];
  };
  temperature: {
    value: number;
    unit: string;
  };
}

export interface HeartRateDataPoint {
  name: string;
  value: number;
}

export interface ActivityDataPoint {
  name: string;
  steps: number;
  calories: number;
}

export interface Appointment {
  id: string;
  title: string;
  doctorName: string;
  dateTime: string;
  icon: string;
}

/**
 * Fetches dashboard summary data
 */
export const fetchDashboardSummary = async (userId: string | null): Promise<DashboardSummary> => {
  // In a real app, we would fetch from an API
  // For now, return mock data
  return {
    heartRate: {
      value: 72,
      unit: 'bpm',
      change: -2,
      trendData: [
        { value: 70 },
        { value: 68 },
        { value: 74 },
        { value: 72 },
        { value: 75 },
        { value: 71 },
        { value: 72 }
      ]
    },
    steps: {
      value: 8432,
      change: 5,
      trendData: [
        { value: 7800 },
        { value: 8200 },
        { value: 7900 },
        { value: 8300 },
        { value: 8100 },
        { value: 8400 },
        { value: 8432 }
      ]
    },
    calories: {
      value: 1842,
      change: 3,
      trendData: [
        { value: 1750 },
        { value: 1820 },
        { value: 1790 },
        { value: 1830 },
        { value: 1810 },
        { value: 1820 },
        { value: 1842 }
      ]
    },
    temperature: {
      value: 36.6,
      unit: '°C',
    }
  };
};

/**
 * Fetches heart rate data based on the selected period
 */
export const fetchHeartRateData = async (userId: string | null, period: 'day' | 'week' | 'month'): Promise<HeartRateDataPoint[]> => {
  // Mock heart rate data for different periods
  const dayData = [
    { name: '6AM', value: 68 },
    { name: '8AM', value: 72 },
    { name: '10AM', value: 76 },
    { name: '12PM', value: 80 },
    { name: '2PM', value: 78 },
    { name: '4PM', value: 75 },
    { name: '6PM', value: 73 },
    { name: '8PM', value: 70 },
    { name: '10PM', value: 68 },
  ];

  const weekData = [
    { name: 'Mon', value: 71 },
    { name: 'Tue', value: 73 },
    { name: 'Wed', value: 75 },
    { name: 'Thu', value: 72 },
    { name: 'Fri', value: 74 },
    { name: 'Sat', value: 70 },
    { name: 'Sun', value: 69 },
  ];

  const monthData = [
    { name: 'Week 1', value: 72 },
    { name: 'Week 2', value: 73 },
    { name: 'Week 3', value: 71 },
    { name: 'Week 4', value: 70 },
  ];

  // Return the appropriate data based on the period
  switch (period) {
    case 'day':
      return dayData;
    case 'month':
      return monthData;
    case 'week':
    default:
      return weekData;
  }
};

/**
 * Fetches activity data based on the selected period
 */
export const fetchActivityData = async (userId: string | null, period: 'day' | 'week' | 'month'): Promise<ActivityDataPoint[]> => {
  // Mock activity data for different periods
  const dayData = [
    { name: '6AM', steps: 300, calories: 120 },
    { name: '8AM', steps: 800, calories: 250 },
    { name: '10AM', steps: 1200, calories: 320 },
    { name: '12PM', steps: 1500, calories: 450 },
    { name: '2PM', steps: 2000, calories: 580 },
    { name: '4PM', steps: 2300, calories: 700 },
    { name: '6PM', steps: 2800, calories: 850 },
    { name: '8PM', steps: 3000, calories: 950 },
    { name: '10PM', steps: 3200, calories: 1050 },
  ];

  const weekData = [
    { name: 'Mon', steps: 7500, calories: 1800 },
    { name: 'Tue', steps: 8200, calories: 1900 },
    { name: 'Wed', steps: 7800, calories: 1850 },
    { name: 'Thu', steps: 9100, calories: 2100 },
    { name: 'Fri', steps: 8400, calories: 1950 },
    { name: 'Sat', steps: 6500, calories: 1650 },
    { name: 'Sun', steps: 5400, calories: 1550 },
  ];

  const monthData = [
    { name: 'Week 1', steps: 52000, calories: 12400 },
    { name: 'Week 2', steps: 54800, calories: 13200 },
    { name: 'Week 3', steps: 48600, calories: 11800 },
    { name: 'Week 4', steps: 51500, calories: 12800 },
  ];

  // Return the appropriate data based on the period
  switch (period) {
    case 'day':
      return dayData;
    case 'month':
      return monthData;
    case 'week':
    default:
      return weekData;
  }
};

/**
 * Fetches upcoming appointments
 */
export const fetchUpcomingAppointments = async (userId: string | null): Promise<Appointment[]> => {
  // Mock appointment data
  return [
    {
      id: '1',
      title: 'Annual Check-up',
      doctorName: 'Dr. Sarah Johnson',
      dateTime: '2025-05-10T10:30:00',
      icon: 'Heart'
    },
    {
      id: '2',
      title: 'Fitness Assessment',
      doctorName: 'Dr. Michael Chen',
      dateTime: '2025-05-15T14:00:00',
      icon: 'Activity'
    },
    {
      id: '3',
      title: 'Nutrition Consultation',
      doctorName: 'Dr. Emily Rodriguez',
      dateTime: '2025-05-20T11:30:00',
      icon: 'LineChart'
    }
  ];
};
