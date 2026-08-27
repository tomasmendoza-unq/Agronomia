import useFetch from "@/shared/hooks/use-fetch/useFetch.hook";
import type { Company } from "../types/Company";
import { getCompany } from "../services/getCompany.service";

export const useGetCompanyData = () => {
    const { data, error, isLoading, execute, refresh } = useFetch<Company>();
    return {
        companyData: data,
        error,
        companyLoading: isLoading,
        getCompany: execute(getCompany),
        refresh,
    };
};
