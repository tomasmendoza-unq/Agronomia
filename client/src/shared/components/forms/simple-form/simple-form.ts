import type { InputRow } from "@/shared/types/input/input";
import type { ButtonData } from "./types/button/credentials-button";
import type { LinkData } from "./types/link/Link";
import type { InferData, Schema } from "../validation-form/shema";
import type { CancelButton } from "../components/buttons-container/ButtonsContainer";

export interface CredentialsFormProps<T extends Schema> {
    title: string;
    isLoading: boolean;
    inputs: InputRow[];
    buttonData: ButtonData;
    cancelOption?: CancelButton
    links?: LinkData[];
    schema: T;
    onSubmit: (data: InferData<T>) => void;
}
