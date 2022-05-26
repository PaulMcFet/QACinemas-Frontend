import React from "react";
import { Navigate, Route } from "react-router-dom";

function SecuredRoute({ loggedIn, children }) {

    if (loggedIn) {
        return children;
    }
    return <Navigate to="/" replace />
}

export default SecuredRoute;