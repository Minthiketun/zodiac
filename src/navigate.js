import { Route, Routes } from "react-router-dom";
import App from "./App";
import Home from './Home';


export default function Navigator() {

    return (
        <Routes>
            <Route path="/App" element={<Home />} />
            <Route path = "/" element={<App />} />
            
        </Routes>
    )
}