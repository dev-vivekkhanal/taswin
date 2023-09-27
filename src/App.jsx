import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <main className="font-poppins min-w-[25rem]">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about/" element={<AboutPage />} />
      </Routes>
    </main>
  );
}

export default App;
