export const ClientOption = {
    NATURAL_PERSON: 'NATURAL_PERSON',
    RAZON_SOCIAL: 'RAZON_SOCIAL',
} as const;

export type PaymentLapse = (typeof ClientOption)[keyof typeof ClientOption];