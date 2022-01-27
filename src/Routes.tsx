import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import HomePage from "./pages/homePage";
import SecondPage from "./pages/secondPage";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/secondPage" element={<SecondPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;