import { BrowserRouter, Routes, Route } from "react-router-dom";
import { globalStyles } from "./styles/global"
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import { Header } from "./components/Header";

export const App = () => {

  globalStyles();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  )
}