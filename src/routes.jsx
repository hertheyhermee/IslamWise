import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import InheritanceBlog from "./pages/InheritanceBlog/InheritanceBlog";
import Madhhab from "./pages/Madhhab/Madhhab";
import Hadith from "./pages/Products/Hadith/Hadith";
import Quran from "./pages/Products/Quran/Quran";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/inheritance_blog",
        element: <InheritanceBlog />,
    },
    {
        path: "/library",
        element: <Madhhab />,
    },
    {
        path: "/products/hadith",
        element: <Hadith />,
    },
    {
        path: "/products/quran",
        element: <Quran />,
    },
    {
        path: "*",
        element: <div>404</div>
    },
])

export default router