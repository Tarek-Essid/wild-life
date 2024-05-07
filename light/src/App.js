import "./App.css";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Edit from "./pages/Edit/Edit";
import Products from "./pages/Products/Products";
import Error from "./pages/Error/Error";
import Add from "./pages/Add/Add";
import NavBar from "./component/NavBar/NavBar";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/products" element={<Products />} />
        <Route path="/error" element={<Error />} />
        <Route path="/add" element={<Add />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
