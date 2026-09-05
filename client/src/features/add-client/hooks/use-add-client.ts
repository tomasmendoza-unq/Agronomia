import useFetch from "@/shared/hooks/use-fetch/useFetch.hook";
import addClient from "../services/add-client";
import { ErrorCause } from "@/core/server/types/error-cause";
import type { Client } from "../domain/client";
import type { ClientSchema } from "../adapter/client-schema";

type ClientErrorFields = {
    email?: string 
    cuit: string
}

const useAddClient = () => {
    const {error, data, execute, refresh} = useFetch<Client>();

    async function add(clientData: ClientSchema) {
        return await execute(addClient)(clientData);
    }

    const isError = error?.isCause(ErrorCause.BUSINESS_RULE_VIOLATION);

    function errorMessage({cuit, email}: ClientErrorFields) {
        switch(error?.getErrorMotive) {
            case "DUPLICATE_CUIT": return `El cuit ${cuit} ya está registrado`
            case "DUPLICATE_EMAIL": return `El mail ${email} ya está encuentra registrado`
        }
        return "Error desconocido"
    }
    
    return {add, refresh, errorMessage, isError, data};
}

export default useAddClient;