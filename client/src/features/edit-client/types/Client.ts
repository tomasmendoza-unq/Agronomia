import type { NaturalPersonSchema } from "@/features/add-client/pages/types/natural-person-schema";
import type { SocialMotiveSchema } from "@/features/add-client/pages/types/social-motive-schema";

export type NaturalClientToEdit = NaturalPersonSchema & {
    id: number;
};

export type LegalClientToEdit = SocialMotiveSchema & {
    id: number;
};

export type ClientToEdit = NaturalClientToEdit | LegalClientToEdit;
