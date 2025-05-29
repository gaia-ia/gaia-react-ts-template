import LongLogo from '@assets/icons/logos/LongLogo';
import ShortLogo from '@assets/icons/logos/ShortLogo';
import Button from '@components/buttons/Button';
import Body from '@components/typography/Body';
import { ChevronsLeft, ChevronsRight, LogOut } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Divider from '../Divider';
import Tooltip from '../Tooltip';
import styles from './styles.module.css';
import { type LinkProps, SidebarProps } from './types';

const Link = ({ icon, title, to, isCollapsed }: LinkProps) => {
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
  const [isCollapsed, setIsCollapsed] = useState(false);
  const hasAdminLinks = adminLinks && adminLinks.length > 0;

  const handleCollapsed = () => {
    setIsCollapsed(prev => !prev);
  };

  return (
    <aside
      className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}
    >
      <div className={styles.content}>
        <div
          className={`${styles.logo_container} ${isCollapsed && styles.collapsed}`}
        >
          {isCollapsed ? <ShortLogo /> : <LongLogo />}

          <Button
            className={styles.collapse_button}
            variant="icon"
            icon={isCollapsed ? ChevronsRight : ChevronsLeft}
            onClick={handleCollapsed}
          />
        </div>

        <nav className={styles.navigation}>
          {defaultLinks.map(link => (
            <Link key={link.to} isCollapsed={isCollapsed} {...link} />
          ))}

          {hasAdminLinks && <Divider color="var(--color-accent-300)" />}

          {adminLinks?.map(link => (
            <Link key={link.to} isCollapsed={isCollapsed} {...link} />
          ))}
        </nav>
      </div>

      <footer className={styles.footer}>
        <Button
          variant="secondary"
          className={`${styles.logout_button} ${isCollapsed && styles.collapsed}`}
          iconPosition="right"
          icon={LogOut}
          onClick={handleLogout}
        >
          <Body>{user?.full_name || ''}</Body>
        </Button>
      </footer>
    </aside>
  );
};

export default Sidebar;
