import useFetch from "@/shared/hooks/use-fetch/useFetch.hook";
import addClient from "../services/add-client";
import { ErrorCause } from "@/core/server/types/error-cause";
import type { Client } from "../domain/client";
import type { ClientSchema } from "../adapter/client-schema";

const useAddClient = () => {
    const {error, data, execute, refresh} = useFetch<Client>();

    async function add(clientData: ClientSchema) {
        await execute(addClient)(clientData);
    }

    const isError = error?.isCause(ErrorCause.BUSINESS_RULE_VIOLATION);
    
    return {add, refresh, data, isError};
}

export default useAddClient;