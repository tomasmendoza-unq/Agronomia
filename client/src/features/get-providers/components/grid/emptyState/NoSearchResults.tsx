import { SearchIcon } from "@/shared/components/icon/components/icons/Search";
import { EmptyState } from "@/shared/components/empty-state/EmptyState";

type NoSearchResultsProps = {
    search: string;
};

export const NoSearchResults = ({ search }: NoSearchResultsProps) => (
    <EmptyState
        icon={<SearchIcon />}
        title={
            <>
                El proveedor <strong>{search}</strong> no fue encontrado
            </>
        }
        description="Cambiá tu búsqueda o añade un proveedor"
    />
);
