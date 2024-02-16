import { Navigate, useRoutes } from "react-router-dom";
import Home from "../components/home/Home";
import NotFound from "../components/not-found/NotFound";
import { Route } from "@mui/icons-material";
import HowItWorks from "../components/how-it-works/HowItWorks";
import ListYourBusiness from "../components/list-your-business/ListYourBusiness";
import Categories from "../components/categories/Categories";
import AllStores from "../components/stores/all-stores/AllStores";
import OnlineStores from "../components/stores/online-stores/OnlineStores";
import PhysicalStores from "../components/stores/physical-stores/PhysicalStores";
import MainDeals from "../components/deals/MainDeals";
import { useSelector } from "react-redux";
import DealsProductDetails from "../components/deals-product-details/DealsProductDetails";
import { Suspense, lazy } from "react";

const LazyHome = lazy(() => import('../components/home/Home'));
const LazyCategories = lazy(() => import("../components/categories/Categories"));
const LazyMainDeals = lazy(() => import("../components/deals/MainDeals"));
const LazyAllStores = lazy(() => import("../components/stores/all-stores/AllStores"));
const LazyOnlineStores = lazy(() => import("../components/stores/online-stores/OnlineStores"));
const LazyPhysicalStores = lazy(() => import("../components/stores/physical-stores/PhysicalStores"));
const LazyHowItWorks = lazy(() => import("../components/how-it-works/HowItWorks"));
const LazyListYourBusiness = lazy(() => import("../components/list-your-business/ListYourBusiness"));
const LazyDealsProductDetails = lazy(() => import("../components/deals-product-details/DealsProductDetails"));
const LazyNotFound = lazy(() => import("../components/not-found/NotFound"));

export default function Router() {

    // const storeSlug = useSelector((state: any) => state.dealModeOptions.categorySlug);

    return useRoutes([
        {
            path: "/",
            element:
                <Suspense fallback="Loading...">
                    <LazyHome />
                </Suspense>
            ,
            children: [
                // { path: "categories", element: <Categories /> },
            ],
        },
        // { path: "/categories", element: <Categories /> },
        {
            path: "/categories",
            // element: <Categories />,
            children: [
                // { element: <Navigate to={`categories/:urlSlug`} replace />, index: true, },
                {
                    element:
                        <Suspense fallback="Loading...">
                            <LazyCategories />
                        </Suspense>,
                    index: true
                },
                {
                    path: `:urlSlug`, element:
                        <Suspense fallback="Loading...">
                            <LazyMainDeals />
                        </Suspense>,
                }
            ]

        },
        {
            path: "/stores",
            children: [
                {
                    element:
                        <Suspense fallback="Loading...">
                            <LazyAllStores />
                        </Suspense>,
                    index: true
                },
                {
                    path: `:urlStoreSlug`, element:
                        <Suspense fallback="Loading...">
                            <LazyMainDeals />
                        </Suspense>,
                }
            ]
        },
        {
            path: "/online-stores", element:
                <Suspense fallback="Loading...">
                    <LazyOnlineStores />
                </Suspense>
        },
        {
            path: "/physical-stores", element:
                <Suspense fallback="Loading...">
                    <LazyPhysicalStores />
                </Suspense>
        },
        {
            path: "/deals",
            children: [
                {
                    element:
                        <Suspense fallback="Loading...">
                            <LazyMainDeals />
                        </Suspense>,
                    index: true
                },
                {
                    path: ":urlDealSlug", element:
                        <Suspense fallback="Loading...">
                            <LazyDealsProductDetails />
                        </Suspense>
                },
            ]
        },
        {
            path: "/search",
            children: [
                {
                    element:
                        <Suspense fallback="Loading...">
                            <LazyMainDeals />
                        </Suspense>,
                    index: true
                },
                // {path: ":urlTagName", element: <MainDeals /> },
            ]
        },
        // {
        // path: "/deals", element: <MainDeals />,
        //     path: "/test-product-details", element: <DealsProductDetails />
        // },
        {
            path: "/how-it-works", element:
                <Suspense fallback="Loading...">
                    <LazyHowItWorks />
                </Suspense>
        },
        {
            path: "/list-your-business", element:
                <Suspense fallback="Loading...">
                    <LazyListYourBusiness />
                </Suspense>
        },
        {
            path: "/contact-us", element: <></>
        },
        {
            path: "/about-us", element: <></>
        },
        {
            path: "/faq", element: <></>
        },
        {
            path: "/blogs", element: <></>
        },
        {
            path: "/nz-price-comparison-sites", element: <></>
        },
        {
            path: "/terms-of-use", element: <></>
        },
        {
            path: "/privacy-policy", element: <></>
        },
        { path: "*", element: <Navigate to="/404" /> },
        {
            path: "/404", element:
                <Suspense fallback="Loading...">
                    <LazyNotFound />
                </Suspense>
        },
    ])
}