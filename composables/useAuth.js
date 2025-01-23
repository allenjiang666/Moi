import { ref } from 'vue';
import { useRouter, navigateTo } from '#app';

export function useAuth() {
  const isAuthenticated = ref(false);
  const error = ref('');

  // Hardcoded credentials
  const VALID_USERNAME = 'limei';
  const VALID_PASSWORD = 'psd123';

  const login = async (username, password) => {
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      isAuthenticated.value = true;
      localStorage.setItem('isAuthenticated', 'true');
      error.value = '';
      return true;
    } else {
      error.value = 'Invalid username or password';
      return false;
    }
  };

  const logout = () => {
    isAuthenticated.value = false;
    localStorage.removeItem('isAuthenticated');
    navigateTo('/login');
  };

  const checkAuth = () => {
    const auth = localStorage.getItem('isAuthenticated');
    isAuthenticated.value = auth === 'true';
    return isAuthenticated.value;
  };

  return {
    isAuthenticated,
    error,
    login,
    logout,
    checkAuth
  };
}