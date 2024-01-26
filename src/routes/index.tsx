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

export default function Router() {

    // const storeSlug = useSelector((state: any) => state.dealModeOptions.categorySlug);

    return useRoutes([
        {
            path: "/",
            element: <Home />,
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
                { element: <Categories />, index: true },
                { path: `:urlSlug`, element: <MainDeals />, }
            ]

        },
        {
            path: "/stores",
            children: [
                { element: <AllStores />, index: true },
                { path: `:urlStoreSlug`, element: <MainDeals />, }
            ]
        },
        {
            path: "/online-stores", element: <OnlineStores />
        },
        {
            path: "/physical-stores", element: <PhysicalStores />
        },
        {
            path: "/deals", element: <MainDeals />
        },
        {
            path: "/how-it-works", element: <HowItWorks />
        },
        {
            path: "/list-your-business", element: <ListYourBusiness />
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
        { path: "/404", element: <NotFound /> },
    ])
}