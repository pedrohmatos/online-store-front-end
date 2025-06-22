import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Base from "./components/Base";
import Phones from "./pages/Phones";
import Carrinho from "./pages/Cart";
import Showcase from "./pages/Showcase";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/celulares" element={<Phones />} />
                    <Route path="/celulares/:id" element={<Showcase />} />
                    <Route path="/carrinho" element={<Carrinho />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
