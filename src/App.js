//import './App.css';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home.jsx";
import DocReactJs from "./components/docReactJs.jsx";
import NoPage from "./pages/noPage";
import FechasyCalendarios from "./pages/docReactJS/FechasyCalendarios.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="docreactjs" element={<DocReactJs />} />
            <Route path="fechas-calendarios" element={<FechasyCalendarios />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
