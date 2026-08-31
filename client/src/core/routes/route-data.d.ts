import type React from "react";

type Handle = {
    breadcrumb?: string;
};

type IndexRouteData = {
    index: true;
    element: React.JSX.Element;
    handle?: Handle;
};

type NonIndexRouteData = {
    index?: false;
    path?: string;
    element: React.JSX.Element;
    children?: RouteData[];
    handle?: Handle;
};

export type RouteData = IndexRouteData | NonIndexRouteData;
