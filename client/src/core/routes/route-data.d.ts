import type React from "react";

export type RouteData = {
    path?: string;
    index?: boolean;
    element: React.JSX.Element;
    children?: RouteData[];
    handle?: {
        breadcrumb?: string;
    };
};
