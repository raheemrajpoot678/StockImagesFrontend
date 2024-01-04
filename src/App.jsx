import MainPage from "./screens/MainPage/MainPage";
import DetailPage from "./screens/DetailPage/DetailPage";
import { Routes, Route } from "react-router-dom";
import { mainData, heroImg } from "./data";
import CategoryPage from "./screens/CategoryPage/CategoryPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/photos/:id" element={<DetailPage data={mainData} />} />
        <Route path="/images/:id" element={<DetailPage data={heroImg} />} />
      </Routes>
    </>
  );
}

export default App;
