import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Main/Home";
import CreateBlog from "./Components/Sections/CreateBlog";
import BlogDetails from "./Components/Sections/BlogDetails";
import NotFound from "./Components/Sections/NotFound";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create" element={<CreateBlog />}></Route>
            <Route path="/blogs/:id" element={<BlogDetails />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
