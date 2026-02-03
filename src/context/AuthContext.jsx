import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Проверяем сохраненную сессию при загрузке
  useEffect(() => {
    const savedUser = localStorage.getItem('vplus_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Моковая авторизация - в реальности будет запрос к API
    const users = JSON.parse(localStorage.getItem('vplus_users') || '[]');
    const foundUser = users.find(u => u.email === email && u.password === password);
    
    if (!foundUser) {
      throw new Error('Неверный email или пароль');
    }

    // Убираем пароль из объекта пользователя
    const { password: _, ...userWithoutPassword } = foundUser;
    setUser(userWithoutPassword);
    localStorage.setItem('vplus_user', JSON.stringify(userWithoutPassword));
    return userWithoutPassword;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('vplus_user');
  };

  const registerUser = (userData) => {
    const users = JSON.parse(localStorage.getItem('vplus_users') || '[]');
    
    // Проверяем, не существует ли уже пользователь с таким email
    if (users.find(u => u.email === userData.email)) {
      throw new Error('Пользователь с таким email уже существует');
    }

    users.push(userData);
    localStorage.setItem('vplus_users', JSON.stringify(users));
    
    // Если регистрируем от имени суперадмина/админа, возвращаем данные без пароля
    const { password, ...userWithoutPassword } = userData;
    return userWithoutPassword;
  };

  const updateUser = (userId, updates) => {
    const users = JSON.parse(localStorage.getItem('vplus_users') || '[]');
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex === -1) return null;
    
    users[userIndex] = { ...users[userIndex], ...updates };
    localStorage.setItem('vplus_users', JSON.stringify(users));
    
    // Обновляем текущего пользователя если это он
    if (user && user.id === userId) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('vplus_user', JSON.stringify(updatedUser));
    }
    
    return users[userIndex];
  };

  const deleteUser = (userId) => {
    const users = JSON.parse(localStorage.getItem('vplus_users') || '[]');
    const filteredUsers = users.filter(u => u.id !== userId);
    localStorage.setItem('vplus_users', JSON.stringify(filteredUsers));
    
    // Если удаляем текущего пользователя - разлогиниваем
    if (user && user.id === userId) {
      logout();
    }
  };

  const value = {
    user,
    loading,
    login,
    logout,
    registerUser,
    updateUser,
    deleteUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};