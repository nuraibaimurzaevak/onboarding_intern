import { ROLES } from '../utils/permissions';

// Инициализация начальных данных при первом запуске
export const initializeMockData = () => {
  // Проверяем, есть ли уже данные
  if (!localStorage.getItem('vplus_initialized')) {
    // Создаем суперадмина по умолчанию
    const superAdmin = {
      id: '1',
      email: 'superadmin@vplus.kg',
      password: 'admin123', // В реальном приложении пароль будет хеширован
      firstName: 'Айбек',
      lastName: 'Сулайманов',
      middleName: '',
      role: ROLES.SUPER_ADMIN,
      department: 'Администрация',
      position: 'Супер-администратор',
      phone: '+996 555 123456',
      telegram: '@superadmin',
      photo: null,
      createdAt: new Date().toISOString(),
      isActive: true,
      permissions: {} // Суперадмин имеет все права
    };

    // Создаем тестового админа
    const admin = {
      id: '2',
      email: 'admin@vplus.kg',
      password: 'admin123',
      firstName: 'Мария',
      lastName: 'Иванова',
      middleName: 'Петровна',
      role: ROLES.ADMIN,
      department: 'HR',
      position: 'Администратор',
      phone: '+996 555 654321',
      telegram: '@hr_admin',
      photo: null,
      createdAt: new Date().toISOString(),
      isActive: true,
      permissions: {
        canViewTrainees: true,
        canCreateTrainees: true,
        canEditTrainees: true,
        canManageOnboarding: true,
        canManageRegulations: true
      }
    };

    // Создаем тестового стажера
    const trainee = {
      id: '3',
      email: 'trainee@vplus.kg',
      password: 'trainee123',
      firstName: 'Алмаз',
      lastName: 'Кыдыров',
      middleName: '',
      role: ROLES.TRAINEE,
      department: 'Разработка',
      position: 'Стажёр Frontend',
      phone: '+996 555 111222',
      telegram: '@almaz_dev',
      photo: null,
      createdAt: new Date().toISOString(),
      isActive: true,
      currentDay: 1,
      reports: []
    };

    const initialUsers = [superAdmin, admin, trainee];
    localStorage.setItem('vplus_users', JSON.stringify(initialUsers));
    localStorage.setItem('vplus_initialized', 'true');
    
    console.log('Мок-данные инициализированы');
  }
};

// Моковые данные для онбординга
export const mockOnboardingDays = [
  {
    id: 1,
    dayNumber: 1,
    title: 'Знакомство с компанией',
    description: 'В первый день вы познакомитесь с историей компании, ценностями и командой',
    goals: [
      'Познакомиться с командой',
      'Изучить историю компании',
      'Узнать о корпоративных ценностях'
    ],
    instructions: 'Посмотрите презентацию о компании и заполните анкету знакомства',
    deadline: '18:00',
    materials: [
      { type: 'video', url: 'https://youtube.com/embed/example', title: 'Приветствие от CEO' },
      { type: 'file', url: '#', title: 'Презентация компании.pdf' },
      { type: 'link', url: 'https://company.com/history', title: 'История компании' }
    ],
    reportTemplate: {
      whatDone: '',
      whatWillDo: '',
      problems: '',
      attachments: []
    }
  },
  {
    id: 2,
    dayNumber: 2,
    title: 'Изучение регламентов',
    description: 'Ознакомление с основными регламентами и правилами компании',
    goals: [
      'Изучить правила внутреннего распорядка',
      'Ознакомиться с политикой безопасности',
      'Изучить регламент по проектной работе'
    ],
    instructions: 'Внимательно прочитайте все регламенты и подтвердите ознакомление',
    deadline: '17:00',
    materials: [
      { type: 'file', url: '#', title: 'Правила внутреннего распорядка.pdf' },
      { type: 'file', url: '#', title: 'Политика безопасности.pdf' }
    ],
    reportTemplate: {
      whatDone: '',
      whatWillDo: '',
      problems: '',
      attachments: []
    }
  }
];

// Моковые данные для регламентов
export const mockRegulations = [
  {
    id: 1,
    title: 'Правила внутреннего трудового распорядка',
    description: 'Основные правила поведения и работы в компании',
    type: 'file',
    url: '#',
    fileSize: '2.4 MB',
    category: 'Общие'
  },
  {
    id: 2,
    title: 'Политика информационной безопасности',
    description: 'Требования по работе с конфиденциальной информацией',
    type: 'link',
    url: 'https://docs.google.com/document/example',
    category: 'Безопасность'
  }
];

// Моковые данные для графика работы
export const mockSchedules = [
  {
    id: 1,
    name: 'Стандартный график',
    description: '5/2 с 9:00 до 18:00',
    workDays: ['пн', 'вт', 'ср', 'чт', 'пт'],
    startTime: '09:00',
    endTime: '18:00',
    breakStart: '13:00',
    breakEnd: '14:00',
    isDefault: true
  },
  {
    id: 2,
    name: 'Гибкий график',
    description: 'Свободное начало дня с 8:00 до 10:00',
    workDays: ['пн', 'вт', 'ср', 'чт', 'пт'],
    startTime: '08:00-10:00',
    endTime: '17:00-19:00',
    breakStart: '13:00',
    breakEnd: '14:00',
    isDefault: false
  }
];