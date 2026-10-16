export const SERVICES = {
  MEDICINA: 'medicina',
  POLICIA: 'policia',
  BOMBERO: 'bombero',
} as const;

export type ServiceType = typeof SERVICES[keyof typeof SERVICES];
