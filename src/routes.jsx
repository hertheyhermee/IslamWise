import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import InheritanceBlog from "./pages/InheritanceBlog/InheritanceBlog";
import Madhhab from "./pages/Madhhab/Madhhab";
import Hadith from "./pages/Products/Hadith/Hadith";
import Quran from "./pages/Products/Quran/Quran";
import ShowQuran from "./pages/Products/Quran/ShowQuran";
import ZakatCalculator from "./pages/Products/ZakatCalculator/ZakatCalculator";
import QuranPage from "./pages/Products/Quran/quranPage";

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
    path: "/inheritance-blog",
    element: <InheritanceBlog />,
  },
  {
    path: "/library",
    element: <Madhhab />,
  },
  {
    path: "/features/hadith",
    element: <Hadith />,
  },
  {
    path: "/features/quran",
    element: <Quran />,
  },
  {
    path: "/quran",
    element: <ShowQuran />,
    children: [
      {
        path: "/quran/:id",
        element: <QuranPage />,
      },
    ],
  },
  {
    path: "/features/zakat-calculator",
    element: <ZakatCalculator />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

export default router;
