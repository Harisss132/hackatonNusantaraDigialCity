import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import SejarahDetail from "./pages/SejarahDetail";
import BudayaDetail from "./pages/BudayaDetail";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path={"/"} element={<Home />}/>
                <Route path={"/sejarah"} element={<SejarahDetail />}/>
                <Route path={"/budaya"} element={<BudayaDetail />}/>
            </Route>
        </Routes>
    )
}

export default App;