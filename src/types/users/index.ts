type TServicesNames =
  | 'CRIA'
  | 'BRANDSYNC'
  | 'POC_PRODUCT_STUDIO'
  | 'CVC_DASHBOARD';

export type TService = {
  name: string;
  role: TRole;
};

export type TRole = 'admin' | 'manager' | 'franchisee';

type TUserBase = {
  full_name?: string;
  email: string;
  role: TRole;
};

export interface TUserInfo extends TUserBase {
  organization_id: string;
  services: TServicesNames[];
  id: string;
}

export interface TUserDetail extends TUserBase {
  id: string;
  created_at: string;
  last_login_at?: string;
  product_role: TRole;
  services: TService[];
  social_accounts?: {
    id: string;
    username: string;
  }[];
  organization: {
    id: string;
    name: string;
  };
}

export type TUsersList = TUserDetail[];

export type TInvite = {
  id: string;
  email: string;
  role: TRole;
  expires_at: string;
  sent_at: string;

  social_accounts: {
    id: string;
    username: string;
  }[];
  invited_by: {
    name: string;
    email: string;
  };
  organization: {
    id: string;
    name: string;
  };
};

export type TInvitesList = TInvite[];
