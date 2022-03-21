import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import isUtils from "./Controller/isUtils";
import Home from "./Pages/Home";
import Private from "./Pages/Private";

function PrivateRoute({children}) {
    const auth = isUtils();
    if (auth){
        return auth ? children: <Navigate to="/private" />;
    }   
    else{
        return <Navigate to="/" />;
    }

}


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/private" element={<PrivateRoute>
                    <Private />
                </PrivateRoute>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;