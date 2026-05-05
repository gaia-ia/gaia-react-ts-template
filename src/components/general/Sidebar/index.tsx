import LongLogo from '@assets/icons/logos/LongLogo';
import ShortLogo from '@assets/icons/logos/ShortLogo';
import {
  Body,
  Button,
  Divider,
  Select,
  Tooltip,
  useWindowSize,
} from '@gaia-dev/ui';
import { ChevronsLeft, ChevronsRight, LogOut, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';

import styles from './styles.module.css';
import type { LinkProps, SidebarProps } from './types';

const Link = ({ icon, title, to, isCollapsed, onClick }: LinkProps) => {
  const LucideIcon = icon;
  const id = `${to.replaceAll('/', '')}`;

  return (
    <div>
      <NavLink
        to={to}
        id={id}
        className={({ isActive }) =>
          `${styles.nav_link} ${isActive && styles.active} ${isCollapsed && styles.collapsed}`
        }
        title={isCollapsed ? title : undefined}
        onClick={onClick}
      >
        <LucideIcon size={24} />
        {!isCollapsed && <Body>{title}</Body>}
      </NavLink>
      {isCollapsed && (
        <Tooltip
          text={title}
          anchorSelect={`#${id}`}
          place="right"
          color="var(--color-background-300)"
        />
      )}
    </div>
  );
};

const Sidebar = ({
  user,
  adminLinks,
  defaultLinks,
  handleLogout,
}: SidebarProps) => {
  const { i18n } = useTranslation();
  const { width } = useWindowSize();
  const [isCollapsed, setIsCollapsed] = useState(!(width && width < 700));
  const hasAdminLinks = adminLinks && adminLinks.length > 0;
  const [lang, setLang] = useState<string>(i18n.language.split('-')[0]);
  const { t } = useTranslation();

  const handleCollapsed = () => {
    setIsCollapsed(prev => !prev);
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  const MenuIcon =
    width && width < 700
      ? isCollapsed
        ? Menu
        : X
      : isCollapsed
        ? ChevronsRight
        : ChevronsLeft;

  return (
    <aside
      className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}
    >
      <div className={styles.content}>
        <div
          className={`${styles.logo_container} ${isCollapsed && styles.collapsed}`}
        >
          {isCollapsed && width && width > 700 ? (
            <ShortLogo title="Gaia" />
          ) : (
            <LongLogo title="Gaia" />
          )}

          <Button
            className={styles.collapse_button}
            size="icon-sm"
            variant="ghost"
            onClick={handleCollapsed}
          >
            <MenuIcon />
          </Button>
        </div>

        <div
          className={`${styles.navigation_container} ${isCollapsed && styles.collapsed}`}
        >
          <nav className={styles.navigation}>
            {defaultLinks.map(link => (
              <Link
                key={link.to}
                isCollapsed={isCollapsed}
                onClick={() => {
                  if (width && width < 700) setIsCollapsed(true);
                }}
                {...link}
              />
            ))}

            {hasAdminLinks && <Divider color="var(--color-primary-400)" />}

            {adminLinks?.map(link => (
              <Link
                key={link.to}
                isCollapsed={isCollapsed}
                onClick={() => {
                  if (width && width < 700) setIsCollapsed(true);
                }}
                {...link}
              />
            ))}
          </nav>

          <footer className={styles.footer}>
            <Select
              id="language"
              options={[
                { label: '🇧🇷', value: 'pt' },
                { label: '🇺🇸', value: 'en' },
                { label: '🇪🇸', value: 'es' },
              ]}
              value={lang}
              onChange={value => setLang(value as string)}
            />

            <Button
              variant="secondary"
              className={`${styles.logout_button} ${isCollapsed && styles.collapsed}`}
              onClick={handleLogout}
              id="logout"
            >
              <Body>{user?.full_name || ''}</Body>
              <LogOut size={24} />
            </Button>
            <Tooltip
              text={t('common:buttons.logout')}
              anchorSelect="#logout"
              color="var(--color-background-300)"
              place="right"
            />
          </footer>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
