import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import SejarahDetail from "./pages/SejarahDetail";
import BudayaDetail from "./pages/BudayaDetail";
import DestinasiDetail from "./pages/DestinasiDetail";
import TeknologiDetail from "./pages/TeknologiDetail";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path={"/"} element={<Home />}/>
                <Route path={"/sejarah"} element={<SejarahDetail />}/>
                <Route path={"/budaya"} element={<BudayaDetail />}/>
                <Route path={"/destinasi"} element={<DestinasiDetail />}/>
                <Route path={"/teknologi"} element={<TeknologiDetail />}/>
            </Route>
        </Routes>
    )
}

export default App;