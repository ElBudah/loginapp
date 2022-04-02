import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import isUtils from "./Controller/isUtils";
import Delete from "./Pages/Delete";
import Home from "./Pages/Home";
import Private from "./Pages/Private";
import Show from "./Pages/Show";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

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
                <Route path="/signin" element={<SignIn />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/read" element={<Show />}/>
                <Route path="/delete" element={<Delete />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;