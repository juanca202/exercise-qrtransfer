import { Environment } from '@/core/models/environment';

export const environment: Environment = {
  appId: 'exercise-qrtransfer',
  appName: 'Angular Base',
  sessionPrefix: '',
  apiRestBaseUrl: '',
  i18n: {
    enabled: false,
    defaultLocale: 'es',
    languages: [
      { code: 'en', name: 'English' },
      { code: 'es', name: 'Español' }
    ]
  },
  iconSettings: {
    path: 'images',
    collection: 'factoricons-regular'
  }
};