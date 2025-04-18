// import RosterDefinition from "@/views/rosterDefinition";
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./private-route";
import Home from "@/views/home";
import About from "@/views/about";
import Awards from "@/views/about/awards";
import Contact from "@/views/about/contact";
import CountriesVisited from "@/views/about/countriesVisited";
import News from "@/views/news";
import Research from "@/views/research";
import Publications from "@/views/research/publications";
import ResearchInterest from "@/views/research/researchInterest";
import ThesisSupervision from "@/views/research/thesisSupervision";
import Teaching from "@/views/teaching";
import CurrentCourses from "@/views/teaching/current-courses";
import PreviousCourses from "@/views/teaching/previous-courses";
import Tutorials from "@/views/teaching/tutorials";
import Team from "@/views/team";
import Alumni from "@/views/team/alumni";
import Group from "@/views/team/group";
// import Extra from "@/views/extra/extra";
import Biography from "@/views/about/biography";
import Collaborations from "@/views/research/collaborations";
import ResearchCollaborators from "@/views/team/research-collaborators";
import DevelopmentTeam from "@/views/team/development-team";

const routes = [
  {
    path: "/",
    Component: Home,
    isPrivate: false,
  },
  {
    path: "/about",
    Component: About,
    isPrivate: false,
  },
  {
    path: "/awards",
    Component: Awards,
    isPrivate: false,
  },
  {
    path: "/biography",
    Component: Biography,
    isPrivate: false,
  },
  {
    path: "/contact",
    Component: Contact,
    isPrivate: false,
  },
  {
    path: "/countries-visited",
    Component: CountriesVisited,
    isPrivate: false,
  },
  {
    path: "/news",
    Component: News,
    isPrivate: false,
  },
  {
    path: "/research",
    Component: Research,
    isPrivate: false,
  },
  {
    path: "/collaborations",
    Component: Collaborations,
    isPrivate: false,
  },
  {
    path: "/publications",
    Component: Publications,
    isPrivate: false,
  },
  {
    path: "/research-interest",
    Component: ResearchInterest,
    isPrivate: false,
  },
  {
    path: "/thesis-supervision",
    Component: ThesisSupervision,
    isPrivate: false,
  },
  {
    path: "/teaching",
    Component: Teaching,
    isPrivate: false,
  },
  {
    path: "/current-courses",
    Component: CurrentCourses,
    isPrivate: false,
  },
  {
    path: "/previous-courses",
    Component: PreviousCourses,
    isPrivate: false,
  },
  {
    path: "/tutorials",
    Component: Tutorials,
    isPrivate: false,
  },
  {
    path: "/team",
    Component: Team,
    isPrivate: false,
  },
  {
    path: "/alumni",
    Component: Alumni,
    isPrivate: false,
  },
  {
    path: "/development-team",
    Component: DevelopmentTeam,
    isPrivate: false,
  },
  {
    path: "/group",
    Component: Group,
    isPrivate: false,
  },
  {
    path: "/research-collaborators",
    Component: ResearchCollaborators,
    isPrivate: false,
  },
  // {
  //   path: "/extra",
  //   Component: Extra,
  //   isPrivate: false,
  // },
];

export default function AppRoutes() {
  return (
    <Routes>
      {routes.map(({ path, Component, isPrivate }) => (
        <Route
          key={path}
          path={path}
          element={
            isPrivate ? (
              <PrivateRoute component={<Component />} />
            ) : (
              <Component />
            )
          }
        />
      ))}

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
