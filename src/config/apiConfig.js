// Конфигурация API - все URL берутся из переменных окружения
const API_CONFIG = {
  // Базовый URL API (будет из .env)
  BASE_URL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000',
  
  // Endpoints для Python бэкенда
  ENDPOINTS: {
    // Аутентификация
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    REFRESH_TOKEN: '/api/auth/refresh',
    
    // Пользователи
    USERS: '/api/users',
    USER_DETAIL: (id) => `/api/users/${id}`,
    USER_PERMISSIONS: (id) => `/api/users/${id}/permissions`,
    
    // Стажеры
    TRAINEES: '/api/trainees',
    TRAINEE_DETAIL: (id) => `/api/trainees/${id}`,
    TRAINEE_PROGRESS: (id) => `/api/trainees/${id}/progress`,
    
    // Онбординг
    ONBOARDING_DAYS: '/api/onboarding/days',
    ONBOARDING_DAY_DETAIL: (id) => `/api/onboarding/days/${id}`,
    REPORTS: '/api/reports',
    REPORT_DETAIL: (id) => `/api/reports/${id}`,
    SUBMIT_REPORT: '/api/reports/submit',
    REVIEW_REPORT: (id) => `/api/reports/${id}/review',
    
    REGULATIONS: '/api/regulations',
    REGULATION_DETAIL: (id) => `/api/regulations/${id}`,
    
    SCHEDULES: '/api/schedules',
    SCHEDULE_DETAIL: (id) => `/api/schedules/${id}`,
    
    // Аналитика
    ANALYTICS: '/api/analytics',
    DASHBOARD_STATS: '/api/analytics/dashboard',
    
    // Администрирование
    ADMIN_USERS: '/api/admin/users',
    ADMIN_CONTENT: '/api/admin/content',
    ADMIN_SETTINGS: '/api/admin/settings',
    
    // Система (суперадмин)
    SYSTEM_HEALTH: '/api/system/health',
    SYSTEM_LOGS: '/api/system/logs',
    SYSTEM_BACKUP: '/api/system/backup',
  },
  
  // Таймауты
  TIMEOUT: parseInt(process.env.REACT_APP_API_TIMEOUT) || 30000,
  
  // Настройки запросов
  HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
};

export default API_CONFIG;