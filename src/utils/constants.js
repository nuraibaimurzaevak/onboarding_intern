export const API_ENDPOINTS = {
  // Эндпоинты для будущего API
  LOGIN: '/api/auth/login',
  LOGOUT: '/api/auth/logout',
  USERS: '/api/users',
  ROLES: '/api/roles',
  ONBOARDING: '/api/onboarding',
  REPORTS: '/api/reports',
  REGULATIONS: '/api/regulations',
  SCHEDULE: '/api/schedule'
};

export const DEFAULT_ADMIN_PERMISSIONS = {
  canViewTrainees: true,
  canCreateTrainees: true,
  canEditTrainees: true,
  canManageOnboarding: true,
  canManageRegulations: true,
  canManageSchedule: true,
  canManageInstructions: true,
  canViewReports: true,
  canApproveReports: true
};