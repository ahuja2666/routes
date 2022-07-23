
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './about';
import Contact from './contact';
import Home from './home';


const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contact" element={<Contact />} ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/about/me" element={<div>About me</div>} />
        <Route path="*" element={<div>Error 404 content not found</div>} />
      </Routes>

    </BrowserRouter>
  );
}
export default Router;
