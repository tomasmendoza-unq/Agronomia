export const ClientOption = {
    NATURAL_PERSON: 'NATURAL_PERSON',
    RAZON_SOCIAL: 'RAZON_SOCIAL',
} as const;

export type ClientOption = (typeof ClientOption)[keyof typeof ClientOption];