import { Home } from "./views";
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
