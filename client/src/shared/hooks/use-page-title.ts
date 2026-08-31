import { useMatches } from "react-router";

interface Match {
    pathname: string;
    handle?: { breadcrumb?: string };
}

export const usePageTitle = () => {
    const matches = useMatches() as Match[];
    const crumbs = matches.filter((match) => match.handle?.breadcrumb);
    const lastCrumb = crumbs[crumbs.length - 1];

    return lastCrumb?.handle?.breadcrumb ?? "";
};
