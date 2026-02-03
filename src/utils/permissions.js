// Константы ролей
export const ROLES = {
  SUPER_ADMIN: 'super_admin',
  ADMIN: 'admin',
  TRAINEE: 'trainee'
};

// Права доступа для каждой роли
export const PERMISSIONS = {
  [ROLES.SUPER_ADMIN]: {
    // Управление пользователями
    canViewAllUsers: true,
    canCreateUsers: true,
    canEditAllUsers: true,
    canDeleteUsers: true,
    canAssignRoles: true,
    canCreateAdmins: true,
    
    // Управление контентом
    canManageAllContent: true,
    canManageOnboarding: true,
    canManageRegulations: true,
    canManageSchedule: true,
    canManageInstructions: true,
    
    // Администрирование
    canViewAdminPanel: true,
    canManageSystemSettings: true,
    canViewAuditLogs: true,
    
    // Рабочие функции
    canViewReports: true,
    canApproveReports: true,
    canViewAllReports: true,
    canEditProfile: true
  },
  
  [ROLES.ADMIN]: {
    // Управление пользователями (только стажеры)
    canViewTrainees: true,
    canCreateTrainees: true,
    canEditTrainees: true,
    canDeleteTrainees: false, // По ТЗ - только суперадмин
    
    // Управление контентом (в рамках своего доступа)
    canManageContent: true,
    canManageOnboarding: true,
    canManageRegulations: true,
    canManageSchedule: true,
    canManageInstructions: true,
    
    // Администрирование
    canViewAdminPanel: true,
    canManageSystemSettings: false,
    canViewAuditLogs: false,
    
    // Рабочие функции
    canViewReports: true,
    canApproveReports: true,
    canViewAllReports: true,
    canEditProfile: true
  },
  
  [ROLES.TRAINEE]: {
    // Только просмотр и работа со своим контентом
    canViewAllUsers: false,
    canCreateUsers: false,
    canEditAllUsers: false,
    canDeleteUsers: false,
    
    // Контент (только чтение)
    canManageContent: false,
    canViewOnboarding: true,
    canViewRegulations: true,
    canViewSchedule: true,
    canViewInstructions: true,
    
    // Администрирование
    canViewAdminPanel: false,
    
    // Рабочие функции
    canSubmitReports: true,
    canViewOwnReports: true,
    canEditProfile: true
  }
};

// Хелпер функции для проверки прав
export const hasPermission = (user, permission) => {
  if (!user || !user.role) return false;
  return PERMISSIONS[user.role]?.[permission] || false;
};

export const canAccessRoute = (user, requiredRole) => {
  if (!user) return false;
  
  const roleHierarchy = {
    [ROLES.TRAINEE]: 1,
    [ROLES.ADMIN]: 2,
    [ROLES.SUPER_ADMIN]: 3
  };
  
  return roleHierarchy[user.role] >= roleHierarchy[requiredRole];
};