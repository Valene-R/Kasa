import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import AccommodationSheet from "./pages/AccommodationSheet/AccommodationSheet";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/AccommodationSheet/:id" element={<AccommodationSheet />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
