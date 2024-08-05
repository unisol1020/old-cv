import ExperiencePage from "./routes/experience";
import HomePage from "./routes/home";
import ProjectsPage from "./routes/projects";
import Root from "./routes/root";
import SkillsPage from "./routes/skills";

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/skills",
        element: <SkillsPage />,
      },
      {
        path: "/experience",
        element: <ExperiencePage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
    ],
  },
];

export default routes;
