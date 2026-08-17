import useFetch from "@/shared/hooks/use-fetch/useFetch.hook";
import type { Company } from "../types/Company";
import { getCompany } from "../service/getCompany.service";

export const useGetCompanyData = () => {
    const { data, error, isLoading, execute, refresh } = useFetch<Company>();
    return {
        companyData: data,
        error,
        companyLoading: isLoading,
        editCompany: execute(getCompany),
        refresh,
    };
};
