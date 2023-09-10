interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['School Administrator'],
  customerRoles: [],
  tenantRoles: ['School Administrator', 'Teacher', 'Student'],
  tenantName: 'School',
  applicationName: 'Voting process',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage votes',
    'View voting results',
    'Invite Teachers and Students to the application',
    'Define options for each vote',
  ],
};
