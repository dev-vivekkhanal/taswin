import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import { Route, Routes } from "react-router-dom";
import CategoriesPage from "./pages/CategoriesPage";
import BlogPage from "./pages/BlogPage";
import GalleryPage from "./pages/GalleryPage";
import Sidebar from "./components/global-components/Sidebar";
import SingleBlogPage from "./pages/SingleBlogPage";

function App() {
  return (
    <main className="font-poppins min-w-[25rem] relative">
      <Sidebar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:id" element={<SingleBlogPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </main>
  );
}

export default App;
