import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { ThemeContext } from 'providers/ThemeProvider';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'components/buttons/Button';

import styles from './styles.module.css';

const Header = () => {
  const { i18n } = useTranslation();
  const { toggleTheme, theme } = useContext(ThemeContext);

  const handleLanguageChange = (l: 'en' | 'pt' | 'es') => {
    i18n.changeLanguage(l);
    localStorage.setItem('i18nextLng', l);
  };

  return (
    <div className={styles.header}>
      <div className={styles.theme_changing}>
        <button onClick={toggleTheme}>
          {theme === 'light' ? (
            <MoonIcon color="var(--color-text-950)" height={24} />
          ) : (
            <SunIcon color="var(--color-text-950)" height={24} />
          )}
        </button>
      </div>
      <div className={styles.language_changing}>
        <Button variant="text" onClick={() => handleLanguageChange('en')}>
          EN
        </Button>
        |
        <Button variant="text" onClick={() => handleLanguageChange('pt')}>
          PT
        </Button>
        |
        <Button variant="text" onClick={() => handleLanguageChange('es')}>
          ES
        </Button>
      </div>
    </div>
  );
};

export default Header;
