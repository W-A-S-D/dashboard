import { AuthContext } from "../contexts/auth"
import * as React from "react"

import { SignRoutes } from "./app.auth.routes.js"
import { AdminRoutes } from "./app.admin.routes.js"
import { FuncRoutes } from "./app.inside.routes.js"

export const Routes = () => {
    const { user } = React.useContext(AuthContext);

    if (user != null) {
        return user.nivelAcesso === 1 ? <AdminRoutes /> : <FuncRoutes />
    } else {
        return <SignRoutes />
    }
}