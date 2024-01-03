import { Navigate, useRoutes } from "react-router-dom";
import Home from "../components/home/Home";
import NotFound from "../components/not-found/NotFound";
import { Route } from "@mui/icons-material";
import HowItWorks from "../components/how-it-works/HowItWorks";
import ListYourBusiness from "../components/list-your-business/ListYourBusiness";
import Categories from "../components/categories/Categories";
import AllStores from "../components/stores/AllStores";
import OnlineStores from "../components/stores/OnlineStores";
import PhysicalStores from "../components/stores/PhysicalStores";

export default function Router() {
    return useRoutes([
        {
            path: "/",
            element: <Home />,
            children: [
            ],
        },
        { path: "*", element: <Navigate to="/404" /> },
        { path: "/404", element: <NotFound /> },
        {
            path: "/categories", element: <Categories />
        },
        {
            path: "/stores", element: <AllStores />
        },
        {
            path: "/online-stores", element: <OnlineStores />
        },
        {
            path: "/physical-stores", element: <PhysicalStores />
        },
        {
            path: "/how-it-works", element: <HowItWorks />
        },
        {
            path: "/list-your-business", element: <ListYourBusiness />
        },
        {
            path: "/contact-us", element: <></>
        }
    ])
}