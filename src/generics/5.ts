
  type UserRole = 'admin' | 'editor' | 'guest';

const RoleDescription: Record<UserRole, string> = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
};

console.log(RoleDescription.admin);