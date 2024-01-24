import MainPage from "./screens/MainPage/MainPage";
import DetailPage from "./screens/DetailPage/DetailPage";
import { Routes, Route } from "react-router-dom";
import { mainData, heroImg } from "./data";
import CategoryPage from "./screens/CategoryPage/CategoryPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/:category" element={<CategoryPage />} />
        <Route
          exact
          path="/photos/:id"
          element={<DetailPage data={mainData} />}
        />
        <Route
          exact
          path="/images/:id"
          element={<DetailPage data={heroImg} />}
        />
      </Routes>
    </>
  );
}

export default App;
