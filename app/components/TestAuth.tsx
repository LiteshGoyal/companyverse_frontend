"use client"

import { useContext } from "react"
import { AuthContext } from "@/context/AuthContext"

const TestAuth = () => {

    const auth = useContext(AuthContext)

    return (
        <div>
            { auth?.accessToken || "No Token" }
            <br />
            <p>{auth?.user?.username}</p>
            <br />
            <p>{auth?.user?.role}</p>
            <br />
            {auth?.accessToken && (

                <button
                onClick={auth?.logout}
                >
                Logout
            </button>
            )}
        </div>
    )
}

export default TestAuth