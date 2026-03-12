import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import Approach from "./pages/Approach";
import Solutions from "./pages/Solutions";
import CaseStudies from "./pages/CaseStudies";
import ISO27001 from "./pages/ISO27001";
import GlobalExpansion from "./pages/GlobalExpansion";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "approach", Component: Approach },
      { path: "solutions", Component: Solutions },
      { path: "case-studies", Component: CaseStudies },
      { path: "iso-27001", Component: ISO27001 },
      { path: "global-expansion", Component: GlobalExpansion },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
