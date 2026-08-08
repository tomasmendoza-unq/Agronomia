import { Link, useMatches } from "react-router";
import {
    breadcrumbList,
    breadcrumbItem,
    breadcrumbLink,
    separator,
} from "./styles";

interface Match {
    pathname: string;
    handle?: { breadcrumb?: string };
}

const Breadcrumb = () => {
    const matches = useMatches() as Match[];

    const crumbs = matches.filter((match) => match.handle?.breadcrumb);

    return (
        <nav className={breadcrumbList}>
            {crumbs.map((crumb, index) => {
                const isLast = index === crumbs.length - 1;

                return (
                    <span
                        key={crumb.pathname}
                        className={breadcrumbItem}
                    >
                        {isLast ? (
                            <span>{crumb.handle?.breadcrumb}</span>
                        ) : (
                            <>
                                <Link
                                    to={crumb.pathname}
                                    className={breadcrumbLink}
                                >
                                    {crumb.handle?.breadcrumb}
                                </Link>
                                <span className={separator}> {">"}</span>
                            </>
                        )}
                    </span>
                );
            })}
        </nav>
    );
};

export default Breadcrumb;
