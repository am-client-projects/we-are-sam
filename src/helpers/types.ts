export enum NavType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export enum Permissions {
  READ = "read",
  WRITE = "write",
}

export enum SpecialRoles {
  SUPER_ADMIN = "Super Admin",
}

export enum GeneralRoles {
  NAVIGATOR = "Navigator",
  PROFESSIONAL = "Professional",
  CLIENT = "Client",
}

export type AllRoles = SpecialRoles | GeneralRoles;

export const AllRoles = {
  ...SpecialRoles,
  ...GeneralRoles,
};

export enum RoleIds {
  NAVIGATOR = "rol_hirVx22Zj98EeNwv",
  PROFESSIONAL = "rol_9w8jnzrL4cMqVSrq",
  CLIENT = "rol_Zwu3V1obnMymWZFF",
}

export interface ICreateUser {
  given_name: string;
  family_name: string;
  email: string;
  user_role: AllRoles;
}

export interface ISendPortalInviteRequest {
  email: string;
  client_id: string;
}

export interface Item {
  name: string;
  description?: string;
  page?: string;
  type?: NavType;
  icon: string;
  current: boolean;
  roles?: AllRoles[];
  items: Item[];
}
