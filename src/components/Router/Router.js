import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import ListLink from "../Pages/listLink/ListLink";


function Routers() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/list' element={<ListLink />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers