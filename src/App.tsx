import { BrowserRouter, Routes, Route } from "react-router-dom";
import { globalStyles } from "./styles/global"
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import { MainLayout } from "./layout";

export const App = () => {

  globalStyles();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/post:id" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}