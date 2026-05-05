import type { LucideIcon } from 'lucide-react';

export type Link = {
  icon: LucideIcon;
  title: string;
  to: string;
};

export interface LinkProps extends Link {
  isCollapsed: boolean;
  onClick?: () => void;
}

export type SidebarProps = {
  adminLinks?: Array<Link>;
  defaultLinks: Array<Link>;
  handleLogout: () => void;
  user: {
    full_name: string;
  } | null;
};
