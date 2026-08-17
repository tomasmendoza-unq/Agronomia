import useFetch from "@/shared/hooks/use-fetch/useFetch.hook";
import type { Company } from "../types/Company";
import { putCompany } from "../service/put-company.service";

export const usePutCompanyData = () => {
    const { data, error, isLoading, execute, refresh } =
        useFetch<Company>(false);
    return {
        companyData: data,
        error,
        companyLoading: isLoading,
        editCompany: execute(putCompany),
        refresh,
    };
};
