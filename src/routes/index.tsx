import { Navigate, useRoutes } from "react-router-dom";
import Home from "../components/home/Home";
import NotFound from "../components/not-found/NotFound";
import { Route } from "@mui/icons-material";
import HowItWorks from "../components/how-it-works/HowItWorks";

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
            path: "/how-it-works", element: <HowItWorks />
        },
    ])
}