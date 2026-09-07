import useFetch from "@/shared/hooks/use-fetch/useFetch.hook";
import addClient from "../services/add-client";
import type { Client } from "../domain/client";
import type { ClientSchema } from "../adapter/client-schema";

const useAddClient = () => {
    const { error, data, execute, refresh } = useFetch<Client>();

    async function add(clientData: ClientSchema) {
        return await execute(addClient)(clientData);
    }

    return { add, refresh, data, error };
};

export default useAddClient;
