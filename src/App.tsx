import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExperiencePage from "./routes/experience";
import HomePage from "./routes/home";
import Root from "./routes/root";
import SkillsPage from "./routes/skills";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Root />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
