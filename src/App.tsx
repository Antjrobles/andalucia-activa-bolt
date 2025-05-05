import React from 'react';
import HomePage from './pages/HomePage';
import './styles/tailwind.css';
import { useThemeStore } from './store/themeStore';

function App() {
  const { isDarkMode } = useThemeStore();

  React.useEffect(() => {
    document.title = 'EducaAndalucía | Actividades personalizadas para profesores';
    // Apply dark mode class on initial load
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`font-sans ${isDarkMode ? 'dark' : ''}`}>
      <HomePage />
    </div>
  );
}

export default App;