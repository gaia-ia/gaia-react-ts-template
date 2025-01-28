import React from 'react';

type Theme = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

export const ThemeContext = React.createContext<Theme>({
  theme: 'light',
  toggleTheme: () => {},
});

const ThemeProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  React.useEffect(() => {
    const localStorageTheme = localStorage.getItem('theme');

    if (localStorageTheme) {
      setTheme(localStorageTheme as 'light' | 'dark');
      return;
    }

    setTheme(
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    );
  }, []);

  const toggleTheme = () => {
    const themeColor = theme === 'light' ? 'dark' : 'light';
    setTheme(themeColor);
    window.localStorage.setItem('theme', themeColor);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
